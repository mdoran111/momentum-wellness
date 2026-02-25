import { Link } from "wouter";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-primary py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-heading font-bold text-xl mb-4">Momentum Wellness</h3>
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
            <li><Link href="/about"><a className="hover:text-primary transition-colors">About</a></Link></li>
            <li><Link href="/programs"><a className="hover:text-primary transition-colors">Programs</a></Link></li>
            <li><Link href="/pricing"><a className="hover:text-primary transition-colors">Pricing</a></Link></li>
            <li><Link href="/faq"><a className="hover:text-primary transition-colors">FAQ</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold mb-4 font-heading uppercase tracking-wider text-sm">Legal</h4>
          <ul className="space-y-2 text-sm text-primary font-bold">
            <li><Link href="/legal"><a className="hover:text-primary transition-colors">Terms of Service</a></Link></li>
            <li><Link href="/legal"><a className="hover:text-primary transition-colors">Privacy Policy</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-primary/20 text-center text-sm text-primary font-bold">
        © {new Date().getFullYear()} Momentum Wellness. All rights reserved.
      </div>
    </footer>
  );
}