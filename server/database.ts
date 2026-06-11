import { Pool } from "pg";

let pool: Pool | null = null;

export function getDatabasePool() {
  const databaseUrl = process.env.DATABASE_URL?.trim();

  if (!databaseUrl) {
    throw Object.assign(
      new Error("Shared onboarding storage is not configured."),
      { status: 503 },
    );
  }

  if (!pool) {
    pool = new Pool({
      connectionString: databaseUrl,
      max: 5,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 10_000,
    });
  }

  return pool;
}
