import {
  Scale,
  Building2,
  FileText,
  Home,
  Users,
  Handshake,
  CreditCard,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Target,
  ChevronDown,
  Pickaxe,
  ShieldCheck,
  Gavel
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

import { useLanguage } from "@/contexts/LanguageContext";

const AVENCA_SLUG = "avenca";

const Servicos = () => {
  const { t } = useLanguage();

  const detailedServices = [
    {
      icon: Scale,
      slug: t("services.slug.litigation"),
      title: t("servicos.litigation.title"),
      description: t("servicos.litigation.shortDesc"),
    },
    {
      icon: CreditCard,
      slug: t("services.slug.credit"),
      title: t("servicos.credit.title"),
      description: t("servicos.credit.shortDesc"),
    },
    {
      icon: Users,
      slug: t("services.slug.family"),
      title: t("servicos.family.title"),
      description: t("servicos.family.shortDesc"),
    },
    {
      icon: FileText,
      slug: t("services.slug.tax"),
      title: t("servicos.tax.title"),
      description: t("servicos.tax.shortDesc"),
    },
    {
      icon: Handshake,
      slug: t("services.slug.corporate"),
      title: t("servicos.corporate.title"),
      description: t("servicos.corporate.shortDesc"),
    },
    {
      icon: Building2,
      slug: t("services.slug.corporate"),
      title: t("servicos.corporate2.title"),
      description: t("servicos.corporate2.shortDesc"),
    },
  ];

  const extraServiceAreas = useMemo(
    () => [
      {
        icon: Pickaxe,
        slug: t("services.slug.mining"),
        title: t("servicos.mining.title"),
        description: t("servicos.mining.shortDesc"),
      },
      {
        icon: Gavel,
        slug: t("services.slug.admin"),
        title: t("servicos.admin.title"),
        description: t("servicos.admin.shortDesc"),
      },
      {
        icon: Home,
        slug: t("services.slug.realestate"),
        title: t("servicos.realestate.title"),
        description: t("servicos.realestate.shortDesc"),
      },
      {
        icon: ShieldCheck,
        slug: t("services.slug.labor"),
        title: t("servicos.labor.title"),
        description: t("servicos.labor.shortDesc"),
      },
    ],
    [t]
  );

  const avencaService = detailedServices.find((s) => s.slug === AVENCA_SLUG);
  const regularServices = detailedServices.filter((s) => s.slug !== AVENCA_SLUG);

  // Junta todas as áreas num único array para renderizar tudo na mesma grelha.
  const allServices = useMemo(
    () => [...regularServices, ...extraServiceAreas],
    [regularServices, extraServiceAreas]
  );

  const whatsappMessage = encodeURIComponent(
    `Bom dia, gostaria de agendar uma consultoria jurídica com a vossa sociedade de advogados.

Nome: [escreva aqui o seu nome]
Contacto: [telefone ou e-mail]
Assunto: [indique a área de interesse]
Data/Hora Preferencial: [insira a sua disponibilidade]

Aguardo o vosso contacto de confirmação.
Muito obrigado(a).`
  );

  const whatsappLink = `https://wa.me/258871549533?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <SEO
        title="Áreas de Atuação | Milagrosa Macuácua Advogados"
        description="Excelência em serviços jurídicos: contencioso, societário, fiscal, laboral, família, imobiliário, administrativo e regime de avença, em Moçambique."
        canonicalPath="/servicos"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Áreas de Atuação",
          "url": "https://www.madvogados.co.mz/servicos",
          "provider": {
            "@type": "Organization",
            "name": "Milagrosa Macuácua Advogados, LDA",
            "url": "https://www.madvogados.co.mz/"
          },
          "areaServed": "Mozambique",
          "description": "Atuação com excelência nas principais áreas do direito, com foco em empresas e particulares."
        }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              <span className="text-primary">{t("nav.services")}</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Regime de Avença Highlight Section */}
    

      {/* Services Cards Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {allServices.map((service, index) => (
              <motion.div
                key={`${service.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card border-2 border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {/* Card Header - Always Visible */}
                  <div
                    className="w-full p-6 lg:p-8 flex flex-col h-full gap-6 text-left"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:scale-110 transition-transform duration-300 inline-block">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-4">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed flex-1">
                        {service.description}
                      </p>

                      {/* View Details Link */}
                      <div className="mt-8">
                        <Link
                          to={`/servicos/${service.slug}`}
                          className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-muted/20 text-primary font-bold hover:bg-muted transition-all duration-300 group/link border border-border hover:shadow-lg"
                        >
                          {t("services.detail.btn.learn_more")}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
           <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
     <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.25 }}
      className="relative overflow-hidden rounded-[32px] border border-border/60 bg-card shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
     >
      {/* brilho interno discreto */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.04] pointer-events-none" />

      {/* detalhes decorativos discretos */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-14 p-6 sm:p-8 md:p-10 lg:p-14 items-center relative z-10">
        {/* conteúdo esquerdo */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary">
              {t("servicos.special.badge")}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-serif font-bold tracking-tight text-primary leading-[1.05] mb-5">
            {t("servicos.special.title")}
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
            {t("servicos.special.desc")}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              t("servicos.special.f1"),
              t("servicos.special.f2"),
              t("servicos.special.f3"),
              t("servicos.special.f4"),
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/60 bg-background/80 px-4 py-4 shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/10 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm md:text-[15px] leading-relaxed text-foreground/90 font-medium">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* linha de curiosidade */}
          <div className="mb-8 rounded-2xl border border-primary/10 bg-primary/[0.04] px-5 py-4">
            <p className="text-sm md:text-base text-foreground/85 leading-relaxed">
              {t("servicos.special.curiosity")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/avenca"
              aria-label="Conhecer detalhes do Regime de Avença"
              className="group inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-[rgb(81,21,38)] text-white font-semibold shadow-xl shadow-[rgba(81,21,38,0.22)] hover:bg-[rgb(81,21,38)]/92 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t("servicos.special.btn")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>

        {/* visual direito */}
        <div className="relative hidden md:flex items-center justify-center min-h-[420px] lg:min-h-[500px]">
          <div className="absolute inset-0 rounded-[28px] border border-border/50 bg-gradient-to-br from-muted/40 via-background to-primary/[0.04]" />

          {/* cartões flutuantes premium */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-8 rounded-2xl border border-border/70 bg-card/95 backdrop-blur-sm px-4 py-3 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Enfoque
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Protecção contínua
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-12 right-8 rounded-2xl border border-border/70 bg-card/95 backdrop-blur-sm px-4 py-3 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Modelo
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Resposta prioritária
                </p>
              </div>
            </div>
          </motion.div>

          {/* núcleo visual */}
          <div className="relative w-[320px] h-[320px] lg:w-[380px] lg:h-[380px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-primary/20"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 rounded-full border border-primary/10"
            />

            <div className="absolute inset-14 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-md" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-28 w-28 lg:h-32 lg:w-32 items-center justify-center rounded-[2rem] bg-gradient-to-br from-[rgb(81,21,38)] to-[rgb(110,31,52)] shadow-[0_20px_50px_rgba(81,21,38,0.30)]">
                <Handshake className="w-14 h-14 text-white" />
              </div>
            </div>

            <div className="absolute top-12 right-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-card shadow-md">
              <Scale className="w-6 h-6 text-primary" />
            </div>

            <div className="absolute bottom-14 left-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-card shadow-md">
              <Target className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>
        </div>
      </section>

      

      <Footer />
    </motion.div>
  );
};

export default Servicos;
