import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Clock, CalendarDays, Dumbbell, Target } from "lucide-react";
import { Link } from "wouter";
import programGym from '../assets/images/program-gym.jpg';
import programMinimal from '../assets/images/program-minimal.jpg';
import programHome from '../assets/images/program-home-outdoor.jpg';

// Mock data for programs
const PROGRAMS = [
  {
    id: 1,
    title: "The Apex Path",
    description: "A comprehensive 6-month journey designed to transform your physical capability and mental focus using a full suite of strength equipment. Build raw power and elite-level conditioning through structured, science-based progression.",
    goal: "Performance",
    equipment: "Full Gym",
    image: programGym,
    details: {
      who: "Lifters with access to a commercial or well-equipped home gym looking for a long-term transformation.",
      time: "60-75 mins",
      days: "4 days/week",
      achieve: "Elite strength, mastered mechanics, and a powerful, resilient physique."
    }
  },
  {
    id: 2,
    title: "The Versatile Edge",
    description: "Unlock total-body vitality with a 6-month curriculum centered around dumbbells, bands, and kettlebells. This holistic approach blends strength, stability, and endurance for the modern, high-functioning individual.",
    goal: "Fat Loss",
    equipment: "Essential Gear",
    image: programMinimal,
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
    goal: "Performance",
    equipment: "Zero Equipment",
    image: programHome,
    details: {
      who: "Anyone who values the freedom of training anywhere—at home, in the park, or on the road—with zero gear.",
      time: "30-45 mins",
      days: "3-5 days/week",
      achieve: "Lean athletic build, enhanced mobility, and the ability to train anywhere with intensity."
    }
  }
];

const GOALS = ["All", "Strength", "Fat Loss", "Performance"];
const EQUIPMENT = ["All", "Full Gym", "Essential Gear", "Zero Equipment"];

export default function Programs() {
  const [activeGoal, setActiveGoal] = useState("All");
  const [activeEquipment, setActiveEquipment] = useState("All");

  const filteredPrograms = PROGRAMS.filter(p => {
    const matchGoal = activeGoal === "All" || p.goal === activeGoal;
    const matchEq = activeEquipment === "All" || p.equipment === activeEquipment;
    return matchGoal && matchEq;
  });

  return (
    <div className="pt-12 pb-24 min-h-screen bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Program Library</h1>
          <p className="text-xl text-white/80 mb-4">Your membership unlocks every 6-month curriculum below. To ensure optimal focus and progression, you'll follow your training one month at a time.</p>
          <div className="inline-block px-4 py-2 bg-white/10 rounded-lg border border-white/20">
            <p className="text-sm font-medium text-white/90">Note: New months unlock automatically as you progress.</p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Goal</h3>
            <div className="flex flex-wrap gap-2">
              {GOALS.map(goal => (
                <button
                  key={goal}
                  onClick={() => setActiveGoal(goal)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeGoal === goal 
                      ? "bg-white text-primary" 
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Equipment</h3>
            <div className="flex flex-wrap gap-2">
              {EQUIPMENT.map(eq => (
                <button
                  key={eq}
                  onClick={() => setActiveEquipment(eq)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeEquipment === eq 
                      ? "bg-white text-primary" 
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {eq}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.length > 0 ? (
            filteredPrograms.map(program => (
              <Dialog key={program.id}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden border-white/10 bg-white/5 flex flex-col hover:shadow-lg transition-shadow cursor-pointer group h-full">
                    <div className="h-48 overflow-hidden relative">
                      <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <CardHeader className="flex-1">
                      <div className="flex gap-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-white px-2 py-1 rounded">{program.goal}</span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-white/60 bg-white/10 px-2 py-1 rounded">{program.equipment}</span>
                      </div>
                      <CardTitle className="text-white">{program.title}</CardTitle>
                      <CardDescription className="line-clamp-2 text-white/70">{program.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="pt-4 border-t border-white/10">
                      <span className="text-sm font-semibold text-white flex items-center w-full justify-between">
                        View Current Month <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardFooter>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] bg-primary border-white/10 text-white">
                  <DialogHeader>
                    <div className="flex gap-2 mb-2 mt-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-white px-2 py-1 rounded">{program.goal}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-white/60 bg-white/10 px-2 py-1 rounded">{program.equipment}</span>
                    </div>
                    <DialogTitle className="text-2xl font-heading text-white">{program.title}</DialogTitle>
                    <DialogDescription className="text-base pt-2 text-white/80">
                      {program.description}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/10 my-4">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-white mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Who it's for</h4>
                        <p className="text-sm text-white/60">{program.details.who}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-white mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Time per session</h4>
                        <p className="text-sm text-white/60">{program.details.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CalendarDays className="w-5 h-5 text-white mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Days per week</h4>
                        <p className="text-sm text-white/60">{program.details.days}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Dumbbell className="w-5 h-5 text-white mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">What you'll achieve</h4>
                        <p className="text-sm text-white/60">{program.details.achieve}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <a href="https://example.com/checkout" target="_blank" rel="noreferrer" className="block w-full">
                      <Button className="w-full rounded-full h-12 text-base font-bold bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] border-none">
                        Start Membership to Unlock
                      </Button>
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-white/60">
              No programs found matching these filters. Try adjusting your selection.
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 p-12 bg-white/10 rounded-3xl text-center text-white border border-white/10">
          <h2 className="text-3xl font-bold font-heading mb-4">Ready to start training?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Get instant access to all programs above, plus every future program we release, for just $14.99/month.</p>
          <a href="https://example.com/checkout" target="_blank" rel="noreferrer">
            <Button size="lg" className="rounded-full bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] font-bold px-8 h-12 border-none">
              Start Membership
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}