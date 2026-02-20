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
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      aria-label="Hero principal - Milagrosa Macuácua Advogados"
    >
      {/* Background Image with Parallax Effect (optimized) */}
      <div
        className="absolute inset-0 h-full w-full hero-parallax"
        style={{ willChange: "transform" }}
      >
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/hero-banner-mob.webp"
            sizes="100vw"
          />
          <img
            src="/images/hero-banner.webp"
            alt="Escritório de advocacia profissional"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width={1600}
            height={900}
            className="w-full h-full object-cover object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-black/55 sm:bg-black/45 lg:bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-gradient opacity-8"></div>
        <div
          className="absolute inset-0 hero-gradient-animation"
          style={{ opacity: 0.18, mixBlendMode: "screen" }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <div className="relative mb-6">
            <h1
              className="text-[clamp(2rem,4.8vw,4.25rem)] md:text-[clamp(2.25rem,3.8vw,3.8rem)] lg:text-[clamp(3rem,3.6vw,4.75rem)] font-serif font-bold text-primary-foreground leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] hero-title-reveal"
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

          {/* Short subtitle for clarity and SEO */}
          <p
            className="text-base sm:text-lg md:text-xl text-primary-foreground/95 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 hero-fade-in drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]"
            style={{ animationDelay: "0.7s" }}
          >
            Representação e consultoria jurídica com rigor técnico e resposta ágil.
          </p>

          {/* CTA Group */}
          <div
            className="flex items-center justify-center gap-3 sm:gap-4 mb-6 px-4 sm:px-0 hero-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            <Button
              asChild
              size="lg"
              className="px-8 py-6 bg-[rgb(81,21,38)] hover:bg-[rgb(81,21,38)]/90 text-white shadow-lg hover:shadow-2xl rounded-xl w-full sm:w-auto transition-all duration-300"
              aria-label="Agendar consultoria jurídica via WhatsApp"
              title="Agendar Consultoria"
            >
              <a
                href={getWhatsAppConsultoriaLinkExact()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex items-center gap-3 font-semibold">
                  Agendar Consultoria
                  <ArrowRight className="h-5 w-5" />
                </span>
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground/95 hover:bg-primary-foreground hover:text-[rgb(81,21,38)] px-8 py-6 w-full sm:w-auto rounded-xl transition-all duration-300 backdrop-blur-sm bg-primary-foreground/5"
              aria-label="Conhecer áreas de atuação"
              title="Conhecer Serviços"
            >
              <a href="/servicos">
                <span className="flex items-center gap-3 font-semibold">
                  Conhecer Serviços
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
