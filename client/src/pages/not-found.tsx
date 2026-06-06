import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Home, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { analyticsEvents, trackEvent } from "@/lib/analytics";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Momentum Wellness"
        description="The requested Momentum Wellness page could not be found."
        robots="noindex, follow"
      />

      <main className="relative flex min-h-screen items-center overflow-hidden bg-[#0f172a] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(16,185,129,0.16),transparent_38%)]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="container relative mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">
            Page not found
          </p>
          <h1 className="mt-5 text-7xl font-bold tracking-tight sm:text-9xl">
            404
          </h1>
          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
            This page has moved or does not exist.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-slate-400">
            Return to Momentum Wellness or contact us and we&apos;ll help you
            find the right place.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="min-h-14 rounded-full border-0 bg-emerald-500 px-8 text-white hover:bg-emerald-400"
            >
              <Link href="/">
                <Home />
                Back to Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-14 rounded-full border-white/25 bg-transparent px-8 text-white hover:bg-white/10"
            >
              <Link
                href="/contact"
                onClick={() =>
                  trackEvent(analyticsEvents.contact, {
                    placement: "not_found",
                  })
                }
              >
                <MessageCircle />
                Contact Us
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </motion.div>
      </main>
    </>
  );
}
