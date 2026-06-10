import { useMemo, useState, type FormEvent } from "react";
import {
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  Plus,
  ShieldCheck,
  StickyNote,
  Trash2,
  User,
} from "lucide-react";
import SEO from "@/components/SEO";
import AdminToolGate from "@/components/admin/AdminToolGate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type RecordType = "individual" | "company";

type ChecklistItem = {
  id: string;
  label: string;
  completed: boolean;
  requiresApproval: boolean;
};

type OnboardingRecord = {
  id: string;
  type: RecordType;
  name: string;
  contactName: string;
  email: string;
  source: string;
  owner: string;
  status: string;
  nextAction: string;
  nextActionDate: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
  checklist: ChecklistItem[];
};

const storageKey = "momentum-onboarding-tracker-v1";

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
  ["Record the next follow-up date outside this tracker", false],
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

function isOnboardingRecord(value: unknown): value is OnboardingRecord {
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

function loadRecords(): OnboardingRecord[] {
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
  const [records, setRecords] = useState<OnboardingRecord[]>(loadRecords);
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

  const persistRecords = (nextRecords: OnboardingRecord[]) => {
    setRecords(nextRecords);
    window.localStorage.setItem(storageKey, JSON.stringify(nextRecords));
  };

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

    const timestamp = new Date().toISOString();
    const newRecord: OnboardingRecord = {
      id: crypto.randomUUID(),
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
      createdAt: timestamp,
      updatedAt: timestamp,
      checklist: createChecklist(recordType),
    };

    persistRecords([newRecord, ...records]);
    setSelectedRecordId(newRecord.id);
    setName("");
    setContactName("");
    setEmail("");
    setOwner("");
    setFormError("");
  };

  const updateRecord = (
    recordId: string,
    update: (record: OnboardingRecord) => OnboardingRecord,
  ) => {
    persistRecords(
      records.map((record) =>
        record.id === recordId
          ? { ...update(record), updatedAt: new Date().toISOString() }
          : record,
      ),
    );
  };

  const deleteRecord = (record: OnboardingRecord) => {
    const confirmed = window.confirm(
      `Delete the local onboarding record for ${record.name}? This cannot be undone.`,
    );

    if (!confirmed) {
      return;
    }

    persistRecords(records.filter((item) => item.id !== record.id));
    setSelectedRecordId(null);
  };

  return (
    <>
      <SEO
        title="Onboarding Tracker | Momentum Wellness"
        description="Internal Momentum Wellness onboarding workflow tracker."
        robots="noindex, nofollow, noarchive"
      />

      <AdminToolGate toolName="Onboarding Tracker">
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
                Manual Onboarding Tracker
              </h1>
              <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                Create individual or company records, assign the correct
                checklist, and track human-reviewed onboarding steps.
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
                  This tool stores records only in this browser on this device.
                  Do not enter medical information, health histories, progress
                  photos, food logs, payment details, passwords, or other
                  sensitive information. No emails or Trainerize actions are
                  sent from this tool.
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
                    className="min-h-12 w-full rounded-full border-0 bg-emerald-600 font-semibold text-white hover:bg-emerald-500"
                  >
                    Create Checklist
                  </Button>
                </form>
              </section>

              <div className="space-y-8">
                <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div>
                    <h2 className="text-xl font-bold">Onboarding Records</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Select a record to update its status and checklist.
                    </p>
                  </div>

                  {records.length === 0 ? (
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
                    onUpdate={updateRecord}
                    onDelete={deleteRecord}
                  />
                )}
              </div>
            </div>
          </div>
        </main>
      </AdminToolGate>
    </>
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
  onUpdate,
  onDelete,
}: {
  record: OnboardingRecord;
  onUpdate: (
    recordId: string,
    update: (record: OnboardingRecord) => OnboardingRecord,
  ) => void;
  onDelete: (record: OnboardingRecord) => void;
}) {
  const completedItems = record.checklist.filter(
    (item) => item.completed,
  ).length;
  const progress = Math.round(
    (completedItems / record.checklist.length) * 100,
  );

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {record.type === "individual"
              ? "Individual onboarding"
              : "Company follow-up"}
          </p>
          <h2 className="mt-2 text-2xl font-bold">{record.name}</h2>
          <p className="mt-2 text-sm text-slate-500">
            {record.contactName && `${record.contactName} · `}
            {record.email}
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Created {formatDate(record.createdAt)} · Owner: {record.owner}
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => onDelete(record)}
          className="min-h-11 rounded-full border-red-200 px-5 text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
          Delete Record
        </Button>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`status-${record.id}`}>Workflow Status</Label>
          <select
            id={`status-${record.id}`}
            value={record.status}
            onChange={(event) =>
              onUpdate(record.id, (current) => ({
                ...current,
                status: event.target.value,
              }))
            }
            className="h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm"
          >
            {getStatusOptions(record.type).map((status) => (
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
            htmlFor={`next-action-${record.id}`}
            className="flex items-center gap-2"
          >
            <CalendarClock className="h-4 w-4 text-emerald-700" />
            Next Action
          </Label>
          <Input
            id={`next-action-${record.id}`}
            value={record.nextAction}
            onChange={(event) =>
              onUpdate(record.id, (current) => ({
                ...current,
                nextAction: event.target.value,
              }))
            }
            placeholder="Example: Review intake and send welcome email"
            className="h-12 rounded-xl border-slate-300 bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`next-action-date-${record.id}`}>
            Target Date
          </Label>
          <Input
            id={`next-action-date-${record.id}`}
            type="date"
            value={record.nextActionDate}
            onChange={(event) =>
              onUpdate(record.id, (current) => ({
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
          htmlFor={`notes-${record.id}`}
          className="flex items-center gap-2"
        >
          <StickyNote className="h-4 w-4 text-emerald-700" />
          Internal Notes
        </Label>
        <Textarea
          id={`notes-${record.id}`}
          value={record.notes}
          onChange={(event) =>
            onUpdate(record.id, (current) => ({
              ...current,
              notes: event.target.value,
            }))
          }
          placeholder="Keep notes operational. Do not enter medical, health, payment, or other sensitive information."
          rows={5}
          className="resize-y rounded-xl border-slate-300 bg-white"
        />
        <p className="text-xs leading-5 text-slate-500">
          Changes save automatically in this browser. Use notes for follow-up
          context, decisions, and workflow blockers, not sensitive client
          information.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-bold">Checklist</h3>
          <p className="text-sm text-slate-500">
            {completedItems}/{record.checklist.length} complete
          </p>
        </div>

        <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {record.checklist.map((item) => (
            <label
              key={item.id}
              className="flex cursor-pointer items-start gap-4 p-4 hover:bg-slate-50 sm:p-5"
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={(event) =>
                  onUpdate(record.id, (current) => ({
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
        Source: {record.source}. Last updated {formatDate(record.updatedAt)}.
        {record.nextActionDate &&
          ` Next action target: ${formatDate(record.nextActionDate)}.`}
        Completing a checklist item records only the local workflow state; it
        does not send an email, create a Trainerize client, or assign a program.
      </p>
    </section>
  );
}
