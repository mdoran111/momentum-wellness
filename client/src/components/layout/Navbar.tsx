import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/images/logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-primary/80 backdrop-blur-xl shadow-2xl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-baseline -space-x-px"
          >
            <span className="font-heading font-extrabold text-2xl tracking-tighter text-white italic">Momentum</span>
            <span className="font-heading font-bold text-2xl tracking-tighter text-white/40">Wellness</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          <Link href="/about" className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all duration-300 relative group/nav">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/nav:w-full"></span>
          </Link>
          <Link href="/programs" className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all duration-300 relative group/nav">
            Programs
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/nav:w-full"></span>
          </Link>
          <Link href="/pricing" className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all duration-300 relative group/nav">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/nav:w-full"></span>
          </Link>
          <Link href="/faq" className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all duration-300 relative group/nav">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/nav:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link href="/programs">
              <Button className="rounded-full px-8 h-12 font-bold uppercase tracking-widest text-[10px] bg-[#e5e7eb] text-primary hover:bg-white hover:scale-105 transition-all duration-300 border-none shadow-xl" data-testid="button-start-membership-nav">
                Unlock Full Access
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
              <SheetContent side="right" className="bg-primary border-white/10 text-white w-[300px] backdrop-blur-xl">
                <SheetHeader>
                  <SheetTitle className="text-left font-heading font-extrabold text-2xl tracking-tighter text-white pb-6 border-b border-white/5 italic">
                    Momentum<span className="text-white/40">Wellness</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-8 pt-12">
                  <Link href="/about" onClick={() => setOpen(false)} className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all">About</Link>
                  <Link href="/programs" onClick={() => setOpen(false)} className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all">Programs</Link>
                  <Link href="/pricing" onClick={() => setOpen(false)} className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all">Pricing</Link>
                  <Link href="/faq" onClick={() => setOpen(false)} className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all">FAQ</Link>
                  <div className="pt-8 border-t border-white/5">
                    <Link href="/programs">
                      <Button onClick={() => setOpen(false)} className="w-full rounded-full h-14 font-bold uppercase tracking-widest text-xs bg-[#e5e7eb] text-primary hover:bg-white border-none shadow-xl">
                        Unlock Full Access
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