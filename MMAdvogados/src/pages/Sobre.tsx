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

const Sobre = () => {
  const values = [
    {
      icon: Trophy,
      title: "Excelência",
      description:
        "Comprometemo-nos com os mais altos padrões de qualidade jurídica.",
      gradient: "from-amber-500/20 to-yellow-500/20",
    },
    {
      icon: Users,
      title: "Liderança Feminina",
      description:
        "Pioneiras no direito empresarial liderado por mulheres em Moçambique.",
      gradient: "from-rose-500/20 to-pink-500/20",
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description:
        "Orientamos todas as nossas acções para alcançar os objectivos dos clientes.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Award,
      title: "Transparência",
      description:
        "Relatórios mensais e comunicação clara em todos os processos.",
      gradient: "from-purple-500/20 to-violet-500/20",
    },
  ];

  const achievements = [
    { icon: Shield, number: "15+", label: "Anos de Experiência" },
    { icon: Users, number: "200+", label: "Clientes Satisfeitos" },
    { icon: Trophy, number: "98%", label: "Taxa de Sucesso" },
    { icon: Heart, number: "24/7", label: "Suporte Dedicado" },
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
              <span className="text-primary">Sobre Nós</span>
            </h1>

            {/* <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Uma sociedade de advogados pioneira em Moçambique, assente nos valores da excelência, da inovação e da liderança exercida por mulheres, ao serviço de empresas e particulares.
            </p> */}
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            variants={shouldReduce ? {} : staggerContainer}
            initial={shouldReduce ? undefined : "hidden"}
            whileInView={shouldReduce ? undefined : "visible"}
            viewport={shouldReduce ? undefined : { once: true, amount: 0.3 }}
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
            }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
                style={{
                  boxShadow: "var(--shadow-card)",
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                }}
                variants={shouldReduce ? {} : slideUp}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {achievement.label}
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
                    alt="Escritório MM Advogados"
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
                <span className="text-sm font-medium">Escritório</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Sobre o{" "}
                <span className="text-gradient-primary">Escritório</span>
              </h2>

              <div className="space-y-4 text-foreground leading-relaxed">
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  A MMAdvogados é uma sociedade de advogados constituída e
                  registada nos termos da lei moçambicana, exercendo a sua
                  actividade em estrita conformidade com o Estatuto da Ordem dos
                  Advogados de Moçambique e demais normas deontológicas
                  aplicáveis à advocacia. O escritório presta serviços de
                  assessoria jurídica a empresas e particulares, actuando nas
                  áreas de consultoria preventiva, contencioso e acompanhamento
                  jurídico continuado, incluindo regimes de avença, sempre com
                  observância dos princípios da independência,
                  confidencialidade, lealdade e zelo profissional.
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
                <span className="text-sm font-medium">Fundadora</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Milagrosa Macuácua
              </h3>

              <div className="space-y-4 text-foreground leading-relaxed">
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  Milagrosa Macuácua é advogada, sócia e fundadora da MM
                  Advogados. Exerce a sua actividade profissional nas áreas de
                  Direito Civil, Direito da Família, Direito Penal, Direito do
                  Trabalho e Contencioso Administrativo. Foi Presidente do
                  Conselho Provincial da Ordem dos Advogados de Moçambique no
                  período de 2020 a 2023, exercendo atualmente funções de
                  Conselheira no mesmo órgão. Integra a Comissão Nacional de
                  Avaliação de Estágio da Ordem dos Advogados de Moçambique e
                  exerce funções de Árbitro no Centro de Arbitragem, Conciliação
                  e Mediação, e de Administradora de Insolvência. É licenciada
                  em Direito pela Faculdade de Direito da Universidade Eduardo
                  Mondlane desde 2009, Mestranda em Ciências Jurídicas na mesma
                  instituição. Ao longo da sua carreira profissional, exerceu
                  funções na Sal & Cadeira, na Opelegis e no Instituto de
                  Patrocínio e Assistência Jurídica (IPAJ), nomeadamente como
                  Delegada Distrital e como Chefe do Departamento de Formação e
                  Estágio da Delegação Provincial.
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
                <span className="text-sm font-medium">A Nossa Equipa</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Jovem, Técnica e Dinâmica
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  A MM Advogados é composta exclusivamente por mulheres,
                  integrando advogadas, advogadas estagiárias e pessoal
                  administrativo, todas com formação adequada às respetivas
                  áreas de atuação do escritório. A atividade desenvolvida
                  assenta numa abordagem técnica, colaborativa e organizada,
                  suportada por meios tecnológicos que permitem uma gestão
                  interna eficiente e um acompanhamento processual rigoroso,
                  assegurando, em permanência, o cumprimento dos deveres legais
                  e deontológicos inerentes ao exercício da advocacia.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">
                    Advogados Especializados
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <div className="text-sm text-muted-foreground">
                    Áreas de Especialização
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
              Os Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os valores fundamentais que sustentam cada decisão e diferenciam
              nosso trabalho.
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
              <span className="text-sm font-medium">A Nossa Missão</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Transformar o Direito Empresarial em Moçambique
            </h3>

            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Prestar Serviços Jurídicos com Excelência, Oferecendo Soluções
              Inovadoras para Obtenção de Resultados Expressivos que Garantam a
              Satisfação dos Clientes.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="/servicos"
                className="group px-10 py-5 bg-[rgb(81,21,38)] text-white font-bold text-lg rounded-xl hover:bg-[rgb(81,21,3j8)]/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <span>Conheça as Áreas de Atuação</span>
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
