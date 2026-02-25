import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQS = [
  {
    question: "What do I get with the membership?",
    answer: "You get unlimited access to our entire library of training programs. This includes everything from beginner fundamentals to advanced hypertrophy and performance blocks. You can view all workouts, track progress, and access nutrition guidelines all in one place."
  },
  {
    question: "Can beginners do these programs?",
    answer: "Absolutely. We have specifically designed 'Return-to-Training' and 'Foundation' programs that are perfect for beginners. The app provides clear instructions for every movement, and you can progress at your own pace."
  },
  {
    question: "Do I need a full gym?",
    answer: "Not necessarily. While our hypertrophy and heavy strength programs are best performed in a fully equipped gym, we have dedicated 'Dumbbell Only' and 'Minimal Equipment' tracks for those training at home or while traveling."
  },
  {
    question: "How do I cancel?",
    answer: "Canceling is straightforward and transparent. You can cancel your membership at any time right from your account settings with just two clicks. There are no hidden fees or cancellation penalties."
  },
  {
    question: "Is nutrition included?",
    answer: "The membership focuses heavily on structured training, but it does include foundational nutrition guidelines and calculators to help you align your diet with your training goals (whether that's fat loss, maintenance, or muscle gain)."
  },
  {
    question: "How do I access the workouts?",
    answer: "Once you start your membership, you'll get instant access to our web app. It is mobile-optimized so you can easily pull up your daily workout on your phone while on the gym floor."
  },
  {
    question: "Are refunds offered?",
    answer: "We offer a 7-day money-back guarantee. If you log in, review the programs, and decide it's not the right fit for you within your first week, simply email support and we'll issue a full refund."
  }
];

export default function FAQ() {
  return (
    <div className="pt-16 pb-24 min-h-screen bg-primary text-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-white/80">Everything you need to know about the Momentum Wellness membership.</p>
        </div>

        <div className="bg-white/5 rounded-3xl p-6 md:p-8 border border-white/10 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-white/10">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-white py-6 text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-white/70 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center bg-white/10 p-8 rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold font-heading mb-4 text-white">Still have questions?</h2>
          <p className="text-white/60 mb-6">We're here to help. Reach out to our team and we'll get back to you shortly.</p>
          <a href="/contact">
            <Button variant="outline" className="rounded-full px-8 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Contact Support
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}