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
import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

import { useLanguage } from "@/contexts/LanguageContext";

const AVENCA_SLUG = "avenca";

const Servicos = () => {
  const { t } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const detailedServices = [
    {
      icon: Scale,
      slug: t("services.slug.litigation"),
      title: t("servicos.litigation.title"),
      subtitle: t("servicos.litigation.subtitle"),
      description: t("servicos.litigation.desc"),
      details: [
        { title: t("servicos.litigation.d1.title"), desc: t("servicos.litigation.d1.desc") },
        { title: t("servicos.litigation.d2.title"), desc: t("servicos.litigation.d2.desc") },
        { title: t("servicos.litigation.d3.title"), desc: t("servicos.litigation.d3.desc") },
      ],
      benefits: [
        t("servicos.litigation.b1"),
        t("servicos.litigation.b2"),
        t("servicos.litigation.b3"),
      ],
    },
    {
      icon: CreditCard,
      slug: t("services.slug.credit"),
      title: t("servicos.credit.title"),
      subtitle: t("servicos.credit.subtitle"),
      description: t("servicos.credit.desc"),
      details: [
        { title: t("servicos.credit.d1.title"), desc: t("servicos.credit.d1.desc") },
        { title: t("servicos.credit.d2.title"), desc: t("servicos.credit.d2.desc") },
        { title: t("servicos.credit.d3.title"), desc: t("servicos.credit.d3.desc") },
        { title: t("servicos.credit.d4.title"), desc: t("servicos.credit.d4.desc") },
      ],
      benefits: [t("servicos.credit.b1"), t("servicos.credit.b2"), t("servicos.credit.b3")],
    },
    {
      icon: Users,
      slug: t("services.slug.family"),
      title: t("servicos.family.title"),
      subtitle: t("servicos.family.subtitle"),
      description: t("servicos.family.desc"),
      details: [
        { title: t("servicos.family.d1.title"), desc: t("servicos.family.d1.desc") },
        { title: t("servicos.family.d2.title"), desc: t("servicos.family.d2.desc") },
        { title: t("servicos.family.d3.title"), desc: t("servicos.family.d3.desc") },
        { title: t("servicos.family.d4.title"), desc: t("servicos.family.d4.desc") },
      ],
      benefits: [t("servicos.family.b1"), t("servicos.family.b2"), t("servicos.family.b3")],
    },
    {
      icon: FileText,
      slug: t("services.slug.tax"),
      title: t("servicos.tax.title"),
      subtitle: t("servicos.tax.subtitle"),
      description: t("servicos.tax.desc"),
      details: [
        { title: t("servicos.tax.d1.title"), desc: t("servicos.tax.d1.desc") },
        { title: t("servicos.tax.d2.title"), desc: t("servicos.tax.d2.desc") },
        { title: t("servicos.tax.d3.title"), desc: t("servicos.tax.d3.desc") },
        { title: t("servicos.tax.d4.title"), desc: t("servicos.tax.d4.desc") },
      ],
      benefits: [t("servicos.tax.b1"), t("servicos.tax.b2"), t("servicos.tax.b3")],
    },
    {
      icon: Handshake,
      slug: t("services.slug.corporate"),
      title: t("servicos.corporate.title"),
      subtitle: t("servicos.corporate.subtitle"),
      description: t("servicos.corporate.desc"),
      details: [
        { title: t("servicos.corporate.d1.title"), desc: t("servicos.corporate.d1.desc") },
        { title: t("servicos.corporate.d2.title"), desc: t("servicos.corporate.d2.desc") },
        { title: t("servicos.corporate.d3.title"), desc: t("servicos.corporate.d3.desc") },
        { title: t("servicos.corporate.d4.title"), desc: t("servicos.corporate.d4.desc") },
      ],
      benefits: [t("servicos.corporate.b1"), t("servicos.corporate.b2"), t("servicos.corporate.b3")],
    },
    {
      icon: Building2,
      slug: t("services.slug.corporate"),
      title: t("servicos.corporate2.title"),
      subtitle: t("servicos.corporate2.subtitle"),
      description: t("servicos.corporate2.desc"),
      details: [
        { title: t("servicos.corporate2.d1.title"), desc: t("servicos.corporate2.d1.desc") },
        { title: t("servicos.corporate2.d2.title"), desc: t("servicos.corporate2.d2.desc") },
        { title: t("servicos.corporate2.d3.title"), desc: t("servicos.corporate2.d3.desc") },
        { title: t("servicos.corporate2.d4.title"), desc: t("servicos.corporate2.d4.desc") },
      ],
      benefits: [t("servicos.corporate2.b1"), t("servicos.corporate2.b2"), t("servicos.corporate2.b3")],
    },
  ];

  const processSteps = [
    { icon: Target, title: t("process.s1.title"), desc: t("process.s1.desc") },
    { icon: Shield, title: t("process.s2.title"), desc: t("process.s2.desc") },
    { icon: Clock, title: t("process.s3.title"), desc: t("process.s3.desc") },
    { icon: CheckCircle2, title: t("process.s4.title"), desc: t("process.s4.desc") },
  ];

  const extraServiceAreas = useMemo(
    () => [
      {
        icon: Pickaxe,
        slug: t("services.slug.mining"),
        title: t("servicos.mining.title"),
        subtitle: t("servicos.mining.subtitle"),
        description: t("servicos.mining.desc"),
        details: [
          { title: t("servicos.mining.d1.title"), desc: t("servicos.mining.d1.desc") },
          { title: t("servicos.mining.d2.title"), desc: t("servicos.mining.d2.desc") },
          { title: t("servicos.mining.d3.title"), desc: t("servicos.mining.d3.desc") },
          { title: t("servicos.mining.d4.title"), desc: t("servicos.mining.d4.desc") },
        ],
        benefits: [t("servicos.mining.b1"), t("servicos.mining.b2"), t("servicos.mining.b3")],
      },
      {
        icon: Gavel,
        slug: t("services.slug.admin"),
        title: t("servicos.admin.title"),
        subtitle: t("servicos.admin.subtitle"),
        description: t("servicos.admin.desc"),
        details: [
          { title: t("servicos.admin.d1.title"), desc: t("servicos.admin.d1.desc") },
          { title: t("servicos.admin.d2.title"), desc: t("servicos.admin.d2.desc") },
          { title: t("servicos.admin.d3.title"), desc: t("servicos.admin.d3.desc") },
          { title: t("servicos.admin.d4.title"), desc: t("servicos.admin.d4.desc") },
        ],
        benefits: [t("servicos.admin.b1"), t("servicos.admin.b2"), t("servicos.admin.b3")],
      },
      {
        icon: Home,
        slug: t("services.slug.realestate"),
        title: t("servicos.realestate.title"),
        subtitle: t("servicos.realestate.subtitle"),
        description: t("servicos.realestate.desc"),
        details: [
          { title: t("servicos.realestate.d1.title"), desc: t("servicos.realestate.d1.desc") },
          { title: t("servicos.realestate.d2.title"), desc: t("servicos.realestate.d2.desc") },
          { title: t("servicos.realestate.d3.title"), desc: t("servicos.realestate.d3.desc") },
          { title: t("servicos.realestate.d4.title"), desc: t("servicos.realestate.d4.desc") },
        ],
        benefits: [t("servicos.realestate.b1"), t("servicos.realestate.b2"), t("servicos.realestate.b3")],
      },
      {
        icon: ShieldCheck,
        slug: t("services.slug.labor"),
        title: t("servicos.labor.title"),
        subtitle: t("servicos.labor.subtitle"),
        description: t("servicos.labor.desc"),
        details: [
          { title: t("servicos.labor.d1.title"), desc: t("servicos.labor.d1.desc") },
          { title: t("servicos.labor.d2.title"), desc: t("servicos.labor.d2.desc") },
          { title: t("servicos.labor.d3.title"), desc: t("servicos.labor.d3.desc") },
          { title: t("servicos.labor.d4.title"), desc: t("servicos.labor.d4.desc") },
        ],
        benefits: [t("servicos.labor.b1"), t("servicos.labor.b2"), t("servicos.labor.b3")],
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

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

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
          "url": "https://madvogados.co.mz/servicos",
          "provider": {
            "@type": "Organization",
            "name": "Milagrosa Macuácua Advogados, LDA",
            "url": "https://madvogados.co.mz/"
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
                  <button
                    onClick={() => toggleCard(index)}
                    className="w-full p-6 lg:p-8 flex items-start gap-6 text-left hover:bg-muted/30 transition-colors duration-300"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-1">
                            {service.title}
                          </h3>
                          <p className="text-base text-primary/70 font-medium">
                            {service.subtitle}
                          </p>
                        </div>

                        {/* Expand Icon */}
                        <ChevronDown
                          className={`h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                            expandedCard === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </button>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedCard === index ? "auto" : 0,
                      opacity: expandedCard === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 lg:px-8 pb-8 pt-4 border-t border-border/50">
                      {/* Details Grid */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {service.details.map((detail: { title: string; desc: string }, detailIndex: number) => (
                          <div
                            key={`${detail.title}-${detailIndex}`}
                            className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 hover:border-primary/20 transition-colors duration-300"
                          >
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-foreground mb-1 text-sm">
                                  {detail.title}
                                </h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                  {detail.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Benefits */}
                      <div className="p-5 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                        <div className="flex items-center gap-2 mb-3">
                          <Sparkles className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold text-primary">
                            Benefícios Principais
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {service.benefits.map((benefit: string, idx: number) => (
                            <span
                              key={`${benefit}-${idx}`}
                              className="px-3 py-1.5 bg-background rounded-full text-xs font-medium text-foreground border border-border"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* View Details Link */}
                      <div className="mt-8 flex justify-end">
                        <Link
                          to={`/servicos/${service.slug}`}
                          className="inline-flex items-center gap-2 text-primary font-bold hover:underline group/link"
                        >
                          {t("services.detail.btn.learn_more")}
                          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
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
