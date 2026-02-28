import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2, X } from "lucide-react";
import { Link } from "wouter";

export default function Pricing() {
  return (
    <div className="pt-16 pb-24 min-h-screen bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Simple, Honest Pricing</h1>
          <p className="text-xl text-white/80">Everything you need to reach your goals, packaged into one accessible membership.</p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto mb-20">
          <Card className="border-white/10 shadow-xl relative overflow-hidden bg-white/5">
            <div className="absolute top-0 inset-x-0 h-2 bg-white/20"></div>
            <CardHeader className="text-center pt-10 pb-8 bg-white/10 border-b border-white/10">
              <CardTitle className="text-2xl font-bold font-heading mb-2 text-white">Momentum Membership</CardTitle>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold font-heading text-white">$14.99</span>
                <span className="text-white/60">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited access to all 6-month programs",
                  "Progressive monthly unlocks",
                  "Step-by-step app access",
                  "Built-in progression tracking",
                  "Nutrition guidelines & calculators",
                  "Cancel anytime with 2 clicks"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/programs" className="block w-full">
                <Button className="w-full rounded-full h-14 text-lg font-bold shadow-md bg-[#e5e7eb] text-primary hover:bg-[#d1d5db] border-none">
                  Unlock Full Access
                </Button>
              </Link>
              <p className="text-center text-sm text-white/60 mt-4">7-day money-back guarantee.</p>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center text-white mb-12">How it compares</h2>
          
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="pb-6 text-lg font-bold w-1/3"></th>
                  <th className="pb-6 text-lg font-bold font-heading text-white w-1/3 bg-white/10 px-4 rounded-t-xl text-center">Momentum Membership</th>
                  <th className="pb-6 text-lg font-bold font-heading text-white/60 w-1/3 px-4 text-center">1-on-1 Coaching</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Cost", we: "$14.99/mo", they: "$150 - $300+/mo" },
                  { label: "Expert Programming", we: true, they: true },
                  { label: "App Access", we: true, they: true },
                  { label: "Instant Access", we: true, they: false },
                  { label: "Custom Adjustments", we: false, they: true },
                  { label: "Weekly Check-ins", we: false, they: true }
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="py-4 font-medium text-white">{row.label}</td>
                    <td className="py-4 px-4 bg-white/10 text-center">
                      {typeof row.we === 'boolean' ? (
                        row.we ? <CheckCircle2 className="w-5 h-5 text-white mx-auto" /> : <X className="w-5 h-5 text-white/20 mx-auto" />
                      ) : (
                        <span className="font-bold text-white">{row.we}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.they === 'boolean' ? (
                        row.they ? <CheckCircle2 className="w-5 h-5 text-white/40 mx-auto" /> : <X className="w-5 h-5 text-white/20 mx-auto" />
                      ) : (
                        <span className="text-white/60">{row.they}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}