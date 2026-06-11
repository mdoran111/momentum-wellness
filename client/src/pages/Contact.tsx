import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
} from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { analyticsEvents, trackEvent } from "@/lib/analytics";

const fieldClassName =
  "h-12 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:border-emerald-400/60";

const selectClassName =
  "h-12 w-full rounded-xl border border-white/10 bg-slate-900 px-3 text-sm text-white outline-none transition focus:border-emerald-400/60 focus:ring-1 focus:ring-emerald-400/60";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

function getInitialInquiryType() {
  if (typeof window === "undefined") {
    return "Individual Coaching";
  }

  return new URLSearchParams(window.location.search).get("inquiry") ===
    "corporate"
    ? "Employee Wellness Program"
    : "Individual Coaching";
}

export default function Contact() {
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");
  const [submissionError, setSubmissionError] = useState("");
  const [inquiryType, setInquiryType] = useState(getInitialInquiryType);
  const [preferredContactMethod, setPreferredContactMethod] = useState("");

  const isCorporateInquiry = inquiryType === "Employee Wellness Program";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim();

    if (!endpoint) {
      setSubmissionStatus("error");
      setSubmissionError(
        "Online submissions are not configured yet. Please use the published Momentum Wellness contact channel while this form is being connected.",
      );
      return;
    }

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setSubmissionStatus("submitting");
    setSubmissionError("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Contact submission failed with ${response.status}`);
      }

      trackEvent(analyticsEvents.submitContactForm, {
        inquiry_type: inquiryType,
      });
      setSubmissionStatus("success");
      form.reset();
    } catch {
      setSubmissionStatus("error");
      setSubmissionError(
        "We could not send your message. Please try again or use another published Momentum Wellness contact channel.",
      );
    }
  };

  return (
    <>
      <SEO
        title="Contact Momentum Wellness"
        description="Contact Momentum Wellness to learn more about individual coaching programs or employee wellness programs for companies."
        keywords="contact Momentum Wellness, individual coaching inquiry, employee wellness inquiry, corporate wellness consultation"
      />

      <main className="min-h-screen overflow-hidden bg-[#0f172a] text-white">
        <section className="relative flex min-h-[58vh] items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_35%,rgba(16,185,129,0.16),transparent_34%),linear-gradient(135deg,#0f172a_0%,#172033_55%,#0f172a_100%)]" />
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
            className="container relative z-10 mx-auto max-w-4xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">
              Get in touch
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Contact Momentum Wellness
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Whether you are looking for personal coaching or an employee
              wellness program for your company, we are here to help you take
              the next step.
            </p>
          </motion.div>
        </section>

        <section className="relative px-4 pb-20 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl shadow-black/20 sm:p-10"
              >
                {submissionStatus === "success" ? (
                  <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15">
                      <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold">
                      Message Sent!
                    </h2>
                    <p className="mt-3 max-w-md leading-7 text-slate-400">
                      Thanks for reaching out. We&apos;ll be in touch shortly.
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setInquiryType("Individual Coaching");
                        setPreferredContactMethod("");
                        setSubmissionStatus("idle");
                      }}
                      className="mt-8 min-h-12 rounded-full border-white/20 px-7 text-white hover:bg-white/10"
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="hidden"
                    />
                    <div>
                      <h2 className="text-2xl font-bold">Tell Us How We Can Help</h2>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        Complete the form below and include any details that
                        will help us understand your goals.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="inquiryType"
                        className="text-sm font-semibold text-white"
                      >
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={inquiryType}
                        onChange={(event) => {
                          setInquiryType(event.target.value);
                          setPreferredContactMethod("");
                        }}
                        className={selectClassName}
                        required
                      >
                        <option value="Individual Coaching">
                          Individual Coaching
                        </option>
                        <option value="Employee Wellness Program">
                          Employee Wellness Program
                        </option>
                        <option value="General Question">
                          General Question
                        </option>
                      </select>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-semibold text-white"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          autoComplete="name"
                          required
                          placeholder="Your name"
                          className={fieldClassName}
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold text-white"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="you@example.com"
                          className={fieldClassName}
                        />
                      </div>
                    </div>

                    {isCorporateInquiry && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-6 rounded-2xl border border-blue-400/20 bg-blue-400/[0.05] p-5 sm:p-6"
                      >
                        <div className="flex items-center gap-3">
                          <Building2 className="h-5 w-5 text-blue-400" />
                          <h3 className="font-bold text-white">
                            Company Information
                          </h3>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label
                              htmlFor="companyName"
                              className="text-sm font-semibold text-white"
                            >
                              Company Name
                            </label>
                            <Input
                              id="companyName"
                              name="companyName"
                              autoComplete="organization"
                              required
                              placeholder="Company name"
                              className={fieldClassName}
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="industry"
                              className="text-sm font-semibold text-white"
                            >
                              Industry
                            </label>
                            <Input
                              id="industry"
                              name="industry"
                              required
                              placeholder="Your industry"
                              className={fieldClassName}
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="employeeCount"
                              className="text-sm font-semibold text-white"
                            >
                              Number of Employees
                            </label>
                            <Input
                              id="employeeCount"
                              name="employeeCount"
                              type="number"
                              min="1"
                              inputMode="numeric"
                              required
                              placeholder="50"
                              className={fieldClassName}
                            />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="preferredContactMethod"
                              className="text-sm font-semibold text-white"
                            >
                              Preferred Contact Method
                            </label>
                            <select
                              id="preferredContactMethod"
                              name="preferredContactMethod"
                              className={selectClassName}
                              required
                              value={preferredContactMethod}
                              onChange={(event) =>
                                setPreferredContactMethod(event.target.value)
                              }
                            >
                              <option value="" disabled>
                                Select one
                              </option>
                              <option value="Email">Email</option>
                              <option value="Phone">Phone</option>
                              <option value="Video Call">Video Call</option>
                            </select>
                          </div>
                          {preferredContactMethod === "Phone" && (
                            <div className="space-y-2">
                              <label
                                htmlFor="phone"
                                className="text-sm font-semibold text-white"
                              >
                                Phone Number
                              </label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                placeholder="(555) 555-5555"
                                className={fieldClassName}
                              />
                            </div>
                          )}
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="mainWellnessGoal"
                            className="text-sm font-semibold text-white"
                          >
                            Main Wellness Goal
                          </label>
                          <Textarea
                            id="mainWellnessGoal"
                            name="mainWellnessGoal"
                            required
                            placeholder="What would you like the program to help your workforce improve?"
                            className="min-h-[110px] rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:border-emerald-400/60"
                          />
                        </div>
                      </motion.div>
                    )}

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-semibold text-white"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="How can Momentum Wellness help?"
                        className="min-h-[140px] rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:border-emerald-400/60"
                      />
                    </div>

                    {submissionStatus === "error" && (
                      <p
                        role="alert"
                        className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-200"
                      >
                        {submissionError}
                      </p>
                    )}

                    <p className="text-xs leading-5 text-slate-400">
                      Please do not include medical information or other
                      sensitive health details. Submissions are processed
                      through Formspree and handled according to our{" "}
                      <Link
                        href="/legal"
                        className="font-semibold text-emerald-400 underline decoration-emerald-400/40 underline-offset-4 hover:text-emerald-300"
                      >
                        privacy information
                      </Link>
                      .
                    </p>

                    <Button
                      type="submit"
                      disabled={submissionStatus === "submitting"}
                      className="min-h-14 w-full rounded-full border-0 bg-emerald-500 text-base font-semibold text-white hover:bg-emerald-400"
                    >
                      {submissionStatus === "submitting"
                        ? "Sending..."
                        : "Send Message"}
                      <ArrowRight />
                    </Button>
                  </form>
                )}
              </motion.div>
          </div>
        </section>

        <section className="bg-slate-100 px-4 py-20 text-slate-950 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="mx-auto grid max-w-5xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <Mail className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Interested in Employee Wellness Programs?
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  Tell us about your company, team size, and wellness goals. We
                  will follow up to discuss how Momentum Wellness can support
                  your workforce.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
