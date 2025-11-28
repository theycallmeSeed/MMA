import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { getWhatsAppConsultoriaLinkExact } from "@/lib/utils";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero principal - Milagrosa Macuácua Advogados"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat hero-parallax"
        style={{
          backgroundImage: "url('/images/hero-banner.jpg')",
          willChange: "transform",
          filter: "saturate(1.22) contrast(1.08) brightness(1.03)",
          backgroundBlendMode: "normal",
        }}
        role="img"
        aria-label="Escritório de advocacia profissional"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/12 sm:from-primary/28 sm:via-primary/18 sm:to-primary/10"></div>
        <div className="absolute inset-0 bg-radial-gradient opacity-8"></div>
        <div className="absolute inset-0 hero-gradient-animation" style={{ opacity: 0.18, mixBlendMode: "screen" }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <div className="relative mb-6">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight hero-title-reveal"
              data-seo-importance="primary"
              style={{ animationDelay: "0.4s" }}
            >
              Excelência Jurídica para{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/80 bg-clip-text text-transparent font-extrabold">
                  Pessoas Colectivas
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/80 to-transparent rounded-full"></span>
              </span>{" "}
              e{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/80 bg-clip-text text-transparent font-extrabold">
                  Singulares
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/80 to-transparent rounded-full"></span>
              </span>
            </h1>
          </div>

          {/* Short, professional subtitle */}
          {/* <p
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/95 mb-10 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 hero-fade-in drop-shadow-lg"
            style={{ animationDelay: "0.7s" }}
          >
            Mais de 10 anos de prática jurídica: assessoria empresarial, litígios e regimes de avença com resposta prioritária e foco em soluções práticas.
          </p> */}

          {/* Only secondary CTA (Agendar) */}
          <div
            className="flex items-center justify-center gap-4 mb-16 px-4 sm:px-0 hero-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 w-full sm:w-auto text-base transition-all duration-300 backdrop-blur-sm bg-primary-foreground/5 hover:shadow-xl hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
              aria-label="Agendar consultoria jurídica via WhatsApp"
            >
              <a href={getWhatsAppConsultoriaLinkExact()} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-3">
                  Agendar Consultoria
                  <ArrowRight className="h-5 w-5" />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hero-scroll-indicator"
        role="img"
        aria-label="Rolar para baixo para ver mais conteúdo"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center relative group cursor-pointer hover:border-accent transition-colors duration-300">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 scroll-dot"></div>
        </div>
        <p className="text-xs text-primary-foreground/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Deslize</p>
      </div>

      {/* Custom Styles (mantive os teus) */}
      <style>{`
  @media (prefers-reduced-motion: no-preference) {
    .hero-parallax { animation: subtleParallax 8s ease-in-out infinite alternate; }
    @keyframes subtleParallax { 0% { transform: scale(1.05) translateY(0); } 100% { transform: scale(1.1) translateY(-20px); } }
  }
  .bg-radial-gradient { background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.18) 100%); }
  .hero-gradient-animation {
    background: linear-gradient(120deg, hsl(343 59% 25% / 0.85), hsl(343 45% 35% / 0.65), hsl(45 93% 70% / 0.65), hsl(343 59% 25% / 0.85));
    background-size: 300% 300%; animation: gradientShift 10s ease infinite;
  }
  @keyframes gradientShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
  .bg-radial-gradient { /* kept */ }
`}</style>
    </motion.section>
  );
};

export default HeroSection;
