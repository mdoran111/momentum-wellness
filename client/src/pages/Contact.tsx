import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, ArrowRight, User, Building2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact | Momentum Wellness"
        description="Get in touch with Momentum Wellness. Questions about individual programs, employee wellness, or the app? We respond within 24-48 hours."
        keywords="contact Momentum Wellness, fitness coaching support, employee wellness inquiry, wellness program help"
      />
      <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
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
                  <span className="text-sm font-semibold tracking-wider uppercase text-white">Get in Touch</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                  We're Here to{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    Help
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white font-light leading-relaxed max-w-3xl mx-auto mb-10">
                  Whether you're interested in individual coaching or a corporate wellness program, reach out and we'll respond within 24-48 hours.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/programs" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-white text-[#0f172a] hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
                      <User className="mr-2 w-5 h-5" />
                      Individual Programs
                    </Button>
                  </Link>
                  <Link href="/employee-wellness-programs" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base px-8 h-14 border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 font-bold">
                      <Building2 className="mr-2 w-5 h-5" />
                      Corporate Wellness
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b]/30 to-[#0f172a]"></div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-white/[0.02] rounded-3xl border border-white/5 p-8 md:p-12"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Message Sent!</h3>
                  <p className="text-white/70 mb-8 font-light">Thanks for reaching out. We'll be in touch shortly.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full text-white border-white/20 hover:bg-white/10 h-12 px-8">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-white">Name</label>
                      <Input id="name" required placeholder="John Doe" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-white">Email</label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiry" className="text-sm font-semibold text-white">Inquiry Type</label>
                    <Input id="inquiry" required placeholder="Individual program, Corporate wellness, General question..." className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-white">Message</label>
                    <Textarea id="message" required placeholder="How can we help?" className="min-h-[140px] bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl" />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 text-lg font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-300"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
