import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-heading font-bold text-xl mb-4">Momentum Wellness</h3>
          <p className="text-primary-foreground/80 max-w-sm mb-4">
            Strength, fat loss, and performance programs built to be followed — with structure, progression, and zero guesswork.
          </p>
          <p className="text-xs text-primary-foreground/60 italic">
            Disclaimer: The information provided is not medical advice. Always consult with a healthcare professional before starting any exercise program.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 font-heading">Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link href="/programs"><a className="hover:text-white transition-colors">Programs</a></Link></li>
            <li><Link href="/pricing"><a className="hover:text-white transition-colors">Pricing</a></Link></li>
            <li><Link href="/faq"><a className="hover:text-white transition-colors">FAQ</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact</a></Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 font-heading">Legal</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link href="/legal"><a className="hover:text-white transition-colors">Terms of Service</a></Link></li>
            <li><Link href="/legal"><a className="hover:text-white transition-colors">Privacy Policy</a></Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Momentum Wellness. All rights reserved.
      </div>
    </footer>
  );
}