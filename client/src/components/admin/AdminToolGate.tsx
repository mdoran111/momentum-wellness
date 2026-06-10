import {
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { LoaderCircle, LockKeyhole, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type AuthStatus = "checking" | "locked" | "unlocked" | "unconfigured";

export default function AdminToolGate({
  toolName,
  children,
}: {
  toolName: string;
  children: ReactNode;
}) {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function checkSession() {
      try {
        const response = await fetch("/api/admin/session", {
          credentials: "include",
        });

        if (!isActive) {
          return;
        }

        if (response.ok) {
          setAuthStatus("unlocked");
        } else if (response.status === 503) {
          setAuthStatus("unconfigured");
        } else {
          setAuthStatus("locked");
        }
      } catch {
        if (isActive) {
          setPasswordError("Unable to reach the secure login service.");
          setAuthStatus("locked");
        }
      }
    }

    void checkSession();

    return () => {
      isActive = false;
    };
  }, []);

  const handleUnlock = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setPasswordError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        if (response.status === 503) {
          setAuthStatus("unconfigured");
        }
        setPasswordError(result?.message || "Unable to unlock this tool.");
        return;
      }

      setPassword("");
      setAuthStatus("unlocked");
    } catch {
      setPasswordError("Unable to reach the secure login service.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", {
      method: "POST",
      credentials: "include",
    }).catch(() => undefined);
    setPassword("");
    setPasswordError("");
    setAuthStatus("locked");
  };

  if (authStatus === "checking") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0f172a] px-4 text-white">
        <div className="flex items-center gap-3 text-slate-300">
          <LoaderCircle className="h-5 w-5 animate-spin" />
          Checking secure access...
        </div>
      </main>
    );
  }

  if (authStatus === "unlocked") {
    return (
      <>
        <Button
          type="button"
          variant="outline"
          onClick={handleLogout}
          className="admin-no-print fixed right-4 top-4 z-50 rounded-full border-slate-300 bg-white/95 text-slate-900 shadow-lg hover:bg-slate-100"
        >
          <LogOut className="h-4 w-4" />
          Lock Tools
        </Button>
        {children}
      </>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f172a] px-4 py-16 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 shadow-2xl sm:p-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-400">
          <LockKeyhole className="h-7 w-7" />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
          Internal tool
        </p>
        <h1 className="mt-3 text-3xl font-bold">{toolName}</h1>
        <p className="mt-4 leading-7 text-slate-400">
          {authStatus === "unconfigured"
            ? "Secure access has not been configured for this deployment."
            : "Enter the shared internal password to continue."}
        </p>

        {authStatus === "unconfigured" ? (
          <p
            role="alert"
            className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100"
          >
            Add ADMIN_TOOL_PASSWORD and SESSION_SECRET to the deployment
            environment, then redeploy the website.
          </p>
        ) : (
          <form onSubmit={handleUnlock} className="mt-8 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="admin-password" className="text-white">
              Password
            </Label>
            <Input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
              className="h-12 rounded-xl border-white/10 bg-white/5 text-white"
            />
          </div>
          {passwordError && (
            <p role="alert" className="text-sm leading-6 text-red-300">
              {passwordError}
            </p>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="min-h-12 w-full rounded-full border-0 bg-emerald-500 font-semibold text-white hover:bg-emerald-400"
          >
            {isSubmitting ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Checking...
              </>
            ) : (
              "Unlock Tool"
            )}
          </Button>
          </form>
        )}
      </div>
    </main>
  );
}
