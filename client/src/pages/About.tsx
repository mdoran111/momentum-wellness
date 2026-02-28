import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Activity, Shield, Smartphone, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16 pb-24 min-h-screen bg-primary text-white">
      <div className="container mx-auto px-4 max-w-4xl text-white">
        <div className="text-center mb-16 flex flex-col items-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-heading text-white mb-6 tracking-tight uppercase whitespace-nowrap">MOMENTUM built with you in mind.</h1>
          <div className="h-1.5 w-20 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="prose prose-lg max-w-none text-white/80 space-y-8">
          <p className="text-xl text-white font-medium leading-relaxed text-center max-w-2xl mx-auto">
            Momentum Wellness was built on one simple idea: progress should be structured, visible, and sustainable through our signature 6-month progressive curricula.
          </p>
          
          <p className="text-center max-w-2xl mx-auto text-lg text-white/80">
            We've created a holistic, subscription-based training platform where your journey is mapped out for half a year, but delivered one focused month at a time to ensure total mastery and zero burnout.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 not-prose">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
              <Activity className="w-6 h-6 text-white shrink-0" />
              <div>
                <h3 className="font-bold text-white mb-2">Device Integration</h3>
                <p className="text-sm text-white/70">Connect your Apple Watch, Fitbit, or other wearables to centralize your key metrics.</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
              <Shield className="w-6 h-6 text-white shrink-0" />
              <div>
                <h3 className="font-bold text-white mb-2">Data Visualization</h3>
                <p className="text-sm text-white/70">Log body measurements, track trends, and upload progress photos with clear visuals.</p>
              </div>
            </div>
          </div>

          <p className="text-white/80">
            Inside the Momentum Wellness app, members get unlimited access to professionally built programs and a streamlined system for tracking their progress. Connect your wearable device — Apple Watch, Fitbit, or others — and centralize your key metrics in one place. Log body measurements, track trends over time, upload progress photos, and see your data clearly visualized.
          </p>

          <div className="bg-white/10 text-white p-8 rounded-3xl my-12 not-prose border border-white/10">
            <ul className="space-y-4 text-xl font-heading font-bold">
              <li className="flex items-center gap-3"><Zap className="w-6 h-6 text-white/60" /> No clutter.</li>
              <li className="flex items-center gap-3"><Zap className="w-6 h-6 text-white/60" /> No unnecessary messaging.</li>
              <li className="flex items-center gap-3"><Zap className="w-6 h-6 text-white/60" /> No guesswork.</li>
            </ul>
          </div>

          <p className="text-white/80 text-center">
            Just structured programming and intelligent tracking designed to help you stay consistent and see measurable results.
          </p>

          <p className="text-white/80 text-center">
            Whether you're building strength, losing fat, gaining muscle, or simply maintaining your edge, Momentum Wellness gives you the framework to move forward — at your pace, on your schedule.
          </p>

          <div className="text-center pt-12 border-t border-white/10 not-prose">
            <p className="text-2xl font-heading font-bold text-white mb-2">All programs. One membership. $14.99 per month.</p>
            <p className="text-white/60 mb-8 text-lg">Start building momentum today.</p>
            <Link href="/programs">
              <Button size="lg" className="rounded-full px-12 h-14 text-lg font-bold bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] border-none">
                See The Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}