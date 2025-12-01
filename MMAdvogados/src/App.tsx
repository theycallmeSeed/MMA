import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Equipe from "./pages/equipe";
import Contactos from "./pages/Contactos";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import PageTransition from "./components/PageTransition";
import { initLazyBackgrounds } from "@/utils/lazyBackgrounds";
import WhatsAppButton from "./components/WhatsAppButton";

const AppRoutes = () => {
  const location = useLocation();
  // Inicializa lazy background quando muda de rota (client-only)
  useEffect(() => {
    initLazyBackgrounds(document);
  }, [location.pathname]);
  
  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/termos" element={<Termos />} />
      </Routes>
    </PageTransition>
  );
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <AppRoutes />
      <WhatsAppButton />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
