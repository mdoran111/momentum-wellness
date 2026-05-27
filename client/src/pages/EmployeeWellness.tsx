import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";
import {
  ArrowRight,
  Building2,
  Users,
  HeartPulse,
  TrendingUp,
  ShieldCheck,
  Calendar,
  MessageSquare,
  Activity,
  BarChart3,
  Clock,
  Sparkles,
  CheckCircle2,
  Briefcase,
  UserCog,
  Award
} from "lucide-react";
import mwSplash from "@assets/MW1_splash_1779922530400.png";
import mwDashboard from "@assets/MW2_app_dashboard_1779922530403.png";
import mwGoals from "@assets/MW3_goals_1779922530404.png";
import mwWorkouts from "@assets/MW4_workouts_1779922530404.png";
import mwProgress from "@assets/MW5_progress_1779922530404.png";

const BENEFITS = [
  {
    icon: HeartPulse,
    title: "Health & Energy",
    desc: "Help your team feel better, sleep deeper, and show up with more focus and stamina every day."
  },
  {
    icon: TrendingUp,
    title: "Productivity & Performance",
    desc: "Active employees are more engaged, creative, and resilient under pressure."
  },
  {
    icon: Users,
    title: "Culture & Accountability",
    desc: "Build connection through shared goals, team challenges, and peer support."
  },
  {
    icon: ShieldCheck,
    title: "Retention & Recruitment",
    desc: "Top talent expects wellness benefits. Stand out as a company that invests in its people."
  }
];

const FEATURES = [
  {
    icon: Calendar,
    title: "Structured Monthly Programming",
    desc: "Fresh strength, cardio, and habit challenges unlock each month so engagement never plateaus."
  },
  {
    icon: MessageSquare,
    title: "Community & Accountability",
    desc: "Team channels, leaderboards, and progress sharing keep employees motivated and connected."
  },
  {
    icon: HeartPulse,
    title: "Nutrition & Lifestyle Habits",
    desc: "Daily guidance on hydration, sleep, recovery, and mindful eating alongside workouts."
  },
  {
    icon: BarChart3,
    title: "Progress Tracking & Reporting",
    desc: "Aggregate team engagement and milestone reports for HR and leadership."
  }
];

const TRUSTED_AUDIENCES = [
  { icon: Briefcase, title: "Business Owners", desc: "CEOs & founders investing in culture" },
  { icon: UserCog, title: "HR Leaders", desc: "People teams driving engagement" },
  { icon: Award, title: "Benefits Directors", desc: "Optimizing wellness spend" }
];

