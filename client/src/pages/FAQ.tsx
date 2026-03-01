import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import logo from '../assets/images/logo.png';

const FAQS = [
  {
    question: "What do I get with the membership?",
    answer: "You get unlimited, instant access to our entire library of elite 6-month programs. To ensure total focus and mastery, your training is delivered and followed phase by phase, one month at a time."
  },
  {
    question: "Can beginners do these programs?",
    answer: "Absolutely. We have specific programs designed for all levels, including the Foundational Flow series for those starting their journey. All our programs include scalable options to match your current capability."
  },
  {
    question: "Do I need a full gym?",
    answer: "Not necessarily. We offer three distinct paths: 'The Apex Path' for full gym access, 'The Versatile Edge' for essential gear (dumbbells/kettlebells), and 'The Foundational Flow' for zero equipment training."
  },
  {
    question: "How do I cancel?",
    answer: "You can cancel your membership at any time directly from your account settings with just two clicks. No hidden fees, no contracts, and no lengthy commitments."
  },
  {
    question: "How do I access the workouts?",
    answer: "Once you start your membership, you'll get instant access to our high-performance web platform. It is mobile-first and optimized for the gym floor, so you can easily follow your daily phase on your phone."
  },
  {
    question: "How are the 6-month cycles structured?",
    answer: "Each program is a structured 6-month roadmap divided into focused monthly phases. This ensuring you master the specific mechanics and intensity of one block before unlocking the next evolution of your training."
  }
];

export default function FAQ() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="pt-24 pb-32 min-h-screen bg-primary text-white relative overflow-hidden">
      {/* Background Logo watermark - Static on internal pages */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden translate-y-4">
        <img src={logo} alt="" className="w-[120%] max-w-none grayscale invert opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium tracking-wider uppercase">
            Support
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/70 font-light">Everything you need to know about the Momentum Wellness experience.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-[40px] p-6 md:p-12 border border-white/10 shadow-2xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-white/5 last:border-0">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-white py-8 text-white hover:no-underline group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-base text-white/60 pb-8 leading-relaxed font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center bg-white/5 p-12 rounded-[40px] border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold font-heading mb-4 text-white uppercase tracking-wider">Still have questions?</h2>
          <p className="text-white/50 mb-8 font-light">We're here to ensure your transition to elite training is seamless.</p>
          <a href="mailto:support@momentumwellness.com">
            <Button className="rounded-full px-10 h-14 bg-[#e5e7eb] text-primary hover:bg-white transition-all font-bold border-none">
              Contact Support
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
