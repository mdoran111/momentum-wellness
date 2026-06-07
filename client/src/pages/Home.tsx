import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Apple,
  ArrowRight,
  Building2,
  Dumbbell,
  Repeat,
  Smartphone,
  Target,
  User,
  Users,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import mwDashboard from "@assets/MW2_app_dashboard_1779922530403.png";
import mwGoals from "@assets/MW3_goals_1779922530404.png";
import mwWorkouts from "@assets/MW4_workouts_1779922530404.png";
import mwProgress from "@assets/MW5_progress_1779922530404.png";

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

const steps = [
  {
    number: "01",
    title: "Choose your path",
    description:
      "Select an individual program or explore a wellness solution for your company.",
  },
  {
    number: "02",
    title: "Get set up in the app",
    description:
      "Access your training, nutrition, habits, progress tracking, and community in one place.",
  },
  {
    number: "03",
    title: "Build momentum with structure and accountability",
    description:
      "Follow a clear structure and use consistent accountability to keep moving forward.",
  },
];

const appScreens = [
  {
    image: mwDashboard,
    alt: "Momentum Wellness app dashboard showing a daily wellness overview",
    label: "Daily dashboard",
  },
  {
    image: mwGoals,
    alt: "Momentum Wellness app goals screen showing personal progress tracking",
    label: "Goals and habits",
  },
  {
    image: mwWorkouts,
    alt: "Momentum Wellness app workout screen showing available training sessions",
    label: "Training programs",
  },
  {
    image: mwProgress,
    alt: "Momentum Wellness app progress screen showing wellness tracking",
    label: "Progress tracking",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Momentum Wellness | App-Based Fitness, Nutrition & Wellness Coaching"
        description="Momentum Wellness helps individuals and companies build better health through training, nutrition, habits, accountability, and community using a modern wellness app."
        keywords="app-based fitness coaching, nutrition coaching, habit coaching, employee wellness programs, wellness accountability"
      />

      <main className="min-h-screen overflow-hidden bg-[#0f172a] text-white">
        <section className="relative flex min-h-[82vh] items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(16,185,129,0.16),transparent_34%),linear-gradient(135deg,#0f172a_0%,#172033_55%,#0f172a_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="container relative z-10 mx-auto">
            <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="max-w-4xl"
              >
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">
                  Wellness with direction
                </p>
                <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  App-Based Fitness, Nutrition, and Wellness Coaching Built
                  for Real Accountability
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Momentum Wellness helps individuals and companies build
                  better health through training, nutrition, habits,
                  accountability, and community — all delivered through a
                  modern, easy-to-use wellness app.
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="min-h-14 rounded-full border-0 bg-emerald-500 px-7 text-base font-semibold text-white hover:bg-emerald-400"
                  >
                    <Link
                      href="/programs"
                      onClick={() =>
                        trackEvent(analyticsEvents.exploreIndividualPrograms, {
                          placement: "home_hero",
                        })
                      }
                    >
                      Explore Individual Programs
                      <ArrowRight />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="min-h-14 rounded-full border-white/25 bg-white/5 px-7 text-base font-semibold text-white hover:bg-white/10"
                  >
                    <Link
                      href="/employee-wellness-programs"
                      onClick={() =>
                        trackEvent(analyticsEvents.viewEmployeeWellness, {
                          placement: "home_hero",
                        })
                      }
                    >
                      View Employee Wellness Programs
                    </Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="relative mx-auto hidden w-full max-w-sm lg:block"
              >
                <div className="absolute -inset-8 rounded-full bg-emerald-400/10 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-black/40">
                  <img
                    src={mwDashboard}
                    alt="Momentum Wellness app dashboard showing daily training, nutrition, and habit priorities"
                    className="w-full rounded-[2rem]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Choose your path
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Wellness support built around your goals
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <article className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <User className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold">For Individuals</h3>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                  Fitness, nutrition, habit coaching, progress tracking, and
                  accountability through the Momentum Wellness app.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-6 h-auto p-0 text-base font-semibold text-emerald-700"
                >
                  <Link href="/programs">
                    View Programs
                    <ArrowRight />
                  </Link>
                </Button>
              </article>

              <article className="group rounded-3xl border border-slate-700 bg-slate-900 p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-400">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold">For Companies</h3>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                  Employee wellness programs for companies with 50+ employees
                  that want healthier, more engaged teams.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-6 h-auto p-0 text-base font-semibold text-emerald-400"
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

        <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-400">
                  <Smartphone className="h-6 w-6" />
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  App Preview
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Your wellness plan, all in one place
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-400">
                  Access daily priorities, workouts, goals, habits, and
                  progress tracking from a focused mobile experience.
                </p>
                <Button
                  asChild
                  variant="link"
                  className="mt-6 h-auto p-0 text-base font-semibold text-emerald-400"
                >
                  <Link
                    href="/inside-the-app"
                    onClick={() =>
                      trackEvent(analyticsEvents.insideApp, {
                        placement: "home_app_preview",
                      })
                    }
                  >
                    See Inside the App
                    <ArrowRight />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {appScreens.map((screen, index) => (
                  <motion.figure
                    key={screen.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.08 }}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-2 shadow-xl"
                  >
                    <img
                      src={screen.image}
                      alt={screen.alt}
                      loading="lazy"
                      className="w-full rounded-xl"
                    />
                    <figcaption className="px-2 py-3 text-center text-xs font-medium text-slate-400">
                      {screen.label}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Three simple steps
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                How Momentum Wellness Works
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7"
                >
                  <span className="text-sm font-bold tracking-[0.18em] text-emerald-700">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
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
                Ready to Build Momentum?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Choose the path that fits your goals and take the next step
                toward better health, structure, and accountability.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="min-h-14 rounded-full border-0 bg-emerald-500 px-7 text-base font-semibold text-white hover:bg-emerald-400"
                >
                  <Link href="/programs">
                    Start as an Individual
                    <ArrowRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="min-h-14 rounded-full border-white/25 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10"
                >
                  <Link href="/employee-wellness-programs">
                    Bring Momentum Wellness to Your Company
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
