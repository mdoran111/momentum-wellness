import {
  useEffect,
  useMemo,
  useState,
  type FormEvent,
} from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  LoaderCircle,
  MessageSquareText,
  Plus,
  RefreshCw,
  Save,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import SEO from "@/components/SEO";
import AdminToolGate from "@/components/admin/AdminToolGate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type {
  ClientOperationRecord,
  CreateClientOperation,
  OperationChecklistItem,
  OperationStatus,
  OperationType,
  UpdateClientOperation,
} from "@shared/clientOperations";

const operationsQueryKey = ["/api/admin/client-operations"] as const;

const operationStatuses: Array<{
  value: OperationStatus;
  label: string;
}> = [
  { value: "planned", label: "Planned" },
  { value: "in_progress", label: "In progress" },
  { value: "waiting_review", label: "Waiting review" },
  { value: "blocked", label: "Blocked" },
  { value: "complete", label: "Complete" },
];

const operationTemplates: Record<
  OperationType,
  {
    label: string;
    defaultTitle: string;
    defaultClientFocus: string;
    description: string;
    checklist: Array<{
      label: string;
      requiresApproval?: boolean;
    }>;
  }
> = {
  weekly_client_review: {
    label: "Weekly client review",
    defaultTitle: "Weekly Adult Strength client review",
    defaultClientFocus: "All active Adult Strength clients",
    description:
      "Review active clients, send weekly messages, and capture any next actions.",
    checklist: [
      { label: "Review active clients in Trainerize" },
      { label: "Check incomplete forms or missing waiver status" },
      { label: "Review workout completion and calendar visibility" },
      { label: "Send Monday weekly focus message" },
      { label: "Send midweek accountability nudge if appropriate" },
      { label: "Send Sunday reflection if appropriate" },
      { label: "Update tracker only for operational next actions" },
      {
        label: "Flag any client needing review, support, or access correction",
        requiresApproval: true,
      },
    ],
  },
  monthly_programming: {
    label: "Monthly programming",
    defaultTitle: "Monthly Adult Strength programming review",
    defaultClientFocus: "Adult Strength monthly phase",
    description:
      "Prepare the next training phase and verify calendar visibility before it starts.",
    checklist: [
      { label: "Confirm next phase name and training focus" },
      { label: "Review workout days and weekly layout" },
      { label: "Confirm exercises, sets, reps, rest, and progression notes" },
      { label: "Verify exercise demonstrations display correctly" },
      { label: "Confirm current phase appears for the intended month" },
      { label: "Confirm future phases remain hidden until start date" },
      { label: "Check Calendar look-ahead is set to Follow Training Phase" },
      { label: "Send new-phase reminder to clients" },
      {
        label: "Internally review before treating the phase as live",
        requiresApproval: true,
      },
    ],
  },
  behavior_calendar: {
    label: "Behavior calendar",
    defaultTitle: "Behavior calendar setup",
    defaultClientFocus: "Adult Strength habit tracking",
    description:
      "Assign simple habits without overwhelming clients or using medical language.",
    checklist: [
      { label: "Confirm core behaviors for the month" },
      { label: "Assign protein behavior if appropriate" },
      { label: "Assign water or hydration behavior if appropriate" },
      { label: "Assign workout completion behavior" },
      { label: "Assign weekly check-in behavior" },
      { label: "Add movement, sleep, or recovery behavior only if useful" },
      { label: "Confirm behaviors appear on correct calendar days" },
      {
        label: "Review behavior language for non-medical, practical wording",
        requiresApproval: true,
      },
    ],
  },
  form_waiver_review: {
    label: "Forms and waiver review",
    defaultTitle: "Client forms and waiver review",
    defaultClientFocus: "Clients with onboarding items pending",
    description:
      "Verify readiness forms and signed waiver status without storing private details here.",
    checklist: [
      { label: "Review readiness forms inside Trainerize" },
      {
        label: "Confirm signed waiver is stored in the client's Trainerize profile",
        requiresApproval: true,
      },
      { label: "Record only operational status in the tracker" },
      { label: "Do not copy medical details, signatures, or forms into notes" },
      { label: "Mark client as Needs review or Blocked if appropriate" },
      {
        label: "Confirm next safe onboarding action before program start",
        requiresApproval: true,
      },
    ],
  },
  online_training_marketing: {
    label: "Online training marketing launch",
    defaultTitle: "Weekly Online Training Marketing Checklist",
    defaultClientFocus: "Adult Strength online training leads",
    description:
      "Plan content, outreach, and lead follow-up for online training without using unsupported claims.",
    checklist: [
      { label: "Review website pricing, contact form, and Trainerize checkout paths" },
      { label: "Choose one weekly online training content theme" },
      { label: "Draft three short posts or reels for Adult Strength" },
      { label: "Publish or schedule at least one online training offer post" },
      { label: "Send warm outreach to qualified individual leads" },
      { label: "Record responses and next follow-up actions" },
      { label: "Check Formspree and Trainerize for new lead or purchase activity" },
      {
        label:
          "Review messaging for no medical claims, guaranteed results, or fake client proof",
        requiresApproval: true,
      },
    ],
  },
};

