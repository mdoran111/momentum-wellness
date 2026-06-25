import { randomUUID } from "node:crypto";
import type { QueryResultRow } from "pg";
import type {
  ClientOperationRecord,
  CreateClientOperation,
  OperationType,
  UpdateClientOperation,
} from "@shared/clientOperations";
import { getDatabasePool } from "./database";

type ClientOperationRow = QueryResultRow & {
  id: string;
  type: OperationType;
  title: string;
  client_focus: string;
  owner: string;
  status: ClientOperationRecord["status"];
  due_date: Date | string | null;
  notes: string;
  checklist: ClientOperationRecord["checklist"];
  revision: number;
  created_at: Date | string;
  updated_at: Date | string;
};

let initializationPromise: Promise<void> | null = null;

function toDateOnly(value: Date | string | null) {
  if (!value) {
    return "";
  }

  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? "" : value.toISOString().slice(0, 10);
  }

  return value.split("T")[0] ?? "";
}

function toIsoString(value: Date | string) {
  const date = value instanceof Date ? value : new Date(value);

  return Number.isNaN(date.getTime())
    ? new Date().toISOString()
    : date.toISOString();
}

function toRecord(row: ClientOperationRow): ClientOperationRecord {
  return {
    id: row.id,
    type: row.type,
    title: row.title,
    clientFocus: row.client_focus,
    owner: row.owner,
    status: row.status,
    dueDate: toDateOnly(row.due_date),
    notes: row.notes,
    checklist: row.checklist,
    revision: row.revision,
    createdAt: toIsoString(row.created_at),
    updatedAt: toIsoString(row.updated_at),
  };
}

async function initializeClientOperationsTable() {
  if (!initializationPromise) {
    initializationPromise = (async () => {
      const pool = getDatabasePool();

      await pool.query(`
        CREATE TABLE IF NOT EXISTS client_operation_records (
          id UUID PRIMARY KEY,
          type TEXT NOT NULL CHECK (
            type IN (
              'weekly_client_review',
              'monthly_programming',
              'behavior_calendar',
              'form_waiver_review'
            )
          ),
          title TEXT NOT NULL,
          client_focus TEXT NOT NULL DEFAULT '',
          owner TEXT NOT NULL,
          status TEXT NOT NULL CHECK (
            status IN (
              'planned',
              'in_progress',
              'waiting_review',
              'blocked',
              'complete'
            )
          ),
          due_date DATE,
          notes TEXT NOT NULL DEFAULT '',
          checklist JSONB NOT NULL,
          revision INTEGER NOT NULL DEFAULT 1,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `);

      await pool.query(`
        CREATE INDEX IF NOT EXISTS client_operation_records_due_date_index
        ON client_operation_records (due_date, status)
      `);
    })().catch((error) => {
      initializationPromise = null;
      throw error;
    });
  }

  return initializationPromise;
}

export async function listClientOperationRecords() {
  await initializeClientOperationsTable();
  const result = await getDatabasePool().query<ClientOperationRow>(`
    SELECT *
    FROM client_operation_records
    ORDER BY
      CASE WHEN due_date IS NULL THEN 1 ELSE 0 END,
      due_date ASC,
      updated_at DESC
  `);

  return result.rows.map(toRecord);
}

export async function createClientOperationRecord(
  input: CreateClientOperation,
) {
  await initializeClientOperationsTable();
  const result = await getDatabasePool().query<ClientOperationRow>(
    `
      INSERT INTO client_operation_records (
        id, type, title, client_focus, owner, status, due_date, notes,
        checklist
      )
      VALUES (
        $1, $2, $3, $4, $5, $6, NULLIF($7, '')::date, $8, $9
      )
      RETURNING *
    `,
    [
      randomUUID(),
      input.type,
      input.title,
      input.clientFocus,
      input.owner,
      input.status,
      input.dueDate,
      input.notes,
      JSON.stringify(input.checklist),
    ],
  );

  return toRecord(result.rows[0]);
}

export async function updateClientOperationRecord(
  id: string,
  input: UpdateClientOperation,
) {
  await initializeClientOperationsTable();
  const result = await getDatabasePool().query<ClientOperationRow>(
    `
      UPDATE client_operation_records
      SET
        type = $2,
        title = $3,
        client_focus = $4,
        owner = $5,
        status = $6,
        due_date = NULLIF($7, '')::date,
        notes = $8,
        checklist = $9,
        revision = revision + 1,
        updated_at = NOW()
      WHERE id = $1 AND revision = $10
      RETURNING *
    `,
    [
      id,
      input.type,
      input.title,
      input.clientFocus,
      input.owner,
      input.status,
      input.dueDate,
      input.notes,
      JSON.stringify(input.checklist),
      input.revision,
    ],
  );

  return result.rows[0] ? toRecord(result.rows[0]) : null;
}

export async function deleteClientOperationRecord(id: string) {
  await initializeClientOperationsTable();
  const result = await getDatabasePool().query(
    "DELETE FROM client_operation_records WHERE id = $1",
    [id],
  );

  return (result.rowCount ?? 0) > 0;
}
