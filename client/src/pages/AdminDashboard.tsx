import {
  Building2,
  Calculator,
  CalendarCheck,
  ClipboardList,
  FileText,
  MapPinned,
} from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import AdminToolGate from "@/components/admin/AdminToolGate";

const tools = [
  {
    href: "/admin/onboarding-tracker",
    title: "Onboarding Tracker",
    description:
      "Track individual clients, corporate leads, notes, status, and next actions.",
    icon: ClipboardList,
  },
  {
    href: "/admin/client-operations",
    title: "Client Operations",
    description:
      "Run weekly messages, monthly programming, behavior, and form-review checklists.",
    icon: CalendarCheck,
  },
  {
    href: "/admin/corporate-calculator",
    title: "Corporate Calculator",
    description:
      "Estimate monthly and total corporate wellness program investment.",
    icon: Calculator,
  },
  {
    href: "/admin/proposal-generator",
    title: "Proposal Generator",
    description:
      "Prepare a tailored, print-friendly corporate wellness proposal.",
    icon: FileText,
  },
  {
    href: "/admin/location-feasibility",
    title: "Location Feasibility",
    description:
      "Model expenses, revenue, and break-even planning for a future studio.",
    icon: MapPinned,
  },
];

export default function AdminDashboard() {
  return (
    <>
      <SEO
        title="Internal Business Tools | Momentum Wellness"
        description="Private Momentum Wellness business tools."
        robots="noindex, nofollow, noarchive"
      />

      <AdminToolGate toolName="Momentum Wellness Business Tools">
        <main className="min-h-screen bg-slate-100 px-4 py-16 text-slate-950 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3 text-emerald-700">
              <Building2 className="h-6 w-6" />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                Momentum Wellness
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Internal Business Tools
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Private planning and operations tools for approved Momentum
              Wellness team members.
            </p>

            <section
              aria-labelledby="tools-heading"
              className="mt-12 grid gap-6 md:grid-cols-2"
            >
              <h2 id="tools-heading" className="sr-only">
                Available tools
              </h2>
              {tools.map((tool) => {
                const Icon = tool.icon;

                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold group-hover:text-emerald-700">
                      {tool.title}
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">
                      {tool.description}
                    </p>
                    <span className="mt-6 inline-flex font-semibold text-emerald-700">
                      Open tool
                    </span>
                  </Link>
                );
              })}
            </section>

            <p className="mt-10 text-sm leading-6 text-slate-500">
              These tools are internal, excluded from public navigation, and
              should not be used to store sensitive health information.
            </p>
          </div>
        </main>
      </AdminToolGate>
    </>
  );
}
