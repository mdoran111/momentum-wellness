import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    content: "As a busy professional, I don't have time to plan. Momentum does it for me with professional precision. The Apex Path has redefined what I thought was possible for my absolute strength.",
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

const FEATURES = [
  {
    title: "Unlimited program access",
    description: "Your membership unlocks our entire library of structured 6-month programs. Switch between paths as your goals or environment change.",
    details: "Choose from The Apex Path, The Versatile Edge, or The Foundational Flow at any time."
  },
  {
    title: "Monthly phase unlocks",
    description: "Focus is the key to progress. We deliver your training in structured monthly phases to ensure total mastery and continuous growth.",
    details: "New training blocks appear in your dashboard every 30 days as you progress through the 6-month cycle."
  },
  {
    title: "App-based coaching cues",
    description: "Never wonder about form again. Every movement includes professional video cues and performance notes optimized for the gym floor.",
    details: "Detailed breakdowns of tempo, setup, and common pitfalls for every single exercise in the library."
  },
  {
    title: "Zero guesswork",
    description: "Stop wondering what to do. Every session is pre-planned, giving you the mental freedom to just show up and execute.",
    details: "Warm-ups, working sets, intensity targets, and cool-downs are all handled for you."
  },
  {
    title: "Fresh content & updates",
    description: "We regularly refine our existing programs and add new specialized training blocks based on the latest sports science.",
    details: "Continuous refinements to programming based on member feedback and emerging performance research."
  },
  {
    title: "Cancel anytime",
    description: "No contracts, no hidden fees. You have full control over your membership and can cancel whenever you choose.",
    details: "Manage your subscription with a single click. No phone calls, no hassle, no questions asked."
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2200);
    return () => clearTimeout(timer);
  }, []);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.21, 1.11, 0.81, 0.99]
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* A) Hero Section */}
      <section className="relative pt-24 pb-32 flex items-center justify-center overflow-visible min-h-[80vh] bg-primary">
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-visible">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8, filter: "brightness(4)" }}
            animate={{ 
              opacity: [0, 1, 0.2],
              scale: [0.8, 1.2, 1],
              filter: ["brightness(4)", "brightness(4)", "brightness(1)"]
            }}
            transition={{ 
              duration: 2.8,
              times: [0, 0.2, 1],
              ease: "easeOut"
            }}
            src={logo} 
            alt="" 
            className="w-96 max-w-none grayscale invert" 
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-4xl mx-auto"
              >
                <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  Professional training cycles delivered in focused monthly phases. Build measurable momentum for $14.99/mo.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link href="/programs">
                    <Button size="lg" className="rounded-full text-lg px-12 h-16 font-bold shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 bg-[#e5e7eb] text-primary hover:bg-white border-none" data-testid="button-get-started-hero">
                      Explore Programs
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="rounded-full text-lg px-12 h-16 font-bold border-white/40 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300" data-testid="button-about-hero">
                      Our Philosophy
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* B) Trust Bar */}
      <section className="py-16 bg-white border-b border-primary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 grayscale opacity-40"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="group-hover:translate-x-1 transition-transform duration-500 font-bold uppercase tracking-widest text-xs">Science-Based Programming</span>
            </motion.div>
            <div className="hidden md:block w-px h-8 bg-primary/10"></div>
            <motion.div variants={itemVariants} className="flex items-center gap-3 group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <span className="group-hover:translate-x-1 transition-transform duration-500 font-bold uppercase tracking-widest text-xs">Progressive monthly unlocks</span>
            </motion.div>
            <div className="hidden md:block w-px h-8 bg-primary/10"></div>
            <motion.div variants={itemVariants} className="flex items-center gap-3 group cursor-default">
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="group-hover:translate-x-1 transition-transform duration-500 font-bold uppercase tracking-widest text-xs">One focused month at a time</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* C) What you get */}
      <section id="includes" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white tracking-tight italic">Everything You Need To Succeed</motion.h2>
            <motion.p variants={itemVariants} className="text-white/80 max-w-2xl mx-auto text-lg font-light">Access a continuous evolution of professional training. Our structured 6-month cycles are delivered in focused monthly phases, providing a continuous roadmap for long-term growth and performance.</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          >
            {FEATURES.map((feature, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              >
                <Card 
                  className={`bg-white/5 backdrop-blur-md border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:shadow-white/5 transition-all duration-500 group cursor-pointer overflow-hidden rounded-[32px] ${expandedFeature === i ? 'ring-1 ring-white/30' : ''}`}
                  onClick={() => setExpandedFeature(expandedFeature === i ? null : i)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold font-heading text-white italic tracking-tight uppercase">{feature.title}</CardTitle>
                    <CardDescription className="text-white/60 text-sm leading-relaxed font-light mt-2 group-hover:text-white/80 transition-colors">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <AnimatePresence>
                    {expandedFeature === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <CardContent className="pb-8 pt-0 text-xs text-white/50 font-medium leading-relaxed uppercase tracking-widest border-t border-white/5 mt-4">
                          <p className="mt-4">{feature.details}</p>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* D) How it works */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-4 italic tracking-tight uppercase">The Evolution</h2>
            <p className="text-primary/60 max-w-xl mx-auto text-lg font-light leading-relaxed">Three steps to professional performance. One commitment to growth.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-primary/5 z-0"></div>
            
            {[
              { step: "01", title: "Unlock Access", desc: "Secure your membership and get instant entry to our training platform." },
              { step: "02", title: "Select Cycle", desc: "Choose the 6-month program that matches your equipment and goal." },
              { step: "03", title: "Build Momentum", desc: "Execute focused monthly phases and track your measurable evolution." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-2xl font-bold font-heading text-primary shadow-[0_10px_30px_rgba(0,0,0,0.05)] mb-8 group-hover:shadow-xl transition-all duration-500 italic"
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 italic tracking-tight text-primary uppercase">{item.title}</h3>
                <p className="text-primary/60 text-base font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E) Featured programs */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-center md:text-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-white tracking-tight italic uppercase">Select Your Path</h2>
              <p className="text-white/60 text-lg font-light leading-relaxed">Structured cycles designed for measurable results. Select the roadmap that matches your environment.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/programs" className="hidden md:flex items-center text-white font-bold hover:text-white/70 transition-colors uppercase tracking-widest text-sm group">
                  View All Programs <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { image: programGym, goal: "Performance", eq: "Full Gym", title: "The Apex Path", desc: "A comprehensive 6-month journey designed to transform your physical capability using a full suite of strength equipment." },
              { image: programMinimal, goal: "Efficiency", eq: "Essential Gear", title: "The Versatile Edge", desc: "Unlock total-body vitality with a 6-month curriculum centered around dumbbells, bands, and kettlebells." },
              { image: programHome, goal: "Freedom", eq: "Zero Equipment", title: "The Foundational Flow", desc: "Reconnect with your body through a 6-month bodyweight-only series focused on movement and mobility." }
            ].map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -12, transition: { duration: 0.4 } }}
              >
                <Card className="overflow-hidden border-white/5 bg-white/[0.03] backdrop-blur-md flex flex-col hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-[32px] group h-full relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="h-64 overflow-hidden relative">
                    <img src={prog.image} alt={prog.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-6 left-6 flex gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-white px-3 py-1.5 rounded-full shadow-xl">{prog.goal}</span>
                    </div>
                  </div>
                  <CardHeader className="flex-1 p-8 relative">
                    <div className="absolute top-0 left-8 w-12 h-px bg-white/20 transform -translate-y-px group-hover:w-20 group-hover:bg-white/40 transition-all duration-500"></div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-3 group-hover:text-white/80 transition-colors">{prog.eq}</p>
                    <h3 className="text-2xl font-bold font-heading text-white mb-4 italic tracking-tight">{prog.title}</h3>
                    <CardDescription className="text-white/60 text-base leading-relaxed font-light line-clamp-3 group-hover:text-white/80 transition-colors">{prog.desc}</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-8 pt-0 mt-auto">
                    <Link href="/programs" className="text-xs font-bold text-white uppercase tracking-widest flex items-center w-full justify-between group/link">
                        <span className="relative overflow-hidden py-1">
                          Explore Cycle
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/link:w-full"></span>
                        </span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link href="/programs">
              <Button variant="outline" className="w-full text-white border-white hover:bg-white/10">View All Programs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* F) Pricing teaser */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 uppercase italic tracking-tight">Simple, Transparent Pricing</h2>
          <div className="bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md border border-white/20">
            <div className="text-6xl font-bold font-heading mb-4 italic">$14.99<span className="text-2xl text-white/80 font-normal">/month</span></div>
            <p className="text-xl text-white/90 mb-8 font-light uppercase tracking-widest">Unlimited programs • Cancel anytime</p>
            <Link href="/programs">
              <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-12 h-14 bg-[#e5e7eb] text-primary hover:bg-white font-bold border-none shadow-2xl" data-testid="button-pricing-teaser">
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
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-12 uppercase italic tracking-tight">Member Success Stories</h2>
          
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
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4 uppercase italic tracking-tight">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="p-8 rounded-[32px] bg-primary text-white border-none shadow-lg">
              <h3 className="text-lg font-bold font-heading mb-2 uppercase italic tracking-tight">What do I get with the membership?</h3>
              <p className="text-white/80 font-light leading-relaxed">You get unlimited, instant access to our entire library of professional 6-month programs. To ensure total focus and mastery, your training is delivered and followed phase by phase, one month at a time.</p>
            </div>
            <div className="p-8 rounded-[32px] bg-primary text-white border-none shadow-lg">
              <h3 className="text-lg font-bold font-heading mb-2 uppercase italic tracking-tight">Can beginners do these programs?</h3>
              <p className="text-white/80 font-light leading-relaxed">Absolutely. We have specific programs designed for all levels, and all our programs include scalable options to match your current fitness level.</p>
            </div>
            <div className="p-8 rounded-[32px] bg-primary text-white border-none shadow-lg">
              <h3 className="text-lg font-bold font-heading mb-2 uppercase italic tracking-tight">How do I cancel?</h3>
              <p className="text-white/80 font-light leading-relaxed">You can cancel anytime directly from your account settings with just two clicks. No hidden fees or lengthy commitments.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/faq">
              <span className="text-primary font-bold uppercase tracking-widest text-sm hover:underline inline-flex items-center cursor-pointer group">
                Read all FAQs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* H) Final CTA */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px]"></div>
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold font-heading text-white mb-8 italic tracking-tighter uppercase leading-[0.9]">Start today.<br/>Build momentum.</h2>
            <p className="text-xl md:text-2xl text-white/70 mb-12 font-light leading-relaxed max-w-2xl mx-auto">Stop overthinking your training. Get the structure you need for $14.99/mo.</p>
            <Link href="/programs">
              <Button size="lg" className="rounded-full text-lg px-12 h-16 font-bold shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-300 bg-[#e5e7eb] text-primary hover:bg-white border-none" data-testid="button-final-cta">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
