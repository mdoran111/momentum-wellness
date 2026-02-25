import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#333333] backdrop-blur supports-[backdrop-filter]:bg-[#333333]/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="font-heading font-extrabold text-2xl tracking-tighter flex items-center gap-3 group">
            <div className="flex items-center">
              <span className="text-white">Momentum</span>
              <span className="text-[#0B1F3B]">Wellness</span>
            </div>
            <img src="/logo-icon.png" alt="" className="h-8 w-8 object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
          </a>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/about"><a className="text-sm font-medium text-white/70 hover:text-white transition-colors">About</a></Link>
          <Link href="/programs"><a className="text-sm font-medium text-white/70 hover:text-white transition-colors">Programs</a></Link>
          <Link href="/pricing"><a className="text-sm font-medium text-white/70 hover:text-white transition-colors">Pricing</a></Link>
          <Link href="/faq"><a className="text-sm font-medium text-white/70 hover:text-white transition-colors">FAQ</a></Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/programs">
            <Button className="rounded-full px-6 font-semibold" data-testid="button-start-membership-nav">
              Start Membership
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}