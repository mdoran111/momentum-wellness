import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  CheckCircle2,
  Dumbbell,
  Apple,
  Repeat,
  Target,
  Smartphone,
  TrendingUp,
  Zap,
  Flame,
  Clock,
  UserCheck,
  Play,
  ChevronDown,
  Users,
  Building2
} from "lucide-react";
import mwDashboard from "@assets/MW2_app_dashboard_1779922530403.png";
import mwGoals from "@assets/MW3_goals_1779922530404.png";
import mwWorkouts from "@assets/MW4_workouts_1779922530404.png";
import mwProgress from "@assets/MW5_progress_1779922530404.png";

const FEATURES = [
  {
    icon: Dumbbell,
    title: "Structured Training Programs",
    desc: "Follow progressive strength and cardio workouts designed for your goals and experience level."
  },
  {
    icon: Apple,
    title: "Nutrition Guidance",
    desc: "Build awareness around daily nutrition choices with practical guidance, not rigid meal plans."
  },
  {
    icon: Repeat,
    title: "Habit Tracking",
    desc: "Track hydration, sleep, movement, and recovery habits to build consistency beyond workouts."
  },
  {
    icon: Target,
    title: "Progress Tracking",
    desc: "Log workouts, monitor metrics, and compare progress photos to see real change over time."
  },
  {
    icon: UserCheck,
    title: "Accountability",
    desc: "Weekly check-in structure and community support keep you engaged and on track."
  },
  {
    icon: Smartphone,
    title: "App-Based Access",
    desc: "Everything lives in one place. Workouts, habits, progress, and community — all on your phone."
  }
];

const WHO_FOR = [
  { icon: Zap, title: "Beginners", desc: "New to training? Get a clear, structured starting point." },
  { icon: Dumbbell, title: "Intermediate Lifters", desc: "Ready for progressive programming that evolves monthly." },
  { icon: Flame, title: "People Who Want Fat Loss", desc: "Structured training + nutrition awareness to support your goals." },
  { icon: TrendingUp, title: "People Who Want Muscle Gain", desc: "Progressive overload and strength-focused programming." },
  { icon: Clock, title: "People Who Need Structure", desc: "No more guessing. Your plan is built and ready every day." },
  { icon: UserCheck, title: "People Who Need Accountability", desc: "A system designed to keep you consistent, not just motivated." }
];

const STEPS = [
  { step: "01", title: "Join", desc: "Choose your membership and get instant access to the platform." },
  { step: "02", title: "Get Set Up", desc: "Download the app, set your goals, and pick your program path." },
  { step: "03", title: "Follow the Structure", desc: "Complete your daily training, nutrition, and habit targets." },
  { step: "04", title: "Track & Stay Accountable", desc: "Log progress, check in weekly, and build real momentum." }
];

export default function Programs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Fitness & Nutrition Programs | Momentum Wellness"
        description="Structured online fitness coaching, nutrition guidance, habit tracking, and accountability — all in one app. Built for individuals who want consistency and results."
        keywords="online fitness coaching, nutrition coaching, habit tracking, progress tracking, accountability, fitness app, workout program"
      />
      <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
        {/* 1. Hero Section */}
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
                  <span className="text-sm font-semibold tracking-wider uppercase text-white">
                    Individual Programs
                  </span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                  Fitness and Nutrition Programs{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    Built to Keep You Consistent
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white mb-10 font-light leading-relaxed max-w-3xl mx-auto">
                  Get structured training, nutrition guidance, habit coaching, progress tracking, and accountability through the Momentum Wellness app.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-white text-[#0f172a] hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
                      Start Your Program
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/inside-the-app" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base px-8 h-14 border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 font-bold">
                      Inside the App
                    </Button>
                  </Link>
                </div>

                {/* Trust strip */}
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

        {/* 2. What You Get */}
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
                  What You{" "}
                  <span className="text-emerald-600">
                    Get
                  </span>
                </h2>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Six core components designed to keep your fitness, nutrition, and habits organized and on track.
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
                  className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-emerald-300 hover:shadow-lg transition-all duration-500"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:text-emerald-700 transition-colors duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Who It's For */}
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
                  Who This Is{" "}
                  <span className="italic">For</span>
                </h2>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Whether you are starting fresh or refining your routine, this program is built for you.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {WHO_FOR.map((item, index) => (
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
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5 group-hover:text-emerald-700 transition-colors duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0f172a] mb-1">{item.title}</h3>
                      <p className="text-gray-600 font-light leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
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
                  How It{" "}
                  <span className="text-emerald-600">
                    Works
                  </span>
                </h2>
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  Four simple steps from signup to consistency.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-5xl mx-auto">
              <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-0"></div>

              {STEPS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center text-xl font-bold text-emerald-600 shadow-[0_10px_30px_rgba(0,0,0,0.1)] mb-6 border border-emerald-200">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#0f172a] tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. App Preview */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/20 to-[#0f172a]"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                  Your Program,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    In Your Pocket
                  </span>
                </h2>
                <p className="text-lg text-white font-light leading-relaxed">
                  The Momentum Wellness app puts training, nutrition, habits, and progress tracking in one place.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { img: mwDashboard, title: "Dashboard", desc: "See your daily plan at a glance" },
                { img: mwGoals, title: "Goals", desc: "Set and track your targets" },
                { img: mwWorkouts, title: "Workouts", desc: "Follow structured training sessions" },
                { img: mwProgress, title: "Progress", desc: "Monitor metrics and visual progress" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative rounded-[32px] bg-[#1a1a2e] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 hover:border-emerald-500/30 transition-all duration-500">
                    <div className="rounded-[24px] overflow-hidden bg-black relative">
                      <img src={item.img} alt={`Momentum Wellness app ${item.title.toLowerCase()} screen`} className="w-full" />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1a1a2e] rounded-b-xl"></div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-white font-bold text-sm">{item.title}</h3>
                    <p className="text-white/60 text-sm font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA Section */}
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
                Ready to Start{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Building Momentum?
                </span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-white/70 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                Get the structure, accountability, and support you need to build lasting progress in fitness, nutrition, and daily habits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full text-lg px-8 sm:px-12 h-14 sm:h-16 font-bold bg-white text-[#0f172a] hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                  >
                    Start Your Program
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/inside-the-app">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full text-lg px-8 sm:px-12 h-14 sm:h-16 font-bold border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
                  >
                    Inside the App
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
