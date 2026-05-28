import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FAQS = [
  {
    question: "What do I get with the membership?",
    answer: "You get access to our comprehensive fitness app with strength training workouts, cardio sessions, daily habit tracking, and progress photo features. New workouts are added every month to keep you challenged and engaged."
  },
  {
    question: "Can I do these workouts at home?",
    answer: "Absolutely. Our strength and cardio workouts are designed to work in various settings—whether it's a gym, home, or even outdoors. We provide options so you can adapt workouts to your available space and equipment."
  },
  {
    question: "How is the program structured?",
    answer: "Momentum Wellness is a continuous fitness program with monthly phase unlocks. Each month brings new programming built on your previous progress. This approach keeps your training engaging while ensuring long-term, sustainable progression."
  },
  {
    question: "How do I cancel?",
    answer: "You can cancel your membership at any time directly from your account settings with just two clicks. No hidden fees, no contracts, and no lengthy commitments."
  },
  {
    question: "What's included in the progress photos feature?",
    answer: "The progress photos feature lets you upload photos each month and compare them side-by-side to visualize your transformation. It's a powerful motivational tool that shows real, tangible results over time."
  },
  {
    question: "What are the daily habits?",
    answer: "Daily habits go beyond just workouts. We guide you on nutrition, hydration, sleep, and recovery practices that support your fitness goals. Building these sustainable habits is what creates real, lasting change."
  }
];

export default function FAQ() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a]">
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
                  Support
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                Questions?{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  We've Got Answers
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white mb-4 font-light leading-relaxed max-w-3xl mx-auto">
                Everything you need to know about the Momentum Wellness experience.
              </p>
              <p className="text-base text-white mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                Can't find what you're looking for? Reach out directly and we'll get back to you within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-white text-[#0f172a] hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)]">
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/programs" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base px-8 h-14 border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 font-bold">
                    Explore Programs
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
                  "Instant access",
                  "Cancel anytime",
                  "No hidden fees",
                  "24-48 hour support"
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

      <div className="bg-[#0f172a]">
        <div className="container relative z-10 mx-auto px-4 max-w-3xl py-24">

        <div className="bg-white/[0.02] rounded-[40px] p-6 md:p-12 border border-white/5 shadow-md">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/5 last:border-0">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-white py-8 text-white hover:no-underline group italic tracking-tight">
                  <span className="group-hover:translate-x-1 transition-transform duration-300 uppercase">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-white/70 pb-8 leading-relaxed font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center bg-white/[0.02] p-12 rounded-[40px] border border-white/5 shadow-md">
          <h2 className="text-2xl font-bold font-heading mb-4 text-white uppercase tracking-wider italic tracking-tight">Still have questions?</h2>
          <p className="text-white/60 mb-8 font-light">We're here to ensure your transition to professional training is seamless.</p>
          <a href="mailto:info@momentumwellness.health">
            <Button className="rounded-full px-10 h-14 bg-white text-[#0f172a] hover:bg-white/90 transition-all font-bold border-none shadow-xl">
              Contact Support
            </Button>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}
