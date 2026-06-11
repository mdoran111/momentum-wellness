import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import { individualProgramEnrollmentUrl } from "@/lib/links";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-primary/80 backdrop-blur-xl shadow-2xl">
      <div className="container mx-auto px-4 h-20 flex items-center">
        <Link href="/" aria-label="Momentum Wellness home" className="flex items-center gap-3 group shrink-0 mr-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-baseline -space-x-px"
          >
            <span className="font-heading font-extrabold text-xl tracking-tighter text-white italic">Momentum</span>
            <span className="font-heading font-bold text-xl tracking-tighter text-white/40">Wellness</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 mr-8">
          <Link href="/about" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors duration-300 relative group/nav">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/nav:w-full"></span>
          </Link>
          <Link href="/programs" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors duration-300 relative group/nav">
            Programs
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/nav:w-full"></span>
          </Link>
          <Link
            href="/inside-the-app"
            onClick={() =>
              trackEvent(analyticsEvents.insideApp, {
                placement: "desktop_nav",
              })
            }
            className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors duration-300 relative group/nav"
          >
            Inside The App
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/nav:w-full"></span>
          </Link>
          <Link href="/employee-wellness-programs" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors duration-300 relative group/nav">
            For Companies
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/nav:w-full"></span>
          </Link>
          <Link
            href="/pricing"
            onClick={() =>
              trackEvent(analyticsEvents.viewPricing, {
                placement: "desktop_nav",
              })
            }
            className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors duration-300 relative group/nav"
          >
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/nav:w-full"></span>
          </Link>
          <Link href="/faq" className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-white transition-colors duration-300 relative group/nav">
            FAQ
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/nav:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden lg:block">
            <a
              href={individualProgramEnrollmentUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent(analyticsEvents.startProgram, {
                  placement: "desktop_nav",
                })
              }
            >
              <Button className="rounded-full px-8 h-11 font-bold uppercase tracking-widest text-xs bg-[#e5e7eb] text-primary hover:bg-white transition-all duration-300 border-none shadow-lg" data-testid="button-start-membership-nav">
                Start Your Program
              </Button>
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-primary border-white/10 text-white w-[280px] backdrop-blur-xl">
                <SheetHeader>
                  <SheetTitle className="text-left font-heading font-extrabold text-lg tracking-tighter text-white pb-6 border-b border-white/10 italic">
                    Momentum<span className="text-white/40">Wellness</span>
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigate the Momentum Wellness website.
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-6 pt-10">
                  <Link href="/about" onClick={() => setOpen(false)} className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors">About</Link>
                  <Link href="/programs" onClick={() => setOpen(false)} className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors">Programs</Link>
                  <Link
                    href="/inside-the-app"
                    onClick={() => {
                      trackEvent(analyticsEvents.insideApp, {
                        placement: "mobile_nav",
                      });
                      setOpen(false);
                    }}
                    className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors"
                  >
                    Inside The App
                  </Link>
                  <Link href="/employee-wellness-programs" onClick={() => setOpen(false)} className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors">For Companies</Link>
                  <Link
                    href="/pricing"
                    onClick={() => {
                      trackEvent(analyticsEvents.viewPricing, {
                        placement: "mobile_nav",
                      });
                      setOpen(false);
                    }}
                    className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                  <Link href="/faq" onClick={() => setOpen(false)} className="text-sm font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors">FAQ</Link>
                  <div className="pt-6 border-t border-white/10">
                    <a
                      href={individualProgramEnrollmentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        onClick={() => {
                          trackEvent(analyticsEvents.startProgram, {
                            placement: "mobile_nav",
                          });
                          setOpen(false);
                        }}
                        className="w-full rounded-full h-12 font-bold uppercase tracking-widest text-xs bg-[#e5e7eb] text-primary hover:bg-white border-none shadow-lg"
                      >
                        Start Your Program
                      </Button>
                    </a>
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
