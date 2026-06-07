import { useState, type ReactNode } from "react";
import { Building2, FileText, Printer } from "lucide-react";
import SEO from "@/components/SEO";
import AdminToolGate from "@/components/admin/AdminToolGate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const pillars = [
  {
    title: "Training",
    description:
      "Accessible strength, cardio, and mobility programming for different experience levels and environments.",
  },
  {
    title: "Nutrition",
    description:
      "Practical nutrition awareness that supports energy and sustainable daily choices.",
  },
  {
    title: "Habits",
    description:
      "Repeatable routines around movement, hydration, sleep, recovery, and consistency.",
  },
  {
    title: "Accountability",
    description:
      "App-based tracking, check-ins, and structured follow-through that support engagement.",
  },
  {
    title: "Community",
    description:
      "Shared participation and messaging that can strengthen morale and connection.",
  },
];

function displayValue(value: string, fallback: string) {
  return value.trim() || fallback;
}

export default function ProposalGenerator() {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [employeeCount, setEmployeeCount] = useState(75);
  const [programMonths, setProgramMonths] = useState(6);
  const [decisionMakerName, setDecisionMakerName] = useState("");
  const [primaryGoals, setPrimaryGoals] = useState(
    "Support workforce health, energy, morale, engagement, and accountability.",
  );
  const [notes, setNotes] = useState("");

  const company = displayValue(companyName, "Your Company");
  const companyIndustry = displayValue(industry, "your industry");
  const decisionMaker = displayValue(decisionMakerName, "Company Leadership");
  const goals = displayValue(
    primaryGoals,
    "Support workforce health, energy, morale, engagement, and accountability.",
  );

  return (
    <>
      <SEO
        title="Corporate Proposal Generator | Momentum Wellness"
        description="Internal Momentum Wellness corporate proposal generator."
        robots="noindex, nofollow, noarchive"
      />

      <AdminToolGate toolName="Corporate Proposal Generator">
        <main className="admin-calculator-shell min-h-screen bg-slate-100 text-slate-950">
          <header className="admin-calculator-header bg-[#0f172a] px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-3 text-emerald-400">
                  <Building2 className="h-6 w-6" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Momentum Wellness
                  </span>
                </div>
                <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Corporate Proposal Generator
                </h1>
                <p className="mt-3 text-slate-300">
                  Create a tailored, print-ready wellness proposal.
                </p>
              </div>
              <Button
                type="button"
                onClick={() => window.print()}
                className="admin-no-print min-h-12 rounded-full border-0 bg-emerald-500 px-6 text-white hover:bg-emerald-400"
              >
                <Printer />
                Print Proposal
              </Button>
            </div>
          </header>

          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
            <section className="admin-no-print self-start rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:sticky lg:top-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Proposal Inputs</h2>
                  <p className="text-sm text-slate-500">
                    The preview updates as you type.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <Field
                  id="proposal-company"
                  label="Company Name"
                  value={companyName}
                  onChange={setCompanyName}
                  placeholder="Company name"
                />
                <Field
                  id="proposal-industry"
                  label="Industry"
                  value={industry}
                  onChange={setIndustry}
                  placeholder="Industry"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <NumberField
                    id="proposal-employees"
                    label="Employees"
                    value={employeeCount}
                    onChange={setEmployeeCount}
                  />
                  <NumberField
                    id="proposal-months"
                    label="Program Months"
                    value={programMonths}
                    onChange={setProgramMonths}
                  />
                </div>
                <Field
                  id="proposal-decision-maker"
                  label="Decision Maker Name"
                  value={decisionMakerName}
                  onChange={setDecisionMakerName}
                  placeholder="Name or leadership team"
                />
                <div className="space-y-2">
                  <Label htmlFor="proposal-goals">Primary Goals</Label>
                  <Textarea
                    id="proposal-goals"
                    value={primaryGoals}
                    onChange={(event) => setPrimaryGoals(event.target.value)}
                    className="min-h-[120px] rounded-xl border-slate-300 bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="proposal-notes">Notes</Label>
                  <Textarea
                    id="proposal-notes"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder="Optional context for the proposal"
                    className="min-h-[120px] rounded-xl border-slate-300 bg-white"
                  />
                </div>
              </div>
            </section>

            <article className="admin-print-summary overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <ProposalCover
                company={company}
                decisionMaker={decisionMaker}
                employeeCount={employeeCount}
                programMonths={programMonths}
              />

              <div className="space-y-10 p-6 sm:p-10">
                <ProposalSection number="01" title="Executive Summary">
                  <p>
                    Momentum Wellness proposes a {programMonths}-month,
                    app-based employee wellness program for {company}. The
                    program is designed to provide practical support for{" "}
                    {employeeCount.toLocaleString()} employees while
                    strengthening workforce health, energy, morale,
                    engagement, and long-term behavior change.
                  </p>
                  <p>
                    Prepared for {decisionMaker}, this proposal focuses on:
                    {" "}
                    {goals}
                  </p>
                </ProposalSection>

                <ProposalSection
                  number="02"
                  title="Company Wellness Opportunity"
                >
                  <p>
                    Organizations in {companyIndustry} often bring together
                    people with different schedules, roles, experience levels,
                    and wellness needs. A shared structure can make it easier
                    for employees to participate, understand what to do, and
                    build consistent routines.
                  </p>
                  <p>
                    The opportunity for {company} is to offer a clear wellness
                    experience that supports individuals while reinforcing a
                    stronger sense of accountability and community across the
                    workforce.
                  </p>
                </ProposalSection>

                <ProposalSection
                  number="03"
                  title="Momentum Wellness Solution"
                >
                  <p>
                    Momentum Wellness brings training, nutrition, habits,
                    accountability, community, and progress tracking together
                    in one mobile platform. Employees receive an organized
                    experience rather than an unstructured content library.
                  </p>
                  <p>
                    The program is built for practical participation at home,
                    in a gym, at work, or on the go, with consultation-based
                    setup and ongoing support.
                  </p>
                </ProposalSection>

                <ProposalSection number="04" title="The Five Pillars">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {pillars.map((pillar, index) => (
                      <div
                        key={pillar.title}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                      >
                        <p className="text-xs font-bold tracking-[0.18em] text-emerald-700">
                          0{index + 1}
                        </p>
                        <h3 className="mt-2 font-bold">{pillar.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {pillar.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </ProposalSection>

                <ProposalSection
                  number="05"
                  title="App-Based Program Overview"
                >
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Structured training plans",
                      "Nutrition awareness and tracking",
                      "Daily habit goals",
                      "Progress tracking and check-ins",
                      "Community messaging",
                      "Practical accountability support",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </ProposalSection>

                <ProposalSection
                  number="06"
                  title="Implementation Timeline"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <TimelineItem
                      label="Discovery"
                      text="Confirm company goals, workforce context, eligibility, and implementation needs."
                    />
                    <TimelineItem
                      label="Setup"
                      text="Configure the program structure, communication plan, and app experience."
                    />
                    <TimelineItem
                      label="Launch"
                      text="Onboard employees and provide clear participation guidance."
                    />
                    <TimelineItem
                      label="Ongoing Program"
                      text={`Support engagement, accountability, and reporting throughout the ${programMonths}-month program.`}
                    />
                  </div>
                </ProposalSection>

                <ProposalSection
                  number="07"
                  title="Reporting and Privacy"
                >
                  <p>
                    Employer-level reporting will focus on approved program
                    engagement and participation information. Individual
                    privacy should be protected, and personal health
                    information should not be disclosed to the employer
                    without a lawful, documented basis.
                  </p>
                  <p>
                    Reporting scope, data handling, retention, access, and
                    responsibilities will be confirmed before program launch.
                  </p>
                </ProposalSection>

                <ProposalSection number="08" title="Investment Summary">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                    <p className="font-bold text-emerald-900">
                      Consultation-Based Investment
                    </p>
                    <p className="mt-3 leading-7 text-emerald-900/80">
                      Final investment will be confirmed after aligning the
                      scope, employee count, program length, implementation,
                      reporting, and support requirements for {company}.
                    </p>
                  </div>
                </ProposalSection>

                <ProposalSection number="09" title="Next Steps">
                  <ol className="space-y-3">
                    {[
                      "Review company goals and workforce requirements.",
                      "Confirm program scope, timing, reporting, and responsibilities.",
                      "Finalize the investment and agreement.",
                      "Prepare employee onboarding and launch communications.",
                    ].map((step, index) => (
                      <li key={step} className="flex gap-4">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                          {index + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                  {notes.trim() && (
                    <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-sm font-bold">Additional Notes</p>
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-600">
                        {notes}
                      </p>
                    </div>
                  )}
                </ProposalSection>
              </div>

              <footer className="border-t border-slate-200 bg-slate-50 p-6 text-center text-xs leading-5 text-slate-500 sm:p-8">
                This proposal describes intended program structure and is not a
                guarantee of health, financial, productivity, or participation
                outcomes. Final terms require mutual approval.
              </footer>
            </article>
          </div>
        </main>
      </AdminToolGate>
    </>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-12 rounded-xl border-slate-300 bg-white"
      />
    </div>
  );
}

function NumberField({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="number"
        min="1"
        step="1"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-12 rounded-xl border-slate-300 bg-white"
      />
    </div>
  );
}

function ProposalCover({
  company,
  decisionMaker,
  employeeCount,
  programMonths,
}: {
  company: string;
  decisionMaker: string;
  employeeCount: number;
  programMonths: number;
}) {
  return (
    <header className="bg-[#0f172a] p-7 text-white sm:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
        Momentum Wellness
      </p>
      <h2 className="mt-8 text-3xl font-bold sm:text-5xl">
        Employee Wellness Program Proposal
      </h2>
      <p className="mt-5 text-xl text-slate-300">Prepared for {company}</p>
      <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-sm text-slate-300 sm:grid-cols-3">
        <p>
          <span className="block text-xs uppercase tracking-wider text-slate-500">
            Prepared for
          </span>
          <span className="mt-1 block font-semibold text-white">
            {decisionMaker}
          </span>
        </p>
        <p>
          <span className="block text-xs uppercase tracking-wider text-slate-500">
            Workforce
          </span>
          <span className="mt-1 block font-semibold text-white">
            {employeeCount.toLocaleString()} employees
          </span>
        </p>
        <p>
          <span className="block text-xs uppercase tracking-wider text-slate-500">
            Proposed term
          </span>
          <span className="mt-1 block font-semibold text-white">
            {programMonths.toLocaleString()} months
          </span>
        </p>
      </div>
    </header>
  );
}

function ProposalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="proposal-section break-inside-avoid border-b border-slate-200 pb-10 last:border-0 last:pb-0">
      <div className="flex items-baseline gap-3">
        <span className="text-sm font-bold tracking-[0.18em] text-emerald-700">
          {number}
        </span>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="mt-5 space-y-4 leading-7 text-slate-600">{children}</div>
    </section>
  );
}

function TimelineItem({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">
      <h3 className="font-bold text-slate-950">{label}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}
