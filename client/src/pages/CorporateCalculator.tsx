import { useMemo, useState } from "react";
import { Building2, Calculator, Printer } from "lucide-react";
import SEO from "@/components/SEO";
import AdminToolGate from "@/components/admin/AdminToolGate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const wholeCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export default function CorporateCalculator() {
  const [companyName, setCompanyName] = useState("");
  const [employeeCount, setEmployeeCount] = useState(75);
  const [pricePerEmployee, setPricePerEmployee] = useState(129);
  const [programMonths, setProgramMonths] = useState(6);

  const calculations = useMemo(() => {
    const employees = Math.max(0, employeeCount || 0);
    const monthlyPrice = Math.max(0, pricePerEmployee || 0);
    const months = Math.max(0, programMonths || 0);
    const monthlyInvestment = employees * monthlyPrice;

    return {
      monthlyInvestment,
      totalInvestment: monthlyInvestment * months,
      dailyPerEmployee: monthlyPrice / 30,
      weeklyPerEmployee: (monthlyPrice * 7) / 30,
    };
  }, [employeeCount, pricePerEmployee, programMonths]);

  return (
    <>
      <SEO
        title="Corporate Wellness Calculator | Momentum Wellness"
        description="Internal Momentum Wellness corporate program calculator."
        robots="noindex, nofollow, noarchive"
      />

      <AdminToolGate toolName="Corporate Wellness Calculator">
        <main className="admin-calculator-shell min-h-screen bg-slate-100 text-slate-950">
          <header className="admin-calculator-header bg-[#0f172a] px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-3 text-emerald-400">
                  <Building2 className="h-6 w-6" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Momentum Wellness
                  </span>
                </div>
                <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Corporate Wellness Calculator
                </h1>
                <p className="mt-3 text-slate-300">
                  Internal planning tool for consultation conversations.
                </p>
              </div>
              <Button
                type="button"
                onClick={() => window.print()}
                className="admin-no-print min-h-12 rounded-full border-0 bg-emerald-500 px-6 text-white hover:bg-emerald-400"
              >
                <Printer />
                Print Summary
              </Button>
            </div>
          </header>

          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <section className="admin-no-print rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Program Inputs</h2>
                  <p className="text-sm text-slate-500">
                    Adjust values during the conversation.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input
                    id="company-name"
                    value={companyName}
                    onChange={(event) => setCompanyName(event.target.value)}
                    placeholder="Company name"
                    className="h-12 rounded-xl border-slate-300 bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employee-count">Number of Employees</Label>
                  <Input
                    id="employee-count"
                    type="number"
                    min="0"
                    step="1"
                    value={employeeCount}
                    onChange={(event) =>
                      setEmployeeCount(Number(event.target.value))
                    }
                    className="h-12 rounded-xl border-slate-300 bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employee-price">
                    Price per Employee per Month
                  </Label>
                  <Input
                    id="employee-price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={pricePerEmployee}
                    onChange={(event) =>
                      setPricePerEmployee(Number(event.target.value))
                    }
                    className="h-12 rounded-xl border-slate-300 bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="program-length">
                    Program Length in Months
                  </Label>
                  <Input
                    id="program-length"
                    type="number"
                    min="0"
                    step="1"
                    value={programMonths}
                    onChange={(event) =>
                      setProgramMonths(Number(event.target.value))
                    }
                    className="h-12 rounded-xl border-slate-300 bg-white"
                  />
                </div>
              </div>
            </section>

            <section className="admin-print-summary overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-200 p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Investment Summary
                </p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                  {companyName.trim() || "Corporate Wellness Program"}
                </h2>
                <p className="mt-3 text-slate-500">
                  {employeeCount.toLocaleString()} employees ·{" "}
                  {programMonths.toLocaleString()} month
                  {programMonths === 1 ? "" : "s"}
                </p>
              </div>

              <div className="grid gap-px bg-slate-200 sm:grid-cols-2">
                <ResultCard
                  label="Monthly Investment"
                  value={wholeCurrency.format(
                    calculations.monthlyInvestment,
                  )}
                />
                <ResultCard
                  label="Total Program Investment"
                  value={wholeCurrency.format(calculations.totalInvestment)}
                />
                <ResultCard
                  label="Daily Cost per Employee"
                  value={currency.format(calculations.dailyPerEmployee)}
                />
                <ResultCard
                  label="Weekly Cost per Employee"
                  value={currency.format(calculations.weeklyPerEmployee)}
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-bold">Calculation Details</h3>
                <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                  <p>
                    {employeeCount.toLocaleString()} employees ×{" "}
                    {currency.format(pricePerEmployee)} ={" "}
                    <strong className="text-slate-950">
                      {wholeCurrency.format(calculations.monthlyInvestment)}
                      /month
                    </strong>
                  </p>
                  <p>
                    {wholeCurrency.format(calculations.monthlyInvestment)} ×{" "}
                    {programMonths.toLocaleString()} months ={" "}
                    <strong className="text-slate-950">
                      {wholeCurrency.format(calculations.totalInvestment)} total
                    </strong>
                  </p>
                  <p>
                    {currency.format(pricePerEmployee)}/month is approximately{" "}
                    <strong className="text-slate-950">
                      {currency.format(calculations.dailyPerEmployee)}/day
                    </strong>{" "}
                    per employee.
                  </p>
                </div>

                <p className="mt-8 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">
                  Internal estimate for planning conversations. Final scope and
                  investment are confirmed through consultation.
                </p>
              </div>
            </section>
          </div>
        </main>
      </AdminToolGate>
    </>
  );
}

function ResultCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white p-6 sm:p-8">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
        {value}
      </p>
    </div>
  );
}
