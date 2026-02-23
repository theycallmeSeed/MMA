import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { getWhatsAppConsultoriaLinkExact } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const linkD = document.createElement("link");
    linkD.rel = "preload";
    linkD.as = "image";
    linkD.href = "/images/hero-banner.webp";
    linkD.fetchPriority = "high";
    const linkM = document.createElement("link");
    linkM.rel = "preload";
    linkM.as = "image";
    linkM.href = "/images/hero-banner-mob.webp";
    linkM.media = "(max-width: 768px)";
    linkM.fetchPriority = "high";
    document.head.appendChild(linkD);
    document.head.appendChild(linkM);
    return () => {
      document.head.removeChild(linkD);
      document.head.removeChild(linkM);
    };
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      aria-label="Hero principal - Milagrosa Macuácua Advogados"
    >
      <div
        className="absolute inset-0 h-full w-full hero-parallax"
        style={{ willChange: "transform" }}
      >
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/hero-banner-mob.webp"
          />
          <img
            src="/images/hero-banner.webp"
            alt="Escritório de advocacia profissional"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-black/50 sm:bg-black/45 md:bg-black/40"></div>
        <div className="absolute inset-0 bg-radial-gradient opacity-8"></div>
        <div
          className="absolute inset-0 hero-gradient-animation"
          style={{ opacity: 0.18, mixBlendMode: "screen" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 sm:gap-8">
          <div className="relative mb-6">
            <h1
              className="text-[clamp(2.25rem,6vw,4.25rem)] md:text-[clamp(2.5rem,5.5vw,4rem)] lg:text-[clamp(3rem,5vw,4.5rem)] font-serif font-bold text-primary-foreground leading-[1.1] hero-title-reveal"
              data-seo-importance="primary"
              style={{ animationDelay: "0.4s" }}
            >
              Assessoria Jurídica de Carácter Institucional para{" "}
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

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 px-4 sm:px-0 hero-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[rgb(81,21,38)] text-white hover:bg-[rgb(81,21,38)]/90 px-8 py-6 w-full sm:w-auto text-base transition-all duration-300 shadow-lg hover:shadow-2xl focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-2"
              aria-label="Agendar consultoria jurídica via WhatsApp"
              title="Agendar consultoria jurídica via WhatsApp"
            >
              <a
                href={getWhatsAppConsultoriaLinkExact()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-3">
                  Agendar Consultoria
                  <ArrowRight className="h-5 w-5" />
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/70 bg-transparent text-white hover:bg-white/20 hover:text-white px-8 py-6 w-full sm:w-auto text-base transition-all duration-300 backdrop-blur-sm"
              aria-label="Conhecer serviços e áreas de atuação"
              title="Conhecer serviços e áreas de atuação"
            >
              <a href="/servicos">
                <span className="flex items-center gap-3">
                  Ver Serviços
                </span>
              </a>
            </Button>
          </div>
        </div>
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
