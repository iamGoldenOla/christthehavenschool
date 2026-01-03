import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
=======
import ScrollToTop from "@/components/layout/ScrollToTop";
>>>>>>> 98271f71a22a8faca0d2bd1b328d48a7f7b2bf44
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Services from "./pages/Services";
import Events from "./pages/Events";
import News from "./pages/News";
<<<<<<< HEAD
=======
import NewsPost from "./pages/NewsPost";
>>>>>>> 98271f71a22a8faca0d2bd1b328d48a7f7b2bf44
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Staff from "./pages/Staff";
import Admissions from "./pages/Admissions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
<<<<<<< HEAD
=======
        <ScrollToTop />
>>>>>>> 98271f71a22a8faca0d2bd1b328d48a7f7b2bf44
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
<<<<<<< HEAD
=======
          <Route path="/news/:id" element={<NewsPost />} />
>>>>>>> 98271f71a22a8faca0d2bd1b328d48a7f7b2bf44
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/admissions" element={<Admissions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
