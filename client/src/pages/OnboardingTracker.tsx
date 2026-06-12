import {
  useEffect,
  useMemo,
  useState,
  type FormEvent,
} from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  LoaderCircle,
  Plus,
  RefreshCw,
  Save,
  ShieldCheck,
  StickyNote,
  Trash2,
  UploadCloud,
  User,
} from "lucide-react";
import SEO from "@/components/SEO";
import AdminToolGate from "@/components/admin/AdminToolGate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type {
  ChecklistItem,
  CreateOnboardingRecord,
  OnboardingRecord,
  RecordType,
  UpdateOnboardingRecord,
} from "@shared/onboarding";

const storageKey = "momentum-onboarding-tracker-v1";
const recordsQueryKey = ["/api/admin/onboarding-records"] as const;

type LegacyOnboardingRecord = Omit<OnboardingRecord, "revision">;

const individualStatuses = [
  { value: "needs_review", label: "Needs review" },
  { value: "welcome_ready", label: "Welcome ready" },
  { value: "onboarding_sent", label: "Onboarding sent" },
  { value: "trainerize_pending", label: "Trainerize pending" },
  { value: "program_pending", label: "Program pending" },
  { value: "active", label: "Active" },
  { value: "blocked", label: "Blocked" },
  { value: "closed", label: "Closed" },
];

const companyStatuses = [
  { value: "needs_review", label: "Needs review" },
  { value: "contacted", label: "Contacted" },
  { value: "consultation_pending", label: "Consultation pending" },
  { value: "consultation_scheduled", label: "Consultation scheduled" },
  { value: "qualified", label: "Qualified" },
  { value: "proposal_drafting", label: "Proposal drafting" },
  { value: "internal_review", label: "Internal review" },
  { value: "sent", label: "Proposal sent" },
  { value: "follow_up", label: "Follow-up" },
  { value: "won", label: "Won" },
  { value: "lost", label: "Lost" },
  { value: "on_hold", label: "On hold" },
];

const individualChecklist = [
  ["Review record and check for duplicates", true],
  ["Confirm purchase or qualified-inquiry status", true],
  ["Record internal notification as complete", false],
  ["Prepare the approved welcome email", true],
  ["Send the onboarding form", true],
  ["Prepare the Trainerize invite task", true],
  ["Create the program assignment checklist", true],
  ["Confirm app access and onboarding completion", true],
] as const;

const companyChecklist = [
  ["Review company record and check for duplicates", true],
  ["Assign an owner for follow-up", false],
  ["Record internal notification as complete", false],
  ["Create the consultation task", false],
  ["Prepare the corporate follow-up email", true],
  ["Confirm qualification after discovery", true],
  ["Gather the details required for a proposal", false],
  ["Generate and review a proposal when appropriate", true],
  ["Record the next action and follow-up date in this tracker", false],
] as const;

function createChecklist(type: RecordType): ChecklistItem[] {
  const template =
    type === "individual" ? individualChecklist : companyChecklist;

  return template.map(([label, requiresApproval], index) => ({
    id: `${type}-${index + 1}`,
    label,
    completed: false,
    requiresApproval,
  }));
}

function isOnboardingRecord(
  value: unknown,
): value is LegacyOnboardingRecord {
  if (!value || typeof value !== "object") {
    return false;
  }

  const record = value as Partial<OnboardingRecord>;

  return (
    (record.type === "individual" || record.type === "company") &&
    typeof record.id === "string" &&
    typeof record.name === "string" &&
    typeof record.contactName === "string" &&
    typeof record.email === "string" &&
    typeof record.source === "string" &&
    typeof record.owner === "string" &&
    typeof record.status === "string" &&
    (record.nextAction === undefined ||
      typeof record.nextAction === "string") &&
    (record.nextActionDate === undefined ||
      typeof record.nextActionDate === "string") &&
    (record.notes === undefined || typeof record.notes === "string") &&
    typeof record.createdAt === "string" &&
    typeof record.updatedAt === "string" &&
    Array.isArray(record.checklist) &&
    record.checklist.every(
      (item) =>
        item &&
        typeof item === "object" &&
        typeof item.id === "string" &&
        typeof item.label === "string" &&
        typeof item.completed === "boolean" &&
        typeof item.requiresApproval === "boolean",
    )
  );
}

