import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import {
  ArrowRight,
  CheckCircle2,
  ListChecks,
  Smartphone,
  TrendingUp,
  User,
  Building2,
  Dumbbell,
  Apple,
  Repeat,
  Users
} from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: ListChecks,
    title: "Practical Structure",
    desc: "Monthly programs that tell you exactly what to do. No guesswork. No overwhelm."
  },
  {
    icon: Smartphone,
    title: "App-Based Accountability",
    desc: "Track workouts, nutrition, habits, and progress in one place. Coaches and community keep you engaged."
  },
  {
    icon: TrendingUp,
    title: "Sustainable Behavior Change",
    desc: "We focus on habits that stick. Not quick fixes, but real systems that build momentum over time."
  }
];

const WHO_WE_HELP = [
  {
    icon: User,
    title: "Individuals",
    desc: "Fitness, nutrition, habit coaching, and progress tracking through the Momentum Wellness app.",
    link: "/programs",
    cta: "View Programs",
    accent: "emerald"
  },
  {
    icon: Building2,
    title: "Companies",
    desc: "Employee wellness programs for companies with 50+ employees that want healthier, more engaged teams.",
    link: "/employee-wellness-programs",
    cta: "Employee Wellness Programs",
    accent: "blue"
  }
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="About Us | Momentum Wellness"
        description="Momentum Wellness helps individuals and companies build sustainable health through structure, accountability, and real-life behavior change."
        keywords="about Momentum Wellness, wellness coaching philosophy, fitness coaching company, sustainable wellness habits"
      />
      <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
        {/* 1. Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
          <div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)`}}></div>
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
                  <span className="text-sm font-semibold tracking-wider uppercase text-white">About Momentum Wellness</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                  Built to Help People{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    Create Lasting Momentum
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white font-light leading-relaxed max-w-3xl mx-auto">
                  Momentum Wellness was created to help individuals and companies build sustainable health through structure, accountability, and real-life behavior change.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

      {/* Trust Bar */}
      <div className="relative py-6 border-y border-white/5 bg-[#0f172a]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {[
              { icon: Smartphone, label: "App-based coaching" },
              { icon: Dumbbell, label: "Structured training" },
              { icon: Apple, label: "Nutrition support" },
              { icon: Repeat, label: "Habit & accountability" },
              { icon: Users, label: "Community-based support" },
              { icon: Building2, label: "Built for individuals & companies" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/50 text-xs font-medium uppercase tracking-wider">
                <item.icon className="w-3.5 h-3.5 text-emerald-400/50" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* 2. Our Philosophy */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#f8fafc]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-[#eef2f6] to-[#f8fafc]"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-8 leading-[1.05] tracking-tight">
                  Our{" "}
                  <span className="italic">Philosophy</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed">
                  Long-term wellness is built through consistent training, better nutrition, daily habits, accountability, and community. When these pieces work together, progress becomes automatic. Not overnight. But over time.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. What Makes Momentum Different */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#f8fafc]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-[#eef2f6] to-[#f8fafc]"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 leading-[1.05] tracking-tight">
                  What Makes Momentum{" "}
                  <span className="text-emerald-600">
                    Different
                  </span>
                </h2>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {DIFFERENTIATORS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-emerald-300 hover:shadow-lg transition-all duration-500"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:text-emerald-700 transition-colors duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Who We Help */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0f1d]"></div>
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(59,130,246,0.04) 0%, transparent 50%)`}}></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                  Who We{" "}
                  <span className="italic">Help</span>
                </h2>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {WHO_WE_HELP.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-${item.accent === "emerald" ? "emerald" : "blue"}-500/30 hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col`}>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-${item.accent === "emerald" ? "emerald" : "blue"}-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative flex-1">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${item.accent === "emerald" ? "emerald" : "blue"}-500/10 to-${item.accent === "emerald" ? "teal" : "blue"}-500/10 flex items-center justify-center text-${item.accent === "emerald" ? "emerald" : "blue"}-400 mb-6 group-hover:text-${item.accent === "emerald" ? "emerald" : "blue"}-300 transition-colors duration-300`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white font-light leading-relaxed mb-6">{item.desc}</p>
                    </div>
                    <div className="relative mt-auto">
                      <Link href={item.link}>
                        <Button className={`w-full rounded-full h-12 font-bold bg-white text-[#0f172a] hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]`}>
                          {item.cta}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CTA */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0f172a]"></div>
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
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Take the Next Step?
                </span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/programs">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full text-lg px-8 sm:px-12 h-14 sm:h-16 font-bold bg-white text-[#0f172a] hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                  >
                    View Programs
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/employee-wellness-programs">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full text-lg px-8 sm:px-12 h-14 sm:h-16 font-bold border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
                  >
                    Employee Wellness Programs
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
