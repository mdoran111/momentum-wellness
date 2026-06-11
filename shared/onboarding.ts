import { z } from "zod";

export const recordTypes = ["individual", "company"] as const;

export const individualStatuses = [
  "needs_review",
  "welcome_ready",
  "onboarding_sent",
  "trainerize_pending",
  "program_pending",
  "active",
  "blocked",
  "closed",
] as const;

export const companyStatuses = [
  "needs_review",
  "contacted",
  "consultation_pending",
  "consultation_scheduled",
  "qualified",
  "proposal_drafting",
  "internal_review",
  "sent",
  "follow_up",
  "won",
  "lost",
  "on_hold",
] as const;

const dateStringSchema = z
  .string()
  .max(10)
  .refine(
    (value) => value === "" || /^\d{4}-\d{2}-\d{2}$/.test(value),
    "Use a valid date.",
  );

export const checklistItemSchema = z.object({
  id: z.string().trim().min(1).max(80),
  label: z.string().trim().min(1).max(240),
  completed: z.boolean(),
  requiresApproval: z.boolean(),
});

const recordFieldsSchema = z
  .object({
    type: z.enum(recordTypes),
    name: z.string().trim().min(1).max(160),
    contactName: z.string().trim().max(160).default(""),
    email: z.string().trim().toLowerCase().email().max(254),
    source: z.string().trim().min(1).max(120),
    owner: z.string().trim().min(1).max(120),
    status: z.string().trim().min(1).max(80),
    nextAction: z.string().trim().max(500).default(""),
    nextActionDate: dateStringSchema.default(""),
    notes: z.string().trim().max(4000).default(""),
    checklist: z.array(checklistItemSchema).min(1).max(30),
  })
  .superRefine((record, context) => {
    const allowedStatuses =
      record.type === "individual" ? individualStatuses : companyStatuses;

    if (!(allowedStatuses as readonly string[]).includes(record.status)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["status"],
        message: "Status is not valid for this record type.",
      });
    }

    if (record.type === "company" && !record.contactName) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["contactName"],
        message: "Contact name is required for a company record.",
      });
    }
  });

export const createOnboardingRecordSchema = recordFieldsSchema;

export const updateOnboardingRecordSchema = recordFieldsSchema.and(
  z.object({
    revision: z.number().int().min(1),
  }),
);

export const importOnboardingRecordsSchema = z.object({
  records: z
    .array(
      recordFieldsSchema.and(
        z.object({
          id: z.string().uuid(),
          createdAt: z.string().datetime(),
          updatedAt: z.string().datetime(),
        }),
      ),
    )
    .min(1)
    .max(250),
});

export type RecordType = (typeof recordTypes)[number];
export type ChecklistItem = z.infer<typeof checklistItemSchema>;
export type CreateOnboardingRecord = z.infer<
  typeof createOnboardingRecordSchema
>;
export type UpdateOnboardingRecord = z.infer<
  typeof updateOnboardingRecordSchema
>;

export type OnboardingRecord = CreateOnboardingRecord & {
  id: string;
  revision: number;
  createdAt: string;
  updatedAt: string;
};
