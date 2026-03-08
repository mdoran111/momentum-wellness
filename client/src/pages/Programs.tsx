import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { ArrowRight, Clock, CalendarDays, Dumbbell, Target, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import programGym from '../assets/images/program-gym.jpg';
import programMinimal from '../assets/images/program-minimal.jpg';
import programHome from '../assets/images/program-home-outdoor.jpg';
import logo from '../assets/images/logo.png';

// Mock data for programs
const PROGRAMS = [
  {
    id: 1,
    title: "The Apex Path",
    description: "A comprehensive 6-month journey designed to transform your physical capability and mental focus using a full suite of strength equipment. Build raw power and professional conditioning through structured, science-based progression.",
    goal: "Strength",
    equipment: "Full Gym",
    daysPerWeek: "4x",
    image: programGym,
    link: "https://www.trainerize.me/profile/momentumwellness6/?planGUID=8bb77914b268416bac5814c814ea283d",
    details: {
      who: "Lifters with access to a commercial or well-equipped home gym looking for a long-term transformation.",
      time: "60-75 mins",
      days: "4 days/week",
      achieve: "Mastered mechanics and a powerful, resilient physique."
    }
  },
  {
    id: 2,
    title: "The Versatile Edge",
    description: "Unlock total-body vitality with a 6-month curriculum centered around dumbbells, bands, and kettlebells. This holistic approach blends strength, stability, and endurance for the modern, high-functioning individual.",
    goal: "Body Recomposition",
    equipment: "Essential Gear",
    daysPerWeek: "3x",
    image: programMinimal,
    link: "https://www.trainerize.me/profile/momentumwellness6/?planGUID=8bb77914b268416bac5814c814ea283d",
    details: {
      who: "Those training with essential weights and tools who want a balanced, high-performance body.",
      time: "45-60 mins",
      days: "5 days/week",
      achieve: "Total-body lean muscle, improved functional movement, and high-energy conditioning."
    }
  },
  {
    id: 3,
    title: "The Foundational Flow",
    description: "Reconnect with your body through a 6-month bodyweight-only series focused on sustainable movement, mobility, and high-intensity conditioning. Find freedom in training anywhere while building a lean, athletic foundation.",
    goal: "Essentials",
    equipment: "Zero Equipment",
    daysPerWeek: "2x",
    image: programHome,
    details: {
      who: "Anyone who values the freedom of training anywhere—at home, in the park, or on the road—with zero gear.",
      time: "30-45 mins",
      days: "3-5 days/week",
      achieve: "Lean athletic build, enhanced mobility, and the ability to train anywhere with intensity."
    }
  }
];

const GOALS = ["All", "Strength", "Body Recomposition", "Essentials"];
const EQUIPMENT = ["All", "Full Gym", "Essential Gear", "Zero Equipment"];
const FREQUENCY = ["All", "2x", "3x", "4x"];

export default function Programs() {
  const [activeGoal, setActiveGoal] = useState("All");
  const [activeEquipment, setActiveEquipment] = useState("All");
  const [activeFrequency, setActiveFrequency] = useState("All");
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const filteredPrograms = PROGRAMS.filter(p => {
    const matchGoal = activeGoal === "All" || p.goal === activeGoal;
    const matchEq = activeEquipment === "All" || p.equipment === activeEquipment;
    const matchFreq = activeFrequency === "All" || p.daysPerWeek === activeFrequency;
    return matchGoal && matchEq && matchFreq;
  });

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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="relative pt-12 pb-24 min-h-screen bg-primary text-white overflow-visible">
      {/* Background Logo watermark - Static on internal pages */}
      <div className="fixed top-0 left-0 right-0 h-screen z-0 flex items-center justify-center pointer-events-none overflow-visible">
        <img src={logo} alt="" className="w-96 max-w-none grayscale invert opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6 italic tracking-tight">Program Library</h1>
          <p className="text-xl text-white/80 mb-6 font-light leading-relaxed">Your membership provides a continuous roadmap for professional performance. Engage with our structured 6-month cycles, delivered in focused monthly phases to ensure total mastery and continuous growth.</p>
          <div className="inline-block px-6 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            <p className="text-sm font-medium text-white/90 italic">Note: New phases are unlocked month-by-month as you evolve through your training.</p>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-14 p-8 bg-white/[0.02] backdrop-blur-md rounded-[40px] border border-white/5"
        >
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] w-28 shrink-0">Goal</h3>
              <div className="flex flex-wrap gap-3">
                {GOALS.map(goal => (
                  <button
                    key={goal}
                    onClick={() => setActiveGoal(goal)}
                    className={`px-5 py-2 rounded-full text-[11px] font-bold transition-all duration-300 uppercase tracking-widest ${
                      activeGoal === goal 
                        ? "bg-white text-primary shadow-lg shadow-white/10" 
                        : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] w-28 shrink-0">Gear</h3>
              <div className="flex flex-wrap gap-3">
                {EQUIPMENT.map(eq => (
                  <button
                    key={eq}
                    onClick={() => setActiveEquipment(eq)}
                    className={`px-5 py-2 rounded-full text-[11px] font-bold transition-all duration-300 uppercase tracking-widest ${
                      activeEquipment === eq 
                        ? "bg-white text-primary shadow-lg shadow-white/10" 
                        : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {eq}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] w-28 shrink-0">Workouts</h3>
              <div className="flex flex-wrap gap-3">
                {FREQUENCY.map(freq => (
                  <button
                    key={freq}
                    onClick={() => setActiveFrequency(freq)}
                    className={`px-5 py-2 rounded-full text-[11px] font-bold transition-all duration-300 uppercase tracking-widest ${
                      activeFrequency === freq 
                        ? "bg-white text-primary shadow-lg shadow-white/10" 
                        : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {freq === "All" ? freq : `${freq} / week`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredPrograms.length > 0 ? (
              filteredPrograms.map(program => (
                <motion.div
                  key={program.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="overflow-hidden border-white/10 bg-white/[0.03] backdrop-blur-sm flex flex-col hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-[32px] group h-full cursor-pointer relative">
                        <div className="h-64 overflow-hidden relative">
                          <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                          <div className="absolute top-6 left-6 flex gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-white px-3 py-1.5 rounded-full shadow-xl">{program.goal}</span>
                          </div>
                        </div>
                        <CardHeader className="flex-1 p-8 relative">
                          <div className="absolute top-0 left-8 w-12 h-px bg-white/40 transform -translate-y-px group-hover:w-20 group-hover:bg-white/60 transition-all duration-500"></div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-3 group-hover:text-white/80 transition-colors">{program.equipment}</p>
                          <h3 className="text-2xl font-bold font-heading text-white mb-4 italic tracking-tight">{program.title}</h3>
                          <CardDescription className="text-white/60 text-base leading-relaxed font-light line-clamp-2 group-hover:text-white/80 transition-colors">{program.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="p-8 pt-0 border-t border-white/10">
                          <span className="text-xs font-bold text-white uppercase tracking-widest flex items-center w-full justify-between group/link">
                            View Monthly Phase <ArrowRight className="w-4 h-4 transform group-hover:translate-x-3 transition-transform duration-300" />
                          </span>
                        </CardFooter>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[700px] bg-primary border-white/10 text-white rounded-[40px] p-0 overflow-hidden backdrop-blur-xl flex flex-col max-h-[90vh]">
                      <div className="h-64 relative shrink-0">
                        <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
                        <div className="absolute bottom-8 left-8">
                          <div className="flex gap-2 mb-3">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-white px-3 py-1.5 rounded-full">{program.goal}</span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-md">{program.equipment}</span>
                          </div>
                          <DialogTitle className="text-4xl font-heading text-white italic tracking-tight">{program.title}</DialogTitle>
                        </div>
                        <button 
                          onClick={(e) => { e.preventDefault(); document.querySelector('[data-dialog-close]')?.click(); }}
                          className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 backdrop-blur-md z-50"
                          aria-label="Close"
                        >
                          <X className="w-6 h-6 md:w-5 md:h-5 text-white" />
                        </button>
                      </div>
                      <div className="p-10 overflow-y-auto">
                        <DialogDescription className="text-lg font-light text-white/80 leading-relaxed mb-10">
                          {program.description}
                        </DialogDescription>
                        
                        <div className="grid grid-cols-2 gap-8 py-10 border-y border-white/10 mb-10">
                          <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-all duration-500">
                              <Target className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] mb-1">Focus</h4>
                              <p className="text-sm text-white/90 font-medium leading-tight">{program.details.who}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-all duration-500">
                              <Clock className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] mb-1">Duration</h4>
                              <p className="text-sm text-white/90 font-medium leading-tight">{program.details.time}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-all duration-500">
                              <CalendarDays className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] mb-1">Frequency</h4>
                              <p className="text-sm text-white/90 font-medium leading-tight">{program.details.days}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-primary transition-all duration-500">
                              <Dumbbell className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em] mb-1">Outcome</h4>
                              <p className="text-sm text-white/90 font-medium leading-tight">{program.details.achieve}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4 space-y-3">
                          <a href={program.link || "https://example.com/checkout"} target="_blank" rel="noreferrer" className="block w-full">
                            <Button className="w-full rounded-full h-16 text-lg font-bold bg-[#e5e7eb] text-primary hover:bg-white hover:scale-[1.02] transition-all duration-300 border-none shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                              Unlock Full Access
                            </Button>
                          </a>
                          <button 
                            onClick={() => document.querySelector('[data-dialog-close]')?.click()}
                            className="w-full rounded-full h-12 font-bold uppercase tracking-widest text-xs bg-white/10 text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      <DialogClose data-dialog-close className="hidden" />
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-24 text-center text-white/30 italic font-light text-xl"
              >
                No programs found matching these filters. Try adjusting your selection.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 bg-white/[0.02] backdrop-blur-md rounded-[48px] text-center text-white border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 italic tracking-tight">Ready to start training?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg font-light leading-relaxed">Get instant access to all programs above, plus every future program we release, for just $14.99/month.</p>
          <a href="https://example.com/checkout" target="_blank" rel="noreferrer">
            <Button size="lg" className="rounded-full bg-[#e5e7eb] text-primary hover:bg-white hover:scale-105 transition-all duration-300 font-bold px-12 h-16 border-none shadow-2xl">
              Unlock Full Access
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
