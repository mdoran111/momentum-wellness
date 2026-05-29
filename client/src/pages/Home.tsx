import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  CheckCircle2,
  Dumbbell,
  Apple,
  Repeat,
  Target,
  Users,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Quote,
  TrendingUp,
  Activity,
  Clock,
  MessageSquare,
  ShieldCheck,
  Calendar,
  HeartPulse,
  BarChart3,
  Zap,
  Star,
  Sparkles
} from "lucide-react";
import mwSplash from "@assets/MW1_splash_1779922530400.png";
import mwDashboard from "@assets/MW2_app_dashboard_1779922530403.png";
import mwGoals from "@assets/MW3_goals_1779922530404.png";
import mwWorkouts from "@assets/MW4_workouts_1779922530404.png";
import mwProgress from "@assets/MW5_progress_1779922530404.png";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Member since 2024",
    content: "The app has helped me restructure my fitness routine. Every month brings fresh workouts that keep me motivated. I love tracking my progress and seeing steady progress through the progress photos feature.",
    avatar: "SJ"
  },
  {
    name: "Marcus Thompson",
    role: "Member since 2025",
    content: "Finally, an app that gives me everything I need in one place. Strength training, cardio, daily habits—it's all organized and changes monthly to keep me challenged and engaged.",
    avatar: "MT"
  },
  {
    name: "Elena Rodriguez",
    role: "Member since 2024",
    content: "The daily habits feature has been a valuable addition for me. It's not just about the workouts—it's about building sustainable fitness practices. I've never been more consistent with my training.",
    avatar: "ER"
  },
  {
    name: "David Kim",
    role: "Member since 2023",
    content: "The monthly variety keeps things fresh and engaging. I get the strength training I want plus cardio, and the progress photos help me stay on track.",
    avatar: "DK"
  },
  {
    name: "Jessica Low",
    role: "Member since 2024",
    content: "As a busy professional, this app fits perfectly into my life. Everything is planned for me, and it updates monthly so I never get bored. The progress tracking is well-organized and clear.",
    avatar: "JL"
  },
  {
    name: "Ryan Patel",
    role: "Member since 2024",
    content: "At $14.99 a month, this is strong value. I get comprehensive workouts across strength and cardio, plus the daily habits keep me accountable. It has changed how I approach fitness.",
    avatar: "RP"
  },
  {
    name: "Sofia Valenti",
    role: "Fitness Enthusiast",
    content: "I love how the app combines everything—strength training, cardio, and daily wellness habits. The monthly updates mean I'm constantly learning and pushing myself in new ways.",
    avatar: "SV"
  },
  {
    name: "James Taylor",
    role: "Member since 2024",
    content: "The comprehensive approach is what sets this apart. Most apps focus on just one thing, but this covers strength, cardio, habits, and progress tracking. It is a complete wellness system.",
    avatar: "JT"
  }
];

const PILLARS = [
  {
    num: "01",
    icon: Dumbbell,
    title: "Training",
    desc: "Structured workout programming helps you improve strength, mobility, conditioning, and consistency—whether you train at home, in a gym, or on the go."
  },
  {
    num: "02",
    icon: Apple,
    title: "Nutrition",
    desc: "Track nutrition, build awareness, and work toward better daily choices that support weight management, energy, and long-term health."
  },
  {
    num: "03",
    icon: Repeat,
    title: "Habits",
    desc: "Healthy change happens through repeated behaviors. Build sustainable habits around hydration, movement, sleep, recovery, and routine."
  },
  {
    num: "04",
    icon: Target,
    title: "Accountability",
    desc: "Weekly structure, check-ins, progress tracking, and app-based follow-through help you stay engaged and consistent over time."
  },
  {
    num: "05",
    icon: Users,
    title: "Community",
    desc: "Community-based messaging and shared participation create support, motivation, and a stronger culture around your wellness journey."
  }
];