function createChecklist(type: OperationType): OperationChecklistItem[] {
  return operationTemplates[type].checklist.map((item, index) => ({
    id: `${type}-${index + 1}`,
    label: item.label,
    completed: false,
    requiresApproval: Boolean(item.requiresApproval),
  }));
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
        : "The client operations checklist could not complete this request.";
    throw new Error(message);
  }

  return body as T;
}

function getStatusLabel(status: OperationStatus) {
  return (
    operationStatuses.find((option) => option.value === status)?.label ??
    status
  );
}

function parseDisplayDate(value: string) {
  if (!value) {
    return null;
  }

  const date = /^\d{4}-\d{2}-\d{2}$/.test(value)
    ? new Date(`${value}T12:00:00`)
    : new Date(value);

  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(value: string) {
  const date = parseDisplayDate(value);

  if (!date) {
    return "No date set";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function getDueLabel(record: ClientOperationRecord) {
  if (!record.dueDate || record.status === "complete") {
    return "";
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dueDate = parseDisplayDate(record.dueDate);

  if (!dueDate) {
    return "";
  }

  dueDate.setHours(0, 0, 0, 0);
  const daysUntilDue = Math.round(
    (dueDate.getTime() - today.getTime()) / 86_400_000,
  );

  if (daysUntilDue < 0) {
    return "Overdue";
  }

  if (daysUntilDue === 0) {
    return "Due today";
  }

  if (daysUntilDue <= 7) {
    return `Due in ${daysUntilDue} day${daysUntilDue === 1 ? "" : "s"}`;
  }

  return "";
}

export default function ClientOperations() {
  return (
    <>
      <SEO
        title="Client Operations Checklist | Momentum Wellness"
        description="Internal Momentum Wellness client operations checklist."
        robots="noindex, nofollow, noarchive"
      />

      <AdminToolGate toolName="Client Operations Checklist">
        <ClientOperationsContent />
      </AdminToolGate>
    </>
  );
}

function ClientOperationsContent() {
  const queryClient = useQueryClient();
  const [operationType, setOperationType] =
    useState<OperationType>("weekly_client_review");
  const [title, setTitle] = useState(
    operationTemplates.weekly_client_review.defaultTitle,
  );
  const [clientFocus, setClientFocus] = useState(
    operationTemplates.weekly_client_review.defaultClientFocus,
  );
  const [owner, setOwner] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(
    null,
  );
  const [formError, setFormError] = useState("");
  const [recordError, setRecordError] = useState("");

  const operationsQuery = useQuery<ClientOperationRecord[]>({
    queryKey: operationsQueryKey,
    queryFn: () =>
      requestJson<ClientOperationRecord[]>("/api/admin/client-operations"),
    staleTime: 0,
    refetchInterval: (query) =>
      query.state.status === "error" ? false : 15_000,
    refetchOnWindowFocus: true,
  });

  const records = operationsQuery.data ?? [];
  const selectedRecord =
    records.find((record) => record.id === selectedRecordId) ?? null;

  const summary = useMemo(() => {
    const openRecords = records.filter(
      (record) => record.status !== "complete",
    ).length;
    const dueSoon = records.filter((record) => getDueLabel(record)).length;
    const approvals = records.reduce(
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
      dueSoon,
      approvals,
    };
  }, [records]);

  const createMutation = useMutation({
    mutationFn: (record: CreateClientOperation) =>
      requestJson<ClientOperationRecord>("/api/admin/client-operations", {
        method: "POST",
        body: JSON.stringify(record),
      }),
    onSuccess: (record) => {
      queryClient.setQueryData<ClientOperationRecord[]>(
        operationsQueryKey,
        (current = []) => [record, ...current],
      );
      setSelectedRecordId(record.id);
      setOwner("");
      setDueDate("");
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
      record: UpdateClientOperation;
    }) =>
      requestJson<ClientOperationRecord>(
        `/api/admin/client-operations/${id}`,
        {
          method: "PUT",
          body: JSON.stringify(record),
        },
      ),
    onSuccess: (updatedRecord) => {
      queryClient.setQueryData<ClientOperationRecord[]>(
        operationsQueryKey,
        (current = []) =>
          current.map((record) =>
            record.id === updatedRecord.id ? updatedRecord : record,
          ),
      );
      setRecordError("");
    },
    onError: async (error: Error) => {
      setRecordError(error.message);
      await queryClient.invalidateQueries({ queryKey: operationsQueryKey });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) =>
      requestJson<void>(`/api/admin/client-operations/${id}`, {
        method: "DELETE",
      }),
    onSuccess: (_result, id) => {
      queryClient.setQueryData<ClientOperationRecord[]>(
        operationsQueryKey,
        (current = []) => current.filter((record) => record.id !== id),
      );
      setSelectedRecordId(null);
      setRecordError("");
    },
    onError: (error: Error) => {
      setRecordError(error.message);
    },
  });

  const handleTypeChange = (type: OperationType) => {
    setOperationType(type);
    setTitle(operationTemplates[type].defaultTitle);
    setClientFocus(operationTemplates[type].defaultClientFocus);
    setFormError("");
  };

  const handleCreateRecord = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const template = operationTemplates[operationType];

    createMutation.mutate({
      type: operationType,
      title: title.trim() || template.defaultTitle,
      clientFocus: clientFocus.trim(),
      owner: owner.trim(),
      status: "planned",
      dueDate,
      notes: "",
      checklist: createChecklist(operationType),
    });
  };

  const updateRecord = (record: ClientOperationRecord) => {
    const { id, createdAt, updatedAt, ...update } = record;
    void createdAt;
    void updatedAt;
    setRecordError("");
    updateMutation.mutate({ id, record: update });
  };

  const deleteRecord = (record: ClientOperationRecord) => {
    const confirmed = window.confirm(
      `Delete the shared client operations checklist "${record.title}"? This removes it for approved team members and cannot be undone.`,
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
            <CalendarCheck className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              Momentum Wellness
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            Client Operations Checklist
          </h1>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Plan weekly messages, monthly programming reviews, behavior
            calendars, and form/waiver checks without connecting to Trainerize
            yet.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-4 sm:grid-cols-4">
          <SummaryCard label="Total Checklists" value={summary.total} />
          <SummaryCard label="Open Workflows" value={summary.open} />
          <SummaryCard label="Due Soon" value={summary.dueSoon} />
          <SummaryCard label="Approvals Left" value={summary.approvals} />
        </section>

        <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
            <p>
              These records are stored in the private business database. This
              tool does not send Trainerize messages, update programming, add
              behaviors, or perform client actions. Use it for reminders,
              workflow status, and operational notes only.
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
                <h2 className="text-xl font-bold">Create Checklist</h2>
                <p className="text-sm text-slate-500">
                  Choose the operating workflow you want to run.
                </p>
              </div>
            </div>

            <form onSubmit={handleCreateRecord} className="mt-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="operation-type">Checklist Type</Label>
                <select
                  id="operation-type"
                  value={operationType}
                  onChange={(event) =>
                    handleTypeChange(event.target.value as OperationType)
                  }
                  className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm"
                >
                  {Object.entries(operationTemplates).map(([type, template]) => (
                    <option key={type} value={type}>
                      {template.label}
                    </option>
                  ))}
                </select>
                <p className="text-xs leading-5 text-slate-500">
                  {operationTemplates[operationType].description}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="operation-title">Title</Label>
                <Input
                  id="operation-title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                  className="h-12 rounded-xl border-slate-300 bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="client-focus">Client Focus</Label>
                <Input
                  id="client-focus"
                  value={clientFocus}
                  onChange={(event) => setClientFocus(event.target.value)}
                  placeholder="Example: All active Adult Strength clients"
                  className="h-12 rounded-xl border-slate-300 bg-white"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="operation-owner">Owner</Label>
                  <Input
                    id="operation-owner"
                    value={owner}
                    onChange={(event) => setOwner(event.target.value)}
                    required
                    placeholder="Responsible person"
                    className="h-12 rounded-xl border-slate-300 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="operation-due-date">Due Date</Label>
                  <Input
                    id="operation-due-date"
                    type="date"
                    value={dueDate}
                    onChange={(event) => setDueDate(event.target.value)}
                    className="h-12 rounded-xl border-slate-300 bg-white"
                  />
                </div>
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
                disabled={createMutation.isPending || operationsQuery.isError}
                className="min-h-12 w-full rounded-full border-0 bg-emerald-600 font-semibold text-white hover:bg-emerald-500"
              >
                {createMutation.isPending ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Operations Checklist"
                )}
              </Button>
            </form>
          </section>

          <div className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <h2 className="text-xl font-bold">Operations Records</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Shared checklists refresh automatically every 15 seconds.
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  disabled={operationsQuery.isFetching}
                  onClick={() => void operationsQuery.refetch()}
                  className="rounded-full"
                >
                  <RefreshCw
                    className={`h-4 w-4 ${
                      operationsQuery.isFetching ? "animate-spin" : ""
                    }`}
                  />
                  Refresh
                </Button>
              </div>

              {operationsQuery.isLoading ? (
                <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl bg-slate-50 p-8 text-slate-600">
                  <LoaderCircle className="h-5 w-5 animate-spin" />
                  Loading client operations...
                </div>
              ) : operationsQuery.isError ? (
                <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-6 text-sm leading-6 text-red-700">
                  <p className="font-semibold">
                    Client operations records are unavailable.
                  </p>
                  <p className="mt-2">
                    {operationsQuery.error instanceof Error
                      ? operationsQuery.error.message
                      : "Check the database configuration and try again."}
                  </p>
                </div>
              ) : records.length === 0 ? (
                <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                  <ClipboardList className="mx-auto h-8 w-8 text-slate-400" />
                  <p className="mt-4 font-semibold">
                    No operations checklists yet
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Create a weekly review, monthly programming, behavior, or
                    forms checklist to start.
                  </p>
                </div>
              ) : (
                <div className="mt-6 grid gap-3">
                  {records.map((record) => {
                    const completedItems = record.checklist.filter(
                      (item) => item.completed,
                    ).length;
                    const dueLabel = getDueLabel(record);

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
                              <MessageSquareText className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-bold">{record.title}</p>
                              <p className="mt-1 text-sm text-slate-500">
                                {operationTemplates[record.type].label}
                                {record.clientFocus
                                  ? ` · ${record.clientFocus}`
                                  : ""}
                              </p>
                              <p className="mt-2 text-sm text-slate-700">
                                Due: {formatDate(record.dueDate)}
                              </p>
                            </div>
                          </div>
                          <div className="sm:text-right">
                            <div className="flex flex-wrap gap-2 sm:justify-end">
                              <StatusBadge label={getStatusLabel(record.status)} />
                              {dueLabel && <DueBadge label={dueLabel} />}
                            </div>
                            <p className="mt-2 text-xs text-slate-500">
                              {completedItems}/{record.checklist.length} tasks
                              complete
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
              <OperationDetail
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

function DueBadge({ label }: { label: string }) {
  const isOverdue = label === "Overdue";

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        isOverdue
          ? "bg-red-100 text-red-700"
          : "bg-amber-100 text-amber-700"
      }`}
    >
      {label}
    </span>
  );
}

function OperationDetail({
  record,
  onSave,
  onDelete,
  isSaving,
  isDeleting,
  error,
}: {
  record: ClientOperationRecord;
  onSave: (record: ClientOperationRecord) => void;
  onDelete: (record: ClientOperationRecord) => void;
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
    update: (current: ClientOperationRecord) => ClientOperationRecord,
  ) => {
    setDraft((current) => update(current));
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {operationTemplates[draft.type].label}
          </p>
          <h2 className="mt-2 text-2xl font-bold">{draft.title}</h2>
          <p className="mt-2 text-sm text-slate-500">
            Owner: {draft.owner} · Due {formatDate(draft.dueDate)}
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
            Delete
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
                status: event.target.value as OperationStatus,
              }))
            }
            className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm"
          >
            {operationStatuses.map((status) => (
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

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <div className="space-y-2 lg:col-span-2">
          <Label htmlFor={`client-focus-${draft.id}`}>Client Focus</Label>
          <Input
            id={`client-focus-${draft.id}`}
            value={draft.clientFocus}
            onChange={(event) =>
              updateDraft((current) => ({
                ...current,
                clientFocus: event.target.value,
              }))
            }
            className="h-12 rounded-xl border-slate-300 bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`due-date-${draft.id}`}>Due Date</Label>
          <Input
            id={`due-date-${draft.id}`}
            type="date"
            value={draft.dueDate}
            onChange={(event) =>
              updateDraft((current) => ({
                ...current,
                dueDate: event.target.value,
              }))
            }
            className="h-12 rounded-xl border-slate-300 bg-white"
          />
        </div>
      </div>

      <div className="mt-8 space-y-2">
        <Label htmlFor={`notes-${draft.id}`}>Operational Notes</Label>
        <Textarea
          id={`notes-${draft.id}`}
          value={draft.notes}
          onChange={(event) =>
            updateDraft((current) => ({
              ...current,
              notes: event.target.value,
            }))
          }
          placeholder="Keep notes operational. Do not enter medical, health, payment, signed-form, password, or other sensitive information."
          rows={5}
          className="resize-y rounded-xl border-slate-300 bg-white"
        />
        <p className="text-xs leading-5 text-slate-500">
          Record reminders, workflow blockers, and next actions only. Do not
          store readiness answers, signed waivers, health details, payment
          details, or private client messages here.
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
                    Human review
                  </span>
                )}
              </span>
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}
