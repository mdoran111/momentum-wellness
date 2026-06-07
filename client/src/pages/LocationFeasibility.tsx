import { useMemo, useState, type ReactNode } from "react";
import {
  CircleDollarSign,
  MapPin,
  Printer,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
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

const percentage = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

export default function LocationFeasibility() {
  const [spaceSize, setSpaceSize] = useState(2500);
  const [annualRentPerSquareFoot, setAnnualRentPerSquareFoot] =
    useState(14.68);
  const [camUtilities, setCamUtilities] = useState(2500);
  const [payroll, setPayroll] = useState(22000);
  const [software, setSoftware] = useState(1500);
  const [insurance, setInsurance] = useState(1500);
  const [marketing, setMarketing] = useState(4000);
  const [cleaningSupplies, setCleaningSupplies] = useState(1200);
  const [maintenance, setMaintenance] = useState(1500);
  const [loanEquipment, setLoanEquipment] = useState(4500);
  const [miscellaneous, setMiscellaneous] = useState(2000);

  const [appClients, setAppClients] = useState(80);
  const [appClientPrice, setAppClientPrice] = useState(149);
  const [semiPrivateClients, setSemiPrivateClients] = useState(75);
  const [semiPrivatePrice, setSemiPrivatePrice] = useState(299);
  const [premiumClients, setPremiumClients] = useState(10);
  const [premiumPrice, setPremiumPrice] = useState(600);
  const [corporateEmployees, setCorporateEmployees] = useState(75);
  const [corporateEmployeePrice, setCorporateEmployeePrice] = useState(129);
  const [workshopRevenue, setWorkshopRevenue] = useState(3000);

  const model = useMemo(() => {
    const baseRent = positive(spaceSize) * positive(annualRentPerSquareFoot) / 12;
    const expenseItems = [
      { label: "Base rent", value: baseRent },
      { label: "CAM and utilities", value: positive(camUtilities) },
      { label: "Payroll", value: positive(payroll) },
      { label: "Software", value: positive(software) },
      { label: "Insurance", value: positive(insurance) },
      { label: "Marketing", value: positive(marketing) },
      { label: "Cleaning and supplies", value: positive(cleaningSupplies) },
      { label: "Maintenance", value: positive(maintenance) },
      { label: "Loan and equipment", value: positive(loanEquipment) },
      { label: "Miscellaneous", value: positive(miscellaneous) },
    ];

    const revenueItems = [
      {
        label: "App clients",
        value: positive(appClients) * positive(appClientPrice),
      },
      {
        label: "Semi-private training",
        value: positive(semiPrivateClients) * positive(semiPrivatePrice),
      },
      {
        label: "Premium 1:1 training",
        value: positive(premiumClients) * positive(premiumPrice),
      },
      {
        label: "Corporate wellness",
        value:
          positive(corporateEmployees) * positive(corporateEmployeePrice),
      },
      { label: "Workshops and events", value: positive(workshopRevenue) },
    ];

    const totalExpenses = expenseItems.reduce(
      (total, item) => total + item.value,
      0,
    );
    const totalRevenue = revenueItems.reduce(
      (total, item) => total + item.value,
      0,
    );
    const profitLoss = totalRevenue - totalExpenses;

    return {
      baseRent,
      expenseItems,
      revenueItems,
      totalExpenses,
      totalRevenue,
      profitLoss,
      breakEvenGap: Math.max(0, totalExpenses - totalRevenue),
      rentPercentage: totalRevenue > 0 ? baseRent / totalRevenue : 0,
      payrollPercentage:
        totalRevenue > 0 ? positive(payroll) / totalRevenue : 0,
    };
  }, [
    spaceSize,
    annualRentPerSquareFoot,
    camUtilities,
    payroll,
    software,
    insurance,
    marketing,
    cleaningSupplies,
    maintenance,
    loanEquipment,
    miscellaneous,
    appClients,
    appClientPrice,
    semiPrivateClients,
    semiPrivatePrice,
    premiumClients,
    premiumPrice,
    corporateEmployees,
    corporateEmployeePrice,
    workshopRevenue,
  ]);

  const isProfitable = model.profitLoss >= 0;

  return (
    <>
      <SEO
        title="Albuquerque Location Feasibility | Momentum Wellness"
        description="Internal Momentum Wellness studio feasibility calculator."
        robots="noindex, nofollow, noarchive"
      />

      <AdminToolGate toolName="Albuquerque Location Feasibility">
        <main className="admin-calculator-shell min-h-screen bg-slate-100 text-slate-950">
          <header className="admin-calculator-header bg-[#0f172a] px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-3 text-emerald-400">
                  <MapPin className="h-6 w-6" />
                  <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Albuquerque, New Mexico
                  </span>
                </div>
                <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Location Feasibility Calculator
                </h1>
                <p className="mt-3 text-slate-300">
                  Internal planning model for a future Momentum Wellness studio.
                </p>
              </div>
              <Button
                type="button"
                onClick={() => window.print()}
                className="admin-no-print min-h-12 rounded-full border-0 bg-emerald-500 px-6 text-white hover:bg-emerald-400"
              >
                <Printer />
                Print Dashboard
              </Button>
            </div>
          </header>

          <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
            <section className="admin-no-print grid gap-6 xl:grid-cols-2">
              <InputPanel
                title="Monthly Expense Assumptions"
                description="Facility and operating costs."
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <NumberInput
                    id="space-size"
                    label="Space Size"
                    suffix="sq ft"
                    value={spaceSize}
                    onChange={setSpaceSize}
                  />
                  <NumberInput
                    id="annual-rent"
                    label="Base Rent per Sq Ft / Year"
                    prefix="$"
                    step="0.01"
                    value={annualRentPerSquareFoot}
                    onChange={setAnnualRentPerSquareFoot}
                  />
                  <NumberInput
                    id="cam-utilities"
                    label="CAM / Utilities per Month"
                    prefix="$"
                    value={camUtilities}
                    onChange={setCamUtilities}
                  />
                  <NumberInput
                    id="payroll"
                    label="Payroll per Month"
                    prefix="$"
                    value={payroll}
                    onChange={setPayroll}
                  />
                  <NumberInput
                    id="software"
                    label="Software per Month"
                    prefix="$"
                    value={software}
                    onChange={setSoftware}
                  />
                  <NumberInput
                    id="insurance"
                    label="Insurance per Month"
                    prefix="$"
                    value={insurance}
                    onChange={setInsurance}
                  />
                  <NumberInput
                    id="marketing"
                    label="Marketing per Month"
                    prefix="$"
                    value={marketing}
                    onChange={setMarketing}
                  />
                  <NumberInput
                    id="cleaning-supplies"
                    label="Cleaning / Supplies"
                    prefix="$"
                    value={cleaningSupplies}
                    onChange={setCleaningSupplies}
                  />
                  <NumberInput
                    id="maintenance"
                    label="Maintenance per Month"
                    prefix="$"
                    value={maintenance}
                    onChange={setMaintenance}
                  />
                  <NumberInput
                    id="loan-equipment"
                    label="Loan / Equipment Payments"
                    prefix="$"
                    value={loanEquipment}
                    onChange={setLoanEquipment}
                  />
                  <NumberInput
                    id="miscellaneous"
                    label="Miscellaneous Expenses"
                    prefix="$"
                    value={miscellaneous}
                    onChange={setMiscellaneous}
                  />
                </div>
              </InputPanel>

              <InputPanel
                title="Monthly Revenue Assumptions"
                description="Client, training, corporate, and event revenue."
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <NumberInput
                    id="app-clients"
                    label="App Clients"
                    value={appClients}
                    onChange={setAppClients}
                  />
                  <NumberInput
                    id="app-price"
                    label="App Client Monthly Price"
                    prefix="$"
                    value={appClientPrice}
                    onChange={setAppClientPrice}
                  />
                  <NumberInput
                    id="semi-private-clients"
                    label="Semi-Private Clients"
                    value={semiPrivateClients}
                    onChange={setSemiPrivateClients}
                  />
                  <NumberInput
                    id="semi-private-price"
                    label="Semi-Private Monthly Price"
                    prefix="$"
                    value={semiPrivatePrice}
                    onChange={setSemiPrivatePrice}
                  />
                  <NumberInput
                    id="premium-clients"
                    label="Premium 1:1 Clients"
                    value={premiumClients}
                    onChange={setPremiumClients}
                  />
                  <NumberInput
                    id="premium-price"
                    label="Premium 1:1 Monthly Price"
                    prefix="$"
                    value={premiumPrice}
                    onChange={setPremiumPrice}
                  />
                  <NumberInput
                    id="corporate-employees"
                    label="Corporate Wellness Employees"
                    value={corporateEmployees}
                    onChange={setCorporateEmployees}
                  />
                  <NumberInput
                    id="corporate-price"
                    label="Corporate Price per Employee"
                    prefix="$"
                    value={corporateEmployeePrice}
                    onChange={setCorporateEmployeePrice}
                  />
                  <NumberInput
                    id="workshop-revenue"
                    label="Workshop / Event Revenue"
                    prefix="$"
                    value={workshopRevenue}
                    onChange={setWorkshopRevenue}
                  />
                </div>
              </InputPanel>
            </section>

            <section className="admin-print-summary space-y-8">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <MetricCard
                  label="Estimated Base Rent per Month"
                  value={currency.format(model.baseRent)}
                  tone="neutral"
                />
                <MetricCard
                  label="Estimated Total Monthly Expenses"
                  value={currency.format(model.totalExpenses)}
                  tone="expense"
                />
                <MetricCard
                  label="Estimated Monthly Revenue"
                  value={currency.format(model.totalRevenue)}
                  tone="revenue"
                />
                <MetricCard
                  label="Estimated Monthly Profit / Loss"
                  value={currency.format(model.profitLoss)}
                  tone={isProfitable ? "revenue" : "expense"}
                />
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="grid gap-6 sm:grid-cols-2">
                  <BreakdownCard
                    title="Monthly Expense Breakdown"
                    total={model.totalExpenses}
                    items={model.expenseItems}
                    accent="expense"
                  />
                  <BreakdownCard
                    title="Monthly Revenue Breakdown"
                    total={model.totalRevenue}
                    items={model.revenueItems}
                    accent="revenue"
                  />
                </div>

                <div className="space-y-6">
                  <div
                    className={`rounded-3xl border p-7 ${
                      isProfitable
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-red-200 bg-red-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isProfitable ? (
                        <TrendingUp className="h-6 w-6 text-emerald-700" />
                      ) : (
                        <TrendingDown className="h-6 w-6 text-red-700" />
                      )}
                      <h2 className="text-xl font-bold">
                        {isProfitable
                          ? "Model Shows a Monthly Surplus"
                          : "Model Is Below Break-Even"}
                      </h2>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {isProfitable
                        ? `${currency.format(model.profitLoss)} remains after the modeled monthly expenses.`
                        : `${currency.format(model.breakEvenGap)} in additional monthly revenue or expense reductions is needed to break even.`}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                    <RatioCard
                      label="Break-Even Gap"
                      value={currency.format(model.breakEvenGap)}
                    />
                    <RatioCard
                      label="Rent as % of Revenue"
                      value={percentage.format(model.rentPercentage)}
                    />
                    <RatioCard
                      label="Payroll as % of Revenue"
                      value={percentage.format(model.payrollPercentage)}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-6 text-slate-500 shadow-sm">
                <strong className="text-slate-700">Planning disclaimer:</strong>{" "}
                This calculator is an internal scenario-planning tool based on
                estimates and assumptions. It is not financial, accounting,
                tax, legal, lending, or real-estate advice. Actual lease terms,
                payroll, demand, taxes, financing, and operating results may
                differ materially.
              </div>
            </section>
          </div>
        </main>
      </AdminToolGate>
    </>
  );
}

function positive(value: number) {
  return Math.max(0, Number.isFinite(value) ? value : 0);
}

function InputPanel({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <CircleDollarSign className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
      </div>
      <div className="mt-8">{children}</div>
    </div>
  );
}

function NumberInput({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
  step = "1",
}: {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  step?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-slate-500">
            {prefix}
          </span>
        )}
        <Input
          id={id}
          type="number"
          min="0"
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className={`h-12 rounded-xl border-slate-300 bg-white ${
            prefix ? "pl-7" : ""
          } ${suffix ? "pr-14" : ""}`}
        />
        {suffix && (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-slate-500">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "neutral" | "expense" | "revenue";
}) {
  const toneClasses = {
    neutral: "border-slate-200 bg-white",
    expense: "border-red-200 bg-red-50",
    revenue: "border-emerald-200 bg-emerald-50",
  };

  return (
    <div className={`rounded-3xl border p-6 shadow-sm ${toneClasses[tone]}`}>
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
        {value}
      </p>
    </div>
  );
}

function BreakdownCard({
  title,
  items,
  total,
  accent,
}: {
  title: string;
  items: { label: string; value: number }[];
  total: number;
  accent: "expense" | "revenue";
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-5 divide-y divide-slate-100">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-4 py-3 text-sm"
          >
            <span className="text-slate-600">{item.label}</span>
            <span className="font-semibold">{currency.format(item.value)}</span>
          </div>
        ))}
      </div>
      <div
        className={`mt-4 flex items-center justify-between rounded-xl px-4 py-3 font-bold ${
          accent === "expense"
            ? "bg-red-50 text-red-900"
            : "bg-emerald-50 text-emerald-900"
        }`}
      >
        <span>Total</span>
        <span>{currency.format(total)}</span>
      </div>
    </div>
  );
}

function RatioCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
}
