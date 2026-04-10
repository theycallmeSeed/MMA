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
import { motion } from "framer-motion";
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
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center"
    style={{
      backgroundColor: "rgba(255,255,255,0.2)",
      backdropFilter: "blur(6px)",
    }}
    role="status"
    aria-label="A carregar a página..."
  >
    <div className="flex flex-col items-center gap-5">
      
      {/* LOGO ANIMADO */}
      <motion.img
        src="/logotipo 4-1.png"
        alt="Milagrosa Macuácua Advogados Logótipo"
        width={70}
        height={70}
        className="object-contain rounded-xl"
        fetchPriority="high"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 6, -6, 0],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          boxShadow: "0 0 25px rgba(81,21,38,0.5)",
        }}
      />

      {/* TEXTO */}
      <div className="text-center">
        <div className="font-serif font-bold text-xl text-[rgb(81,21,38)]">
          Milagrosa Macuácua
        </div>
        <div className="text-sm opacity-70 tracking-widest">
          ADVOGADOS
        </div>
      </div>

      {/* TEXTO ANIMADO */}
      <motion.p
        className="text-sm font-medium text-gray-700"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        A carregar...
      </motion.p>

      {/* SPINNER PREMIUM */}
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-4 border-[rgb(81,21,38)]/20" />
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-[rgb(81,21,38)]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
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
