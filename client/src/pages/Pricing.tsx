import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, Zap, Award, Clock } from "lucide-react";
import { Link } from "wouter";
import logo from '../assets/images/logo.png';

export default function Pricing() {
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
    <div className="pt-24 pb-32 min-h-screen bg-primary text-white relative overflow-hidden">
      {/* Background Logo watermark */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden -translate-y-[15%]">
        <img src={logo} alt="" className="w-[120%] max-w-none grayscale invert opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-sm font-medium tracking-wider uppercase text-white/90">
            Membership
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 tracking-tight italic">Simple, Elite Access</h1>
          <p className="text-xl text-white/70 font-light leading-relaxed">High-performance training shouldn't be complicated. One membership, unlimited evolution.</p>
        </motion.div>

        {/* Main Pricing Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-32"
        >
          <Card className="border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden bg-white/5 backdrop-blur-md rounded-[40px] group transition-all duration-500 hover:bg-white/[0.08]">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            <CardHeader className="text-center pt-16 pb-10 border-b border-white/10">
              <CardTitle className="text-2xl font-bold font-heading mb-4 text-white uppercase tracking-widest italic">Full Access Pass</CardTitle>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-7xl font-bold font-heading text-white">$14.99</span>
                <span className="text-white/60 text-xl font-light">/month</span>
              </div>
              <p className="mt-4 text-white/70 text-sm font-medium tracking-wide uppercase">Billed Monthly</p>
            </CardHeader>
            <CardContent className="p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                {[
                  "Unlimited Program Access",
                  "Monthly Phase Unlocks",
                  "App-Based Coaching Cues",
                  "Continuous Updates"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white list-none group/item">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-primary transition-all duration-300">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium text-sm tracking-wide">{feature}</span>
                  </li>
                ))}
              </div>
              
              <Link href="/programs" className="block w-full">
                <Button className="w-full rounded-full h-16 text-xl font-bold shadow-2xl bg-[#e5e7eb] text-primary hover:bg-white hover:scale-[1.02] transition-all duration-300 border-none">
                  Get Started Now
                </Button>
              </Link>
            </CardContent>
          </Card>
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
              className="text-center p-10 rounded-[40px] bg-white/5 border border-white/10 transition-all hover:bg-white/[0.08] backdrop-blur-sm group"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-primary transition-all duration-500">
                <pillar.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest italic">{pillar.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed font-light">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
