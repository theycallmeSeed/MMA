import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppConsultoriaLinkExact } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

<section id="hero"></section>

const HeroSection = () => {
  const { t } = useLanguage();
useEffect(() => {
  const vh = window.innerHeight;
  document.documentElement.style.setProperty('--real-vh', `${vh}px`);
}, []);
  return (
    <section
      className="relative flex items-center justify-center animate-in fade-in duration-700"
      style={{ height: "var(--real-vh)" }}
      aria-label={t("hero.aria.label")}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Desktop */}
        <img
          src="/images/hero-banner.webp"
          alt={t("hero.img.alt")}
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          fetchPriority="high"
        />

        {/* Mobile */}
        <img
          src="/images/hero-banner-mob.webp"
          alt={t("hero.img.alt")}
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          fetchPriority="high"
        />

        {/* Overlay (melhor contraste e profundidade) */}
        <div className="absolute inset-0 bg-black/55 md:bg-black/50" />

        {/* Gradiente suave premium */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.25)_100%)]" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 sm:gap-8">
          
          {/* Título */}
          <h1 className="text-[clamp(2.25rem,6vw,4.25rem)] md:text-[clamp(2.5rem,5.5vw,4rem)] lg:text-[clamp(3rem,5vw,4.5rem)] font-serif font-bold text-white leading-[1.1]">
            {t("hero.title.p1")}{" "}
            <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/80 bg-clip-text text-transparent font-extrabold">
              {t("hero.title.p2")}
            </span>{" "}
            {t("hero.title.p3")}{" "}
            <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/80 bg-clip-text text-transparent font-extrabold">
              {t("hero.title.p4")}
            </span>
          </h1>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full">
            <Button
              asChild
              size="lg"
              className="bg-[rgb(81,21,38)] text-white hover:bg-[rgb(81,21,38)]/90 px-8 py-6 w-full sm:w-auto text-base shadow-lg hover:shadow-xl transition-all"
            >
              <a
                href={getWhatsAppConsultoriaLinkExact()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Agendar Consultoria (Abre uma conversa no WhatsApp numa nova aba)"
              >
                <span className="flex items-center gap-3">
                  <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.75)]">
                    {t("hero.btn.consult")}
                  </span>
                  <ArrowRight className="h-5 w-5" />
                </span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white/70 text-white hover:bg-white/20 hover:text-white px-8 py-6 w-full sm:w-auto text-base backdrop-blur-sm"
            >
              <a href="/servicos" aria-label="Ver todas as áreas de actuação e serviços">
                <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.75)]">
                  {t("hero.btn.services")}
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .hero-bg {
  //       position: absolute;
  // inset: 0;
  // background-image: url('/images/hero-banner.webp');
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;

  /* 🔥 MAGIA AQUI */
  filter: brightness(0.40) contrast(1.0) saturate(0.);
  // transform: scale(1.02); /* evita bordas */
}

// @media (max-width: 768px) {
//   .hero-bg {
//     background-image: url('/images/hero-banner-mob.webp');
//   }
// }
  .hero-bg,
.hero-layer,
#hero * {
  transform: none !important;
  animation: none !important;
}
      `}</style>
    </section>
  );
};

export default HeroSection;
