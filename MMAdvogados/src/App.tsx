import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import React, { useEffect, Suspense } from "react";
import PageTransition from "./components/PageTransition";
import { initLazyBackgrounds } from "@/utils/lazyBackgrounds";
import WhatsAppButton from "./components/WhatsAppButton";

// Code splitting com React.lazy para todas as páginas (reduz bundle inicial)
const Index = React.lazy(() => import("./pages/Index"));
const Sobre = React.lazy(() => import("./pages/Sobre"));
const Servicos = React.lazy(() => import("./pages/Servicos"));
const Equipe = React.lazy(() => import("./pages/equipe"));
const Avenca = React.lazy(() => import("./pages/Avenca"));
const Contactos = React.lazy(() => import("./pages/Contactos"));
const ServiceDetail = React.lazy(() => import("./pages/ServiceDetail"));
const Privacidade = React.lazy(() => import("./pages/Privacidade"));
const Termos = React.lazy(() => import("./pages/Termos"));

// Loader personalizado otimizado (sem framer-motion para evitar bloqueios de render)
const CustomLoader = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-6" role="status" aria-label="A carregar a página...">
    <div className="flex flex-col items-center gap-4 animate-pulse">
      <img
        src="/logotipo 4-1.png"
        alt="Milagrosa Macuácua Advogados Logótipo"
        width={60}
        height={60}
        className="object-contain"
        fetchpriority="high"
      />
      <div className="text-[rgb(81,21,38)] text-center">
        <div className="font-serif font-bold text-xl">
          Milagrosa Macuácua
        </div>
        <div className="text-sm opacity-70 tracking-widest mt-1">ADVOGADOS</div>
      </div>
    </div>
    <div className="w-10 h-10 border-4 border-[rgb(81,21,38)]/20 border-t-[rgb(81,21,38)] rounded-full animate-spin mt-4"></div>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();
  // Inicializa lazy background quando muda de rota (client-only)
  useEffect(() => {
    initLazyBackgrounds(document);
  }, [location.pathname]);
useEffect(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.scrollTo(0, 0);
}, []);
  return (
    <PageTransition key={location.pathname}>
      <Suspense fallback={<CustomLoader />}>
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/servicos/:slug" element={<ServiceDetail />} />
          <Route path="/avenca" element={<Avenca />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/privacidade" element={<Privacidade />} />
          <Route path="/termos" element={<Termos />} />
        </Routes>
      </Suspense>
    </PageTransition>
  );
};

const App = () => (
  <LanguageProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <AppRoutes />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </LanguageProvider>
);

export default App;
