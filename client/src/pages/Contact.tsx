import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import logo from "../assets/images/logo.png";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end only mockup
    setSubmitted(true);
  };

  return (
    <div className="pt-16 pb-24 min-h-screen bg-primary text-white relative overflow-hidden">
      {/* Background Logo watermark - Static on internal pages */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img src={logo} alt="" className="w-[120%] max-w-none grayscale invert opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/80">Have a question about the programs or your membership? We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 bg-white/5 rounded-3xl shadow-sm border border-white/10 overflow-hidden">
          {/* Contact Info */}
          <div className="md:col-span-2 bg-white/10 p-10 text-white flex flex-col border-r border-white/10">
            <h2 className="text-2xl font-bold font-heading mb-6">Get in Touch</h2>
            <p className="text-white/70 mb-12">
              Fill out the form and our team will get back to you within 24-48 hours.
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-white/60 mb-1">Email us at</p>
                <p className="font-medium text-white">info@momentumwellness.health</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-2">Message Sent!</h3>
                <p className="text-white/70 mb-8">Thanks for reaching out. We'll be in touch shortly.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full text-white border-white/20 hover:bg-white/10">
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-white">Name</label>
                    <Input id="name" required placeholder="John Doe" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-white">Email</label>
                    <Input id="email" type="email" required placeholder="john@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-white">Subject</label>
                  <Input id="subject" required placeholder="How can we help?" className="bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-white">Message</label>
                  <Textarea id="message" required placeholder="Write your message here..." className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-white/30" />
                </div>
                
                <Button type="submit" className="w-full rounded-full h-12 text-base font-bold bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] border-none">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}