const CHALLENGES = [
  { icon: TrendingUp, text: "Struggling to stay consistent with fitness" },
  { icon: Activity, text: "Low energy and poor daily habits" },
  { icon: Clock, text: "No clear plan or structured program" },
  { icon: HeartPulse, text: "Inconsistent nutrition and meal choices" },
  { icon: MessageSquare, text: "Working out alone with no support" },
  { icon: ShieldCheck, text: "Fitness apps that are overwhelming or unused", wide: true }
];

const WHO_FOR = [
  {
    icon: Zap,
    title: "Busy Professionals",
    desc: "You want results without spending hours planning. Structured programs that fit your schedule."
  },
  {
    icon: Star,
    title: "Fitness Enthusiasts",
    desc: "You want progressive, challenging programming that evolves monthly and keeps you engaged."
  },
  {
    icon: HeartPulse,
    title: "Health-Focused Beginners",
    desc: "You want a clear starting point with guidance on training, nutrition, and building habits."
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentTestimonial]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      <SEO
        title="Online Fitness & Wellness Coaching | Momentum Wellness"
        description="Build a healthier, stronger, more accountable you with Momentum Wellness. Structured online fitness coaching, nutrition coaching, and daily habit tracking in one app."
        keywords="online fitness coaching, nutrition coaching, wellness coaching, training, nutrition, habits, accountability, community"
      />
      <div className="flex flex-col min-h-screen bg-[#0f172a]">
      {/* 1. Premium Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
        <div className="absolute inset-0 opacity-15">
          <img src={mwSplash} alt="Momentum Wellness app splash screen" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={showContent ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={showContent ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-sm font-semibold tracking-wider uppercase text-white">
                  App-Based Wellness Programs
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                Build a Healthier,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Stronger, More Accountable
                </span>{" "}
                You
              </h1>

              <p className="text-lg md:text-xl text-white mb-4 font-light leading-relaxed">
                Momentum Wellness helps you improve fitness, nutrition, daily habits, and long-term wellness through a structured, app-based program built around training, accountability, and community.
              </p>
              <p className="text-base text-white mb-10 font-light leading-relaxed max-w-xl">
                Whether you're just starting out or looking to level up, our system gives you the plan, the tools, and the support to stay consistent and build progress.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/programs" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-white text-[#0f172a] hover:bg-white/90 transition-all duration-300 font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full text-base px-8 h-14 border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 font-bold"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={showContent ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap gap-x-6 gap-y-3"
              >
                {[
                  "Structured monthly programming",
                  "App-based and community-driven",
                  "Strength, cardio, and daily habits",
                  "Results-focused, not generic"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Phone mockups */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={showContent ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full max-w-[500px] mx-auto" style={{ height: '600px' }}>
                {/* Phone 1 — Back (Goals) */}
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: -6 }}
                  animate={showContent ? { opacity: 1, y: 0, rotate: -6 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute top-8 left-0 w-[260px]"
                >
                  <div className="rounded-[40px] bg-[#1a1a2e] p-2 shadow-2xl border border-white/10">
                    <div className="rounded-[32px] overflow-hidden bg-black">
                      <img src={mwGoals} alt="Momentum Wellness app goals tracking screen showing fitness goals" className="w-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Phone 2 — Middle (Workouts) */}
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: 6 }}
                  animate={showContent ? { opacity: 1, y: 0, rotate: 6 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="absolute top-0 right-0 w-[260px]"
                >
                  <div className="rounded-[40px] bg-[#1a1a2e] p-2 shadow-2xl border border-white/10">
                    <div className="rounded-[32px] overflow-hidden bg-black">
                      <img src={mwWorkouts} alt="Momentum Wellness app workout library with strength and cardio sessions" className="w-full" />
                    </div>
                  </div>
                </motion.div>

                {/* Phone 3 — Front (Dashboard) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={showContent ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] z-10"
                >
                  <div className="rounded-[40px] bg-[#1a1a2e] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.5)] border border-white/10">
                    <div className="rounded-[32px] overflow-hidden bg-black relative">
                      <img src={mwDashboard} alt="Momentum Wellness app dashboard showing daily wellness overview" className="w-full" />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a2e] rounded-b-2xl"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
              </div>
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

      {/* 2. Value Proposition — The Problem */}
      <section className="py-20 md:py-28 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/30 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-4 block">
                The Reality
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                Most Fitness Plans{" "}
                <span className="italic">Don't Stick.</span>
              </h2>
              <p className="text-lg text-white mb-6 font-light leading-relaxed">
                You start with motivation, but without structure, accountability, and a clear plan, it's easy to fall off track.
              </p>
              <p className="text-base text-white mb-6 font-light leading-relaxed">
                You don't need another generic workout app. You need a system that combines training, nutrition guidance, habit tracking, and community support—designed to keep you engaged month after month.
              </p>
              <p className="text-base text-white font-light leading-relaxed">
                At Momentum Wellness, we built exactly that. A program that evolves with you, keeps you accountable, and helps you build progress you can see and feel.
              </p>
            </motion.div>

            {/* Right — Challenges grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:mt-12"
            >
              <p className="text-sm font-bold tracking-[0.15em] uppercase text-white mb-6">
                Sound familiar?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CHALLENGES.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className={`flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 ${item.wide ? 'sm:col-span-2' : ''}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center shrink-0 text-red-400/80">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-white font-light leading-snug pt-1.5">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Program Overview — What You Get */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0f1d]"></div>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)`
            }}
          ></div>
        </div>
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.05] tracking-tight">
                Everything You Need{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  To Succeed.
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-6">
                A complete wellness system in one app. Not just workouts—training, nutrition, habits, and progress tracking that work together.
              </p>
              <p className="text-lg text-white font-light leading-relaxed max-w-3xl mx-auto">
                New phases unlock monthly so you never plateau. The program adapts and progresses with you, keeping your fitness journey fresh and challenging.
              </p>
            </motion.div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Dumbbell,
                title: "Strength Training",
                desc: "Science-backed programs targeting major muscle groups with progressive overload built into every phase."
              },
              {
                icon: Activity,
                title: "Cardio Workouts",
                desc: "From HIIT to steady-state, varied cardio options designed to complement your strength training."
              },
              {
                icon: Calendar,
                title: "Monthly Phase Unlocks",
                desc: "Fresh challenges and progressive programming delivered automatically each month."
              },
              {
                icon: HeartPulse,
                title: "Daily Habits",
                desc: "Guided tracking for nutrition, hydration, sleep, and recovery habits beyond just workouts."
              },
              {
                icon: BarChart3,
                title: "Progress Tracking",
                desc: "Monitor performance, visual progress photos, and milestone achievements over time."
              },
              {
                icon: Sparkles,
                title: "Cancel Anytime",
                desc: "No contracts, no hidden fees. Full control over your membership with a single click."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-bold text-white/5 group-hover:text-emerald-400/10 transition-colors duration-500">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-white font-light leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Five Pillars */}
      <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0f1d]"></div>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)`
            }}
          ></div>
        </div>
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.05] tracking-tight">
                Built on{" "}
                <span className="italic font-serif">Five Pillars.</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed max-w-3xl mx-auto">
                Lasting progress doesn't come from one thing. It comes from a system that addresses every dimension of wellness.
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
                      <span className="text-3xl font-bold text-white/5 group-hover:text-emerald-400/10 transition-colors duration-500">
                        {pillar.num}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{pillar.title}</h3>
                    <p className="text-white font-light leading-relaxed text-sm">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-20"
          >
            <div className="inline-block px-8 py-4 rounded-full border border-white/10 bg-white/[0.02]">
              <p className="text-white font-light text-sm">
                These five pillars work together to create a system that produces lasting progress—not just short-term motivation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. App Preview — The Platform */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/20 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.05] tracking-tight">
                Your Wellness,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  In One App.
                </span>
              </h2>
              <p className="text-lg text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
                Momentum Wellness is powered through a modern wellness app that gives you one place to stay organized, engaged, and accountable.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left — Features list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                {[
                  "Follow workouts at home, at the gym, or on the go",
                  "Track key health and fitness habits daily",
                  "Monitor progress and performance over time",
                  "Stay aware of nutrition goals and choices",
                  "Build routines with structured daily guidance",
                  "Stay connected through community support",
                  "Keep wellness visible, practical, and accessible"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-white font-light">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — Phone preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-full max-w-[300px]">
                <div className="rounded-[40px] bg-[#1a1a2e] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.6)] border border-white/10">
                  <div className="rounded-[32px] overflow-hidden bg-black relative">
                    <img src={mwDashboard} alt="Momentum Wellness app dashboard showing daily wellness overview" className="w-full" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a2e] rounded-b-2xl"></div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-sm text-white/60 font-light">Stay on top of daily health and fitness</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Who It's For */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0f1d]"></div>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 50%)`
            }}
          ></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.05] tracking-tight">
                Who Is This{" "}
                <span className="italic">For?</span>
              </h2>
              <p className="text-lg text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
                Momentum Wellness is designed for anyone serious about building a healthier, stronger, more consistent lifestyle.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {WHO_FOR.map((persona, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-500 text-center"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center text-emerald-400 mx-auto mb-6 group-hover:text-emerald-300 transition-colors duration-300">
                    <persona.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{persona.title}</h3>
                  <p className="text-white font-light leading-relaxed text-sm">{persona.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. How It Works */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/20 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-[1.05] tracking-tight">
                How It{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Works.
                </span>
              </h2>
              <p className="text-lg text-white/70 font-light leading-relaxed max-w-xl mx-auto">
                Three simple steps. One commitment to growth.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

            {[
              { step: "01", title: "Sign Up", desc: "Choose your membership and get instant access to the full platform." },
              { step: "02", title: "Pick Your Program", desc: "Select the training path that matches your goals and equipment." },
              { step: "03", title: "Build Momentum", desc: "Follow your monthly phases, track progress, and stay consistent." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-3xl flex items-center justify-center text-2xl font-bold text-emerald-400 shadow-[0_10px_30px_rgba(0,0,0,0.3)] mb-8 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-500"
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white tracking-tight">{item.title}</h3>
                <p className="text-white/60 text-base font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Start Today.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Build Momentum.
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
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto rounded-full text-lg px-8 sm:px-12 h-14 sm:h-16 font-bold border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  Contact Momentum Wellness
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Testimonials + Contact */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/20 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Testimonials */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Quote className="w-12 h-12 text-emerald-400/30 mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
                What Members{" "}
                <span className="italic">Say.</span>
              </h2>
            </motion.div>

            <div className="relative bg-white/[0.02] p-6 sm:p-8 md:p-16 rounded-3xl border border-white/5 min-h-[320px] sm:min-h-[400px] flex flex-col justify-center overflow-hidden backdrop-blur-sm">
              <div className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <p className="text-base sm:text-xl md:text-2xl text-white font-medium leading-relaxed italic mb-8">
                  "{TESTIMONIALS[currentTestimonial].content}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 rounded-full flex items-center justify-center font-bold mb-3 shadow-lg border border-emerald-500/20">
                    {TESTIMONIALS[currentTestimonial].avatar}
                  </div>
                  <h4 className="font-bold text-lg text-white">{TESTIMONIALS[currentTestimonial].name}</h4>
                  <p className="text-sm text-white/60 font-medium">{TESTIMONIALS[currentTestimonial].role}</p>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-4 md:left-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white transition-all h-10 w-10 sm:h-12 sm:w-12 text-white"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 md:right-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white transition-all h-10 w-10 sm:h-12 sm:w-12 text-white"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </div>

              <div className="flex justify-center gap-2 mt-8 md:absolute md:bottom-8 md:left-0 md:right-0">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === i ? "w-8 bg-emerald-400" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-4 block">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Have Questions?{" "}
                <span className="italic">Let's Talk.</span>
              </h2>
              <p className="text-xl text-white max-w-2xl mx-auto font-light leading-relaxed">
                Reach out and our team will get back to you within 24-48 hours. We're here to help you get started.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/[0.02] rounded-3xl border border-white/5 p-8 md:p-12"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-white">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white">Message</label>
                  <textarea
                    placeholder="Write your message here..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  ></textarea>
                </div>
                <Link href="/contact">
                  <Button className="w-full h-14 text-lg font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-300">
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
