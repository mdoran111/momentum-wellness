import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, ShieldCheck, Dumbbell, Calendar, LayoutGrid, Quote, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import heroBg from '../assets/images/hero-bg.png';
import programHome from '../assets/images/program-home-outdoor.jpg';
import programMinimal from '../assets/images/program-minimal.jpg';
import programGym from '../assets/images/program-gym.jpg';
import logo from '../assets/images/logo.png';
import { Link } from "wouter";

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Member since 2024",
    content: "The structure of these programs is exactly what I needed. No more wandering around the gym wondering what to do next. I've seen more progress in 3 months than in 2 years of training on my own.",
    avatar: "SJ"
  },
  {
    name: "Marcus Thompson",
    role: "Member since 2025",
    content: "The 6-month cycles changed everything for me. My big lifts have all increased by at least 20%, and my form has never been better. It's like having a high-end coach for a fraction of the price.",
    avatar: "MT"
  },
  {
    name: "Elena Rodriguez",
    role: "Member since 2024",
    content: "I love the minimal equipment programs. As someone who travels a lot for work, being able to get a structured, professional workout in a hotel gym or even a living room is a game changer.",
    avatar: "ER"
  },
  {
    name: "David Kim",
    role: "Member since 2023",
    content: "The phased approach is brilliant. It stops me from getting overwhelmed and keeps me focused on mastering one thing at a time. My mobility has improved drastically since starting the Flow series.",
    avatar: "DK"
  },
  {
    name: "Jessica Low",
    role: "Performance Athlete",
    content: "As a busy professional, I don't have time to plan. Momentum does it for me with elite-level precision. The Apex Path has redefined what I thought was possible for my absolute strength.",
    avatar: "JL"
  },
  {
    name: "Ryan Patel",
    role: "Member since 2024",
    content: "I started with Zero Equipment and just moved to Essential Gear. The transition was seamless. The programs actually build on each other. It's truly a continuous system that evolves with you.",
    avatar: "RP"
  },
  {
    name: "Sofia Valenti",
    role: "Fitness Enthusiast",
    content: "Finally, a subscription that isn't just random workouts. The 6-month cycles give me a real goal to work towards. I've never felt more athletic or more capable in my daily life.",
    avatar: "SV"
  },
  {
    name: "James Taylor",
    role: "Amateur Athlete",
    content: "The science behind the monthly unlocks is clear. You can't rush results, and Momentum respects that. It's the most sustainable progress I've ever made in over a decade of training.",
    avatar: "JT"
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentTestimonial]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
      setIsAnimating(false);
    }, 300);
  };

  const FEATURES = [
    {
      title: "Unlimited access to all programs",
      description: "Instantly unlock our library of elite 6-month cycles. To ensure total focus and mastery, your training is unlocked and followed phase by phase, month by month, providing a clear path for continuous growth."
    },
    {
      title: "Step-by-step workouts inside the app",
      description: "Follow clear, concise instructions for every exercise, with video demonstrations and timing cues to keep you on track."
    },
    {
      title: "Progression built in",
      description: "Our expert-built programs and structured planning ensure you're always moving forward, with weights and intensity that scale with your strength."
    },
    {
      title: "Zero guesswork",
      description: "Stop wondering what to do. Every session is pre-planned, giving you the mental freedom to just show up and execute."
    },
    {
      title: "Fresh content & updates",
      description: "We regularly refine our existing programs and add new specialized training blocks based on the latest sports science."
    },
    {
      title: "Cancel anytime",
      description: "No contracts, no hidden fees. You have full control over your membership and can cancel whenever you choose."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* A) Hero Section */}
      <section className="relative pt-24 pb-32 flex items-center justify-center overflow-hidden min-h-[80vh] bg-primary">
        {/* Background Logo watermark */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-15 pointer-events-none overflow-hidden translate-y-2">
          <img src={logo} alt="" className="w-[110%] max-w-none grayscale invert" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 animate-in slide-in-from-bottom-8 duration-700">
            Momentum That<br className="md:hidden" /> Moves With You.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 duration-700 delay-150">
            Expertly designed training plans for those who value structure, science-based progression, and real-world results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/programs" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] font-bold border-none" data-testid="button-hero-start">
                Unlock Full Access — $14.99/mo
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base px-8 h-14 border-white text-white hover:bg-white/10" onClick={() => document.getElementById('includes')?.scrollIntoView({ behavior: 'smooth' })}>
              See What's Included
            </Button>
          </div>
        </div>
      </section>

      {/* B) Social proof band */}
      <section className="bg-secondary py-8 border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm font-medium text-primary">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>Structured 6-month series</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-primary/30"></div>
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-5 h-5" />
              <span>Progressive monthly unlocks</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-primary/30"></div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>One focused month at a time</span>
            </div>
          </div>
        </div>
      </section>

      {/* C) What you get */}
      <section id="includes" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Everything You Need To Succeed</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Access a continuous evolution of elite training. Our structured 6-month cycles are delivered in focused monthly phases, providing a continuous roadmap for long-term growth and performance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {FEATURES.map((feature, i) => (
              <Card 
                key={i} 
                className={`bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden ${expandedFeature === i ? 'ring-2 ring-primary/10' : ''}`}
                onClick={() => setExpandedFeature(expandedFeature === i ? null : i)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <ChevronDown className={`w-5 h-5 text-primary/30 transition-transform duration-300 ${expandedFeature === i ? 'rotate-180' : ''}`} />
                  </div>
                  <CardTitle className="text-xl text-primary font-heading leading-tight">{feature.title}</CardTitle>
                  <div className={`grid transition-all duration-300 ease-in-out ${expandedFeature === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-sm text-primary/70 leading-relaxed border-t border-primary/5 pt-4">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* D) How it works */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-2">How It Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-primary/10 z-0"></div>
            
            {[
              { step: 1, title: "Unlock Access", desc: "Sign up and get instant access." },
              { step: 2, title: "Pick a program", desc: "Choose your goal and equipment." },
              { step: 3, title: "Start training", desc: "Follow workouts and build momentum." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-2 border-secondary rounded-full flex items-center justify-center text-xl font-bold font-heading text-primary shadow-sm mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E) Featured programs */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Featured Programs</h2>
              <p className="text-white/80 max-w-2xl">A glimpse inside the library. Your membership unlocks them all.</p>
            </div>
            <Link href="/programs" className="hidden md:flex items-center text-white font-semibold hover:underline">
                View All <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Full Gym */}
            <Card className="overflow-hidden border-white/10 bg-white/5 flex flex-col hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img src={programGym} alt="The Apex Path" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-white px-2 py-1 rounded">Performance</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60 bg-white/10 px-2 py-1 rounded">Full Gym</span>
                </div>
                <CardTitle className="text-white">The Apex Path</CardTitle>
                <CardDescription className="text-white/70">A comprehensive 6-month journey designed to transform your physical capability and mental focus using a full suite of strength equipment.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4 border-t border-white/10">
                <Link href="/programs" className="text-sm font-semibold text-white flex items-center w-full justify-between group">
                    View Current Month <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>

            {/* Card 2: Minimal Equipment */}
            <Card className="overflow-hidden border-white/10 bg-white/5 flex flex-col hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img src={programMinimal} alt="The Versatile Edge" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-white px-2 py-1 rounded">Efficiency</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60 bg-white/10 px-2 py-1 rounded">Essential Gear</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-white mb-2">The Versatile Edge</h3>
                <CardDescription className="text-white/70">Unlock total-body vitality with a 6-month curriculum centered around dumbbells, bands, and kettlebells—perfect for the modern, high-functioning individual.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4 border-t border-white/10">
                <Link href="/programs" className="text-sm font-semibold text-white flex items-center w-full justify-between group">
                    View Current Month <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>

            {/* Card 3: At Home */}
            <Card className="overflow-hidden border-white/10 bg-white/5 flex flex-col hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img src={programHome} alt="The Foundational Flow" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-white px-2 py-1 rounded">Freedom</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60 bg-white/10 px-2 py-1 rounded">Zero Equipment</span>
                </div>
                <CardTitle className="text-white">The Foundational Flow</CardTitle>
                <CardDescription className="text-white/70">Reconnect with your body through a 6-month bodyweight-only series focused on sustainable movement, mobility, and high-intensity conditioning.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4 border-t border-white/10">
                <Link href="/programs" className="text-sm font-semibold text-white flex items-center w-full justify-between group">
                    View Current Month <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/programs">
              <Button variant="outline" className="w-full text-white border-white hover:bg-white/10">View All Programs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* F) Pricing teaser */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">Simple, Transparent Pricing</h2>
          <div className="bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/20">
            <div className="text-6xl font-bold font-heading mb-4">$14.99<span className="text-2xl text-white/70 font-normal">/month</span></div>
            <p className="text-xl text-white/90 mb-8 font-medium">Unlimited programs • Cancel anytime</p>
            <Link href="/programs">
              <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-12 h-14 bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] font-bold border-none" data-testid="button-pricing-teaser">
                Unlock Full Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Quote className="w-12 h-12 text-primary/20 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-12">Member Success Stories</h2>
          
          <div className="relative bg-white p-8 md:p-16 rounded-[40px] shadow-xl border border-primary/5 min-h-[400px] flex flex-col justify-center overflow-hidden">
            <div className={`transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed italic mb-8">
                "{TESTIMONIALS[currentTestimonial].content}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-3 shadow-lg">
                  {TESTIMONIALS[currentTestimonial].avatar}
                </div>
                <h4 className="font-bold text-lg text-primary">{TESTIMONIALS[currentTestimonial].name}</h4>
                <p className="text-sm text-primary/60 font-medium">{TESTIMONIALS[currentTestimonial].role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handlePrev}
                className="rounded-full bg-white border-primary/10 shadow-lg hover:bg-primary hover:text-white transition-all h-12 w-12"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleNext}
                className="rounded-full bg-white border-primary/10 shadow-lg hover:bg-primary hover:text-white transition-all h-12 w-12"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8 md:absolute md:bottom-8 md:left-0 md:right-0">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonial === i ? "w-8 bg-primary" : "bg-primary/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* G) FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-primary text-white border-none shadow-lg">
              <h3 className="text-lg font-bold font-heading mb-2">What do I get with the membership?</h3>
              <p className="text-white/80">You get unlimited, instant access to our entire library of 6-month programs. To ensure optimal focus and results, you'll view and follow your training one month at a time.</p>
            </div>
            <div className="p-6 rounded-2xl bg-primary text-white border-none shadow-lg">
              <h3 className="text-lg font-bold font-heading mb-2">Can beginners do these programs?</h3>
              <p className="text-white/80">Absolutely. We have specific programs designed for all levels, and all our programs include scalable options to match your current fitness level.</p>
            </div>
            <div className="p-6 rounded-2xl bg-primary text-white border-none shadow-lg">
              <h3 className="text-lg font-bold font-heading mb-2">How do I cancel?</h3>
              <p className="text-white/80">You can cancel anytime directly from your account settings with just two clicks. No hidden fees or lengthy commitments.</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/faq">
              <a className="text-primary font-semibold hover:underline inline-flex items-center">
                Read all FAQs <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* H) Final CTA */}
      <section className="py-24 bg-primary text-white border-t border-white/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Start today. Build momentum.</h2>
          <p className="text-xl text-white/70 mb-10">Stop overthinking your training. Get the structure you need for $14.99/mo.</p>
          <Link href="/programs">
            <Button size="lg" className="rounded-full text-base px-10 h-14 font-bold shadow-lg hover:shadow-xl transition-all bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] border-none" data-testid="button-final-cta">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}