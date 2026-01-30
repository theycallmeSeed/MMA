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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";
import { useState } from "react";
import {
  generateWhatsAppLink,
  getWhatsAppConsultoriaLinkExact,
} from "@/lib/utils";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Scale,
      title: "Contencioso e Arbitragem",
      image: "/images/legal-team.webp",
      description:
        "Representação em tribunais e processos arbitrais, com foco em resolução eficiente de conflitos empresariais.",
      features: ["Litígios comerciais", "Arbitragem internacional", "Mediação"],
      detailedDescription:
        "A nossa equipa atua na representação de clientes em tribunais judiciais e em processos arbitrais, nacionais e internacionais. Procuramos sempre soluções eficazes para a resolução de litígios comerciais, conjugando estratégia jurídica sólida com mecanismos alternativos, como a mediação e a arbitragem. A prioridade é assegurar a defesa dos interesses dos nossos clientes, reduzindo riscos e garantindo maior previsibilidade nos processos de resolução de conflitos empresariais.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Building2,
      title: "Corporate",
      image: "/images/corporate.webp",
      description:
        "Assessoria jurídica completa para operações empresariais, fusões, aquisições e estruturação corporativa.",
      features: ["M&A", "Due diligence", "Compliance"],
      detailedDescription:
        "Prestamos assessoria jurídica completa em matérias de direito societário e operações empresariais. Acompanhamos processos de fusões e aquisições (M&A), realizamos auditorias legais (due diligence) e implementamos programas de compliance adequados ao enquadramento legal moçambicano e internacional. O nosso apoio permite às empresas estruturar operações de forma segura, transparente e alinhada com as melhores práticas de governança corporativa.",
      color: "from-purple-500/20 to-violet-500/20",
    },
    {
      icon: FileText,
      title: "Administrativo, fiscal e Aduaneiro",
      image: "/images/legal-team.webp",
      description:
        "Especialização em direito fiscal, aduaneiro e relações com entidades governamentais.",
      features: ["Consultoria fiscal", "Processos aduaneiros", "Licenciamento"],
      detailedDescription:
        "Apoiamos empresas e particulares em matérias fiscais, aduaneiras e administrativas. A nossa intervenção inclui consultoria fiscal preventiva, representação em processos de natureza tributária, acompanhamento de questões aduaneiras e apoio no relacionamento com entidades públicas. Atuamos também em processos de licenciamento, garantindo a conformidade legal e a mitigação de riscos perante a Administração Pública.",
      color: "from-emerald-500/20 to-green-500/20",
    },
    {
      icon: Home,
      title: "Imobiliário e Terras",
      image: "/images/office-interior.webp",
      description:
        "Assessoria especializada em transações imobiliárias, regularização de terras e direito urbanístico.",
      features: ["DUAT", "Registos prediais", "Contratos imobiliários"],
      detailedDescription:
        "Disponibilizamos assessoria especializada em transações imobiliárias e em procedimentos relacionados com a regularização de terras em Moçambique. A nossa intervenção abrange a obtenção e renovação de DUAT (Direito de Uso e Aproveitamento da Terra), registos prediais e a elaboração de contratos imobiliários. Trabalhamos ainda em matérias de direito urbanístico, apoiando promotores, investidores e particulares em todas as fases dos seus projetos.",
      color: "from-amber-500/20 to-orange-500/20",
    },
    {
      icon: Users,
      title: "Laboral e Migratório",
      image: "/images/legal-team.webp",
      description:
        "Gestão de relações laborais, contratos de trabalho e processos migratórios para expatriados.",
      features: [
        "Contratos laborais",
        "Vistos de trabalho",
        "Compliance laboral",
      ],
      detailedDescription:
        "Prestamos apoio jurídico na gestão de relações laborais e na mobilidade internacional de trabalhadores. Aconselhamos na elaboração e revisão de contratos de trabalho, em políticas de recursos humanos e em processos disciplinares. Em matéria migratória, auxiliamos na obtenção de vistos de trabalho e de residência para expatriados, assegurando conformidade legal com as normas laborais e de imigração vigentes.",
      color: "from-rose-500/20 to-pink-500/20",
    },
    {
      icon: Handshake,
      title: "Societário",
      image: "/images/office-interior.webp",
      description:
        "Constituição de empresas, reestruturações societárias e governança corporativa.",
      features: ["Constituição", "Reestruturação", "Governança"],
      detailedDescription:
        "Acompanhamos a constituição de novas sociedades, a reestruturação de empresas já existentes e a implementação de boas práticas de governança. Prestamos aconselhamento jurídico em todas as fases do ciclo de vida societário, desde a escolha da forma jurídica mais adequada até à gestão de alterações estatutárias, reorganizações e processos de sucessão empresarial.",
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      icon: CreditCard,
      title: "Investimento",
      image: "/images/investimento.webp",
      description:
        "Estratégias eficazes para recuperação de dívidas e gestão de carteiras de crédito em mora.",
      features: ["Cobrança judicial", "Negociação", "Execução"],
      detailedDescription:
        "Desenvolvemos estratégias jurídicas e extrajudiciais para a recuperação de créditos em mora. Atuamos em cobranças judiciais, execuções e negociações com devedores, procurando soluções céleres que preservem os interesses dos nossos clientes. A nossa abordagem inclui também a gestão de carteiras de crédito, com medidas preventivas para reduzir a exposição a incumprimentos futuros.",
      color: "from-teal-500/20 to-cyan-500/20",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(343 59% 20%) 1px, transparent 1px),
                         linear-gradient(90deg, hsl(343 59% 20%) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Áreas de Atuação</span>
          </div> */}

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            <span className="text-primary">Áreas de Atuação</span>
            <br />
            {/* <span className="text-gradient-primary">de Excelência</span> */}
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções jurídicas especializadas para todas as necessidades
            empresariais, com foco em resultados e excelência técnica.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Container */}
              <div
                className="relative h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
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
                    const srcSet = `${base}-400.webp 400w, ${base}-800.webp 800w, ${base}-1200.webp 1200w`;
                    const sizes =
                      "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw";
                    return (
                      <LazyImage
                        src={src}
                        srcSet={srcSet}
                        sizes={sizes}
                        alt={service.title}
                        width={1200}
                        height={675}
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
                  <a href="/servicos" className="block">
                    <Button className="w-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary hover:from-primary hover:to-primary/90 hover:text-primary-foreground border border-primary/20 transition-all duration-300 group/btn">
                      <span className="flex items-center justify-center gap-2">
                        Saiba Mais
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>

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
                    className="hover:bg-muted rounded-xl flex-shrink-0"
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
                      `Bom dia, gostaria de agendar uma consultoria jurídica com a vossa sociedade de advogados.

Nome: [escreva aqui o seu nome]
Contacto: [telefone ou e-mail]
Assunto: ${services[selectedService]?.title}
Data/Hora Preferencial: [insira a sua disponibilidade]

Aguardo o vosso contacto de confirmação.
Muito obrigado(a).`
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
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Regime Especial</span>
            </div> */}

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-primary">Regime de Avença</span>
              <br />
              <span className="text-gradient-primary">Personalizado</span>
            </h3>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              O nosso regime de avença oferece assessoria jurídica contínua com
              relatórios mensais detalhados, comunicação direta com a equipa e
              custos previsíveis.
            </p>

            {/* Ideal para empresas que necessitam de 
              acompanhamento jurídico regular em múltiplas áreas de direito, garantindo conformidade legal 
              e resposta rápida a questões urgentes. */}

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
              {[
                {
                  icon: CheckCircle2,
                  title: "Relatórios Mensais",
                  desc: "Acompanhamento detalhado",
                },
                {
                  icon: Clock,
                  title: "Resposta Prioritária",
                  desc: "Atendimento ágil garantido",
                },
                {
                  icon: Shield,
                  title: "Custos Previsíveis",
                  desc: "Orçamento controlado",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* <a
                href={getWhatsAppConsultoriaLinkExact()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="btn-elite group">
                  <span className="flex items-center gap-2">
                    Agendar Consultoria
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </a> */}
              <a href="/servicos">
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-outline-elite"
                >
                  Ver Todos os Serviços
                </Button>
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-8 right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-8 left-8 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
