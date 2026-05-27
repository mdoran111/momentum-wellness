import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";
import { CheckCircle2, ArrowRight, Building2, Users, HeartPulse, TrendingUp, ShieldCheck, Calendar, MessageSquare } from "lucide-react";
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
    icon: TrendingUp,
    title: "Progress Tracking & Reporting",
    desc: "Aggregate team engagement and milestone reports for HR and leadership."
  }
];

export default function EmployeeWellness() {
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
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 flex items-center justify-center overflow-hidden min-h-[80vh] bg-primary">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.img
            initial={{ opacity: 0.2, scale: 1, filter: "brightness(1)" }}
            animate={{ opacity: 0.2, scale: 1, filter: "brightness(1)" }}
            src={mwSplash}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary z-[1]"></div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-sm font-medium tracking-wider uppercase text-white/90">
              For Companies With 50+ Employees
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-8 italic tracking-tight leading-[0.95]">
              Wellness That<br />Works For Your<br />Workforce
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Momentum Wellness partners with organizations to improve employee health, energy, and accountability through structured training, nutrition, habits, and community-based support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-10 h-14 bg-[#e5e7eb] text-primary hover:bg-white hover:scale-[1.02] transition-all duration-300 font-bold border-none shadow-lg">
                  Book a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6 italic tracking-tight">
              Why Companies Choose Us
            </h2>
            <p className="text-lg text-primary/60 max-w-2xl mx-auto font-light leading-relaxed">
              Organizations see measurable improvements in morale, retention, and performance when they invest in employee wellness the right way.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-[32px] bg-primary/[0.02] border border-primary/5 hover:border-primary/10 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-primary mb-3">{benefit.title}</h3>
                <p className="text-primary/60 font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 italic tracking-tight">
              How It Works
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              We handle the program design, delivery, and tracking. You see the results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We learn about your team size, goals, and current wellness landscape to design a tailored approach."
              },
              {
                step: "02",
                title: "Program Launch",
                desc: "Employees receive access to the Momentum Wellness app with monthly programming, habits, and community features."
              },
              {
                step: "03",
                title: "Ongoing Support",
                desc: "We provide engagement reports, adjust programming based on feedback, and keep your team motivated."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="text-5xl font-bold font-heading text-white/10 mb-4 italic">{item.step}</div>
                <h3 className="text-2xl font-bold font-heading text-white mb-4">{item.title}</h3>
                <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6 italic tracking-tight">
              Built for Teams
            </h2>
            <p className="text-lg text-primary/60 max-w-2xl mx-auto font-light leading-relaxed">
              Everything your employees need to stay consistent, connected, and progressing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-primary mb-1">{feature.title}</h3>
                    <p className="text-primary/60 font-light leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src={mwDashboard} alt="App Dashboard" className="rounded-3xl shadow-xl" />
              <img src={mwGoals} alt="Goals Tracking" className="rounded-3xl shadow-xl mt-8" />
              <img src={mwWorkouts} alt="Workouts" className="rounded-3xl shadow-xl -mt-8" />
              <img src={mwProgress} alt="Progress Tracking" className="rounded-3xl shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats / Social Proof */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 italic tracking-tight">
              Results That Matter
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Companies that invest in structured wellness see real returns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            {[
              { stat: "30%", label: "Average increase in employee engagement scores" },
              { stat: "25%", label: "Reduction in sick days among active participants" },
              { stat: "40%", label: "Improvement in self-reported energy levels" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8"
              >
                <div className="text-5xl md:text-6xl font-bold font-heading text-white mb-4 italic">{item.stat}</div>
                <p className="text-white/60 font-light leading-relaxed">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6 italic tracking-tight">
              Designed For Decision-Makers
            </h2>
            <p className="text-lg text-primary/60 max-w-2xl mx-auto font-light leading-relaxed">
              If you are responsible for the health and performance of your team, this program is built for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Business Owners",
                desc: "Protect your most valuable asset, your people, and build a culture that attracts and retains top talent."
              },
              {
                icon: Users,
                title: "HR Leaders",
                desc: "Deliver a wellness benefit that employees actually use, with measurable engagement and reporting."
              },
              {
                icon: HeartPulse,
                title: "Benefits Directors",
                desc: "Add a high-impact, low-maintenance wellness solution that complements your existing benefits package."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[32px] bg-primary/[0.02] border border-primary/5 text-center hover:border-primary/10 hover:shadow-lg transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-primary mb-3">{item.title}</h3>
                <p className="text-primary/60 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img src={mwSplash} alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary"></div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-8 italic tracking-tight">
              Ready to Invest in<br />Your Team?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Book a free consultation to discuss your company goals, team size, and how Momentum Wellness can support your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-10 h-14 bg-[#e5e7eb] text-primary hover:bg-white hover:scale-[1.02] transition-all duration-300 font-bold border-none shadow-lg">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base px-10 h-14 border-white/40 text-white hover:bg-white/10 transition-all duration-300 font-bold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
