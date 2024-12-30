import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cotton from "./pages/activities/Cotton";
import Fuel from "./pages/activities/Fuel";
import Corn from "./pages/activities/Corn";
import Seeds from "./pages/activities/Seeds";
import Cattle from "./pages/activities/Cattle";
import OliveOil from "./pages/activities/OliveOil";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/activities/cotton" element={<Cotton />} />
          <Route path="/activities/fuel" element={<Fuel />} />
          <Route path="/activities/corn" element={<Corn />} />
          <Route path="/activities/seeds" element={<Seeds />} />
          <Route path="/activities/cattle" element={<Cattle />} />
          <Route path="/activities/olive-oil" element={<OliveOil />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;