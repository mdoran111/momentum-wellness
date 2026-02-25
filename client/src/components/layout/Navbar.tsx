import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Momentum Wellness" className="h-10 w-auto object-contain" />
            <span className="font-heading font-bold text-xl tracking-tight text-primary hidden sm:inline-block">
              Momentum Wellness
            </span>
          </a>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/about"><a className="text-sm font-medium hover:text-primary transition-colors">About</a></Link>
          <Link href="/programs"><a className="text-sm font-medium hover:text-primary transition-colors">Programs</a></Link>
          <Link href="/pricing"><a className="text-sm font-medium hover:text-primary transition-colors">Pricing</a></Link>
          <Link href="/faq"><a className="text-sm font-medium hover:text-primary transition-colors">FAQ</a></Link>
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