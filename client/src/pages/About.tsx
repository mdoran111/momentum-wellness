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
                  Wellness Work For Everyone
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white mb-4 font-light leading-relaxed max-w-3xl mx-auto">
                Momentum Wellness is a commitment to making comprehensive fitness accessible to everyone. We believe that strength training, cardio, daily wellness habits, and progress tracking shouldn't require expensive coaching or complicated systems.
              </p>
              <p className="text-base text-white mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                Whether you're just starting out or looking to level up, our system gives you the plan, the tools, and the support to stay consistent and see real results.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/programs" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-white text-[#0f172a] hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
                    Explore Programs
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/pricing" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base px-8 h-14 border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 font-bold">
                    See Pricing
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
                Momentum Wellness exists to help employers invest in the health of their teams in a meaningful, structured way. We believe employee wellness should be more than a perk. It should be a system that helps people feel better, move better, eat better, stay accountable, and support one another.
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
                  className="group bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-[24px] p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">{pillar.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-all duration-500">
                      <pillar.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{pillar.title}</h3>
                  <p className="text-sm text-white font-light leading-relaxed">{pillar.desc}</p>
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
              <div className="aspect-square w-full max-w-md rounded-[40px] overflow-hidden shadow-2xl bg-[#1e293b] flex items-center justify-center p-0 transition-all duration-700 hover:shadow-emerald-500/10 border border-white/5 relative">
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

              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-all duration-500">
                    <ShieldCheck className="w-7 h-7 text-white group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Complete Fitness</h4>
                    <p className="text-white/80 font-light">Strength, cardio, habits, and progress in one app.</p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-all duration-500">
                    <Target className="w-7 h-7 text-white group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Monthly Phase Unlocks</h4>
                    <p className="text-white/80 font-light">New phases unlock monthly for continuous progression.</p>
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
            <p className="text-white/80 max-w-3xl mx-auto text-xl font-light leading-relaxed">A holistic approach that weaves together five essential pillars—strength, cardio, daily habits, progress, and recovery—to create lasting wellness and transform how you feel.</p>
          </motion.div>

          
          <div className="flex flex-wrap justify-center gap-6 items-start max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Strength",
                subtitle: "Build Real Power",
                desc: "Strength training increases muscle, bone density, and metabolism. It makes everyday life easier and builds confidence through measurable progress."
              },
              {
                icon: LayoutGrid,
                title: "Cardio",
                subtitle: "Boost Your Heart",
                desc: "Cardio strengthens your heart, improves endurance, and increases energy levels. Better cardiovascular fitness means more stamina for life."
              },
              {
                icon: ShieldCheck,
                title: "Daily Habits",
                subtitle: "Sustain Your Wellness",
                desc: "Lasting change comes from daily practices—nutrition, sleep, hydration, and recovery. These habits compound to create lasting wellness."
              },
              {
                icon: Target,
                title: "Progress",
                subtitle: "See Your Transformation",
                desc: "Track your visual transformation with progress photos and metrics. See real results month-to-month and stay motivated for the long journey."
              },
              {
                icon: Clock,
                title: "Recovery",
                subtitle: "Rest & Recharge",
                desc: "Strategic rest and recovery are where the magic happens. Quality sleep, active recovery, and proper rest periods fuel adaptation and sustainable progress."
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
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelectedPillar(selectedPillar === i ? null : i)}
                  className={`relative flex-1 w-full rounded-[24px] border transition-all duration-500 flex flex-col items-center justify-center py-8 px-6 text-center cursor-pointer ${
                    selectedPillar === i 
                      ? "bg-white/20 border-white/50 shadow-lg" 
                      : "bg-gradient-to-br from-white/15 to-white/5 border-white/20 hover:border-white/40 hover:bg-white/[0.12]"
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 ${
                    selectedPillar === i
                      ? "bg-gradient-to-br from-white/35 to-white/15"
                      : "bg-gradient-to-br from-white/25 to-white/10 group-hover:from-white/35 group-hover:to-white/15"
                  }`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-heading font-bold text-xl italic tracking-tight">{value.title}</h3>
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: selectedPillar === i ? 1 : 0, height: selectedPillar === i ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full overflow-hidden"
                >
                  <div className="mt-6 p-6 bg-white/10 backdrop-blur-md rounded-[20px] border border-white/20 text-center">
                    <p className="text-white text-sm font-light leading-relaxed">{value.desc}</p>
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
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium tracking-wider uppercase animate-in fade-in slide-in-from-bottom-4 duration-700">
            Start Your Transformation
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-8 leading-[1.1] tracking-tight text-white uppercase">
            Ready to build your MOMENTUM?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Join a community of high-performers who value structure, science-based programming, and measurable evolution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/programs">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold bg-white text-[#0f172a] hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] border-none">
                Unlock Full Access
              </Button>
            </Link>
            <Link href="/pricing" onClick={() => window.scrollTo(0, 0)}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold border-white/40 text-white hover:bg-white/10 hover:border-white transition-all duration-300">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
