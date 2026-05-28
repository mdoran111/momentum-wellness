import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldCheck, Zap, Target, LayoutGrid, ChevronDown, Clock, Dumbbell, Apple, Repeat, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import aboutHero from '../assets/images/about-hero.jpg';
import aboutHolistic from '../assets/images/about-holistic-strength.jpg';
import brandVibe from '../assets/images/about-brand-vibe.jpg';
import logo from '../assets/images/logo.png';

export default function About() {
  const [showContent, setShowContent] = useState(true);
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
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
                  About Momentum Wellness
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                Our Mission Is Simple. Make{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Wellness Work For Real People
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white mb-4 font-light leading-relaxed max-w-3xl mx-auto">
                Momentum Wellness is a commitment to making comprehensive wellness accessible. We believe that structured training, cardio, daily wellness habits, and progress tracking should not require expensive coaching or complicated systems.
              </p>
              <p className="text-base text-white mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                Whether you are just starting out or looking to level up, our system gives you the plan, the tools, and the support to stay consistent and build real progress.
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

      {/* Built Around People - from Employee Wellness */}
      <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0f1d]"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)`
          }}
        ></div>
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
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-6">
                Great companies are built by people — and when people are supported, the entire organization gets stronger.
              </p>
              <p className="text-lg text-white font-light leading-relaxed max-w-3xl mx-auto">
                Momentum Wellness exists to help people invest in their health in a meaningful, structured way. We believe wellness should be more than a perk. It should be a system that helps people move better, build awareness, stay accountable, and support one another.
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
              {[
                {
                  num: "01",
                  icon: Dumbbell,
                  title: "Training",
                  desc: "Structured workout programming helps you improve strength, mobility, conditioning, and consistency whether you train at home, in a gym, or on the go."
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
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
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
                      <span className="text-3xl font-bold text-white/5 group-hover:text-emerald-400/10 transition-colors duration-500">{pillar.num}</span>
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

      {/* Philosophy Section with Image */}
      <section className="py-32 bg-[#0a0f1d] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group flex items-center justify-center"
            >
              <div className="aspect-square w-full max-w-md rounded-3xl overflow-hidden shadow-2xl bg-[#1e293b] flex items-center justify-center p-0 transition-all duration-700 hover:shadow-emerald-500/10 border border-white/5 relative">
                <div className="relative z-10 w-full h-full">
                  <img src={logo} alt="Momentum Wellness Logo" className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e293b]/40 via-transparent to-white/5 opacity-100 pointer-events-none"></div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-10"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight italic tracking-tight">Continuous Progression, Monthly Unlocks</motion.h2>
              <motion.div variants={itemVariants} className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
                <p>
                  Real fitness is a continuous journey, not a fixed timeline. Our app delivers strength training, cardio, daily wellness habits, and progress tracking in a continuous program that evolves with you.
                </p>
                <p>
                  Each month brings new phases that unlock based on your progress. This keeps your training fresh and engaging while building sustainable fitness practices that compound over time.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6">
                <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center shrink-0 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Complete System</h4>
                    <p className="text-white/70 font-light text-sm">Training, cardio, habits, and progress in one app.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center shrink-0 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Monthly Phase Unlocks</h4>
                    <p className="text-white/70 font-light text-sm">New phases unlock monthly for continuous progression.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Momentum Method */}
      <section className="py-48 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-sm font-medium tracking-wider uppercase text-white/90">
              Our Foundation
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-8 italic tracking-tight uppercase leading-[1.1]">The Momentum Method</h2>
            <p className="text-white/80 max-w-3xl mx-auto text-xl font-light leading-relaxed">A holistic approach that weaves together five essential pillars—training, cardio, daily habits, progress, and recovery—to create lasting wellness and improve how you feel.</p>
          </motion.div>

          
          <div className="flex flex-wrap justify-center gap-6 items-start max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Training",
                subtitle: "Build Real Power",
                desc: "Structured training improves strength, mobility, and conditioning. It builds consistency and confidence through measurable progress over time."
              },
              {
                icon: LayoutGrid,
                title: "Cardio",
                subtitle: "Improve Endurance",
                desc: "Cardio strengthens your heart, improves endurance, and supports energy levels. Better cardiovascular fitness means more stamina for daily life."
              },
              {
                icon: ShieldCheck,
                title: "Daily Habits",
                subtitle: "Sustain Your Wellness",
                desc: "Lasting change comes from daily practices—nutrition awareness, sleep, hydration, and recovery. These habits compound to create lasting wellness."
              },
              {
                icon: Target,
                title: "Progress",
                subtitle: "Track Your Improvement",
                desc: "Track your visual progress with photos and metrics. See your improvement month-to-month and stay motivated for the long journey."
              },
              {
                icon: Clock,
                title: "Recovery",
                subtitle: "Rest & Recharge",
                desc: "Strategic rest and recovery support adaptation and sustainable progress. Quality sleep, active recovery, and proper rest periods help your body respond to training."
              }
            ].map((value, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center flex-1 min-w-[140px]"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedPillar(selectedPillar === i ? null : i)}
                  className={`relative flex-1 w-full rounded-2xl border transition-all duration-500 flex flex-col items-center justify-center py-8 px-6 text-center cursor-pointer ${
                    selectedPillar === i
                      ? "bg-white/[0.04] border-emerald-500/30"
                      : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                    selectedPillar === i
                      ? "bg-gradient-to-br from-emerald-500/20 to-teal-500/20"
                      : "bg-gradient-to-br from-emerald-500/10 to-teal-500/10"
                  }`}>
                    <value.icon className={`w-6 h-6 transition-colors duration-500 ${selectedPillar === i ? "text-emerald-400" : "text-emerald-400/60"}`} />
                  </div>
                  <h3 className="text-white font-bold text-lg tracking-tight">{value.title}</h3>
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: selectedPillar === i ? 1 : 0, height: selectedPillar === i ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full overflow-hidden"
                >
                  <div className="mt-4 p-5 bg-white/[0.02] border border-white/5 rounded-2xl text-center">
                    <p className="text-white/70 text-sm font-light leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Image Break */}
      <section className="h-[600px] relative overflow-hidden group">
        <img src={brandVibe} alt="Premium gym environment" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-primary/30 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-20 w-px bg-white/30"></div>
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
              Ready to Build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Your Momentum?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Join a community that values structure, consistency, and measurable progress.
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
