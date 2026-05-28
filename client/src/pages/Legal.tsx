import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

export default function Legal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]"></div>
        <div className="absolute inset-0" style={{backgroundImage: `radial-gradient(circle at 30% 50%, rgba(16,185,129,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.02) 0%, transparent 50%)`}}></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        ></div>
        <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" as const }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-sm font-semibold tracking-wider uppercase text-white">
                  Legal
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                Legal{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Information
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white mb-4 font-light leading-relaxed max-w-3xl mx-auto">
                Transparency and trust are core to how we operate. Here's everything you need to know about our terms, privacy, and policies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#0f172a]">
        <div className="container mx-auto px-4 max-w-4xl text-white">
        <div className="mb-12">
          <p className="text-white/60 border-l-4 border-white pl-4 italic">
            Note: Replace with finalized legal language before launching.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-6 pb-2 border-b border-white/10">Terms of Service</h2>
            <div className="prose prose-invert max-w-none text-white/70">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
              
              <h3 className="text-lg font-bold text-white mt-6 mb-2">1. Acceptance of Terms</h3>
              <p>By accessing and using Momentum Wellness, you accept and agree to be bound by the terms and provision of this agreement.</p>
              
              <h3 className="text-lg font-bold text-white mt-6 mb-2">2. Medical Disclaimer</h3>
              <p>The content provided by Momentum Wellness is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
              
              <h3 className="text-lg font-bold text-white mt-6 mb-2">3. Subscription and Billing</h3>
              <p>By subscribing to our service, you agree to pay the monthly subscription fee of $14.99. You can cancel your subscription at any time. Cancellations will take effect at the end of your current billing cycle.</p>
              
              <p className="mt-8 text-sm italic">[Placeholder for complete Terms of Service]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-heading text-white mb-6 pb-2 border-b border-white/10">Privacy Policy</h2>
            <div className="prose prose-invert max-w-none text-white/70">
              <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
              
              <h3 className="text-lg font-bold text-white mt-6 mb-2">1. Information We Collect</h3>
              <p>We collect information that you provide directly to us, including your name, email address, payment information, and any other information you choose to provide when interacting with our service.</p>
              
              <h3 className="text-lg font-bold text-white mt-6 mb-2">2. How We Use Your Information</h3>
              <p>We use the information we collect to provide, maintain, and improve our services, to process your transactions, to send you technical notices and support messages, and to communicate with you about products, services, offers, and events.</p>
              
              <p className="mt-8 text-sm italic">[Placeholder for complete Privacy Policy]</p>
            </div>
          </section>
        </div>
      </div>
      </section>
    </div>
  );
}