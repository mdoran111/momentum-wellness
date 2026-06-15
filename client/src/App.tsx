import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import Pricing from "@/pages/Pricing";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import Legal from "@/pages/Legal";
import InsideTheApp from "@/pages/InsideTheApp";
import EmployeeWellness from "@/pages/EmployeeWellness";
import AdminDashboard from "@/pages/AdminDashboard";
import ClientOperations from "@/pages/ClientOperations";
import CorporateCalculator from "@/pages/CorporateCalculator";
import ProposalGenerator from "@/pages/ProposalGenerator";
import LocationFeasibility from "@/pages/LocationFeasibility";
import OnboardingTracker from "@/pages/OnboardingTracker";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();
  const isAdminTool =
    location === "/admin" || location.startsWith("/admin/");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdminTool && <Navbar />}
      <main className="flex-1">
        <Switch>
          <Route path="/admin" component={AdminDashboard} />
          <Route
            path="/admin/client-operations"
            component={ClientOperations}
          />
          <Route
            path="/admin/corporate-calculator"
            component={CorporateCalculator}
          />
          <Route
            path="/admin/proposal-generator"
            component={ProposalGenerator}
          />
          <Route
            path="/admin/location-feasibility"
            component={LocationFeasibility}
          />
          <Route
            path="/admin/onboarding-tracker"
            component={OnboardingTracker}
          />
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/programs" component={Programs} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />
          <Route path="/inside-the-app" component={InsideTheApp} />
          <Route path="/legal" component={Legal} />
          <Route path="/employee-wellness-programs" component={EmployeeWellness} />
          <Route component={NotFound} />
        </Switch>
      </main>
      {!isAdminTool && <Footer />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
