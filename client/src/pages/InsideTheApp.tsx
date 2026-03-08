import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Zap, BarChart3, Play, Users, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "wouter";
import logo from '../assets/images/logo.png';

const FEATURES = [
  {
    icon: Calendar,
    title: "Monthly Phase Unlocks",
    description: "Your 6-month cycle is structured into focused monthly phases. Each month brings new programming, new mechanics to master, and measurable progression."
  },
  {
    icon: Play,
    title: "Video-Guided Workouts",
    description: "Every exercise includes professional form cues and setup instructions. Watch, learn, execute. No guesswork on technique or intensity."
  },
  {
    icon: Clock,
    title: "Session Planning",
    description: "Warm-ups, working sets, rest periods, and cool-downs are all laid out. Show up to the gym and train—your day is planned."
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Log your lifts, track your work capacity, and watch your metrics evolve. Data-driven feedback on every phase of your cycle."
  },
  {
    icon: Zap,
    title: "Exercise Form Library",
    description: "Access detailed form cues directly in the app. Learn the setup and mechanics behind every movement for proper execution and safety."
  }
];

const SCREENSHOTS = [
  {
    title: "Your Training Dashboard",
    description: "See your current month's focus, upcoming workouts, and progress at a glance.",
    features: ["Current Phase Overview", "Next Workout Preview", "Progress Metrics"]
  },
  {
    title: "Detailed Workout View",
    description: "Every session is pre-programmed with exercises, sets, reps, tempo, and rest periods.",
    features: ["Exercise Library", "Form Videos", "Performance Notes"]
  },
  {
    title: "Progress & Analytics",
    description: "Track your performance across your entire 6-month cycle with visual progress tracking.",
    features: ["Strength Metrics", "Volume Progression", "Phase Analytics"]
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
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden translate-y-4">
          <img src={logo} alt="" className="w-[120%] max-w-none grayscale opacity-20" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-sm font-medium tracking-wider uppercase">
              The App Experience
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-6 italic tracking-tight">Inside Momentum Wellness</h1>
            <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
              Every feature designed to keep you focused, progressing, and accountable. Your 6-month journey starts here.
            </p>
            <Link href="/programs">
              <button className="px-8 py-4 rounded-full bg-[#e5e7eb] text-primary font-bold hover:bg-white transition-all duration-300 shadow-lg">
                Start Your Program
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 italic tracking-tight">What You Get Inside</h2>
            <p className="text-lg text-primary/60 font-light leading-relaxed">Every feature is built to remove friction and maximize results. From planning to execution to progress tracking.</p>
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
                  className="p-8 rounded-[32px] bg-primary/[0.03] border border-primary/10 hover:bg-primary/5 hover:border-primary/20 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-primary mb-3 italic tracking-tight">{feature.title}</h3>
                  <p className="text-primary/60 text-sm leading-relaxed font-light">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* App Experience Showcase */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 italic tracking-tight">Your Training Workflow</h2>
            <p className="text-lg text-primary/60 font-light leading-relaxed">From phase selection to daily execution, every step is intuitive and designed for the gym floor.</p>
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
                <div className="mb-6 rounded-[32px] overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-1 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="bg-white/95 rounded-[28px] p-10 min-h-[400px] flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/20"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4 italic font-heading">{screenshot.title}</h3>
                    <p className="text-sm text-primary/70 leading-relaxed mb-6 font-light">{screenshot.description}</p>
                    <div className="w-full space-y-2">
                      {screenshot.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 justify-center">
                          <CheckCircle2 className="w-4 h-4 text-primary/60" />
                          <span className="text-xs font-medium text-primary/70 uppercase tracking-wider">{feature}</span>
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6 italic tracking-tight">Built for Progressive Overload</h2>
            <p className="text-lg text-primary/60 font-light leading-relaxed">Every week, every month builds on the last. Your progression is scientifically structured to maximize results.</p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "Phase-Based Programming",
                desc: "Each 6-month cycle is divided into structured phases. You focus on one goal, one mechanic, one intensity range at a time. No overwhelm, only progress."
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
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="text-3xl font-bold font-heading text-primary group-hover:text-white transition-colors italic">{item.num}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-primary mb-3 italic tracking-tight">{item.title}</h3>
                  <p className="text-primary/70 font-light leading-relaxed text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 italic tracking-tight">Ready to Experience It?</h2>
            <p className="text-xl text-white/80 font-light leading-relaxed mb-10">
              Join thousands of members using Momentum Wellness to achieve their strongest physique and highest performance.
            </p>
            <Link href="/programs">
              <button className="px-10 py-4 rounded-full bg-[#e5e7eb] text-primary font-bold hover:bg-white transition-all duration-300 shadow-lg hover:scale-105 inline-flex items-center gap-3">
                Explore Programs <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
