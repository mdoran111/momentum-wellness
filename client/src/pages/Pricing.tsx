import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Apple,
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  Dumbbell,
  Repeat,
  Smartphone,
  UserCheck,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { analyticsEvents, trackEvent } from "@/lib/analytics";

const planFeatures = [
  "Monthly program phases",
  "Complete app-based program access",
  "Community and accountability support",
];

const included = [
  {
    icon: Dumbbell,
    title: "Training structure",
    description: "Organized strength and cardio programming.",
  },
  {
    icon: Apple,
    title: "Nutrition support",
    description: "Practical guidance for better daily choices.",
  },
  {
    icon: Repeat,
    title: "Habit tracking",
    description: "Keep important wellness routines visible.",
  },
  {
    icon: BarChart3,
    title: "Progress tracking",
    description: "Monitor goals, activity, and visual progress.",
  },
  {
    icon: UserCheck,
    title: "Accountability",
    description: "Use check-ins and structure to stay engaged.",
  },
  {
    icon: Smartphone,
    title: "App-based access",
    description: "Access your program wherever you are.",
  },
];

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing | Momentum Wellness"
        description="View Momentum Wellness program options for individuals and learn how to get started with app-based training, nutrition, habits, and accountability."
        keywords="individual fitness program pricing, app-based coaching price, nutrition coaching cost, fitness accountability program"
      />

      <main className="min-h-screen overflow-hidden bg-[#0f172a] text-white">
        <section className="relative flex min-h-[62vh] items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(16,185,129,0.16),transparent_36%),linear-gradient(135deg,#0f172a_0%,#172033_55%,#0f172a_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="container relative z-10 mx-auto max-w-4xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">
              Individual pricing
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Simple Pricing for App-Based Coaching
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Choose the Momentum Wellness option that gives you the structure,
              accountability, and support you need to build better health
              habits.
            </p>
          </motion.div>
        </section>

        <section className="relative px-4 pb-20 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto grid max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/30 lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="border-b border-white/10 bg-emerald-400/[0.06] p-8 sm:p-10 lg:border-b-0 lg:border-r">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Complete Wellness Coaching
                </span>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-5xl font-bold tracking-tight sm:text-6xl">
                    $150
                  </span>
                  <span className="pb-2 text-slate-400">/month</span>
                </div>
                <p className="mt-3 text-sm text-slate-400">
                  Billed monthly. Cancel anytime.
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                  <p className="text-sm font-semibold text-white">
                    Best for
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Individuals who want a clear fitness and nutrition
                    structure with habit tracking, progress tools, and ongoing
                    accountability.
                  </p>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <h2 className="text-2xl font-bold">What the program includes</h2>
                <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                  {planFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-200"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className="mt-9 min-h-14 w-full rounded-full border-0 bg-emerald-500 px-8 text-base font-semibold text-white hover:bg-emerald-400"
                >
                  <Link
                    href="/contact"
                    onClick={() =>
                      trackEvent(analyticsEvents.startProgram, {
                        placement: "pricing_card",
                      })
                    }
                  >
                    Start Your Program
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </motion.article>
          </div>
        </section>

        <section className="bg-slate-100 px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                One membership
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                What&apos;s Included
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {included.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
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

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto grid max-w-5xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/10 text-blue-400">
                <Building2 className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Looking for Employee Wellness Programs?
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                  Momentum Wellness also partners with companies with 50+
                  employees to provide app-based employee wellness programs
                  built around training, nutrition, habits, accountability,
                  and community.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="mt-7 min-h-14 rounded-full border-white/25 bg-transparent px-7 text-base font-semibold text-white hover:bg-white/10"
                >
                  <Link
                    href="/employee-wellness-programs"
                    onClick={() =>
                      trackEvent(analyticsEvents.bookCorporateConsultation, {
                        placement: "pricing_corporate_note",
                      })
                    }
                  >
                    Book a Corporate Wellness Consultation
                    <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Tell us what kind of structure and support you are looking for,
              and we will help you take the next step.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 min-h-14 rounded-full border-0 bg-emerald-500 px-8 text-base font-semibold text-white hover:bg-emerald-400"
            >
              <Link
                href="/contact"
                onClick={() =>
                  trackEvent(analyticsEvents.contact, {
                    placement: "pricing_final_cta",
                  })
                }
              >
                Contact Momentum Wellness
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>

      </main>
    </>
  );
}
