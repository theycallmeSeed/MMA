import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animation-variants";
import {
  Trophy,
  Users,
  Target,
  Award,
  Shield,
  Heart,
  Building2,
  ArrowRight,
  CheckCircle,
  Building2Icon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { useEffect, useMemo, useState } from "react";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const Sobre = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Trophy,
      title: t("page.sobre.values.1.title"),
      description: t("page.sobre.values.1.desc"),
      gradient: "from-amber-500/20 to-yellow-500/20",
    },
    {
      icon: Users,
      title: t("page.sobre.values.2.title"),
      description: t("page.sobre.values.2.desc"),
      gradient: "from-rose-500/20 to-pink-500/20",
    },
    {
      icon: Target,
      title: t("page.sobre.values.3.title"),
      description: t("page.sobre.values.3.desc"),
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Award,
      title: t("page.sobre.values.4.title"),
      description: t("page.sobre.values.4.desc"),
      gradient: "from-purple-500/20 to-violet-500/20",
    },
  ];

 const achievements = [
  {
    icon: Shield,
    title: t("page.sobre.achievements.1.title"),
    description: t("page.sobre.achievements.1.desc"),
  },
  {
    icon: Users,
    title: t("page.sobre.achievements.2.title"),
    description: t("page.sobre.achievements.2.desc"),
  },
  {
    icon: Trophy,
    title: t("page.sobre.achievements.3.title"),
    description: t("page.sobre.achievements.3.desc"),
  },
  {
    icon: Heart,
    title: t("page.sobre.achievements.4.title"),
    description: t("page.sobre.achievements.4.desc"),
  },
];

  const founderAchievements = [
    "Sociedade liderada por mulheres em Moçambique",
    "Especialização em regime de avença empresarial",
    "Equipa jovem, técnica e dinâmica",
    "Relatórios mensais e transparência total",
  ];

  const shouldReduce = useReducedMotion();
  const officeImages = useMemo(
    () => [
      "/images/mmaoffice.webp",
      "/images/mmaoffice-1.webp",
      "/images/mmaoffice-2.webp",
      "/images/mmaoffice-3.webp",
    ],
    []
  );
  const [officeIndex, setOfficeIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (shouldReduce) return;
    if (isPaused) return;
    const id = window.setInterval(() => {
      setOfficeIndex((prev) => (prev + 1) % officeImages.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [officeImages.length, isPaused, shouldReduce]);

  useEffect(() => {
    const next = officeImages[(officeIndex + 1) % officeImages.length];
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = next;
    document.head.appendChild(link);
    const img = new Image();
    img.decoding = "async";
    img.loading = "eager";
    img.src = next;
    return () => {
      document.head.removeChild(link);
    };
  }, [officeIndex, officeImages]);

  const goPrev = () =>
    setOfficeIndex((prev) => (prev - 1 + officeImages.length) % officeImages.length);
  const goNext = () =>
    setOfficeIndex((prev) => (prev + 1) % officeImages.length);
  const goTo = (i: number) => setOfficeIndex(i % officeImages.length);
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t("page.sobre.seo.title")}
        description={t("page.sobre.seo.desc")}
        canonicalPath="/sobre"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={shouldReduce ? {} : fadeIn}
            initial={shouldReduce ? undefined : "hidden"}
            whileInView={shouldReduce ? undefined : "visible"}
            viewport={shouldReduce ? undefined : { once: true, amount: 0.3 }}
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
            }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              <span className="text-primary">{t("page.sobre.hero.title")}</span>
            </h1>

            {/* <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Uma sociedade de advogados pioneira em Moçambique, assente nos valores da excelência, da inovação e da liderança exercida por mulheres, ao serviço de empresas e particulares.
            </p> */}
          </motion.div>

          {/* Achievement Stats */}
         <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-16"
  variants={shouldReduce ? {} : staggerContainer}
  initial={shouldReduce ? undefined : "hidden"}
  whileInView={shouldReduce ? undefined : "visible"}
  viewport={shouldReduce ? undefined : { once: true, amount: 0.25 }}
  style={{
    willChange: "transform, opacity",
    backfaceVisibility: "hidden",
  }}
>
  {achievements.map((achievement, index) => (
    <motion.div
      key={index}
      variants={shouldReduce ? {} : slideUp}
      className="group relative overflow-hidden rounded-[24px] border border-border bg-card/90 p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
      style={{
        boxShadow: "var(--shadow-card)",
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.05] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/10 to-accent/10">
          <achievement.icon className="h-6 w-6 text-primary" />
        </div>

        <h3 className="text-xl md:text-2xl font-serif font-semibold text-primary mb-3">
          {achievement.title}
        </h3>

        <p className="text-sm md:text-[15px] leading-7 text-muted-foreground">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>
        </div>
      </section>

      {/* Nossa História com Escritório Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Imagem do Escritório */}
            <div
              className="relative overflow-hidden rounded-2xl border border-border aspect-[4/3]"
              style={{ boxShadow: "var(--shadow-card)" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              role="region"
              aria-roledescription="carousel"
              aria-label="Galeria do escritório"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={officeImages[officeIndex]}
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                  style={{ willChange: "opacity, transform", backfaceVisibility: "hidden" }}
                >
                  <LazyImage
                    src={officeImages[officeIndex]}
                    alt="Escritório Milagrosa Macuácua Advogados"
                    width={1200}
                    height={900}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>

              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="h-10 w-10 rounded-full bg-card/80 border border-border text-foreground hover:bg-card backdrop-blur-sm flex items-center justify-center"
                  aria-label="Slide anterior"
                  title="Slide anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="h-10 w-10 rounded-full bg-card/80 border border-border text-foreground hover:bg-card backdrop-blur-sm flex items-center justify-center"
                  aria-label="Próximo slide"
                  title="Próximo slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div
                className="absolute bottom-4 right-4 flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-3 py-2 border border-border"
                role="tablist"
                aria-label="Selecionar slide do escritório"
              >
                {officeImages.map((_, i) => {
                  const active = i === officeIndex;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goTo(i)}
                      className={`h-2.5 w-2.5 rounded-full ${active ? "bg-primary" : "bg-foreground/40"} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
                      aria-label={`Ir para slide ${i + 1}`}
                      aria-selected={active}
                      role="tab"
                      title={`Slide ${i + 1}`}
                    />
                  );
                })}
              </div>
            </div>

            {/* História do Escritório */}
            <motion.div className="space-y-6" variants={slideUp}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-foreground">
                <Building2Icon className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">{t("page.sobre.office.badge")}</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                {t("page.sobre.office.title.1")}{" "}
                <span className="text-gradient-primary">{t("page.sobre.office.title.2")}</span>
              </h2>

              <div className="space-y-4 text-foreground leading-relaxed">
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  {t("page.sobre.office.desc")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section - Milagrosa Macuácua */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="space-y-6" variants={slideUp}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-foreground">
                <Trophy className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{t("page.sobre.founder.badge")}</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Milagrosa Macuácua
              </h3>

              <div className="space-y-4 text-foreground leading-relaxed">
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  {t("page.sobre.founder.desc")}
                </p>
              </div>

              {/* <div className="space-y-4 pt-4">
                {founderAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div> */}
            </motion.div>

            <motion.div className="relative" variants={slideUp}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <div
                className="relative overflow-hidden rounded-2xl border border-border"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {(() => {
                  const base = "/images/milagrosa-portrait".replace(/\.webp$/i, "");
                  const src = "/images/milagrosa-portrait.webp";
                  const srcSet = `${base}-400.webp 400w, ${base}-800.webp 800w`;
                  const sizes = "(min-width:1024px) 50vw, (min-width:768px) 50vw, 100vw";
                  return (
                    <LazyImage
                      src={src}
                      srcSet={srcSet}
                      sizes={sizes}
                      alt="Milagrosa Macuácua - Fundadora"
                      width={800}
                      height={1000}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      fallbackSrc={src}
                    />
                  );
                })()}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <div
                className="relative overflow-hidden rounded-2xl border border-border"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {(() => {
                  const base = "/images/legal-team".replace(/\.webp$/i, "");
                  const src = "/images/legal-team.webp";
                  const srcSet = `${base}-400.webp 400w, ${base}-800.webp 800w`;
                  const sizes = "(min-width:1024px) 50vw, (min-width:768px) 50vw, 100vw";
                  return (
                    <LazyImage
                      src={src}
                      srcSet={srcSet}
                      sizes={sizes}
                      alt="Equipa Jurídica"
                      width={800}
                      height={1000}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      fallbackSrc={src}
                    />
                  );
                })()}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>

            <div className="space-y-6 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-foreground">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{t("page.sobre.team.badge")}</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                {t("page.sobre.team.title")}
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  {t("page.sobre.team.desc")}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">
                    {t("page.sobre.team.stat1")}
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <div className="text-sm text-muted-foreground">
                    {t("page.sobre.team.stat2")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background"></div>

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(343 59% 20%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(343 59% 20%) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
              {t("page.sobre.values.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("page.sobre.values.subtitle")}
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={slideUp}
              >
                <div
                  className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-3"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>

                    <h3 className="text-2xl font-serif font-semibold text-primary mb-4 group-hover:text-primary/90 transition-colors">
                      {value.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12 border border-border"
            style={{ boxShadow: "var(--shadow-card)" }}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Target className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">{t("page.sobre.mission.badge")}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              {t("page.sobre.mission.title")}
            </h3>

            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t("page.sobre.mission.desc")}
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="/servicos"
                className="group px-10 py-5 bg-[rgb(81,21,38)] text-white font-bold text-lg rounded-xl hover:bg-[rgb(81,21,3j8)]/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <span>{t("page.sobre.mission.btn")}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
