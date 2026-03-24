import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppConsultoriaLinkExact } from "@/lib/utils";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

<section id="hero"></section>

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      aria-label={t("hero.aria.label")}
    >
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="hero-bg absolute inset-0"
          role="img"
          aria-label={t("hero.img.alt")}
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
              <a href="/servicos">
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
  background-image: url('/images/hero-banner.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* 🔥 MAGIA AQUI */
  filter: brightness(0.40) contrast(1.0) saturate(0.);
  // transform: scale(1.02); /* evita bordas */
}

@media (max-width: 768px) {
  .hero-bg {
    background-image: url('/images/hero-banner-mob.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
    /* mobile mais escuro para legibilidade */
    filter: brightness(0.5) contrast(1.1) saturate(0.);
      will-change: auto;
  }
}
  .hero-bg,
.hero-layer,
#hero * {
  transform: none !important;
  animation: none !important;
}
  @media (max-width: 768px) {
  .hero-bg {
    background-image: url('/images/hero-banner-mob.webp');

    /* 🔥 evita recalculo agressivo */
    background-attachment: scroll;
  }
}
      `}</style>
    </motion.section>
  );
};

export default HeroSection;