export default function EmployeeWellness() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
        <div className="absolute inset-0 opacity-30">
          <img src={mwSplash} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a]/80"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-10 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-semibold tracking-wider uppercase text-white/80">
                For Companies With 50+ Employees
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.95] tracking-tight">
              Wellness That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
                Works
              </span>
              <br />
              For Your{" "}
              <span className="italic font-serif">Workforce</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/50 max-w-2xl mb-14 font-light leading-relaxed">
              Momentum Wellness partners with organizations to improve employee health, energy, and accountability through structured training, nutrition, and community-based support.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full text-base px-10 h-16 bg-white text-[#0f172a] hover:bg-white/90 transition-all duration-300 font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-base px-10 h-16 border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 font-bold"
                >
                  Contact Our Team
                </Button>
              </Link>
            </div>

            {/* Trusted by strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-20 pt-10 border-t border-white/5"
            >
              <p className="text-sm text-white/30 uppercase tracking-widest font-semibold mb-6">
                Trusted by forward-thinking companies
              </p>
              <div className="flex flex-wrap gap-12 items-center opacity-40">
                <div className="flex items-center gap-2 text-white/60">
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold">Enterprise Ready</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-semibold">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">50-5,000+ Employees</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Activity className="w-5 h-5" />
                  <span className="font-semibold">Real-Time Reporting</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Companies Choose Us */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/50 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
              The Business Case
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Why Companies <span className="italic">Choose Us</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              Organizations see measurable improvements in morale, retention, and performance when they invest in employee wellness the right way.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 backdrop-blur-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-8 text-white/80 group-hover:text-white group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{benefit.title}</h3>
                <p className="text-white/40 font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]"></div>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)`
            }}
          ></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
              Simple Setup
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              How It <span className="italic">Works</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              We handle the program design, delivery, and tracking. You see the results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We learn about your team size, goals, and current wellness landscape to design a tailored approach.",
                icon: MessageSquare
              },
              {
                step: "02",
                title: "Program Launch",
                desc: "Employees receive access to the Momentum Wellness app with monthly programming, habits, and community features.",
                icon: Sparkles
              },
              {
                step: "03",
                title: "Ongoing Support",
                desc: "We provide engagement reports, adjust programming based on feedback, and keep your team motivated.",
                icon: Activity
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                )}

                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center text-emerald-400">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-5xl font-bold text-white/[0.03] italic">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/30 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
              The Platform
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Built For <span className="italic">Teams</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              Everything your employees need to stay consistent, connected, and progressing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-10"
            >
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center shrink-0 text-white/60 group-hover:text-white group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
                    <p className="text-white/40 font-light leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-[40px] blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <img src={mwDashboard} alt="App Dashboard" className="rounded-[24px] shadow-2xl border border-white/5" />
                <img src={mwGoals} alt="Goals Tracking" className="rounded-[24px] shadow-2xl border border-white/5 mt-10" />
                <img src={mwWorkouts} alt="Workouts" className="rounded-[24px] shadow-2xl border border-white/5 -mt-10" />
                <img src={mwProgress} alt="Progress Tracking" className="rounded-[24px] shadow-2xl border border-white/5" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]"></div>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(16,185,129,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.08) 0%, transparent 50%)`
            }}
          ></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
              Proven Impact
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Results That <span className="italic">Matter</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              Companies that invest in structured wellness see real, measurable returns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { stat: "30%", label: "Average increase in employee engagement scores", sub: "Within 90 days" },
              { stat: "25%", label: "Reduction in sick days among active participants", sub: "Annual measurement" },
              { stat: "40%", label: "Improvement in self-reported energy levels", sub: "Quarterly surveys" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15 }}
                className="text-center p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                  {item.stat}
                </div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mx-auto mb-6"></div>
                <p className="text-white/60 font-light leading-relaxed mb-2">{item.label}</p>
                <p className="text-sm text-white/30 font-medium uppercase tracking-wider">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/20 to-[#0f172a]"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-24"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
              Who We Serve
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Designed For <span className="italic">Decision-Makers</span>
            </h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
              If you are responsible for the health and performance of your team, this program is built for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TRUSTED_AUDIENCES.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15 }}
                className="group p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mx-auto mb-8 text-white/60 group-hover:text-white group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Checklist */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]"></div>
        <div className="absolute inset-0 opacity-20">
          <img src={mwSplash} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/95 to-[#0f172a]"></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-4 block">
                What You Get
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                A Complete <span className="italic">Solution</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {[
                "Monthly wellness programming for all fitness levels",
                "Strength, cardio, and mobility training plans",
                "Daily habit tracking for sleep, nutrition, hydration",
                "Team challenges and company-wide leaderboards",
                "Progress photos and body composition tracking",
                "Nutrition guidance and meal planning support",
                "Community forums and peer accountability groups",
                "Quarterly engagement reports for leadership",
                "Dedicated account manager for program oversight",
                "Custom branding and company-specific content"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-lg text-white/70 font-light">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(16,185,129,0.1) 0%, transparent 70%)`
            }}
          ></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-400 mb-6 block">
              Get Started
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[0.95]">
              Ready to Invest in<br />
              <span className="italic">Your Team?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/40 mb-16 font-light leading-relaxed max-w-2xl mx-auto">
              Book a free consultation to discuss your company goals, team size, and how Momentum Wellness can support your organization.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full text-lg px-12 h-16 bg-white text-[#0f172a] hover:bg-white/90 transition-all duration-300 font-bold shadow-[0_0_60px_rgba(255,255,255,0.15)] hover:shadow-[0_0_80px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                >
                  Book a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-lg px-12 h-16 border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 font-bold"
                >
                  Contact Our Team
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-20 flex items-center justify-center gap-8 text-white/20"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">15-min call</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20"></div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-sm">No commitment</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20"></div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Custom proposal</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
