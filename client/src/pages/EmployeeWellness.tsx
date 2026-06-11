import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Activity,
  Apple,
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  Check,
  Dumbbell,
  HeartPulse,
  MessageSquare,
  Repeat,
  ShieldCheck,
  Smartphone,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import mwDashboard from "@assets/MW2_app_dashboard_1779922530403.png";
import mwGoals from "@assets/MW3_goals_1779922530404.png";
import mwWorkouts from "@assets/MW4_workouts_1779922530404.png";
import mwProgress from "@assets/MW5_progress_1779922530404.png";

const challenges = [
  {
    icon: Activity,
    title: "Inconsistent participation",
    description: "Participation can fade when employees lack a clear next step.",
  },
  {
    icon: HeartPulse,
    title: "Different starting points",
    description: "Employees need practical options for varied routines and experience levels.",
  },
  {
    icon: UserCheck,
    title: "Limited accountability",
    description: "Shared goals need consistent check-ins and visible follow-through.",
  },
  {
    icon: MessageSquare,
    title: "Disconnected teams",
    description: "Busy and distributed teams benefit from a common place to participate.",
  },
];

const pillars = [
  {
    icon: Dumbbell,
    title: "Training",
    description: "Accessible strength, cardio, and mobility programming.",
  },
  {
    icon: Apple,
    title: "Nutrition",
    description: "Practical nutrition awareness that supports everyday choices.",
  },
  {
    icon: Repeat,
    title: "Habits",
    description: "Daily routines around movement, hydration, sleep, and recovery.",
  },
  {
    icon: Target,
    title: "Accountability",
    description: "Check-ins and progress tracking that encourage follow-through.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Shared participation that supports morale and connection.",
  },
];

const screens = [
  {
    image: mwDashboard,
    title: "Daily dashboard",
    alt: "Momentum Wellness app dashboard for daily wellness priorities",
  },
  {
    image: mwGoals,
    title: "Goals and habits",
    alt: "Momentum Wellness app goals and habit tracking screen",
  },
  {
    image: mwWorkouts,
    title: "Training plans",
    alt: "Momentum Wellness app employee training plan screen",
  },
  {
    image: mwProgress,
    title: "Progress tracking",
    alt: "Momentum Wellness app progress tracking screen",
  },
];

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We learn about your organization, workforce, and priorities.",
  },
  {
    number: "02",
    title: "Program setup",
    description: "We shape the app-based structure around your company.",
  },
  {
    number: "03",
    title: "Employee launch",
    description: "Your team receives guidance for onboarding and participation.",
  },
  {
    number: "04",
    title: "Engagement",
    description: "Employees use training, habits, tracking, and community tools.",
  },
  {
    number: "05",
    title: "Support and reporting",
    description: "We support momentum and provide employer-level reporting.",
  },
];

const outcomes = [
  "More consistent participation in wellness activities",
  "Greater awareness of training, nutrition, and daily habits",
  "Clearer accountability through app-based check-ins and tracking",
  "A stronger sense of connection around shared wellness goals",
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Structured, not generic",
    description:
      "Employees receive a clear system instead of an unstructured content library.",
  },
  {
    icon: Smartphone,
    title: "Practical across the workforce",
    description:
      "The app supports different roles, schedules, locations, and experience levels.",
  },
  {
    icon: Award,
    title: "Consultation-based setup",
    description:
      "Program structure is prepared around company priorities and employee participation.",
  },
  {
    icon: BarChart3,
    title: "Employer visibility",
    description:
      "Consultation-based setup and employer-level reporting support informed program oversight.",
  },
];

