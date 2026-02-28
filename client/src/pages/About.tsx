import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldCheck, Zap, Target, LayoutGrid } from "lucide-react";
import aboutHero from '../assets/images/about-hero.jpg';
import aboutTraining from '../assets/images/about-training.jpg';
import logo from '../assets/images/logo.png';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Matching Home Layout */}
      <section className="relative pt-24 pb-32 flex items-center justify-center overflow-hidden min-h-[60vh] bg-primary">
        {/* Background Logo watermark */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden translate-y-2">
          <img src={logo} alt="" className="w-[110%] max-w-none grayscale invert" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 animate-in slide-in-from-bottom-8 duration-700">
            Training Built<br className="md:hidden" /> For Results.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-in slide-in-from-bottom-8 duration-700 delay-150">
            Momentum Wellness is a commitment to structure, science, and the belief that elite training should be accessible to those who value their time and performance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-300">
            <Link href="/programs" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] font-bold border-none">
                Unlock Full Access — $14.99/mo
              </Button>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base px-8 h-14 border-white text-white hover:bg-white/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section with Image */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl bg-secondary">
                <img src={aboutTraining} alt="Focused training" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary text-white p-10 rounded-3xl shadow-2xl hidden md:block max-w-xs">
                <p className="font-bold text-xl leading-snug italic">
                  "Progress isn't found in random effort. It's found in structured consistency."
                </p>
              </div>
            </div>
            
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary leading-tight">A Phased Approach to Mastery</h2>
              <div className="space-y-6 text-lg text-primary/70 leading-relaxed">
                <p>
                  We don't believe in "quick fixes" or random daily workouts. Real transformation requires a roadmap. Our philosophy is centered around structured 6-month cycles, delivered in focused monthly phases. 
                </p>
                <p>
                  This ensures you master the mechanics, build the necessary capacity, and progress with intent. By focusing on one month at a time, we remove the guesswork and provide a clear path for continuous evolution.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Expert Programming</h4>
                    <p className="text-primary/60">Science-based plans built by professionals.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">Precision Focus</h4>
                    <p className="text-primary/60">One month of focused mastery at a time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values / Features */}
      <section className="py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">The Momentum Standard</h2>
            <p className="text-primary/60 max-w-2xl mx-auto text-xl">We've cut the noise to focus on what actually moves the needle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Zap,
                title: "Zero Noise",
                desc: "No unnecessary messaging, no community clutter. Just your training and your results."
              },
              {
                icon: LayoutGrid,
                title: "Elite Structure",
                desc: "Every program is a comprehensive 6-month series designed for long-term development."
              },
              {
                icon: ShieldCheck,
                title: "Sustainable Growth",
                desc: "Intelligent intensity that respects your recovery and ensures you stay in the game."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-primary/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-primary/70 leading-relaxed text-lg">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width Image Break */}
      <section className="h-[600px] relative overflow-hidden group">
        <img src={aboutHero} alt="Premium gym environment" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-primary/30 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-20 w-px bg-white/30"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">Ready to build your momentum?</h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto">Join a community of individuals who value structure, performance, and real progress.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/programs">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] border-none shadow-2xl transition-all hover:scale-105">
                Unlock Full Access
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-12 h-16 text-lg font-bold border-white text-white hover:bg-white/10 transition-all">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
