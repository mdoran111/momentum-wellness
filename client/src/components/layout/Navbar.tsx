import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#333333] backdrop-blur supports-[backdrop-filter]:bg-[#333333]/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="font-heading font-extrabold text-2xl tracking-tighter flex items-center group">
            <div className="flex items-center">
              <span className="text-white">Momentum</span>
              <span className="text-[#0B1F3B]">Wellness</span>
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/about"><a className="text-sm font-medium text-white/70 hover:text-white transition-colors">About</a></Link>
          <Link href="/programs"><a className="text-sm font-medium text-white/70 hover:text-white transition-colors">Programs</a></Link>
          <Link href="/pricing"><a className="text-sm font-medium text-white/70 hover:text-white transition-colors">Pricing</a></Link>
          <Link href="/faq"><a className="text-sm font-medium text-white/70 hover:text-white transition-colors">FAQ</a></Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link href="/programs">
              <Button className="rounded-full px-6 font-semibold bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] border-none" data-testid="button-start-membership-nav">
                Start Membership
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#333333] border-white/10 text-white w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-left font-heading font-extrabold text-2xl tracking-tighter text-white pb-6 border-b border-white/10">
                    Momentum<span className="text-[#0B1F3B]">Wellness</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 pt-10">
                  <Link href="/about"><a onClick={() => setOpen(false)} className="text-lg font-medium text-white/70 hover:text-white transition-colors">About</a></Link>
                  <Link href="/programs"><a onClick={() => setOpen(false)} className="text-lg font-medium text-white/70 hover:text-white transition-colors">Programs</a></Link>
                  <Link href="/pricing"><a onClick={() => setOpen(false)} className="text-lg font-medium text-white/70 hover:text-white transition-colors">Pricing</a></Link>
                  <Link href="/faq"><a onClick={() => setOpen(false)} className="text-lg font-medium text-white/70 hover:text-white transition-colors">FAQ</a></Link>
                  <div className="pt-6 border-t border-white/10">
                    <Link href="/programs">
                      <Button onClick={() => setOpen(false)} className="w-full rounded-full h-12 font-bold bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] border-none">
                        Start Membership
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}