import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Apple,
  ArrowRight,
  Building2,
  Dumbbell,
  ListChecks,
  Repeat,
  Smartphone,
  Target,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const principles = [
  {
    icon: ListChecks,
    title: "Clear structure",
    description:
      "Practical guidance helps people know what to focus on and what comes next.",
  },
  {
    icon: Smartphone,
    title: "Real accountability",
    description:
      "The app keeps training, nutrition, habits, and progress connected.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable change",
    description:
      "The focus is consistent behavior that can work in everyday life.",
  },
];

const pillars = [
  {
    icon: Dumbbell,
    title: "Training",
    description: "Structured workouts built to support consistent progress.",
  },
  {
    icon: Apple,
    title: "Nutrition",
    description: "Practical guidance for better everyday choices.",
  },
  {
    icon: Repeat,
    title: "Habits",
    description: "Simple routines that make wellness more sustainable.",
  },
  {
    icon: Target,
    title: "Accountability",
    description: "Progress tracking and support that keep you engaged.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Shared encouragement for individuals and teams.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Momentum Wellness | Training, Nutrition, Habits & Accountability"
        description="Learn how Momentum Wellness helps individuals and companies build sustainable health through training, nutrition, habits, accountability, and community."
        keywords="about Momentum Wellness, sustainable health, wellness accountability, app-based wellness coaching"
      />

      <main className="min-h-screen overflow-hidden bg-[#0f172a] text-white">
        <section className="relative flex min-h-[62vh] items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(16,185,129,0.15),transparent_36%),linear-gradient(135deg,#0f172a_0%,#172033_55%,#0f172a_100%)]" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="container relative z-10 mx-auto max-w-4xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">
              About Momentum Wellness
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Better Health Starts with a Clear Way Forward
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Momentum Wellness helps individuals and companies build
              sustainable health through structure, accountability, and
              real-life behavior change.
            </p>
          </motion.div>
        </section>

        <section className="bg-slate-100 px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Our approach
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Built for Real Life
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Health change rarely comes from one perfect day. It comes
                  from having a useful plan, seeing what matters, and returning
                  to the work consistently.
                </p>
                <p className="mt-4 leading-7 text-slate-600">
                  Momentum Wellness brings training, nutrition, habits,
                  accountability, progress tracking, and community into one
                  focused experience.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {principles.map(({ icon: Icon, title, description }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
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
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                A complete approach
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The Five Pillars
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {pillars.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <Icon className="h-7 w-7 text-emerald-400" />
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                Who we help
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Two Paths, One Commitment to Better Health
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-400">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">Individuals</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  App-based training, nutrition guidance, habit coaching,
                  progress tracking, and accountability for people who want
                  more structure and consistency.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-6 h-auto p-0 text-base font-semibold text-emerald-400"
                >
                  <Link href="/programs">
                    View Programs
                    <ArrowRight />
                  </Link>
                </Button>
              </article>

              <article className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">Companies</h3>
                <p className="mt-4 leading-7 text-slate-400">
                  Employee wellness programs for companies with 50+ employees
                  that want to support workforce health, morale,
                  accountability, and community.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-6 h-auto p-0 text-base font-semibold text-blue-400"
                >
                  <Link href="/employee-wellness-programs">
                    Employee Wellness Programs
                    <ArrowRight />
                  </Link>
                </Button>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
