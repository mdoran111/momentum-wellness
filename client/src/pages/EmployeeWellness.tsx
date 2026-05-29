import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Activity,
  Users,
  HeartPulse,
  Clock,
  MessageSquare,
  Dumbbell,
  Apple,
  Repeat,
  Target,
  Sparkles,
  ShieldCheck,
  Zap,
  Award,
  Smartphone,
  Building2
} from "lucide-react";
import mwSplash from "@assets/MW1_splash_1779922530400.png";
import mwDashboard from "@assets/MW2_app_dashboard_1779922530403.png";
import mwGoals from "@assets/MW3_goals_1779922530404.png";
import mwWorkouts from "@assets/MW4_workouts_1779922530404.png";
import mwProgress from "@assets/MW5_progress_1779922530404.png";

const CHALLENGES = [
  { icon: TrendingUp, text: "Employees struggling with weight and energy" },
  { icon: Activity, text: "Low energy and inconsistent daily habits" },
  { icon: Users, text: "Limited accountability across teams" },
  { icon: HeartPulse, text: "Inconsistent exercise and nutrition" },
  { icon: Clock, text: "High stress and poor recovery" },
  { icon: MessageSquare, text: "Disconnected teams and weak culture" }
];

const PILLARS = [
  { icon: Dumbbell, title: "Training", desc: "Structured strength, cardio, and mobility programming for every fitness level." },
  { icon: Apple, title: "Nutrition", desc: "Daily nutrition awareness and meal guidance that supports energy and long-term health." },
  { icon: Repeat, title: "Habits", desc: "Sleep, hydration, recovery, and movement targets that build sustainable routines." },
  { icon: Target, title: "Accountability", desc: "Weekly check-ins, progress tracking, and app-based follow-through to keep teams engaged." },
  { icon: Users, title: "Community", desc: "Team messaging, shared challenges, and peer support that strengthen company culture." }
];

const STEPS = [
  { num: "01", title: "Consultation", desc: "We learn about your company, workforce, and goals." },
  { num: "02", title: "Program Setup", desc: "We build your wellness structure inside the app." },
  { num: "03", title: "Company Launch", desc: "Employees onboard and begin using their tools." },
  { num: "04", title: "Engagement", desc: "App-based structure, tracking, and community support." },
  { num: "05", title: "Ongoing Support", desc: "We help you build momentum and a stronger wellness culture." }
];

const OUTCOMES = [
  "Better employee engagement in health and wellness",
  "Improved consistency with exercise and daily habits",
  "Greater nutrition awareness and energy",
  "Stronger accountability across teams",
  "More connected and supportive team culture",
  "A premium wellness benefit employees actually use"
];

const DIFFERENTIATORS = [
  { icon: ShieldCheck, title: "Structured, Not Generic", desc: "We give employees a real plan, not a catalog of videos. Monthly programming creates momentum." },
  { icon: Zap, title: "App-Based & Scalable", desc: "One platform for training, nutrition, habits, and community. Easy to deploy at any company size." },
  { icon: Award, title: "Built for Real People", desc: "Our system works for beginners and experienced athletes, in gyms, at home, or on the go." }
];

const SCREENSHOTS = [
  { img: mwDashboard, title: "Dashboard" },
  { img: mwGoals, title: "Goals" },
  { img: mwWorkouts, title: "Workouts" },
  { img: mwProgress, title: "Progress" }
];

