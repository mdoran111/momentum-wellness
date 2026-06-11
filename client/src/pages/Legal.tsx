import SEO from "@/components/SEO";
import { Link } from "wouter";

const legalSections = [
  {
    title: "Terms of Service",
    paragraphs: [
      "By accessing or using Momentum Wellness websites, programs, or services, you agree to use them lawfully and in accordance with applicable terms.",
      "Program availability, features, and access may change as Momentum Wellness updates its services.",
    ],
  },
  {
    title: "Fitness and Wellness Information",
    paragraphs: [
      "Momentum Wellness provides fitness, nutrition, habit, and wellness information for educational purposes. It is not medical advice, diagnosis, or treatment.",
      "Consult an appropriate qualified professional before beginning a new fitness or nutrition program, particularly if you have a medical condition, injury, or other health concern.",
    ],
  },
  {
    title: "Individual Memberships",
    paragraphs: [
      "Individual membership information, including current pricing, billing, cancellation, and access details, is presented on the Pricing page or confirmed during enrollment.",
      "Contact Momentum Wellness with questions about a current or prospective membership.",
    ],
  },
  {
    title: "Privacy Policy",
    paragraphs: [
      "Momentum Wellness collects information you choose to provide through the Contact page, such as your name, email address, inquiry type, phone number when requested, company information, and message details.",
      "Contact-form submissions are transmitted and processed through Formspree so Momentum Wellness can receive and respond to inquiries. Formspree processes information as a service provider under its own privacy and security practices.",
      "Information is used to respond to inquiries, discuss requested services, maintain appropriate business records, and support an active client or company relationship. Access should be limited to Momentum Wellness personnel and service providers who need the information for those purposes.",
      "Inquiry information is retained only as long as reasonably needed for those business purposes or to meet applicable legal obligations. Do not submit medical information or other sensitive health details through the public Contact form.",
      "You may use the Contact page to ask about Momentum Wellness privacy practices or request access to, correction of, or deletion of information you previously submitted. Requests may be retained when necessary to document the response or meet legal obligations.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Questions about these terms, privacy practices, or Momentum Wellness services can be submitted through the Contact page.",
    ],
  },
];

export default function Legal() {
  return (
    <>
      <SEO
        title="Legal | Momentum Wellness"
        description="Review Momentum Wellness legal information, policies, terms, and privacy details."
        keywords="Momentum Wellness legal, terms, privacy, wellness disclaimer"
      />

      <main className="min-h-screen bg-slate-100 text-slate-950">
        <header className="bg-[#0f172a] px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
              Momentum Wellness
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Legal Information
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              General terms, wellness information, and privacy details.
            </p>
          </div>
        </header>

        <article className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <p className="border-b border-slate-200 pb-6 text-sm text-slate-500">
              Please{" "}
              <Link
                href="/contact"
                className="font-semibold text-emerald-700 underline decoration-emerald-700/30 underline-offset-4 hover:text-emerald-600"
              >
                contact Momentum Wellness
              </Link>{" "}
              if you need clarification about these policies or how they apply
              to a specific service.
            </p>

            <div className="divide-y divide-slate-200">
              {legalSections.map((section) => (
                <section key={section.title} className="py-8">
                  <h2 className="text-xl font-bold">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
