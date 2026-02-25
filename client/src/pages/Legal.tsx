export default function Legal() {
  return (
    <div className="pt-16 pb-24 min-h-screen bg-primary text-white">
      <div className="container mx-auto px-4 max-w-4xl text-white">
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-heading text-white mb-4">Legal Information</h1>
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
    </div>
  );
}