function loadRecords(): LegacyOnboardingRecord[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedRecords = JSON.parse(
      window.localStorage.getItem(storageKey) ?? "[]",
    );

    return Array.isArray(storedRecords)
      ? storedRecords.filter(isOnboardingRecord).map((record) => ({
          ...record,
          nextAction: record.nextAction ?? "",
          nextActionDate: record.nextActionDate ?? "",
          notes: record.notes ?? "",
        }))
      : [];
  } catch {
    return [];
  }
}

async function requestJson<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(url, {
    ...options,
    credentials: "include",
    headers: options?.body
      ? {
          "Content-Type": "application/json",
          ...options.headers,
        }
      : options?.headers,
  });
  const body = (await response.json().catch(() => null)) as
    | T
    | { message?: string }
    | null;

  if (!response.ok) {
    const message =
      body &&
      typeof body === "object" &&
      "message" in body &&
      typeof body.message === "string"
        ? body.message
        : "The shared tracker could not complete this request.";
    throw new Error(message);
  }

  return body as T;
}

function getStatusOptions(type: RecordType) {
  return type === "individual" ? individualStatuses : companyStatuses;
}

function getStatusLabel(record: OnboardingRecord) {
  return (
    getStatusOptions(record.type).find(
      (status) => status.value === record.status,
    )?.label ?? record.status
  );
}