export default function EmployeeWellness() {
  return (
    <>
      <SEO
        title="Employee Wellness Programs for Companies | Momentum Wellness"
        description="Momentum Wellness helps companies with 50+ employees improve health, energy, accountability, and team culture through app-based employee wellness programs."
        keywords="employee wellness programs, corporate wellness, workplace wellness, employee wellness platform, workforce health, company wellness program"
      />

      <main className="min-h-screen overflow-hidden bg-[#0f172a] text-white">
        <section className="relative flex min-h-[82vh] items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_32%,rgba(16,185,129,0.17),transparent_34%),linear-gradient(135deg,#0f172a_0%,#172033_55%,#0f172a_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="container relative z-10 mx-auto">
            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="max-w-4xl"
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  <Building2 className="h-4 w-4" />
                  For companies with 50+ employees
                </div>
                <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  Employee Wellness Programs Built for Stronger Team Habits
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Momentum Wellness gives business owners and HR leaders a
                  practical way to support workforce health, energy, morale,
                  accountability, and community through one modern wellness
                  app.
                </p>
                <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                  Designed for teams across offices, healthcare, logistics,
                  manufacturing, trades, and other industries.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-9 min-h-14 rounded-full border-0 bg-emerald-500 px-7 text-base font-semibold text-white hover:bg-emerald-400"
                >
                  <Link
                    href="/contact?inquiry=corporate"
                    onClick={() =>
                      trackEvent(analyticsEvents.bookCorporateConsultation, {
                        placement: "employee_wellness_hero",
                      })
                    }
                  >
                    Book a Corporate Wellness Consultation
                    <ArrowRight />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="relative mx-auto hidden w-full max-w-sm lg:block"
              >
                <div className="absolute -inset-10 rounded-full bg-emerald-400/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-slate-900/85 p-3 shadow-2xl shadow-black/50">
                  <img
                    src={mwDashboard}
                    alt="Momentum Wellness employee wellness app dashboard showing daily workforce wellness activities"
                    className="w-full rounded-[2.15rem]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  The challenge
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Good Intentions Need a System
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Employees may want to improve their routines, but broad
                  wellness initiatives can be difficult to sustain without
                  clear direction and follow-through.
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  Momentum Wellness gives teams one shared structure for
                  participation, progress, and accountability.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {challenges.map(({ icon: Icon, title, description }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                A complete wellness framework
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                Five Pillars Built Around People
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                Five connected areas give employees practical ways to build
                healthier habits over time.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {pillars.map(({ icon: Icon, title, description }, index) => (
                <article
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-emerald-400" />
                    <span className="text-sm font-bold text-white/20">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  App and platform
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  One Clear Place for Employees to Engage
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-400">
                  Employees can access training, goals, habits, progress, and
                  community tools from a focused mobile experience.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {[
                    "Accessible across roles, schedules, and locations",
                    "Clear daily wellness priorities",
                    "Progress and accountability tools",
                    "Community-based participation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {screens.map((screen, index) => (
                  <motion.figure
                    key={screen.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08 }}
                    className="group"
                  >
                    <div className="relative rounded-[1.75rem] border border-white/10 bg-slate-900 p-1.5 shadow-xl transition group-hover:-translate-y-1 group-hover:border-emerald-400/40 sm:rounded-[2rem] sm:p-2">
                      <div className="relative overflow-hidden rounded-[1.4rem] bg-black sm:rounded-[1.6rem]">
                        <img
                          src={screen.image}
                          alt={screen.alt}
                          loading="lazy"
                          className="w-full"
                        />
                        <div className="absolute left-1/2 top-0 h-3 w-12 -translate-x-1/2 rounded-b-xl bg-slate-900 sm:h-4 sm:w-16" />
                      </div>
                    </div>
                    <figcaption className="mt-3 text-center text-xs font-semibold text-slate-400">
                      {screen.title}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Consultation to ongoing support
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                How the Program Works
              </h2>
            </div>

            <div className="relative mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-5">
              <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-slate-200 lg:block" />
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-sm font-bold tracking-[0.16em] text-emerald-700">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  Potential outcomes
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  What Companies Can Expect
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-400">
                  The program is designed to support healthier habits, clearer
                  accountability, and shared participation across the
                  workforce.
                </p>
                <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-slate-400">
                  Outcomes vary based on participation, consistency, and
                  company support. Momentum Wellness provides the structure,
                  tools, and guidance for employees to engage.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                  >
                    <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                    <p className="text-sm leading-6 text-slate-300">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Why Momentum Wellness
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                What Makes the Program Different
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {differentiators.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.22),transparent_45%)]" />
          <div className="container relative mx-auto">
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.05] px-6 py-14 text-center shadow-2xl sm:px-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Build Long-Term Momentum for Your Workforce
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Tell us about your company, team size, and wellness goals. We
                will discuss how Momentum Wellness can support your people,
                culture, and future.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 min-h-14 rounded-full border-0 bg-emerald-500 px-8 text-base font-semibold text-white hover:bg-emerald-400"
              >
                <Link
                  href="/contact?inquiry=corporate"
                  onClick={() =>
                    trackEvent(analyticsEvents.bookCorporateConsultation, {
                      placement: "employee_wellness_final_cta",
                    })
                  }
                >
                  Book a Corporate Wellness Consultation
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
