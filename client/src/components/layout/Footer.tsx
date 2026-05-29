import { Link } from "wouter";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/images/logo.png";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Momentum Wellness" className="h-8 w-auto" />
            <h3 className="font-heading font-extrabold text-xl tracking-tighter text-white">MomentumWellness</h3>
          </div>
          <p className="text-white font-medium max-w-sm mb-6">
            Expertly designed continuous fitness programs with monthly phase unlocks. Strength training, cardio, daily habits, and progress tracking to transform your health.
          </p>
          <div className="flex gap-4 mb-6">
            <a href="https://instagram.com/momentum_wellness_health" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all text-white">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-white/70 font-semibold italic">
            Disclaimer: The information provided is not medical advice. Always consult with a healthcare professional before starting any exercise program.
          </p>
        </div>
        <div>
          <h4 className="font-extrabold mb-4 font-heading uppercase tracking-wider text-sm text-white">Links</h4>
          <ul className="space-y-2 text-sm text-white font-bold">
            <li><Link href="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-white/70 transition-colors">About</Link></li>
            <li><Link href="/programs" onClick={() => window.scrollTo(0, 0)} className="hover:text-white/70 transition-colors">Programs</Link></li>
            <li><Link href="/employee-wellness-programs" onClick={() => window.scrollTo(0, 0)} className="hover:text-white/70 transition-colors">For Companies</Link></li>
            <li><Link href="/pricing" onClick={() => window.scrollTo(0, 0)} className="hover:text-white/70 transition-colors">Pricing</Link></li>
            <li><Link href="/faq" onClick={() => window.scrollTo(0, 0)} className="hover:text-white/70 transition-colors">FAQ</Link></li>
            <li><Link href="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-white/70 transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold mb-4 font-heading uppercase tracking-wider text-sm text-white">Legal</h4>
          <ul className="space-y-2 text-sm text-white font-bold">
            <li><Link href="/legal" onClick={() => window.scrollTo(0, 0)} className="hover:text-white/70 transition-colors">Terms of Service</Link></li>
            <li><Link href="/legal" onClick={() => window.scrollTo(0, 0)} className="hover:text-white/70 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-sm text-white font-bold">
        © {new Date().getFullYear()} Momentum Wellness. All rights reserved.
      </div>
    </footer>
  );
}
