import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  CheckCircle2,
  Dumbbell,
  Apple,
  Repeat,
  BarChart3,
  MessageSquare,
  UserCheck,
  ChevronDown,
  Smartphone,
  Users,
  Building2
} from "lucide-react";
import mwDashboard from "@assets/MW2_app_dashboard_1779922530403.png";
import mwGoals from "@assets/MW3_goals_1779922530404.png";
import mwWorkouts from "@assets/MW4_workouts_1779922530404.png";
import mwProgress from "@assets/MW5_progress_1779922530404.png";

const FEATURES = [
  { icon: Dumbbell, title: "Training Plans", desc: "Progressive strength and cardio sessions, delivered monthly." },
  { icon: Apple, title: "Nutrition Tracking", desc: "Log meals, track macros, and build awareness." },
  { icon: Repeat, title: "Habit Goals", desc: "Daily targets for hydration, sleep, movement, and recovery." },
  { icon: BarChart3, title: "Progress Stats", desc: "See metrics, trends, and visual progress over time." },
  { icon: MessageSquare, title: "Community Messaging", desc: "Stay connected with coaches and fellow members." },
  { icon: UserCheck, title: "Check-ins & Accountability", desc: "Weekly structure that keeps you engaged and on track." }
];

const SCREENSHOTS = [
  { img: mwDashboard, title: "Dashboard", desc: "Your daily plan at a glance" },
  { img: mwGoals, title: "Goals", desc: "Set and track your targets" },
  { img: mwWorkouts, title: "Workouts", desc: "Follow structured sessions" },
  { img: mwProgress, title: "Progress", desc: "Monitor metrics over time" }
];

export default function InsideTheApp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Inside the App | Momentum Wellness"
        description="Track workouts, nutrition, habits, progress, and accountability — all inside the Momentum Wellness app. A simple, powerful platform for your wellness journey."
        keywords="wellness app, fitness app, workout tracking, nutrition tracking, habit tracking, progress tracking, accountability app"
      />
      <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
        {/* 1. Hero */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
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
                  <span className="text-sm font-semibold tracking-wider uppercase text-white">The App</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                  Everything You Need,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    All Inside the App
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white mb-10 font-light leading-relaxed max-w-3xl mx-auto">
                  Track workouts, nutrition, habits, progress, and accountability from one simple platform.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Link href="/programs" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-white text-[#0f172a] hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
                      View Programs
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base px-8 h-14 border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 font-bold">
                      Contact Us
                    </Button>
                  </Link>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
                >
                  {[
                    "App-based coaching",
                    "Structured training programs",
                    "Nutrition support",
                    "Habit & accountability tracking",
                    "Community-based support",
                    "Designed for sustainable progress"
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-2 text-white">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-sm font-medium">{point}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </section>

      {/* Trust Bar */}
      <div className="relative py-6 border-y border-white/5 bg-[#0f172a]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {[
              { icon: Smartphone, label: "App-based coaching" },
              { icon: Dumbbell, label: "Structured training" },
              { icon: Apple, label: "Nutrition support" },
              { icon: Repeat, label: "Habit & accountability" },
              { icon: Users, label: "Community-based support" },
              { icon: Building2, label: "Built for individuals & companies" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/50 text-xs font-medium uppercase tracking-wider">
                <item.icon className="w-3.5 h-3.5 text-emerald-400/50" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* 2. App Screenshots */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-[#f8fafc]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-[#eef2f6] to-[#f8fafc]"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-[1.05] tracking-tight">
                  See It{" "}
                  <span className="text-emerald-600">
                    In Action
                  </span>
                </h2>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Real screenshots from the Momentum Wellness app.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {SCREENSHOTS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative rounded-[32px] bg-[#1a1a2e] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-gray-300 hover:border-emerald-400 transition-all duration-500">
                    <div className="rounded-[24px] overflow-hidden bg-black relative">
                      <img src={item.img} alt={`Momentum Wellness app ${item.title.toLowerCase()} screen`} className="w-full" />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1a1a2e] rounded-b-xl"></div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-[#0f172a] font-bold text-sm">{item.title}</h3>
                    <p className="text-gray-600 text-sm font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. App Features */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-[#f8fafc]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-[#eef2f6] to-[#f8fafc]"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-[1.05] tracking-tight">
                  Core{" "}
                  <span className="italic">Features</span>
                </h2>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Six tools. One focus: keeping you consistent.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-emerald-300 hover:shadow-lg transition-all duration-500"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-emerald-600 shrink-0 group-hover:text-emerald-700 transition-colors duration-300">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0f172a] mb-1">{feature.title}</h3>
                      <p className="text-gray-600 font-light leading-relaxed text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Why It Works */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-[#f8fafc]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-[#eef2f6] to-[#f8fafc]"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-[1.05] tracking-tight">
                  Why It{" "}
                  <span className="text-emerald-600">
                    Works
                  </span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-12"
              >
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed text-center">
                  The app keeps everything organized in one place so you know what to do, can track what matters, and stay consistent over time.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { label: "One Plan", desc: "No more guessing. Your daily structure is ready." },
                    { label: "One Tracker", desc: "Log training, nutrition, and habits in one spot." },
                    { label: "One Community", desc: "Coaches and members keep you accountable." }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      </div>
                      <h4 className="text-[#0f172a] font-bold text-sm mb-1">{item.label}</h4>
                      <p className="text-gray-600 text-sm font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 5. CTA */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0f1d]"></div>
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
                Ready to Use the App{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  to Build Better Habits?
                </span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/programs">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full text-lg px-8 sm:px-12 h-14 sm:h-16 font-bold bg-white text-[#0f172a] hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                  >
                    View Programs
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full text-lg px-8 sm:px-12 h-14 sm:h-16 font-bold border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
                  >
                    Contact Us
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
