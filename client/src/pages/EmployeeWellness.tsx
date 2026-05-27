import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";
import {
  ArrowRight,
  Building2,
  Users,
  HeartPulse,
  TrendingUp,
  ShieldCheck,
  Calendar,
  MessageSquare,
  Activity,
  BarChart3,
  Clock,
  Sparkles,
  CheckCircle2,
  Briefcase,
  UserCog,
  Award,
  Dumbbell,
  Apple,
  Repeat,
  Target
} from "lucide-react";
import mwSplash from "@assets/MW1_splash_1779922530400.png";
import mwDashboard from "@assets/MW2_app_dashboard_1779922530403.png";
import mwGoals from "@assets/MW3_goals_1779922530404.png";
import mwWorkouts from "@assets/MW4_workouts_1779922530404.png";
import mwProgress from "@assets/MW5_progress_1779922530404.png";

const BENEFITS = [
  {
    icon: HeartPulse,
    title: "Health & Energy",
    desc: "Help your team feel better, sleep deeper, and show up with more focus and stamina every day."
  },
  {
    icon: TrendingUp,
    title: "Productivity & Performance",
    desc: "Active employees are more engaged, creative, and resilient under pressure."
  },
  {
    icon: Users,
    title: "Culture & Accountability",
    desc: "Build connection through shared goals, team challenges, and peer support."
  },
  {
    icon: ShieldCheck,
    title: "Retention & Recruitment",
    desc: "Top talent expects wellness benefits. Stand out as a company that invests in its people."
  }
];

const FEATURES = [
  {
    icon: Calendar,
    title: "Structured Monthly Programming",
    desc: "Fresh strength, cardio, and habit challenges unlock each month so engagement never plateaus."
  },
  {
    icon: MessageSquare,
    title: "Community & Accountability",
    desc: "Team channels, leaderboards, and progress sharing keep employees motivated and connected."
  },
  {
    icon: HeartPulse,
    title: "Nutrition & Lifestyle Habits",
    desc: "Daily guidance on hydration, sleep, recovery, and mindful eating alongside workouts."
  },
  {
    icon: BarChart3,
    title: "Progress Tracking & Reporting",
    desc: "Aggregate team engagement and milestone reports for HR and leadership."
  }
];

const TRUSTED_AUDIENCES = [
  { icon: Briefcase, title: "Business Owners", desc: "CEOs & founders investing in culture" },
  { icon: UserCog, title: "HR Leaders", desc: "People teams driving engagement" },
  { icon: Award, title: "Benefits Directors", desc: "Optimizing wellness spend" }
];