function formatDate(value: string) {
  const date = value.includes("T")
    ? new Date(value)
    : new Date(`${value}T12:00:00`);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default function OnboardingTracker() {
  return (
    <>
      <SEO
        title="Onboarding Tracker | Momentum Wellness"
        description="Internal Momentum Wellness onboarding workflow tracker."
        robots="noindex, nofollow, noarchive"
      />

      <AdminToolGate toolName="Onboarding Tracker">
        <OnboardingTrackerContent />
      </AdminToolGate>
    </>
  );
}

function OnboardingTrackerContent() {
  const queryClient = useQueryClient();
  const [legacyRecords, setLegacyRecords] =
    useState<LegacyOnboardingRecord[]>(loadRecords);
  const [recordType, setRecordType] = useState<RecordType>("individual");
  const [name, setName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [source, setSource] = useState("Manual admin entry");
  const [owner, setOwner] = useState("");
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(
    null,
  );
  const [formError, setFormError] = useState("");
  const [recordError, setRecordError] = useState("");
  const [importMessage, setImportMessage] = useState("");

  const recordsQuery = useQuery<OnboardingRecord[]>({
    queryKey: recordsQueryKey,
    queryFn: () =>
      requestJson<OnboardingRecord[]>("/api/admin/onboarding-records"),
    staleTime: 0,
    refetchInterval: (query) =>
      query.state.status === "error" ? false : 15_000,
    refetchOnWindowFocus: true,
  });

  const records = recordsQuery.data ?? [];

  const selectedRecord =
    records.find((record) => record.id === selectedRecordId) ?? null;

  const summary = useMemo(() => {
    const openRecords = records.filter(
      (record) =>
        !["active", "closed", "won", "lost"].includes(record.status),
    ).length;
    const approvalItems = records.reduce(
      (total, record) =>
        total +
        record.checklist.filter(
          (item) => item.requiresApproval && !item.completed,
        ).length,
      0,
    );

    return {
      total: records.length,
      open: openRecords,
      approvals: approvalItems,
    };
  }, [records]);

  const createMutation = useMutation({
    mutationFn: (record: CreateOnboardingRecord) =>
      requestJson<OnboardingRecord>("/api/admin/onboarding-records", {
        method: "POST",
        body: JSON.stringify(record),
      }),
    onSuccess: (record) => {
      queryClient.setQueryData<OnboardingRecord[]>(
        recordsQueryKey,
        (current = []) => [record, ...current],
      );
      setSelectedRecordId(record.id);
      setName("");
      setContactName("");
      setEmail("");
      setOwner("");
      setFormError("");
    },
    onError: (error: Error) => {
      setFormError(error.message);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({
      id,
      record,
    }: {
      id: string;
      record: UpdateOnboardingRecord;
    }) =>
      requestJson<OnboardingRecord>(`/api/admin/onboarding-records/${id}`, {
        method: "PUT",
        body: JSON.stringify(record),
      }),
    onSuccess: (updatedRecord) => {
      queryClient.setQueryData<OnboardingRecord[]>(
        recordsQueryKey,
        (current = []) =>
          current.map((record) =>
            record.id === updatedRecord.id ? updatedRecord : record,
          ),
      );
      setRecordError("");
    },
    onError: async (error: Error) => {
      setRecordError(error.message);
      await queryClient.invalidateQueries({ queryKey: recordsQueryKey });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) =>
      requestJson<void>(`/api/admin/onboarding-records/${id}`, {
        method: "DELETE",
      }),
    onSuccess: (_result, id) => {
      queryClient.setQueryData<OnboardingRecord[]>(
        recordsQueryKey,
        (current = []) => current.filter((record) => record.id !== id),
      );
      setSelectedRecordId(null);
      setRecordError("");
    },
    onError: (error: Error) => {
      setRecordError(error.message);
    },
  });

  const importMutation = useMutation({
    mutationFn: () =>
      requestJson<{ imported: number; skipped: number }>(
        "/api/admin/onboarding-records/import",
        {
          method: "POST",
          body: JSON.stringify({ records: legacyRecords }),
        },
      ),
    onSuccess: async ({ imported, skipped }) => {
      window.localStorage.removeItem(storageKey);
      setLegacyRecords([]);
      setImportMessage(
        `${imported} local record${imported === 1 ? "" : "s"} imported${
          skipped > 0 ? `; ${skipped} duplicate${skipped === 1 ? "" : "s"} skipped` : ""
        }.`,
      );
      await queryClient.invalidateQueries({ queryKey: recordsQueryKey });
    },
    onError: (error: Error) => {
      setImportMessage(error.message);
    },
  });

  const handleCreateRecord = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    const duplicate = records.find(
      (record) => record.email.toLowerCase() === normalizedEmail,
    );

    if (duplicate) {
      setFormError(
        `A record already exists for ${duplicate.email}. Review that record before creating another.`,
      );
      setSelectedRecordId(duplicate.id);
      return;
    }

    const newRecord: CreateOnboardingRecord = {
      type: recordType,
      name: name.trim(),
      contactName: recordType === "company" ? contactName.trim() : "",
      email: normalizedEmail,
      source,
      owner: owner.trim(),
      status: "needs_review",
      nextAction:
        recordType === "individual"
          ? "Review record and confirm onboarding path"
          : "Review inquiry and prepare first follow-up",
      nextActionDate: "",
      notes: "",
      checklist: createChecklist(recordType),
    };

    createMutation.mutate(newRecord);
  };

  const updateRecord = (record: OnboardingRecord) => {
    const { id, createdAt, updatedAt, ...update } = record;
    void createdAt;
    void updatedAt;
    setRecordError("");
    updateMutation.mutate({ id, record: update });
  };

  const deleteRecord = (record: OnboardingRecord) => {
    const confirmed = window.confirm(
      `Delete the shared onboarding record for ${record.name}? This removes it for both partners and cannot be undone.`,
    );

    if (!confirmed) {
      return;
    }

    setRecordError("");
    deleteMutation.mutate(record.id);
  };

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
          <header className="bg-[#0f172a] px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-3 text-emerald-400">
                <ClipboardCheck className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Momentum Wellness
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
                Shared Onboarding Tracker
              </h1>
              <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                Keep individual and company follow-up records synchronized
                across approved Momentum Wellness team members.
              </p>
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
            <section className="grid gap-4 sm:grid-cols-3">
              <SummaryCard label="Total Records" value={summary.total} />
              <SummaryCard label="Open Workflows" value={summary.open} />
              <SummaryCard
                label="Approvals Remaining"
                value={summary.approvals}
              />
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
                <p>
                  Records are stored in the private shared business database.
                  Do not enter medical information, health histories, progress
                  photos, food logs, payment details, passwords, or other
                  sensitive information. This tracker does not send emails or
                  perform Trainerize actions.
                </p>
              </div>
            </section>

            <div className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
              <section className="self-start rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Plus className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Create Record</h2>
                    <p className="text-sm text-slate-500">
                      Start with the minimum information needed.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleCreateRecord} className="mt-8 space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="record-type">Record Type</Label>
                    <select
                      id="record-type"
                      value={recordType}
                      onChange={(event) => {
                        setRecordType(event.target.value as RecordType);
                        setName("");
                        setContactName("");
                        setEmail("");
                        setSource("Manual admin entry");
                        setOwner("");
                        setFormError("");
                      }}
                      className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm"
                    >
                      <option value="individual">Individual client</option>
                      <option value="company">Company inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="record-name">
                      {recordType === "individual"
                        ? "Client Name"
                        : "Company Name"}
                    </Label>
                    <Input
                      id="record-name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                      autoComplete={
                        recordType === "individual" ? "name" : "organization"
                      }
                      className="h-12 rounded-xl border-slate-300 bg-white"
                    />
                  </div>

                  {recordType === "company" && (
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Contact Name</Label>
                      <Input
                        id="contact-name"
                        value={contactName}
                        onChange={(event) =>
                          setContactName(event.target.value)
                        }
                        required
                        autoComplete="name"
                        className="h-12 rounded-xl border-slate-300 bg-white"
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="record-email">Email</Label>
                    <Input
                      id="record-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      autoComplete="email"
                      className="h-12 rounded-xl border-slate-300 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="record-source">Source</Label>
                    <select
                      id="record-source"
                      value={source}
                      onChange={(event) => setSource(event.target.value)}
                      className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm"
                    >
                      <option>Manual admin entry</option>
                      <option>Individual purchase</option>
                      <option>Qualified individual inquiry</option>
                      <option>Corporate wellness inquiry</option>
                      <option>Referral</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="record-owner">Owner</Label>
                    <Input
                      id="record-owner"
                      value={owner}
                      onChange={(event) => setOwner(event.target.value)}
                      required
                      placeholder="Person responsible for follow-up"
                      className="h-12 rounded-xl border-slate-300 bg-white"
                    />
                  </div>

                  {formError && (
                    <p
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                    >
                      {formError}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={
                      createMutation.isPending || recordsQuery.isError
                    }
                    className="min-h-12 w-full rounded-full border-0 bg-emerald-600 font-semibold text-white hover:bg-emerald-500"
                  >
                    {createMutation.isPending ? (
                      <>
                        <LoaderCircle className="h-4 w-4 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      "Create Checklist"
                    )}
                  </Button>
                </form>
              </section>

              <div className="space-y-8">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <h2 className="text-xl font-bold">
                        Onboarding Records
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        Shared records refresh automatically every 15 seconds.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {legacyRecords.length > 0 && (
                        <Button
                          type="button"
                          variant="outline"
                          disabled={importMutation.isPending}
                          onClick={() => importMutation.mutate()}
                          className="rounded-full"
                        >
                          {importMutation.isPending ? (
                            <LoaderCircle className="h-4 w-4 animate-spin" />
                          ) : (
                            <UploadCloud className="h-4 w-4" />
                          )}
                          Import {legacyRecords.length} Local
                        </Button>
                      )}
                      <Button
                        type="button"
                        variant="outline"
                        disabled={recordsQuery.isFetching}
                        onClick={() => void recordsQuery.refetch()}
                        className="rounded-full"
                      >
                        <RefreshCw
                          className={`h-4 w-4 ${
                            recordsQuery.isFetching ? "animate-spin" : ""
                          }`}
                        />
                        Refresh
                      </Button>
                    </div>
                  </div>

                  {importMessage && (
                    <p
                      role="status"
                      className="mt-5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                    >
                      {importMessage}
                    </p>
                  )}

                  {recordsQuery.isLoading ? (
                    <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-slate-50 p-8 text-slate-600">
                      <LoaderCircle className="h-5 w-5 animate-spin" />
                      Loading shared records...
                    </div>
                  ) : recordsQuery.isError ? (
                    <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6 text-sm leading-6 text-red-700">
                      <p className="font-semibold">
                        Shared records are unavailable.
                      </p>
                      <p className="mt-2">
                        {recordsQuery.error instanceof Error
                          ? recordsQuery.error.message
                          : "Check the database configuration and try again."}
                      </p>
                    </div>
                  ) : records.length === 0 ? (
                    <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                      <ClipboardCheck className="mx-auto h-8 w-8 text-slate-400" />
                      <p className="mt-4 font-semibold">No records yet</p>
                      <p className="mt-2 text-sm text-slate-500">
                        Create the first manual record to generate its
                        checklist.
                      </p>
                    </div>
                  ) : (
                    <div className="mt-6 grid gap-3">
                      {records.map((record) => {
                        const completedItems = record.checklist.filter(
                          (item) => item.completed,
                        ).length;

                        return (
                          <button
                            key={record.id}
                            type="button"
                            onClick={() => setSelectedRecordId(record.id)}
                            className={`rounded-2xl border p-5 text-left transition ${
                              selectedRecordId === record.id
                                ? "border-emerald-400 bg-emerald-50"
                                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                              <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                                  {record.type === "individual" ? (
                                    <User className="h-5 w-5" />
                                  ) : (
                                    <Building2 className="h-5 w-5" />
                                  )}
                                </div>
                                <div>
                                  <p className="font-bold">{record.name}</p>
                                  <p className="mt-1 text-sm text-slate-500">
                                    {record.email}
                                  </p>
                                  {record.nextAction && (
                                    <p className="mt-2 text-sm font-medium text-slate-700">
                                      Next: {record.nextAction}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="sm:text-right">
                                <StatusBadge label={getStatusLabel(record)} />
                                <p className="mt-2 text-xs text-slate-500">
                                  {completedItems}/{record.checklist.length}{" "}
                                  tasks complete
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </section>

                {selectedRecord && (
                  <RecordDetail
                    record={selectedRecord}
                    onSave={updateRecord}
                    onDelete={deleteRecord}
                    isSaving={updateMutation.isPending}
                    isDeleting={deleteMutation.isPending}
                    error={recordError}
                  />
                )}
              </div>
            </div>
          </div>
    </main>
  );
}

function SummaryCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

function StatusBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
      {label}
    </span>
  );
}

function RecordDetail({
  record,
  onSave,
  onDelete,
  isSaving,
  isDeleting,
  error,
}: {
  record: OnboardingRecord;
  onSave: (record: OnboardingRecord) => void;
  onDelete: (record: OnboardingRecord) => void;
  isSaving: boolean;
  isDeleting: boolean;
  error: string;
}) {
  const [draft, setDraft] = useState(record);

  useEffect(() => {
    setDraft(record);
  }, [record.id, record.revision]);

  const completedItems = draft.checklist.filter(
    (item) => item.completed,
  ).length;
  const progress = Math.round(
    (completedItems / draft.checklist.length) * 100,
  );
  const hasChanges = JSON.stringify(draft) !== JSON.stringify(record);

  const updateDraft = (
    update: (current: OnboardingRecord) => OnboardingRecord,
  ) => {
    setDraft((current) => update(current));
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {draft.type === "individual"
              ? "Individual onboarding"
              : "Company follow-up"}
          </p>
          <h2 className="mt-2 text-2xl font-bold">{draft.name}</h2>
          <p className="mt-2 text-sm text-slate-500">
            {draft.contactName && `${draft.contactName} · `}
            {draft.email}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Created {formatDate(draft.createdAt)} · Owner: {draft.owner}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            disabled={!hasChanges || isSaving}
            onClick={() => onSave(draft)}
            className="min-h-11 rounded-full border-0 bg-emerald-600 px-5 text-white hover:bg-emerald-500"
          >
            {isSaving ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <Save className="h-4 w-4" />
            )}
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
          <Button
            type="button"
            variant="outline"
            disabled={isDeleting}
            onClick={() => onDelete(record)}
            className="min-h-11 rounded-full border-red-200 px-5 text-red-700 hover:bg-red-50"
          >
            {isDeleting ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : (
              <Trash2 className="h-4 w-4" />
            )}
            Delete Record
          </Button>
        </div>
      </div>

      {error && (
        <p
          role="alert"
          className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
        >
          {error}
        </p>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`status-${draft.id}`}>Workflow Status</Label>
          <select
            id={`status-${draft.id}`}
            value={draft.status}
            onChange={(event) =>
              updateDraft((current) => ({
                ...current,
                status: event.target.value,
              }))
            }
            className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm"
          >
            {getStatusOptions(draft.type).map((status) => (
              <option key={status.value} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>
        <div className="rounded-2xl bg-slate-50 p-5">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-semibold">Checklist Progress</span>
            <span className="text-sm font-bold text-emerald-700">
              {progress}%
            </span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="space-y-2">
          <Label
            htmlFor={`next-action-${draft.id}`}
            className="flex items-center gap-2"
          >
            <CalendarClock className="h-4 w-4 text-emerald-700" />
            Next Action
          </Label>
          <Input
            id={`next-action-${draft.id}`}
            value={draft.nextAction}
            onChange={(event) =>
              updateDraft((current) => ({
                ...current,
                nextAction: event.target.value,
              }))
            }
            placeholder="Example: Review intake and send welcome email"
            className="h-12 rounded-xl border-slate-300 bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`next-action-date-${draft.id}`}>
            Target Date
          </Label>
          <Input
            id={`next-action-date-${draft.id}`}
            type="date"
            value={draft.nextActionDate}
            onChange={(event) =>
              updateDraft((current) => ({
                ...current,
                nextActionDate: event.target.value,
              }))
            }
            className="h-12 rounded-xl border-slate-300 bg-white"
          />
        </div>
      </div>

      <div className="mt-8 space-y-2">
        <Label
          htmlFor={`notes-${draft.id}`}
          className="flex items-center gap-2"
        >
          <StickyNote className="h-4 w-4 text-emerald-700" />
          Internal Notes
        </Label>
        <Textarea
          id={`notes-${draft.id}`}
          value={draft.notes}
          onChange={(event) =>
            updateDraft((current) => ({
              ...current,
              notes: event.target.value,
            }))
          }
          placeholder="Keep notes operational. Do not enter medical, health, payment, or other sensitive information."
          rows={5}
          className="resize-y rounded-xl border-slate-300 bg-white"
        />
        <p className="text-xs leading-5 text-slate-500">
          Select Save Changes to share updates with your partner. Use notes
          for follow-up context, decisions, and workflow blockers, not
          sensitive client information.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-bold">Checklist</h3>
          <p className="text-sm text-slate-500">
            {completedItems}/{draft.checklist.length} complete
          </p>
        </div>

        <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {draft.checklist.map((item) => (
            <label
              key={item.id}
              className="flex cursor-pointer items-start gap-4 p-4 hover:bg-slate-50 sm:p-5"
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(event) =>
                  updateDraft((current) => ({
                    ...current,
                    checklist: current.checklist.map((checklistItem) =>
                      checklistItem.id === item.id
                        ? {
                            ...checklistItem,
                            completed: event.target.checked,
                          }
                        : checklistItem,
                    ),
                  }))
                }
                className="mt-1 h-5 w-5 rounded border-slate-300 accent-emerald-600"
              />
              <span className="min-w-0 flex-1">
                <span
                  className={`block text-sm font-semibold leading-6 ${
                    item.completed
                      ? "text-slate-400 line-through"
                      : "text-slate-800"
                  }`}
                >
                  {item.label}
                </span>
                {item.requiresApproval && (
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-amber-700">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Human approval required
                  </span>
                )}
              </span>
            </label>
          ))}
        </div>
      </div>

      <p className="mt-6 text-xs leading-5 text-slate-500">
        Source: {draft.source}. Last updated {formatDate(draft.updatedAt)}.
        {draft.nextActionDate &&
          ` Next action target: ${formatDate(draft.nextActionDate)}.`}
        Saving a checklist item updates only the shared workflow state; it does
        not send an email, create a Trainerize client, or assign a program.
      </p>
    </section>
  );
}
