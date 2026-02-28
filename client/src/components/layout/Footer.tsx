import { Link } from "wouter";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/images/logo.png";

export function Footer() {
  return (
    <footer className="bg-white text-primary py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Momentum Wellness" className="h-8 w-auto" />
            <h3 className="font-heading font-bold text-xl">Momentum Wellness</h3>
          </div>
          <p className="text-primary font-medium max-w-sm mb-6">
            Strength, fat loss, and performance programs built to be followed — with structure, progression, and zero guesswork.
          </p>
          <div className="flex gap-4 mb-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all text-primary">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-primary/70 font-semibold italic">
            Disclaimer: The information provided is not medical advice. Always consult with a healthcare professional before starting any exercise program.
          </p>
        </div>
        <div>
          <h4 className="font-extrabold mb-4 font-heading uppercase tracking-wider text-sm">Links</h4>
          <ul className="space-y-2 text-sm text-primary font-bold">
            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link href="/programs" className="hover:text-primary transition-colors">Programs</Link></li>
            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold mb-4 font-heading uppercase tracking-wider text-sm">Legal</h4>
          <ul className="space-y-2 text-sm text-primary font-bold">
            <li><Link href="/legal" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="/legal" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-primary/20 text-center text-sm text-primary font-bold">
        © {new Date().getFullYear()} Momentum Wellness. All rights reserved.
      </div>
    </footer>
  );
}