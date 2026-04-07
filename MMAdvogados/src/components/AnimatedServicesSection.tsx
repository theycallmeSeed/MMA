import {
  Scale,
  Building2,
  FileText,
  Home,
  Users,
  Handshake,
  CreditCard,
  ArrowRight,
  X,
  Sparkles,
  CheckCircle2,
  Shield,
  Clock,
  Award,
  ShieldCheck,
  HardHat,
  Gavel
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";
import { useState } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animation-variants";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import {
  generateWhatsAppLink,
  getWhatsAppConsultoriaLinkExact,
} from "@/lib/utils";

import { useLanguage } from "@/contexts/LanguageContext";

const AnimatedServicesSection = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const prefersReduced = useReducedMotion();

  // Variantes otimizadas para mobile/reduced-motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // reduzir o stagger em mobile/reduced
        staggerChildren: prefersReduced || isMobile ? 0.08 : 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReduced || isMobile ? 22 : 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReduced || isMobile ? 0.35 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: prefersReduced || isMobile ? 8 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReduced || isMobile ? 0.35 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      id: "litigation",
      slug: t("services.slug.litigation"),
      icon: Scale,
      title: t("servicos.litigation.title"),
      image: "/images/office-interior.webp",
      description: t("servicos.litigation.desc"),
      features: [
        t("servicos.litigation.f1"),
        t("servicos.litigation.f2"),
        t("servicos.litigation.f3"),
      ],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: "corporate",
      slug: t("services.slug.corporate"),
      icon: Building2,
      title: t("servicos.corporate.title"),
      image: "/images/corporate.webp",
      description: t("servicos.corporate.desc"),
      features: [
        t("servicos.corporate.f1"),
        t("servicos.corporate.f2"),
        t("servicos.corporate.f3"),
        t("servicos.corporate.f4"),
        t("servicos.corporate.f5"),
      ],
      color: "from-purple-500/20 to-violet-500/20",
    },
    {
      id: "credit",
      slug: t("services.slug.credit"),
      icon: CreditCard,
      title: t("servicos.credit.title"),
      image: "/images/investimento.webp",
      description: t("servicos.credit.desc"),
      features: [
        t("servicos.credit.f1"),
        t("servicos.credit.f2"),
        t("servicos.credit.f3"),
      ],
      color: "from-teal-500/20 to-cyan-500/20",
    },
    {
      id: "family",
      slug: t("services.slug.family"),
      icon: Users,
      title: t("servicos.family.title"),
      image: "/images/familia.webp",
      description: t("servicos.family.desc"),
      features: [
        t("servicos.family.d1.title"),
        t("servicos.family.d2.title"),
        t("servicos.family.d3.title"),
      ],
      color: "from-pink-500/20 to-rose-500/20",
    },
    {
      id: "tax",
      slug: t("services.slug.tax"),
      icon: FileText,
      title: t("servicos.tax.title"),
      image: "/images/fiscal.webp",
      description: t("servicos.tax.desc"),
      features: [
        t("servicos.tax.d1.title"),
        t("servicos.tax.d2.title"),
        t("servicos.tax.d3.title"),
      ],
      color: "from-orange-500/20 to-amber-500/20",
    },
    {
      id: "labor",
      slug: t("services.slug.labor"),
      icon: ShieldCheck,
      title: t("servicos.labor.title"),
      image: "/images/laboral.webp",
      description: t("servicos.labor.desc"),
      features: [
        t("servicos.labor.d1.title"),
        t("servicos.labor.d2.title"),
        t("servicos.labor.d3.title"),
      ],
      color: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section className="relative py-24 overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(343 59% 20%) 1px, transparent 1px),\n                         linear-gradient(90deg, hsl(343 59% 20%) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isMobile ? "visible" : undefined}
        whileInView={isMobile ? undefined : "visible"}
        viewport={
          isMobile
            ? undefined
            : { once: true, amount: 0.2, margin: "0px 0px -10% 0px" }
        }
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={headerVariants}
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="text-primary">{t("services.title")}</span>
            <br />
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isMobile ? "visible" : undefined}
          whileInView={isMobile ? undefined : "visible"}
          viewport={
            isMobile
              ? undefined
              : { once: true, amount: 0.2, margin: "0px 0px -10% 0px" }
          }
          style={{ willChange: "transform, opacity" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              {/* Card Container */}
              <div
                className="relative h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  {(() => {
                    const base = service.image.replace(/\.webp$/i, "");
                    const src = service.image;
                    const srcSet = `${base}-400.webp 400w, ${base}-800.webp 800w`;
                    const sizes =
                      "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw";
                    return (
                      <LazyImage
                        src={src}
                        srcSet={srcSet}
                        sizes={sizes}
                        alt={service.title}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        fallbackSrc={service.image}
                      />
                    );
                  })()}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Icon Badge on Image */}
                  <div className="absolute top-4 left-4 p-3 bg-card/95 backdrop-blur-sm rounded-xl border border-border shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Title Overlay on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-serif font-bold text-white mb-1 drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-foreground/90 group/feature"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0 group-hover/feature:scale-110 transition-transform" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex flex-col gap-3">
                    <Link
                      to={`/servicos/${service.slug}`}
                      className="block w-full"
                    >
                      <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 transition-all duration-300 group/btn">
                        <span className="flex items-center justify-center gap-2">
                          {t("services.detail.btn.learn_more")}
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </Link>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full text-muted-foreground hover:text-primary"
                      onClick={() => setSelectedService(index)}
                    >
                      Resumo rápido
                    </Button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal/Dialog */}
        {selectedService !== null && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div
              className="bg-background rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <div className="p-8 md:p-10">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl">
                      {services[selectedService] &&
                        (() => {
                          const IconComponent = services[selectedService].icon;
                          return (
                            <IconComponent className="h-8 w-8 text-primary" />
                          );
                        })()}
                    </div>
                    <div>
                      <h2 className="text-3xl font-serif font-bold text-primary mb-2">
                        {services[selectedService]?.title}
                      </h2>
                      <p className="text-muted-foreground">
                        Assessoria jurídica especializada
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedService(null)}
                    className="hover:bg-muted rounded-xl flex-shrink-0 min-w-11 min-h-11 flex items-center justify-center"
                    aria-label="Fechar detalhes do serviço"
                    title="Fechar detalhes do serviço"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Modal Content */}
                <div className="space-y-8">
                  {/* Description */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {services[selectedService]?.detailedDescription}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10"></div>
                    <div className="relative p-8">
                      <h3 className="flex items-center gap-2 text-xl font-semibold text-primary mb-6">
                        <Sparkles className="h-5 w-5" />
                        Principais Serviços
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services[selectedService]?.features.map(
                          (feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-3 p-4 bg-background/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
                            >
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <span className="text-foreground font-medium">
                                {feature}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Benefits Section */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: Shield, label: "Segurança Jurídica" },
                      { icon: Clock, label: "Resposta Rápida" },
                      { icon: Award, label: "Excelência Comprovada" },
                    ].map((benefit, idx) => (
                      <div
                        key={idx}
                        className="text-center p-4 rounded-xl bg-muted/50 border border-border"
                      >
                        <benefit.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium text-foreground">
                          {benefit.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10 pt-8 border-t border-border">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedService(null)}
                    className="btn-outline-elite"
                  >
                    Fechar
                  </Button>
                  <a
                    href={generateWhatsAppLink(
                      "+258 87 154 9533",
                      `Bom dia, gostaria de agendar uma consultoria jurídica com a vossa sociedade de advogados.\n\nNome: [escreva aqui o seu nome]\nContacto: [telefone ou e-mail]\nAssunto: ${services[selectedService]?.title}\nData/Hora Preferencial: [insira a sua disponibilidade]\n\nAguardo o vosso contacto de confirmação.\nMuito obrigado(a).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn-elite group">
                      <span className="flex items-center gap-2">
                        Solicitar Consultoria
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA - Premium Section */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5"></div>
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle, hsl(343 59% 20%) 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          ></div>

          {/* Content */}
          <div className="relative p-10 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-primary">{t("retainer.title")}</span>
              <br />
              <span className="text-gradient-primary">{t("retainer.subtitle")}</span>
            </h3>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              {t("retainer.desc")}
            </p>

            {/* Benefits Grid */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              {[
                { icon: CheckCircle2, title: "Relatórios Mensais", desc: "Acompanhamento detalhado" },
                { icon: Clock, title: "Resposta Prioritária", desc: "Atendimento ágil garantido" },
                { icon: Shield, title: "Custos Previsíveis", desc: "Orçamento controlado" },
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 group">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/servicos">
                <button className="group px-10 py-5 bg-[rgb(81,21,38)] text-white font-bold text-lg rounded-xl hover:bg-[rgb(81,21,38)]/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
                  <span> {t("services.btn.all")}</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-8 right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-8 left-8 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default AnimatedServicesSection;
