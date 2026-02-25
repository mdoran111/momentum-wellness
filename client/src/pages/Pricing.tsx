import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2, X } from "lucide-react";

export default function Pricing() {
  return (
    <div className="pt-16 pb-24 min-h-screen bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Simple, Honest Pricing</h1>
          <p className="text-xl text-muted-foreground">Everything you need to reach your goals, packaged into one accessible membership.</p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto mb-20">
          <Card className="border-primary shadow-xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-2 bg-primary"></div>
            <CardHeader className="text-center pt-10 pb-8 bg-white">
              <CardTitle className="text-2xl font-bold font-heading mb-2">Momentum Membership</CardTitle>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold font-heading text-primary">$14.99</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="p-8 bg-secondary/20">
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited access to all training programs",
                  "Step-by-step app access",
                  "Built-in progression tracking",
                  "Nutrition guidelines & calculators",
                  "New programs added regularly",
                  "Cancel anytime with 2 clicks"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="https://example.com/checkout" target="_blank" rel="noreferrer" className="block w-full">
                <Button className="w-full rounded-full h-14 text-lg font-bold shadow-md">
                  Start Membership
                </Button>
              </a>
              <p className="text-center text-sm text-muted-foreground mt-4">7-day money-back guarantee.</p>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-center text-primary mb-12">How it compares</h2>
          
          <div className="bg-white rounded-3xl p-8 border shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr>
                  <th className="pb-6 text-lg font-bold w-1/3"></th>
                  <th className="pb-6 text-lg font-bold font-heading text-primary w-1/3 bg-primary/5 px-4 rounded-t-xl">Momentum Membership</th>
                  <th className="pb-6 text-lg font-bold font-heading text-muted-foreground w-1/3 px-4">1-on-1 Coaching</th>
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
                  <tr key={i} className="border-t">
                    <td className="py-4 font-medium">{row.label}</td>
                    <td className="py-4 px-4 bg-primary/5">
                      {typeof row.we === 'boolean' ? (
                        row.we ? <CheckCircle2 className="w-5 h-5 text-primary" /> : <X className="w-5 h-5 text-muted-foreground/50" />
                      ) : (
                        <span className="font-bold text-primary">{row.we}</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {typeof row.they === 'boolean' ? (
                        row.they ? <CheckCircle2 className="w-5 h-5 text-muted-foreground" /> : <X className="w-5 h-5 text-muted-foreground/50" />
                      ) : (
                        <span className="text-muted-foreground">{row.they}</span>
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