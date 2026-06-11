import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Building2, HelpCircle, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { analyticsEvents, trackEvent } from "@/lib/analytics";

const individualQuestions = [
  {
    question: "What is included in the individual membership?",
    answer:
      "The individual program includes structured training, nutrition guidance, habit tracking, progress tracking, community support, and accountability through the Momentum Wellness app.",
  },
  {
    question: "Can I follow the program at home or in a gym?",
    answer:
      "Yes. The program is designed to support different environments and equipment access, whether you train at home, in a gym, or while traveling.",
  },
  {
    question: "Is the program suitable for beginners?",
    answer:
      "Yes. Momentum Wellness is designed to give beginners a clear starting point while also supporting people with previous training experience.",
  },
  {
    question: "How is progress tracked?",
    answer:
      "The app helps you organize goals, workouts, habits, check-ins, and progress information in one place.",
  },
  {
    question: "How do I get started or ask about cancellation?",
    answer:
      "Select Start Your Program to open the secure Trainerize enrollment page. Contact Momentum Wellness with questions about billing, cancellation, or app access.",
  },
];

const companyQuestions = [
  {
    question: "What companies are a good fit?",
    answer:
      "The current program is designed for companies with 50 or more employees that want a structured approach to workforce health, accountability, morale, and community.",
  },
  {
    question: "Is the program limited to certain industries?",
    answer:
      "No. Momentum Wellness can support teams across offices, healthcare, logistics, manufacturing, trades, and other industries.",
  },
  {
    question: "Do employees need a gym membership?",
    answer:
      "No. Employees can use the program at home, in a gym, or on the go based on their available space, equipment, and experience.",
  },
  {
    question: "How is a company program set up?",
    answer:
      "The process begins with a consultation, followed by program setup, employee onboarding, launch, engagement support, and employer-level reporting.",
  },
  {
    question: "How do we request pricing or book a consultation?",
    answer:
      "Corporate wellness pricing is consultation-based and is not published online. Use the Contact page to book a Corporate Wellness Consultation.",
  },
];

function QuestionGroup({
  title,
  icon: Icon,
  questions,
  prefix,
}: {
  title: string;
  icon: LucideIcon;
  questions: typeof individualQuestions;
  prefix: string;
}) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-400">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 sm:px-7">
        <Accordion type="single" collapsible>
          {questions.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`${prefix}-${index}`}
              className="border-white/10 last:border-0"
            >
              <AccordionTrigger className="py-6 text-left text-base font-semibold text-white hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 leading-7 text-slate-400">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default function FAQ() {
  return (
    <>
      <SEO
        title="Momentum Wellness FAQ"
        description="Find answers about Momentum Wellness programs, app-based coaching, nutrition support, habit tracking, accountability, and employee wellness options."
        keywords="Momentum Wellness FAQ, individual coaching questions, employee wellness questions, wellness app support"
      />

      <main className="min-h-screen overflow-hidden bg-[#0f172a] text-white">
        <section className="relative px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(16,185,129,0.13),transparent_38%)]" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container relative mx-auto max-w-3xl text-center"
          >
            <HelpCircle className="mx-auto h-10 w-10 text-emerald-400" />
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Practical answers about individual coaching and employee wellness
              programs.
            </p>
          </motion.div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="container mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <QuestionGroup
              title="Individual Coaching"
              icon={User}
              questions={individualQuestions}
              prefix="individual"
            />
            <QuestionGroup
              title="Employee Wellness"
              icon={Building2}
              questions={companyQuestions}
              prefix="company"
            />
          </div>
        </section>

        <section className="border-t border-white/10 bg-slate-950 px-4 py-14 sm:px-6 lg:px-8">
          <div className="container mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="text-2xl font-bold">Still have a question?</h2>
              <p className="mt-2 text-slate-400">
                Tell us what you need help with.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="min-h-12 rounded-full border-0 bg-emerald-500 px-7 text-white hover:bg-emerald-400"
            >
              <Link
                href="/contact"
                onClick={() =>
                  trackEvent(analyticsEvents.contact, {
                    placement: "faq_footer",
                  })
                }
              >
                Contact Us
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
