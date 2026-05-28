import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, Zap, Award, Dumbbell, Apple, Repeat, Target, Users, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";

export default function Pricing() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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
        <div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)`}}></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>
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
                  Membership
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                Just{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  $14.99/Month
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white mb-4 font-light leading-relaxed max-w-3xl mx-auto">
                A complete wellness program with monthly phase unlocks. Strength, cardio, daily habits, and progress tracking all in one place.
              </p>
              <p className="text-base text-white mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                No hidden fees, no contracts. Cancel anytime. Get full access to everything for less than a single personal training session.
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
                  "No hidden fees",
                  "Cancel anytime",
                  "Instant access",
                  "Full program library"
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

      {/* Pricing Content */}
      <section className="relative py-24 bg-[#0f172a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/20 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4">
        {/* Main Pricing Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-32"
        >
          <Card className="border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden bg-white/5 backdrop-blur-md rounded-3xl group transition-all duration-500 hover:bg-white/[0.08]">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <CardHeader className="text-center pt-16 pb-10 border-b border-white/10">
              <CardTitle className="text-2xl font-bold font-heading mb-4 text-white uppercase tracking-widest italic">Complete Wellness Membership</CardTitle>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-7xl font-bold font-heading text-white">$14.99</span>
                <span className="text-white/60 text-xl font-light">/month</span>
              </div>
              <p className="mt-4 text-white/70 text-sm font-medium tracking-wide uppercase">Billed Monthly</p>
            </CardHeader>
            <CardContent className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                {[
                  "Strength Training Workouts",
                  "Cardio Workouts",
                  "Daily Habit Tracking",
                  "Progress Photo Feature"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white list-none group/item">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-primary transition-all duration-300">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium text-sm tracking-wide">{feature}</span>
                  </li>
                ))}
              </div>
              
              <Link href="/contact" className="block w-full">
                <Button className="w-full rounded-full h-16 text-xl font-bold shadow-2xl bg-white text-[#0f172a] hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 border-none">
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        {/* Five Pillars Included */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Everything Is Built on the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Five Pillars
              </span>
            </h2>
            <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
              Every feature in your membership connects back to the same core system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Dumbbell, title: "Training", desc: "Strength & cardio programs" },
              { icon: Apple, title: "Nutrition", desc: "Daily awareness & tracking" },
              { icon: Repeat, title: "Habits", desc: "Sleep, hydration, recovery" },
              { icon: Target, title: "Accountability", desc: "Check-ins & progress logs" },
              { icon: Users, title: "Community", desc: "Support & motivation" }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-500 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center text-emerald-400 mx-auto mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{pillar.title}</h3>
                <p className="text-sm text-white/50 font-light">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Pillars Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            {
              icon: ShieldCheck,
              title: "No Hidden Fees",
              desc: "What you see is what you pay. No initiation costs or surprise charges."
            },
            {
              icon: Zap,
              title: "Instant Access",
              desc: "Get immediate entry to the full library and start your momentum today."
            },
            {
              icon: Award,
              title: "Expert Quality",
              desc: "Programming built on sports science and years of professional coaching."
            }
          ].map((pillar, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-500 text-center"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center mx-auto mb-6 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed font-light">{pillar.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
              Every feature in your membership connects back to the same proven system — training, nutrition, habits, accountability, and community.
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