export default function EmployeeWellness() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
        <div className="absolute inset-0 opacity-20">
          <img src={mwSplash} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text */}
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
                <span className="text-sm font-semibold tracking-wider uppercase text-white/80">
                  Corporate Wellness Solutions
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                Employee Wellness Programs That Build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Healthier, Stronger, More Accountable
                </span>{" "}
                Teams
              </h1>

              <p className="text-lg md:text-xl text-white/60 mb-4 font-light leading-relaxed">
                Momentum Wellness helps companies with 50+ employees improve health, energy, morale, and daily accountability through a modern wellness platform built around training, nutrition, habits, accountability, and community.
              </p>

              <p className="text-base text-white/40 mb-10 font-light leading-relaxed max-w-xl">
                Whether your team works in construction, trades, healthcare, logistics, manufacturing, office settings, or other demanding professions, our system helps employees stay engaged, track progress, and build better habits that carry into work and life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="rounded-full text-base px-8 h-14 bg-white text-[#0f172a] hover:bg-white/90 transition-all duration-300 font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                  >
                    Book a Corporate Wellness Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full text-base px-8 h-14 border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 font-bold"
                  >
                    Contact Our Team
                  </Button>
                </Link>
              </div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap gap-x-6 gap-y-3"
              >
                {[
                  "Built for companies with 50+ employees",
                  "App-based and community-driven",
                  "Structured 6-month wellness programs",
                  "Designed for real-world participation and accountability"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/40">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - Phone mockups */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-[500px] mx-auto" style={{ height: '600px' }}>
                {/* Phone 1 - Back (Goals) */}
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: -6 }}
                  animate={{ opacity: 1, y: 0, rotate: -6 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute top-8 left-0 w-[260px]"
                >
                  <div className="rounded-[40px] bg-[#1a1a2e] p-2 shadow-2xl border border-white/10">
                    <div className="rounded-[32px] overflow-hidden bg-black">
                      <img src={mwGoals} alt="Goals Tracking" className="w-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Phone 2 - Middle (Workouts) */}
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: 6 }}
                  animate={{ opacity: 1, y: 0, rotate: 6 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute top-0 right-0 w-[260px]"
                >
                  <div className="rounded-[40px] bg-[#1a1a2e] p-2 shadow-2xl border border-white/10">
                    <div className="rounded-[32px] overflow-hidden bg-black">
                      <img src={mwWorkouts} alt="Workouts" className="w-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Phone 3 - Front (Dashboard) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] z-10"
                >
                  <div className="rounded-[40px] bg-[#1a1a2e] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.5)] border border-white/10">
                    <div className="rounded-[32px] overflow-hidden bg-black relative">
                      <img src={mwDashboard} alt="App Dashboard" className="w-full" />
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a2e] rounded-b-2xl"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/30 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Headline and text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
                The Reality
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                Your Employees Are the{" "}
                <span className="italic">Engine</span> of Your Company
              </h2>
              <p className="text-lg text-white/50 mb-6 font-light leading-relaxed">
                In every industry, employee health affects performance, morale, consistency, and long-term well-being.
              </p>
              <p className="text-base text-white/40 mb-6 font-light leading-relaxed">
                For physically demanding industries like construction and skilled trades, these challenges can be even more visible. Long days, early starts, jobsite travel, irregular meals, and physical wear and tear make it hard for employees to stay consistent with their health.
              </p>
              <p className="text-base text-white/40 font-light leading-relaxed">
                At Momentum Wellness, we help companies create a stronger culture of health through a system employees can actually use.
              </p>
            </motion.div>

            {/* Right side - Challenges grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:mt-12"
            >
              <p className="text-sm font-bold tracking-[0.15em] uppercase text-white/30 mb-6">
                Many companies are dealing with the same challenges
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: TrendingUp, text: "Employees struggling with weight gain", rotate: "rotate-0" },
                  { icon: Activity, text: "Low energy and poor daily habits", rotate: "rotate-0" },
                  { icon: Users, text: "Limited accountability", rotate: "rotate-0" },
                  { icon: HeartPulse, text: "Inconsistent exercise and nutrition", rotate: "rotate-0" },
                  { icon: Clock, text: "High stress and poor recovery", rotate: "rotate-0" },
                  { icon: MessageSquare, text: "Disconnected teams", rotate: "rotate-0" },
                  { icon: ShieldCheck, text: "Wellness initiatives that sound good but go unused", rotate: "rotate-0", wide: true }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className={`flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 ${item.wide ? 'sm:col-span-2' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center shrink-0 text-red-400/80">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-white/60 font-light leading-snug pt-1.5">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0f1d]"></div>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)`
            }}
          ></div>
        </div>

        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-white/20 mb-8 block">
                Our Philosophy
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.05] tracking-tight">
                Built Around{" "}
                <span className="italic font-serif">People.</span>
                <br />
                Designed For{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Long-Term Impact.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed mb-6">
                Great companies are built by people — and when people are supported, the entire organization gets stronger.
              </p>
              <p className="text-lg text-white/30 font-light leading-relaxed max-w-3xl mx-auto">
                Momentum Wellness exists to help employers invest in the health of their teams in a meaningful, structured way. We believe employee wellness should be more than a perk. It should be a system that helps people feel better, move better, eat better, stay accountable, and support one another.
              </p>
            </motion.div>
          </div>

          {/* Five Pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <p className="text-center text-sm font-bold tracking-[0.2em] uppercase text-white/20 mb-12">
              Our approach is rooted in five pillars
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Training", desc: "Structured strength & cardio" },
                { name: "Nutrition", desc: "Guided eating habits" },
                { name: "Habits", desc: "Daily consistency building" },
                { name: "Accountability", desc: "Peer & coach support" },
                { name: "Community", desc: "Team-driven motivation" }
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all duration-500 text-center"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <span className="text-3xl font-bold text-white/10 group-hover:text-emerald-400/20 transition-colors duration-500 block mb-4">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{pillar.name}</h3>
                    <p className="text-sm text-white/30 font-light">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Closing statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center mt-20"
            >
              <div className="inline-block px-8 py-4 rounded-full border border-white/10 bg-white/[0.02]">
                <p className="text-white/40 font-light italic">
                  This is how wellness becomes part of company culture — not just another program that gets forgotten.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The 5 Pillars */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/40 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              The 5 Pillars of <span className="italic">Momentum Wellness</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              Our employee wellness programs are built around the core behaviors that create real, lasting change inside a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                num: "01",
                icon: Dumbbell,
                title: "Training",
                desc: "Structured workout programming helps employees improve strength, mobility, conditioning, and consistency whether they train at home, in a gym, or on the go."
              },
              {
                num: "02",
                icon: Apple,
                title: "Nutrition",
                desc: "Employees can track nutrition, build awareness, and work toward better daily choices that support weight management, energy, and long-term health."
              },
              {
                num: "03",
                icon: Repeat,
                title: "Habits",
                desc: "Healthy change happens through repeated behaviors. We help employees build sustainable habits around hydration, movement, sleep, recovery, and routine."
              },
              {
                num: "04",
                icon: Target,
                title: "Accountability",
                desc: "Weekly structure, check-ins, progress tracking, and app-based follow-through help employees stay engaged and consistent over time."
              },
              {
                num: "05",
                icon: Users,
                title: "Community",
                desc: "Community-based messaging and shared participation create support, motivation, and a stronger team culture across the company."
              }
            ].map((pillar, index) => (
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
                    <span className="text-3xl font-bold text-white/5 group-hover:text-emerald-400/10 transition-colors duration-500">
                      {pillar.num}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{pillar.title}</h3>
                  <p className="text-white/40 font-light leading-relaxed text-sm">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Companies Choose Us */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/50 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
              The Business Case
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Why Companies <span className="italic">Choose Us</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              Organizations see measurable improvements in morale, retention, and performance when they invest in employee wellness the right way.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-8 text-white/80 group-hover:text-white group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{benefit.title}</h3>
                <p className="text-white/40 font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]"></div>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)`
            }}
          ></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
              Simple Setup
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              How It <span className="italic">Works</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              We handle the program design, delivery, and tracking. You see the results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We learn about your team size, goals, and current wellness landscape to design a tailored approach.",
                icon: MessageSquare
              },
              {
                step: "02",
                title: "Program Launch",
                desc: "Employees receive access to the Momentum Wellness app with monthly programming, habits, and community features.",
                icon: Sparkles
              },
              {
                step: "03",
                title: "Ongoing Support",
                desc: "We provide engagement reports, adjust programming based on feedback, and keep your team motivated.",
                icon: Activity
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                )}

                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center text-emerald-400">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-5xl font-bold text-white/[0.03] italic">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/30 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
              The Platform
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Built For <span className="italic">Teams</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              Everything your employees need to stay consistent, connected, and progressing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-10"
            >
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center shrink-0 text-white/60 group-hover:text-white group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
                    <p className="text-white/40 font-light leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-[40px] blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <img src={mwDashboard} alt="App Dashboard" className="rounded-[24px] shadow-2xl border border-white/5" />
                <img src={mwGoals} alt="Goals Tracking" className="rounded-[24px] shadow-2xl border border-white/5 mt-10" />
                <img src={mwWorkouts} alt="Workouts" className="rounded-[24px] shadow-2xl border border-white/5 -mt-10" />
                <img src={mwProgress} alt="Progress Tracking" className="rounded-[24px] shadow-2xl border border-white/5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]"></div>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(16,185,129,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.08) 0%, transparent 50%)`
            }}
          ></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
              Proven Impact
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Results That <span className="italic">Matter</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              Companies that invest in structured wellness see real, measurable returns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { stat: "30%", label: "Average increase in employee engagement scores", sub: "Within 90 days" },
              { stat: "25%", label: "Reduction in sick days among active participants", sub: "Annual measurement" },
              { stat: "40%", label: "Improvement in self-reported energy levels", sub: "Quarterly surveys" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15 }}
                className="text-center p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                  {item.stat}
                </div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mx-auto mb-6"></div>
                <p className="text-white/60 font-light leading-relaxed mb-2">{item.label}</p>
                <p className="text-sm text-white/30 font-medium uppercase tracking-wider">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/20 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
              Who We Serve
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Designed For <span className="italic">Decision-Makers</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              If you are responsible for the health and performance of your team, this program is built for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TRUSTED_AUDIENCES.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15 }}
                className="group p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mx-auto mb-8 text-white/60 group-hover:text-white group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Checklist */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]"></div>
        <div className="absolute inset-0 opacity-20">
          <img src={mwSplash} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/95 to-[#0f172a]"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
                What You Get
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                A Complete <span className="italic">Solution</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {[
                "Monthly wellness programming for all fitness levels",
                "Strength, cardio, and mobility training plans",
                "Daily habit tracking for sleep, nutrition, hydration",
                "Team challenges and company-wide leaderboards",
                "Progress photos and body composition tracking",
                "Nutrition guidance and meal planning support",
                "Community forums and peer accountability groups",
                "Quarterly engagement reports for leadership",
                "Dedicated account manager for program oversight",
                "Custom branding and company-specific content"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-lg text-white/70 font-light">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 70%)`
            }}
          ></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-6 block">
              Get Started
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[0.95]">
              Ready to Invest in<br />
              <span className="italic">Your Team?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/40 mb-16 font-light leading-relaxed max-w-2xl mx-auto">
              Book a free consultation to discuss your company goals, team size, and how Momentum Wellness can support your organization.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full text-lg px-12 h-16 bg-white text-[#0f172a] hover:bg-white/90 transition-all duration-300 font-bold shadow-[0_0_60px_rgba(255,255,255,0.15)] hover:shadow-[0_0_80px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-lg px-12 h-16 border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 font-bold"
                >
                  Contact Our Team
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-20 flex items-center justify-center gap-8 text-white/20"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">15-min call</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20"></div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-sm">No commitment</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20"></div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Custom proposal</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
