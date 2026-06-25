import { z } from "zod";

export const operationTypes = [
  "weekly_client_review",
  "monthly_programming",
  "behavior_calendar",
  "form_waiver_review",
  "online_training_marketing",
] as const;

export const operationStatuses = [
  "planned",
  "in_progress",
  "waiting_review",
  "blocked",
  "complete",
] as const;

const dateStringSchema = z
  .string()
  .max(10)
  .refine(
    (value) => value === "" || /^\d{4}-\d{2}-\d{2}$/.test(value),
    "Use a valid date.",
  );

export const operationChecklistItemSchema = z.object({
  id: z.string().trim().min(1).max(80),
  label: z.string().trim().min(1).max(240),
  completed: z.boolean(),
  requiresApproval: z.boolean(),
});

const operationFieldsSchema = z.object({
  type: z.enum(operationTypes),
  title: z.string().trim().min(1).max(160),
  clientFocus: z.string().trim().max(160).default(""),
  owner: z.string().trim().min(1).max(120),
  status: z.enum(operationStatuses).default("planned"),
  dueDate: dateStringSchema.default(""),
  notes: z.string().trim().max(4000).default(""),
  checklist: z.array(operationChecklistItemSchema).min(1).max(40),
});

export const createClientOperationSchema = operationFieldsSchema;

export const updateClientOperationSchema = operationFieldsSchema.and(
  z.object({
    revision: z.number().int().min(1),
  }),
);

export type OperationType = (typeof operationTypes)[number];
export type OperationStatus = (typeof operationStatuses)[number];
export type OperationChecklistItem = z.infer<
  typeof operationChecklistItemSchema
>;
export type CreateClientOperation = z.infer<
  typeof createClientOperationSchema
>;
export type UpdateClientOperation = z.infer<
  typeof updateClientOperationSchema
>;

export type ClientOperationRecord = CreateClientOperation & {
  id: string;
  revision: number;
  createdAt: string;
  updatedAt: string;
};
