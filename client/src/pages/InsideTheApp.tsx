import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Apple,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Dumbbell,
  MessageSquare,
  Repeat,
  Smartphone,
  UserCheck,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import mwDashboard from "@assets/MW2_app_dashboard_1779922530403.png";
import mwGoals from "@assets/MW3_goals_1779922530404.png";
import mwWorkouts from "@assets/MW4_workouts_1779922530404.png";
import mwProgress from "@assets/MW5_progress_1779922530404.png";

const screenshots = [
  {
    image: mwDashboard,
    title: "Daily dashboard",
    description: "See your priorities and program at a glance.",
    alt: "Momentum Wellness app daily dashboard",
  },
  {
    image: mwGoals,
    title: "Goals and habits",
    description: "Keep important daily actions visible.",
    alt: "Momentum Wellness app goals and habit tracking screen",
  },
  {
    image: mwWorkouts,
    title: "Training plans",
    description: "Access structured workouts from your phone.",
    alt: "Momentum Wellness app training plan screen",
  },
  {
    image: mwProgress,
    title: "Progress tracking",
    description: "Monitor the progress that matters to you.",
    alt: "Momentum Wellness app progress tracking screen",
  },
];

const features = [
  {
    icon: Dumbbell,
    title: "Training plans",
    description: "Structured workouts in one clear schedule.",
  },
  {
    icon: Apple,
    title: "Nutrition tracking",
    description: "Keep daily nutrition information organized.",
  },
  {
    icon: Repeat,
    title: "Habit goals",
    description: "Track the routines that support consistency.",
  },
  {
    icon: BarChart3,
    title: "Progress stats",
    description: "Review activity, goals, and progress over time.",
  },
  {
    icon: MessageSquare,
    title: "Community messaging",
    description: "Stay connected to support and encouragement.",
  },
  {
    icon: UserCheck,
    title: "Check-ins and accountability",
    description: "Use regular touchpoints to stay engaged.",
  },
];

export default function InsideTheApp() {
  return (
    <>
      <SEO
        title="Inside the Momentum Wellness App | Training, Nutrition & Habit Tracking"
        description="See how the Momentum Wellness app helps clients track workouts, nutrition, habits, progress, and accountability in one simple platform."
        keywords="Momentum Wellness app, fitness app, nutrition tracking, habit tracking, progress tracking, accountability app"
      />

      <main className="min-h-screen overflow-hidden bg-[#0f172a] text-white">
        <section className="relative flex min-h-[72vh] items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(16,185,129,0.17),transparent_34%),linear-gradient(135deg,#0f172a_0%,#172033_55%,#0f172a_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <div className="container relative z-10 mx-auto">
            <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
                className="max-w-4xl"
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  <Smartphone className="h-4 w-4" />
                  Inside the app
                </div>
                <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                  Everything You Need, All Inside the Momentum Wellness App
                </h1>
                <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Track workouts, nutrition, habits, progress, and
                  accountability from one simple platform.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.7 }}
                className="relative mx-auto hidden w-full max-w-sm lg:block"
              >
                <div className="absolute -inset-10 rounded-full bg-emerald-400/10 blur-3xl" />
                <div className="relative rotate-2 overflow-hidden rounded-[2.75rem] border border-white/10 bg-slate-900/85 p-3 shadow-2xl shadow-black/50">
                  <img
                    src={mwDashboard}
                    alt="Momentum Wellness app dashboard displayed in a phone-style frame"
                    className="w-full rounded-[2.15rem]"
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
                App Screenshots
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                See Momentum Wellness in Action
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {screenshots.map((screen, index) => (
                <motion.figure
                  key={screen.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  className="group"
                >
                  <div className="relative rounded-[1.75rem] border border-slate-300 bg-[#111827] p-1.5 shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition duration-500 group-hover:-translate-y-2 group-hover:border-emerald-400 sm:rounded-[2.25rem] sm:p-2">
                    <div className="relative overflow-hidden rounded-[1.4rem] bg-black sm:rounded-[1.8rem]">
                      <img
                        src={screen.image}
                        alt={screen.alt}
                        loading="lazy"
                        className="w-full"
                      />
                      <div className="absolute left-1/2 top-0 h-3 w-12 -translate-x-1/2 rounded-b-xl bg-[#111827] sm:h-5 sm:w-20" />
                    </div>
                  </div>
                  <figcaption className="mt-4 text-center">
                    <h3 className="text-sm font-bold sm:text-base">
                      {screen.title}
                    </h3>
                    <p className="mt-1 hidden text-sm leading-6 text-slate-600 sm:block">
                      {screen.description}
                    </p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                App Features
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The Essentials, Clearly Organized
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-emerald-200 hover:bg-emerald-50/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
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
        </section>

        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(16,185,129,0.16),transparent_45%)]" />
          <div className="container relative mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto grid max-w-5xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 sm:p-12 lg:grid-cols-[0.6fr_1.4fr] lg:items-center"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                  Why It Works
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  One Place. One Clear View.
                </h2>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 h-7 w-7 shrink-0 text-emerald-400" />
                <p className="text-lg leading-8 text-slate-300 sm:text-xl">
                  The app keeps everything organized in one place so clients
                  know what to do, can track what matters, and stay consistent
                  over time.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Ready to Use the App to Build Better Habits?
              </h2>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="min-h-14 rounded-full border-0 bg-emerald-500 px-8 text-base font-semibold text-white hover:bg-emerald-400"
                >
                  <Link href="/programs">
                    View Programs
                    <ArrowRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="min-h-14 rounded-full border-white/25 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10"
                >
                  <Link
                    href="/contact"
                    onClick={() =>
                      trackEvent(analyticsEvents.contact, {
                        placement: "inside_app_final_cta",
                      })
                    }
                  >
                    Contact Us
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
