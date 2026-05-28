import { motion } from "framer-motion";
import { CheckCircle2, Dumbbell, Apple, Repeat, Target, Users } from "lucide-react";
import mwDashboard from '@assets/MW2_app_dashboard_1779922530403.png';

export default function Programs() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-hidden">
      {/* The Platform */}
      <section className="relative z-10 py-16 min-h-screen flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/20 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white tracking-tight italic uppercase">The Platform</h2>
              <p className="text-white/60 text-lg font-light leading-relaxed max-w-2xl mx-auto">Momentum Wellness is powered through a modern wellness app that gives you one place to stay organized, engaged, and accountable.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left - Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                {[
                  "Follow workouts at home, at the gym, or on the go",
                  "Track key health and fitness habits",
                  "Monitor progress and performance over time",
                  "Stay aware of nutrition goals",
                  "Build routines with daily structure",
                  "Stay connected through community-based support",
                  "Keep wellness visible, practical, and accessible"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-light">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Phone Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-full max-w-[280px]">
                <div className="rounded-[32px] md:rounded-[40px] bg-[#1a1a2e] p-2 md:p-3 shadow-[0_25px_80px_rgba(0,0,0,0.6)] border border-white/10">
                  <div className="rounded-[24px] md:rounded-[32px] overflow-hidden bg-black relative">
                    <img src={mwDashboard} alt="App Dashboard" className="w-full" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-[#1a1a2e] rounded-b-xl md:rounded-b-2xl"></div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-sm text-white/60 font-light">Stay on top of daily health and fitness</span>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white/5 rounded-full blur-[100px] -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Five Pillars */}
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
                Built on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Five Pillars.
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed max-w-3xl mx-auto">
                Every program in the Momentum Wellness app is built around the same core system that produces lasting transformation.
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
              {[
                {
                  num: "01",
                  icon: Dumbbell,
                  title: "Training",
                  desc: "Structured workout programming helps you improve strength, mobility, conditioning, and consistency."
                },
                {
                  num: "02",
                  icon: Apple,
                  title: "Nutrition",
                  desc: "Track nutrition and build awareness toward better daily choices that support energy and health."
                },
                {
                  num: "03",
                  icon: Repeat,
                  title: "Habits",
                  desc: "Build sustainable habits around hydration, movement, sleep, recovery, and routine."
                },
                {
                  num: "04",
                  icon: Target,
                  title: "Accountability",
                  desc: "Weekly structure, check-ins, and progress tracking keep you engaged and consistent."
                },
                {
                  num: "05",
                  icon: Users,
                  title: "Community",
                  desc: "Shared participation and support create motivation and a stronger wellness culture."
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
                    <p className="text-white font-light leading-relaxed text-sm">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
