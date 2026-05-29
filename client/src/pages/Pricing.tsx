import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  CheckCircle2,
  ArrowRight,
  Dumbbell,
  Apple,
  Repeat,
  BarChart3,
  UserCheck,
  Smartphone,
  Building2
} from "lucide-react";

const INCLUDED = [
  { icon: Dumbbell, label: "Training structure", desc: "Monthly strength and cardio programming" },
  { icon: Apple, label: "Nutrition support", desc: "Macro guidance and daily awareness" },
  { icon: Repeat, label: "Habit tracking", desc: "Sleep, hydration, movement, recovery" },
  { icon: BarChart3, label: "Progress tracking", desc: "Metrics, trends, and visual progress" },
  { icon: UserCheck, label: "Accountability", desc: "Weekly check-ins and structured support" },
  { icon: Smartphone, label: "App-based access", desc: "Everything in the Momentum Wellness app" }
];

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Pricing | Momentum Wellness Coaching"
        description="Simple pricing for app-based coaching. $14.99/month for training, nutrition, habits, progress tracking, and accountability. No hidden fees, cancel anytime."
        keywords="fitness coaching price, nutrition coaching cost, wellness program pricing, app-based coaching, monthly fitness program"
      />
      <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
        {/* 1. Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
          <div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)`}}></div>
          <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" as const }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-sm font-semibold tracking-wider uppercase text-white">Pricing</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                  Simple Pricing{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    for App-Based Coaching
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white font-light leading-relaxed max-w-3xl mx-auto">
                  Choose the Momentum Wellness option that gives you the structure, accountability, and support you need to build better health habits.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Pricing Card */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0f1d]"></div>
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-30" style={{backgroundImage: `radial-gradient(circle at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 50%)`}}></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.03] to-transparent"></div>
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400"></div>

                <div className="relative p-8 md:p-12">
                  <div className="text-center mb-8">
                    <span className="text-sm font-semibold tracking-wider uppercase text-white/60 mb-3 block">Individual</span>
                    <h2 className="text-2xl font-bold text-white mb-4">Complete Wellness Coaching</h2>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-6xl md:text-7xl font-bold text-white">$14.99</span>
                      <span className="text-white/50 text-lg font-light">/month</span>
                    </div>
                    <p className="text-white/40 text-sm mt-3 font-light">Billed monthly. Cancel anytime.</p>
                  </div>

                  <div className="space-y-4 mb-10">
                    {[
                      "Monthly phase unlocks",
                      "Strength & cardio workouts",
                      "Daily habit tracking",
                      "Nutrition guidance",
                      "Progress tracking & photos",
                      "Community support",
                      "Weekly accountability check-ins"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-white/90 font-light text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="block w-full">
                    <Button className="w-full rounded-full h-14 text-base font-bold bg-white text-[#0f172a] hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>

                  <div className="mt-6 text-center">
                    <p className="text-xs text-white/40 font-light">No hidden fees. No contracts. Full access.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. What's Included */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[#0f172a]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/20 to-[#0f172a]"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                  What's{" "}
                  <span className="italic">Included</span>
                </h2>
                <p className="text-lg text-white font-light leading-relaxed">
                  Six core components. One simple membership.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {INCLUDED.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-500"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center text-emerald-400 shrink-0 group-hover:text-emerald-300 transition-colors duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
                      <p className="text-white font-light leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Corporate Wellness Note */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0f1d]"></div>
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: `radial-gradient(circle at 30% 50%, rgba(59,130,246,0.08) 0%, transparent 50%)`}}></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-transparent"></div>
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400"></div>

                <div className="relative p-8 md:p-12 text-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 text-blue-400">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-[1.05] tracking-tight">
                    Looking for{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
                      Employee Wellness Programs?
                    </span>
                  </h2>
                  <p className="text-lg text-white font-light leading-relaxed max-w-2xl mx-auto mb-8">
                    Momentum Wellness also partners with companies with 50+ employees to provide app-based employee wellness programs built around training, nutrition, habits, accountability, and community.
                  </p>
                  <Link href="/employee-wellness-programs">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto rounded-full text-base px-8 h-14 font-bold bg-white text-[#0f172a] hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]"
                    >
                      Book a Corporate Wellness Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. Final CTA */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0f172a]"></div>
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-40" style={{backgroundImage: `radial-gradient(circle at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 50%)`}}></div>
          </div>
          <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Get Started?
                </span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full text-lg px-8 sm:px-12 h-14 sm:h-16 font-bold bg-white text-[#0f172a] hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                  >
                    Contact Momentum Wellness
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
