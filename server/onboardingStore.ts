import { randomUUID } from "node:crypto";
import type { QueryResultRow } from "pg";
import type {
  CreateOnboardingRecord,
  OnboardingRecord,
  UpdateOnboardingRecord,
} from "@shared/onboarding";
import { getDatabasePool } from "./database";

type OnboardingRow = QueryResultRow & {
  id: string;
  type: "individual" | "company";
  name: string;
  contact_name: string;
  email: string;
  source: string;
  owner: string;
  status: string;
  next_action: string;
  next_action_date: string | null;
  notes: string;
  checklist: OnboardingRecord["checklist"];
  revision: number;
  created_at: Date | string;
  updated_at: Date | string;
};

let initializationPromise: Promise<void> | null = null;

function toRecord(row: OnboardingRow): OnboardingRecord {
  return {
    id: row.id,
    type: row.type,
    name: row.name,
    contactName: row.contact_name,
    email: row.email,
    source: row.source,
    owner: row.owner,
    status: row.status,
    nextAction: row.next_action,
    nextActionDate: row.next_action_date ?? "",
    notes: row.notes,
    checklist: row.checklist,
    revision: row.revision,
    createdAt: new Date(row.created_at).toISOString(),
    updatedAt: new Date(row.updated_at).toISOString(),
  };
}

async function initializeOnboardingTable() {
  if (!initializationPromise) {
    initializationPromise = (async () => {
      const pool = getDatabasePool();

      await pool.query(`
        CREATE TABLE IF NOT EXISTS onboarding_records (
          id UUID PRIMARY KEY,
          type TEXT NOT NULL CHECK (type IN ('individual', 'company')),
          name TEXT NOT NULL,
          contact_name TEXT NOT NULL DEFAULT '',
          email TEXT NOT NULL,
          source TEXT NOT NULL,
          owner TEXT NOT NULL,
          status TEXT NOT NULL,
          next_action TEXT NOT NULL DEFAULT '',
          next_action_date DATE,
          notes TEXT NOT NULL DEFAULT '',
          checklist JSONB NOT NULL,
          revision INTEGER NOT NULL DEFAULT 1,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `);

      await pool.query(`
        CREATE UNIQUE INDEX IF NOT EXISTS onboarding_records_email_unique
        ON onboarding_records (LOWER(email))
      `);
    })().catch((error) => {
      initializationPromise = null;
      throw error;
    });
  }

  return initializationPromise;
}

export async function listOnboardingRecords() {
  await initializeOnboardingTable();
  const result = await getDatabasePool().query<OnboardingRow>(`
    SELECT *
    FROM onboarding_records
    ORDER BY updated_at DESC, created_at DESC
  `);

  return result.rows.map(toRecord);
}

export async function createOnboardingRecord(
  input: CreateOnboardingRecord,
) {
  await initializeOnboardingTable();
  const result = await getDatabasePool().query<OnboardingRow>(
    `
      INSERT INTO onboarding_records (
        id, type, name, contact_name, email, source, owner, status,
        next_action, next_action_date, notes, checklist
      )
      VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, NULLIF($10, '')::date, $11, $12
      )
      RETURNING *
    `,
    [
      randomUUID(),
      input.type,
      input.name,
      input.contactName,
      input.email,
      input.source,
      input.owner,
      input.status,
      input.nextAction,
      input.nextActionDate,
      input.notes,
      JSON.stringify(input.checklist),
    ],
  );

  return toRecord(result.rows[0]);
}

export async function updateOnboardingRecord(
  id: string,
  input: UpdateOnboardingRecord,
) {
  await initializeOnboardingTable();
  const result = await getDatabasePool().query<OnboardingRow>(
    `
      UPDATE onboarding_records
      SET
        type = $2,
        name = $3,
        contact_name = $4,
        email = $5,
        source = $6,
        owner = $7,
        status = $8,
        next_action = $9,
        next_action_date = NULLIF($10, '')::date,
        notes = $11,
        checklist = $12,
        revision = revision + 1,
        updated_at = NOW()
      WHERE id = $1 AND revision = $13
      RETURNING *
    `,
    [
      id,
      input.type,
      input.name,
      input.contactName,
      input.email,
      input.source,
      input.owner,
      input.status,
      input.nextAction,
      input.nextActionDate,
      input.notes,
      JSON.stringify(input.checklist),
      input.revision,
    ],
  );

  return result.rows[0] ? toRecord(result.rows[0]) : null;
}

export async function deleteOnboardingRecord(id: string) {
  await initializeOnboardingTable();
  const result = await getDatabasePool().query(
    "DELETE FROM onboarding_records WHERE id = $1",
    [id],
  );

  return (result.rowCount ?? 0) > 0;
}

export async function importOnboardingRecords(
  records: Array<
    CreateOnboardingRecord & {
      id: string;
      createdAt: string;
      updatedAt: string;
    }
  >,
) {
  await initializeOnboardingTable();
  const client = await getDatabasePool().connect();
  let imported = 0;

  try {
    await client.query("BEGIN");

    for (const record of records) {
      const result = await client.query(
        `
          INSERT INTO onboarding_records (
            id, type, name, contact_name, email, source, owner, status,
            next_action, next_action_date, notes, checklist, created_at,
            updated_at
          )
          VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, NULLIF($10, '')::date,
            $11, $12, $13, $14
          )
          ON CONFLICT DO NOTHING
        `,
        [
          record.id,
          record.type,
          record.name,
          record.contactName,
          record.email,
          record.source,
          record.owner,
          record.status,
          record.nextAction,
          record.nextActionDate,
          record.notes,
          JSON.stringify(record.checklist),
          record.createdAt,
          record.updatedAt,
        ],
      );
      imported += result.rowCount ?? 0;
    }

    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }

  return {
    imported,
    skipped: records.length - imported,
  };
}
