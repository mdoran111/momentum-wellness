import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/images/logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-baseline -space-x-px">
            <span className="font-heading font-extrabold text-xl tracking-tighter text-primary">Momentum</span>
            <span className="font-heading font-bold text-xl tracking-tighter text-primary/60">Wellness</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/programs" className="text-sm font-medium text-primary/70 hover:text-primary transition-colors">About</Link>
          <Link href="/programs" className="text-sm font-medium text-primary/70 hover:text-primary transition-colors">Programs</Link>
          <Link href="/programs" className="text-sm font-medium text-primary/70 hover:text-primary transition-colors">Pricing</Link>
          <Link href="/programs" className="text-sm font-medium text-primary/70 hover:text-primary transition-colors">FAQ</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link href="/programs">
              <Button className="rounded-full px-6 font-semibold bg-primary text-white hover:bg-primary/90 border-none" data-testid="button-start-membership-nav">
                Start Membership
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-primary/10 text-primary w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-left font-heading font-extrabold text-2xl tracking-tighter text-primary pb-6 border-b border-primary/10">
                    Momentum<span className="text-primary/60">Wellness</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-6 pt-10">
                  <Link href="/programs" onClick={() => setOpen(false)} className="text-lg font-medium text-primary/70 hover:text-primary transition-colors">About</Link>
                  <Link href="/programs" onClick={() => setOpen(false)} className="text-lg font-medium text-primary/70 hover:text-primary transition-colors">Programs</Link>
                  <Link href="/programs" onClick={() => setOpen(false)} className="text-lg font-medium text-primary/70 hover:text-primary transition-colors">Pricing</Link>
                  <Link href="/programs" onClick={() => setOpen(false)} className="text-lg font-medium text-primary/70 hover:text-primary transition-colors">FAQ</Link>
                  <div className="pt-6 border-t border-primary/10">
                    <Link href="/programs">
                      <Button onClick={() => setOpen(false)} className="w-full rounded-full h-12 font-bold bg-primary text-white hover:bg-primary/90 border-none">
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