export default function EmployeeWellness() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Employee Wellness Programs for Companies | Momentum Wellness"
        description="Momentum Wellness helps companies with 50+ employees improve health, energy, accountability, and team culture through app-based employee wellness programs."
        keywords="employee wellness programs, corporate wellness, workplace wellness, employee wellness platform, corporate wellness programs, employee health and wellness"
      />
      <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
        {/* 1. Hero */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
          <div className="absolute inset-0 opacity-20">
            <img src={mwSplash} alt="Momentum Wellness app splash screen background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`, backgroundSize: '60px 60px'}}></div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-sm font-semibold tracking-wider uppercase text-white">Corporate Wellness Solutions</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                  Employee Wellness Programs That Build{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    Healthier, Stronger Teams
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white mb-4 font-light leading-relaxed">
                  Momentum Wellness helps companies with 50+ employees improve health, energy, morale, and accountability through a modern wellness platform built around training, nutrition, habits, accountability, and community.
                </p>
                <p className="text-base text-white mb-10 font-light leading-relaxed max-w-xl">
                  Whether your team works in offices, healthcare, logistics, manufacturing, or trades, our system helps employees stay engaged, track progress, and build better habits.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-white text-[#0f172a] hover:bg-white/90 transition-all duration-300 font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-[1.02]">
                      Book a Corporate Wellness Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-wrap gap-x-6 gap-y-3"
                >
                  {[
                    "App-based coaching for teams",
                    "Structured training programs",
                    "Nutrition support",
                    "Habit & accountability tracking",
                    "Community-based support",
                    "Built for companies with 50+ employees"
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-2 text-white">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-sm font-medium">{point}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="relative hidden lg:block"
              >
                <div className="relative w-full max-w-[500px] mx-auto" style={{ height: '600px' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20, rotate: -6 }}
                    animate={{ opacity: 1, y: 0, rotate: -6 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute top-8 left-0 w-[260px]"
                  >
                    <div className="rounded-[40px] bg-[#1a1a2e] p-2 shadow-2xl border border-white/10">
                      <div className="rounded-[32px] overflow-hidden bg-black">
                        <img src={mwGoals} alt="Momentum Wellness app goals tracking screen" className="w-full" />
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20, rotate: 6 }}
                    animate={{ opacity: 1, y: 0, rotate: 6 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="absolute top-0 right-0 w-[260px]"
                  >
                    <div className="rounded-[40px] bg-[#1a1a2e] p-2 shadow-2xl border border-white/10">
                      <div className="rounded-[32px] overflow-hidden bg-black">
                        <img src={mwWorkouts} alt="Momentum Wellness app workout library" className="w-full" />
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] z-10"
                  >
                    <div className="rounded-[40px] bg-[#1a1a2e] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.5)] border border-white/10">
                      <div className="rounded-[32px] overflow-hidden bg-black relative">
                        <img src={mwDashboard} alt="Momentum Wellness app dashboard" className="w-full" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a2e] rounded-b-2xl"></div>
                      </div>
                    </div>
                  </motion.div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      {/* Trust Bar */}
      <div className="relative py-6 border-y border-white/5 bg-[#0f172a]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {[
              { icon: Smartphone, label: "App-based coaching for teams" },
              { icon: Dumbbell, label: "Structured training programs" },
              { icon: Apple, label: "Nutrition support" },
              { icon: Repeat, label: "Habit & accountability" },
              { icon: Users, label: "Community-based support" },
              { icon: Building2, label: "Built for companies 50+ employees" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/50 text-xs font-medium uppercase tracking-wider">
                <item.icon className="w-3.5 h-3.5 text-emerald-400/50" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* 2. The Problem */}
        <section className="py-20 md:py-28 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/30 to-[#0f172a]"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-4 block">The Reality</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                  When People Are Supported,{" "}
                  <span className="italic">The Whole Company Gets Stronger</span>
                </h2>
                <p className="text-lg text-white mb-6 font-light leading-relaxed">
                  In every industry, employee health affects performance, morale, consistency, and long-term success.
                </p>
                <p className="text-base text-white font-light leading-relaxed">
                  At Momentum Wellness, we help companies create a culture of health through a system employees can actually use — not just another program that gets forgotten.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:mt-12"
              >
                <p className="text-sm font-bold tracking-[0.15em] uppercase text-white mb-6">
                  Many companies face the same challenges
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CHALLENGES.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center shrink-0 text-red-400/80">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-white font-light leading-snug pt-1.5">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. The Five Pillars */}
        <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0f1d]"></div>
          <div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)`}}></div>
          <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.05] tracking-tight">
                  Built Around{" "}
                  <span className="italic font-serif">People.</span>
                  <br />
                  Designed For{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    Long-Term Impact.
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-white font-light leading-relaxed max-w-3xl mx-auto">
                  Great companies are built by people. When people are supported, the entire organization gets stronger.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <p className="text-center text-sm font-bold tracking-[0.2em] uppercase text-white mb-12">
                Our approach is rooted in five pillars
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                {PILLARS.map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-500"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                          <pillar.icon className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-bold text-white/5 group-hover:text-emerald-400/10 transition-colors duration-500">0{index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{pillar.title}</h3>
                      <p className="text-white font-light leading-relaxed text-sm">{pillar.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. App Showcase */}
        <section className="py-24 md:py-32 relative overflow-hidden">
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
                  The Platform{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Your Team Will Use</span>
                </h2>
                <p className="text-lg text-white font-light leading-relaxed">
                  Training, nutrition, habits, progress, and community — all in one app.
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
                  <div className="relative rounded-[32px] bg-[#1a1a2e] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 hover:border-emerald-500/30 transition-all duration-500">
                    <div className="rounded-[24px] overflow-hidden bg-black relative">
                      <img src={item.img} alt={`Momentum Wellness app ${item.title.toLowerCase()} screen`} className="w-full" />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1a1a2e] rounded-b-xl"></div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-white font-bold text-sm">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. How It Works */}
        <section className="py-20 md:py-28 lg:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/30 to-[#0f172a]"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-4 block">The Process</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                How the Program{" "}
                <span className="italic">Works</span>
              </h2>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
              <div className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                {STEPS.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className="relative group"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xl group-hover:from-emerald-500/30 group-hover:to-teal-500/30 group-hover:border-emerald-400/50 transition-all duration-500">
                          {step.num}
                        </div>
                        <div className="absolute inset-0 rounded-full border border-emerald-400/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                      <p className="text-white font-light leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Outcomes */}
        <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0f1d]"></div>
          <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.03] rounded-full blur-[120px]"></div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-4 block">Outcomes</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.05] tracking-tight">
                  What Companies{" "}
                  <span className="italic">Can Expect</span>
                </h2>
                <p className="text-xl text-white font-light leading-relaxed mb-8">
                  Our goal is to help companies create healthier, more engaged teams through better structure and stronger daily behaviors.
                </p>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <p className="text-white font-light italic leading-relaxed">
                    Results vary based on participation, consistency, and company commitment. We provide structure and support — the outcomes follow from how your team uses the program.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                {OUTCOMES.map((outcome, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500/15 to-teal-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-white font-light leading-relaxed">{outcome}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. Why Momentum Wellness */}
        <section className="py-24 md:py-32 relative overflow-hidden">
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
                  Why{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    Momentum Wellness?
                  </span>
                </h2>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {DIFFERENTIATORS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-500"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:text-emerald-300 transition-colors duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white font-light leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CTA / Contact */}
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
                Ready to Invest in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Your Team?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                Book a consultation and we'll follow up to discuss your company's goals, employee count, and how Momentum Wellness can support your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full text-lg px-8 sm:px-12 h-14 sm:h-16 font-bold bg-white text-[#0f172a] hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                  >
                    Book a Corporate Wellness Consultation
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
