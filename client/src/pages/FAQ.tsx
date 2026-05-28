import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import logo from '../assets/images/logo.png';

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
      <section className="relative pt-24 pb-32 flex items-center justify-center overflow-hidden min-h-[80vh] bg-[#0f172a] text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
        <div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)`}}></div>
        <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-sm font-medium tracking-wider uppercase text-white/90">
              Support
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-8 italic tracking-tight">Frequently Asked Questions</h1>
            <p className="text-xl text-white/70 font-light leading-relaxed max-w-2xl">Everything you need to know about the Momentum Wellness experience.</p>
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
