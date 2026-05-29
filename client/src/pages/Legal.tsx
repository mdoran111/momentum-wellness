import { useEffect } from "react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function Legal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Legal | Momentum Wellness"
        description="Review Momentum Wellness legal information, policies, terms, and privacy details."
        keywords="terms of service, privacy policy, legal, wellness terms"
      />
      <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
        {/* Hero */}
        <section className="relative min-h-[40vh] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
          <div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)`}}></div>
          <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" as const }}
              >
                <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-sm font-semibold tracking-wider uppercase text-white">Legal</span>
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                  Legal{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Information</span>
                </h1>
                <p className="text-lg text-white font-light leading-relaxed max-w-3xl mx-auto">
                  Transparency and trust are core to how we operate.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">Terms of Service</h2>
                <div className="space-y-4 text-white/70 font-light leading-relaxed">
                  <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                  <p>By accessing and using Momentum Wellness, you accept and agree to be bound by these terms.</p>
                  <p className="font-bold text-white mt-4">Medical Disclaimer</p>
                  <p>The content provided is for informational and educational purposes only. It is not a substitute for professional medical advice. Always consult your physician before starting any new fitness or nutrition program.</p>
                  <p className="font-bold text-white mt-4">Subscription and Billing</p>
                  <p>Individual memberships are billed monthly at $14.99. You can cancel at any time. Corporate wellness programs are structured separately and do not have publicly listed pricing.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-white/10">Privacy Policy</h2>
                <div className="space-y-4 text-white/70 font-light leading-relaxed">
                  <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                  <p className="font-bold text-white mt-4">Information We Collect</p>
                  <p>We collect information you provide directly, including name, email, and any other details you choose to share when using our services.</p>
                  <p className="font-bold text-white mt-4">How We Use Your Information</p>
                  <p>We use your information to provide and improve our services, process transactions, send support messages, and communicate about relevant offerings.</p>
                  <p className="font-bold text-white mt-4">Data Protection</p>
                  <p>We take reasonable measures to protect your information and do not share it with third parties without your consent.</p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
