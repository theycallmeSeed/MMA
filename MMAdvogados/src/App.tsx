import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Equipe from "./pages/equipe";
import Contactos from "./pages/Contactos";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
        {/* <Route path="" */}
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
