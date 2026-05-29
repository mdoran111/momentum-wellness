import { useEffect } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const FAQS = [
  // Individual
  {
    q: "What do I get with the $14.99/month membership?",
    a: "You get monthly phase unlocks with structured strength and cardio workouts, daily habit tracking, nutrition guidance, progress tracking, and community support. Everything is delivered through the Momentum Wellness app."
  },
  {
    q: "Can I do these workouts at home?",
    a: "Yes. Our programs are designed to work in gyms, at home, or on the go. We provide options so you can adapt workouts to your available space and equipment."
  },
  {
    q: "How is the program structured?",
    a: "Momentum Wellness is a continuous program with monthly phase unlocks. Each month builds on the last, keeping your training engaging while ensuring long-term progression."
  },
  {
    q: "How do I cancel?",
    a: "You can cancel at any time from your account settings with no hidden fees or contracts."
  },
  // Company
  {
    q: "What types of companies do you work with?",
    a: "We partner with organizations across industries, especially those with 50+ employees looking to improve workforce health, accountability, and engagement."
  },
  {
    q: "Is this only for certain industries?",
    a: "No. While our approach is valuable for physically demanding industries, our programs are designed for all professions, including office-based teams, healthcare, logistics, and more."
  },
  {
    q: "Do employees need a gym membership?",
    a: "No. Employees can follow programs at home, in a gym, or on the go."
  },
  {
    q: "Do you offer company-wide wellness programs?",
    a: "Yes. Momentum Wellness is built to support company-wide initiatives with structured, scalable programming."
  },
  {
    q: "How do we get started?",
    a: "Book a corporate wellness consultation through our contact page, and we'll connect with you to discuss your company's needs."
  }
];

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="FAQ | Momentum Wellness"
        description="Answers to common questions about individual programs, employee wellness programs, the app, and how to get started."
        keywords="wellness FAQ, fitness coaching questions, corporate wellness FAQ, employee wellness FAQ, app questions"
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
                  <span className="text-sm font-semibold tracking-wider uppercase text-white">Support</span>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                  Questions?{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                    We've Got Answers
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-white font-light leading-relaxed max-w-3xl mx-auto">
                  Can't find what you're looking for? Reach out and we'll get back to you within 24-48 hours.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="bg-white/[0.02] rounded-3xl p-6 md:p-12 border border-white/5">
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/5 last:border-0">
                    <AccordionTrigger className="text-left font-bold text-base md:text-lg hover:text-white py-6 md:py-8 text-white hover:no-underline group tracking-tight">
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-white/70 pb-8 leading-relaxed font-light">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Still Have{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Questions?
                </span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full text-lg px-8 sm:px-12 h-14 font-bold bg-white text-[#0f172a] hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-[1.02]"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/programs">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full text-lg px-8 sm:px-12 h-14 font-bold border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
                  >
                    View Programs
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
