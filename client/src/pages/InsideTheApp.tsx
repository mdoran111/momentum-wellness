import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Zap, BarChart3, Play, Users, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "wouter";
import logo from '../assets/images/logo.png';

const FEATURES = [
  {
    icon: Calendar,
    title: "Monthly Phase Unlocks",
    description: "New phases unlock every month, automatically delivered to your app. Continuous progression with strength training, cardio, and daily habit guidance."
  },
  {
    icon: Play,
    title: "Strength & Cardio Workouts",
    description: "A complete mix of strength training for muscle and power, plus cardio workouts for cardiovascular health and endurance. Everything in one place."
  },
  {
    icon: Clock,
    title: "Daily Habit Tracking",
    description: "Build sustainable wellness practices with guided daily habit tracking. Track nutrition, hydration, sleep, and recovery alongside your workouts."
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "See your improvements over time with detailed progress metrics and our progress photo feature that shows visual change over time."
  },
  {
    icon: Zap,
    title: "Progress Photos",
    description: "Organize and compare your photos month-to-month. Visual progress is one of the most motivating ways to see your wellness progress."
  }
];

const SCREENSHOTS = [
  {
    title: "Your Fitness Dashboard",
    description: "See your current month's workouts, daily habits, and progress at a glance.",
    features: ["Strength Workouts", "Cardio Sessions", "Daily Habits"]
  },
  {
    title: "Comprehensive Workouts",
    description: "Each month brings fresh strength training and cardio sessions designed to challenge and progress you.",
    features: ["Strength Training", "Cardio Options", "Habit Guidance"]
  },
  {
    title: "Progress Tracking",
    description: "Track your progress with metrics and our powerful progress photo feature that shows real visual transformation.",
    features: ["Progress Photos", "Fitness Metrics", "Monthly Comparison"]
  }
];

export default function InsideTheApp() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.21, 1.11, 0.81, 0.99] as const
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
        <div className="absolute inset-0 opacity-20">
          <img src={logo} alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/90 to-transparent"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        ></div>

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
                  The App Experience
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                Everything You Need,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  In One App
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white mb-4 font-light leading-relaxed max-w-3xl mx-auto">
                A complete wellness experience designed to help you build structure, improve energy, and support lasting health.
              </p>
              <p className="text-base text-white mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                Training, cardio, daily habits, and progress tracking all in one structured app.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-white text-[#0f172a] hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base px-8 h-14 border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 font-bold">
                    Contact Momentum Wellness
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
                  "Track daily habits",
                  "Log workouts with ease",
                  "Monitor progress over time",
                  "Stay connected with your community"
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
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0f172a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 italic tracking-tight">What You Get Inside</h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">Every feature is built to reduce friction and support consistency. From planning to execution to progress tracking.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* App Experience Showcase */}
      <section className="py-24 bg-[#0a0f1d]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 italic tracking-tight">Your Training Workflow</h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">From phase selection to daily execution, every step is intuitive and designed for real-world use.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SCREENSHOTS.map((screenshot, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group"
              >
                <div className="mb-6 rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-1 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/5">
                  <div className="bg-[#0a0f1d]/90 rounded-[28px] p-10 min-h-[400px] flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/5"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 italic font-heading">{screenshot.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">{screenshot.description}</p>
                    <div className="w-full space-y-2">
                      {screenshot.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white/60" />
                          <span className="text-xs font-medium text-white/70 uppercase tracking-wider">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6 italic tracking-tight">Built for Progressive Overload</h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">Every week, every month builds on the last. Your progression is structured to support steady improvement over time.</p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "Phase-Based Programming",
                desc: "Each training program is divided into structured monthly phases. You focus on one goal, one mechanic, one intensity range at a time. No overwhelm, only progress."
              },
              {
                num: "02",
                title: "Daily Workout Precision",
                desc: "Every session is pre-programmed down to the rep. Tempo, rest periods, intensity targets—all calculated to drive the specific outcome of your current phase."
              },
              {
                num: "03",
                title: "Real-Time Performance Data",
                desc: "Log your lifts in real time. The app tracks your strength progression, volume progression, and work capacity across your entire cycle."
              },
              {
                num: "04",
                title: "Exercise Form & Mechanics",
                desc: "Every movement includes form cues, common mistakes, and setup instructions. Learn proper mechanics for every rep you perform."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center shrink-0 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                  <span className="text-3xl font-bold font-heading text-white group-hover:text-white transition-colors italic">{item.num}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-3 italic tracking-tight">{item.title}</h3>
                  <p className="text-white/70 font-light leading-relaxed text-lg">{item.desc}</p>
                </div>
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
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
              Ready to Experience
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                The Platform?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Join thousands of members using Momentum Wellness to build strength, consistency, and long-term wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full text-lg px-12 h-16 font-bold bg-white text-[#0f172a] hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-lg px-12 h-16 font-bold border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  Contact Momentum Wellness
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
