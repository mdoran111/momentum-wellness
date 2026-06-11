import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Apple,
  ArrowRight,
  BarChart3,
  Check,
  Dumbbell,
  Flame,
  Repeat,
  Smartphone,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import { individualProgramEnrollmentUrl } from "@/lib/links";
import mwDashboard from "@assets/MW2_app_dashboard_1779922530403.png";
import mwGoals from "@assets/MW3_goals_1779922530404.png";
import mwWorkouts from "@assets/MW4_workouts_1779922530404.png";
import mwProgress from "@assets/MW5_progress_1779922530404.png";

const benefits = [
  {
    icon: Dumbbell,
    title: "Structured training programs",
    description:
      "Follow clear workouts designed to support your goals and experience level.",
  },
  {
    icon: Apple,
    title: "Nutrition guidance",
    description:
      "Build practical nutrition habits without relying on rigid, complicated plans.",
  },
  {
    icon: Repeat,
    title: "Habit tracking",
    description:
      "Create consistency around the daily behaviors that support your wellness.",
  },
  {
    icon: BarChart3,
    title: "Progress tracking",
    description:
      "Keep your workouts, goals, habits, and progress organized in one place.",
  },
  {
    icon: UserCheck,
    title: "Accountability",
    description:
      "Use ongoing structure and check-ins to stay engaged with your plan.",
  },
  {
    icon: Smartphone,
    title: "App-based access",
    description:
      "Access your program and track your progress wherever your routine takes you.",
  },
];

const audiences = [
  {
    icon: Users,
    title: "Beginners",
    description: "Start with a clear plan and an approachable structure.",
  },
  {
    icon: Dumbbell,
    title: "Intermediate lifters",
    description: "Build on your experience with organized programming.",
  },
  {
    icon: Flame,
    title: "People who want fat loss",
    description: "Support your goal with training, nutrition, and consistent habits.",
  },
  {
    icon: TrendingUp,
    title: "People who want muscle gain",
    description: "Follow purposeful training with a focus on steady progress.",
  },
  {
    icon: Target,
    title: "People who need structure",
    description: "Know what to focus on instead of planning everything yourself.",
  },
  {
    icon: UserCheck,
    title: "People who need accountability",
    description: "Stay connected to your goals with progress tracking and support.",
  },
];

const steps = [
  {
    number: "01",
    title: "Join",
    description: "Take the first step and connect with Momentum Wellness.",
  },
  {
    number: "02",
    title: "Get set up in the app",
    description: "Set your goals and get familiar with your program dashboard.",
  },
  {
    number: "03",
    title: "Follow your training, nutrition, and habit structure",
    description: "Work through the daily structure provided in your program.",
  },
  {
    number: "04",
    title: "Track progress and stay accountable",
    description: "Use the app to monitor progress and keep moving forward.",
  },
];

const appScreens = [
  {
    image: mwDashboard,
    title: "Dashboard",
    alt: "Momentum Wellness app dashboard showing a daily program overview",
  },
  {
    image: mwGoals,
    title: "Goals and habits",
    alt: "Momentum Wellness app goals and habit tracking screen",
  },
  {
    image: mwWorkouts,
    title: "Training",
    alt: "Momentum Wellness app structured workout screen",
  },
  {
    image: mwProgress,
    title: "Progress",
    alt: "Momentum Wellness app progress tracking screen",
  },
];

export default function Programs() {
  return (
    <>
      <SEO
        title="Fitness & Nutrition Programs | Momentum Wellness"
        description="Explore app-based fitness and nutrition programs designed to help you build strength, improve habits, track progress, and stay accountable."
        keywords="individual fitness program, nutrition guidance, habit coaching, workout app, progress tracking, fitness accountability"
      />

      <main className="min-h-screen overflow-hidden bg-[#0f172a] text-white">
        <section className="relative flex min-h-[78vh] items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(16,185,129,0.16),transparent_34%),linear-gradient(135deg,#0f172a_0%,#172033_55%,#0f172a_100%)]" />
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
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">
                  Individual programs
                </p>
                <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  Fitness and Nutrition Programs Built to Keep You Consistent
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Get structured training, nutrition guidance, habit coaching,
                  progress tracking, and accountability through the Momentum
                  Wellness app.
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="min-h-14 rounded-full border-0 bg-emerald-500 px-7 text-base font-semibold text-white hover:bg-emerald-400"
                  >
                    <a
                      href={individualProgramEnrollmentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent(analyticsEvents.startProgram, {
                          placement: "programs_hero",
                        })
                      }
                    >
                      Start Your Program
                      <ArrowRight />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="min-h-14 rounded-full border-white/25 bg-white/5 px-7 text-base font-semibold text-white hover:bg-white/10"
                  >
                    <Link
                      href="/inside-the-app"
                      onClick={() =>
                        trackEvent(analyticsEvents.insideApp, {
                          placement: "programs_hero",
                        })
                      }
                    >
                      Inside the App
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
                    src={mwWorkouts}
                    alt="Momentum Wellness app showing an individual training program"
                    className="w-full rounded-[2rem]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-slate-100 px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Your program
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                What You Get
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                The essential tools and support to make your wellness plan
                easier to follow consistently.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Built for real goals
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Who It&apos;s For
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Whether you are getting started or looking for more
                  consistency, Momentum Wellness gives you a clearer way
                  forward.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {audiences.map(({ icon: Icon, title, description }) => (
                  <article
                    key={title}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                A simple process
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                How It Works
              </h2>
            </div>

            <div className="relative mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-white/10 lg:block" />
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-slate-900 text-sm font-bold tracking-[0.16em] text-emerald-400">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {step.description}
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
                  App Preview
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Keep Your Program Close
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-400">
                  Your training, goals, habits, and progress live together in
                  the Momentum Wellness app.
                </p>
                <ul className="mt-6 space-y-3 text-slate-300">
                  {[
                    "See your daily priorities",
                    "Follow structured workouts",
                    "Track goals and habits",
                    "Monitor your progress",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
                        <Check className="h-4 w-4" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {appScreens.map((screen, index) => (
                  <motion.figure
                    key={screen.title}
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
                      {screen.title}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.22),transparent_45%)]" />
          <div className="container relative mx-auto">
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.05] px-6 py-14 text-center shadow-2xl sm:px-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Ready to Start Building Momentum?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Take the next step toward a more structured and consistent
                approach to your fitness, nutrition, and habits.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 min-h-14 rounded-full border-0 bg-emerald-500 px-8 text-base font-semibold text-white hover:bg-emerald-400"
              >
                <a
                  href={individualProgramEnrollmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent(analyticsEvents.startProgram, {
                      placement: "programs_final_cta",
                    })
                  }
                >
                  Start Your Program
                  <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
