import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Equipe from "./pages/equipe";
import Contactos from "./pages/Contactos";
import Privacidade from "./pages/Privacidade";
import Termos from "./pages/Termos";
import PageTransition from "./components/PageTransition";
import WhatsAppButton from "./components/WhatsAppButton";
import { useEffect } from "react";

function UseBgClipFallback(): null {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Feature-detection robusta
    const cssSupports =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function";

    const supportsBgClip = cssSupports && (
      CSS.supports("-webkit-background-clip", "text") ||
      CSS.supports("background-clip", "text")
    );

    const supportsTextFill = cssSupports && (
      CSS.supports("-webkit-text-fill-color", "transparent") ||
      // fallback basic check for transparent color support
      CSS.supports("color", "transparent")
    );

    // If CSS.supports not available or one of features missing -> apply fallback
    const needsFallback = !cssSupports || !(supportsBgClip && supportsTextFill);

    if (needsFallback) {
      try {
        document.documentElement.classList.add("no-bgclip-text");
      } catch (e) {
        /* noop */
      }
    }
  }, []);

  

  return null;
  
}







const AppRoutes = () => {
  const location = useLocation();
  
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
