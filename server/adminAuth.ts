import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  Express,
  NextFunction,
  Request,
  Response,
} from "express";

const cookieName = "momentum_admin_session";
const sessionDurationMs = 8 * 60 * 60 * 1000;
const attemptWindowMs = 15 * 60 * 1000;
const maxAttemptsPerWindow = 10;

type AttemptRecord = {
  count: number;
  resetAt: number;
};

const loginAttempts = new Map<string, AttemptRecord>();

function getAdminConfig() {
  const password = process.env.ADMIN_TOOL_PASSWORD?.trim();
  const sessionSecret = process.env.SESSION_SECRET?.trim();

  if (!password || !sessionSecret) {
    return null;
  }

  return { password, sessionSecret };
}

function valuesMatch(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

function signExpiry(expiresAt: string, sessionSecret: string) {
  return createHmac("sha256", sessionSecret).update(expiresAt).digest("hex");
}

function createSessionToken(sessionSecret: string) {
  const expiresAt = String(Date.now() + sessionDurationMs);
  return `${expiresAt}.${signExpiry(expiresAt, sessionSecret)}`;
}

function parseCookies(request: Request) {
  const cookies = new Map<string, string>();

  for (const part of request.headers.cookie?.split(";") ?? []) {
    const separatorIndex = part.indexOf("=");
    if (separatorIndex < 0) {
      continue;
    }

    const key = part.slice(0, separatorIndex).trim();
    const value = part.slice(separatorIndex + 1).trim();
    cookies.set(key, decodeURIComponent(value));
  }

  return cookies;
}

function hasValidSession(request: Request, sessionSecret: string) {
  const token = parseCookies(request).get(cookieName);
  if (!token) {
    return false;
  }

  const [expiresAt, signature, ...extraParts] = token.split(".");
  if (!expiresAt || !signature || extraParts.length > 0) {
    return false;
  }

  const expiry = Number(expiresAt);
  if (!Number.isFinite(expiry) || expiry <= Date.now()) {
    return false;
  }

  return valuesMatch(signature, signExpiry(expiresAt, sessionSecret));
}

function getClientKey(request: Request) {
  return request.ip || request.socket.remoteAddress || "unknown";
}

function isRateLimited(clientKey: string) {
  const now = Date.now();
  const record = loginAttempts.get(clientKey);

  if (!record || record.resetAt <= now) {
    loginAttempts.delete(clientKey);
    return false;
  }

  return record.count >= maxAttemptsPerWindow;
}

function recordFailedAttempt(clientKey: string) {
  const now = Date.now();
  const record = loginAttempts.get(clientKey);

  if (!record || record.resetAt <= now) {
    loginAttempts.set(clientKey, {
      count: 1,
      resetAt: now + attemptWindowMs,
    });
    return;
  }

  record.count += 1;
}

function setNoStore(response: Response) {
  response.set("Cache-Control", "no-store");
}

export function requireAdminSession(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  setNoStore(response);
  const config = getAdminConfig();

  if (!config) {
    return response.status(503).json({
      message: "Admin access is not configured.",
    });
  }

  if (!hasValidSession(request, config.sessionSecret)) {
    return response.status(401).json({
      message: "Admin authentication is required.",
    });
  }

  next();
}

function sessionCookieOptions() {
  return {
    httpOnly: true,
    maxAge: sessionDurationMs,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  };
}

export function registerAdminAuthRoutes(app: Express) {
  app.get("/api/admin/session", (request, response) => {
    setNoStore(response);
    const config = getAdminConfig();

    if (!config) {
      return response.status(503).json({
        authenticated: false,
        message: "Admin access is not configured.",
      });
    }

    if (!hasValidSession(request, config.sessionSecret)) {
      return response.status(401).json({ authenticated: false });
    }

    return response.json({ authenticated: true });
  });

  app.post("/api/admin/login", (request, response) => {
    setNoStore(response);
    const config = getAdminConfig();

    if (!config) {
      return response.status(503).json({
        authenticated: false,
        message: "Admin access is not configured.",
      });
    }

    const clientKey = getClientKey(request);
    if (isRateLimited(clientKey)) {
      return response.status(429).json({
        authenticated: false,
        message: "Too many attempts. Please wait 15 minutes and try again.",
      });
    }

    const suppliedPassword =
      typeof request.body?.password === "string" ? request.body.password : "";

    if (
      suppliedPassword.length > 256 ||
      !valuesMatch(suppliedPassword, config.password)
    ) {
      recordFailedAttempt(clientKey);
      return response.status(401).json({
        authenticated: false,
        message: "Incorrect password.",
      });
    }

    loginAttempts.delete(clientKey);
    response.cookie(
      cookieName,
      createSessionToken(config.sessionSecret),
      sessionCookieOptions(),
    );

    return response.json({ authenticated: true });
  });

  app.post("/api/admin/logout", (_request, response) => {
    setNoStore(response);
    response.clearCookie(cookieName, sessionCookieOptions());
    return response.json({ authenticated: false });
  });
}
