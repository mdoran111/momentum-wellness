import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, ShieldCheck, Dumbbell, Calendar, LayoutGrid } from "lucide-react";
import heroBg from '../assets/images/hero-bg.png';
import programStrength from '../assets/images/program-strength.png';
import programFatloss from '../assets/images/program-fatloss.png';
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* A) Hero Section */}
      <section className="relative pt-24 pb-32 flex items-center justify-center overflow-hidden min-h-[80vh] bg-primary">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 animate-in slide-in-from-bottom-8 duration-700">
            Stronger. Faster.<br className="md:hidden" /> More Capable.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 duration-700 delay-150">
            Expertly designed training plans for those who value structure, science-based progression, and real-world results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/programs" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] font-bold border-none" data-testid="button-hero-start">
                Start Membership — $14.99/mo
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
              <span>Structured programming</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-primary/30"></div>
            <div className="flex items-center gap-2">
              <Dumbbell className="w-5 h-5" />
              <span>Beginner-to-advanced options</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-primary/30"></div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>New programs added regularly</span>
            </div>
          </div>
        </div>
      </section>

      {/* C) What you get */}
      <section id="includes" className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">Everything You Need To Succeed</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Stop guessing what to do when you walk into the gym. Your membership gives you the roadmap.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Unlimited access to all programs",
              "Step-by-step workouts inside the app",
              "Progression built in",
              "Simple weekly schedule",
              "New programs added regularly",
              "Cancel anytime"
            ].map((feature, i) => (
              <Card key={i} className="bg-white/5 border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* D) How it works */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">How It Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-primary/20 z-0"></div>
            
            {[
              { step: 1, title: "Join membership", desc: "Sign up in seconds and get instant access." },
              { step: 2, title: "Pick a program", desc: "Choose the right track for your current goals and equipment." },
              { step: 3, title: "Start training today", desc: "Follow the structured workouts and build momentum." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white border-4 border-secondary rounded-full flex items-center justify-center text-3xl font-bold font-heading text-primary shadow-sm mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
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
            <Link href="/programs">
              <a className="hidden md:flex items-center text-white font-semibold hover:underline">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="overflow-hidden border-white/10 bg-white/5 flex flex-col hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img src={programStrength} alt="12-Week Strength" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-white px-2 py-1 rounded">Strength</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60 bg-white/10 px-2 py-1 rounded">Full Gym</span>
                </div>
                <CardTitle className="text-white">12-Week Strength Foundation</CardTitle>
                <CardDescription className="text-white/70">Build raw strength and master the big lifts with structured progression.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4 border-t border-white/10">
                <Link href="/programs">
                  <a className="text-sm font-semibold text-white flex items-center w-full justify-between group">
                    View Details <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </Link>
              </CardFooter>
            </Card>

            {/* Card 2 */}
            <Card className="overflow-hidden border-white/10 bg-white/5 flex flex-col hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img src={programFatloss} alt="Fat Loss" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-white px-2 py-1 rounded">Fat Loss</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60 bg-white/10 px-2 py-1 rounded">Dumbbells</span>
                </div>
                <CardTitle className="text-white">12-Week Fat Loss + Strength</CardTitle>
                <CardDescription className="text-white/70">Shed body fat while maintaining muscle mass with high-intensity intervals.</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto pt-4 border-t border-white/10">
                <Link href="/programs">
                  <a className="text-sm font-semibold text-white flex items-center w-full justify-between group">
                    View Details <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </Link>
              </CardFooter>
            </Card>

            {/* Card 3 */}
            <Card className="overflow-hidden border-white/10 flex flex-col hover:shadow-lg transition-shadow bg-white/10 text-white">
              <CardHeader className="flex-1 flex flex-col justify-center items-center text-center p-8">
                <LayoutGrid className="w-12 h-12 mb-6 text-white/80" />
                <CardTitle className="text-2xl mb-4">And Many More...</CardTitle>
                <CardDescription className="text-white/80 text-base">
                  Hypertrophy Builder, Athletic Performance, Minimal Equipment, Return-to-Training, and new additions regularly.
                </CardDescription>
              </CardHeader>
              <CardFooter className="pt-4 border-t border-white/20 bg-white/5">
                <Link href="/programs">
                  <a className="text-sm font-semibold text-white flex items-center w-full justify-center group py-2">
                    Explore The Library
                  </a>
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
                Start Your Membership
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* G) FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">Common Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-secondary/50 border">
              <h3 className="text-lg font-bold font-heading mb-2">What do I get with the membership?</h3>
              <p className="text-muted-foreground">You get unlimited, instant access to our entire library of training programs, updates to existing programs, and all new programs added during your membership.</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/50 border">
              <h3 className="text-lg font-bold font-heading mb-2">Can beginners do these programs?</h3>
              <p className="text-muted-foreground">Absolutely. We have specific tracks designed for beginners, and all our programs include scalable options to match your current fitness level.</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/50 border">
              <h3 className="text-lg font-bold font-heading mb-2">How do I cancel?</h3>
              <p className="text-muted-foreground">You can cancel anytime directly from your account settings with just two clicks. No hidden fees or lengthy commitments.</p>
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
      <section className="py-24 bg-secondary border-t">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Start today. Build momentum.</h2>
          <p className="text-xl text-muted-foreground mb-10">Stop overthinking your training. Get the structure you need for $14.99/mo.</p>
          <Link href="/programs">
            <Button size="lg" className="rounded-full text-base px-10 h-14 font-bold shadow-lg hover:shadow-xl transition-all bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] border-none" data-testid="button-final-cta">
              Start Membership Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}