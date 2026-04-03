import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldCheck, Zap, Target, LayoutGrid, ChevronDown, Clock } from "lucide-react";
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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Matching Home Layout */}
      <section className="relative pt-24 pb-32 flex items-center justify-center overflow-hidden min-h-[80vh] bg-primary">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.img 
            initial={{ opacity: 0.2, scale: 1, filter: "brightness(1)" }}
            animate={{ opacity: 0.2, scale: 1, filter: "brightness(1)" }}
            src={logo} 
            alt="" 
            className="w-[120%] max-w-none grayscale invert" 
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-8 italic tracking-tight">
              Wellness Built<br className="md:hidden" /> For You.
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Momentum Wellness is a commitment to making comprehensive fitness accessible to everyone. We believe that strength training, cardio, daily wellness habits, and progress tracking shouldn't require expensive coaching or complicated systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link href="/programs" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-[#e5e7eb] text-primary hover:bg-white hover:scale-[1.02] transition-all duration-300 font-bold border-none">
                  Unlock Full Access — $14.99/mo
                </Button>
              </Link>
              <Link href="/pricing" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base px-8 h-14 border-white/40 text-white hover:bg-white/10 transition-all duration-300">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Philosophy Section with Image */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group flex items-center justify-center"
            >
              <div className="aspect-square w-full max-w-md rounded-[40px] overflow-hidden shadow-2xl bg-secondary flex items-center justify-center p-0 transition-all duration-700 hover:shadow-primary/20 border border-primary/5 relative">
                <div className="relative z-10 w-full h-full">
                  <img src={logo} alt="Momentum Wellness Logo" className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 via-transparent to-white/10 opacity-100 pointer-events-none"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="space-y-10"
            >
              <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-heading text-primary leading-tight italic tracking-tight">Continuous Progression, Monthly Unlocks</motion.h2>
              <motion.div variants={itemVariants} className="space-y-6 text-lg text-primary/80 leading-relaxed font-light">
                <p>
                  Real fitness is a continuous journey, not a fixed timeline. Our app delivers strength training, cardio, daily wellness habits, and progress tracking in a continuous program that evolves with you.
                </p>
                <p>
                  Each month brings new phases that unlock based on your progress. This keeps your training fresh and engaging while building sustainable fitness practices that compound over time.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <ShieldCheck className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Complete Fitness</h4>
                    <p className="text-primary/80 font-light">Strength, cardio, habits, and progress in one app.</p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Target className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Monthly Phase Unlocks</h4>
                    <p className="text-primary/80 font-light">New phases unlock monthly for continuous progression.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Momentum Method */}
      <section className="py-48 bg-gradient-to-br from-primary via-primary to-primary/95 relative overflow-hidden">
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
              <Button size="lg" className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold bg-[#e5e7eb] text-primary hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] border-none">
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
