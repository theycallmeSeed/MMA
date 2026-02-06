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
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Servicos = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const detailedServices = [
    {
      icon: Scale,
      title: "Contencioso e Arbitragem",
      subtitle: "Defesa dos seus direitos com excelência e estratégia",
      description:
        "Quando surgem conflitos no mundo dos negócios, é fundamental ter ao seu lado quem compreende profundamente as suas necessidades. A nossa equipa representa empresas e particulares em tribunais e processos arbitrais, focando-se sempre em alcançar a melhor solução possível para o seu caso.",
      details: [
        {
          title: "Litígios Comerciais e Empresariais",
          desc: "Representação em disputas contratuais, responsabilidade civil e conflitos societários",
        },
        {
          title: "Arbitragem Nacional e Internacional",
          desc: "Resolução privada e eficiente de conflitos com maior agilidade que tribunais",
        },
        {
          title: "Mediação e Resolução Alternativa",
          desc: "Negociação assistida para acordos que preservam relações comerciais",
        },
        {
          title: "Execução de Sentenças",
          desc: "Garantia do cumprimento efetivo de decisões judiciais e arbitrais",
        },
      ],
      benefits: [
        "Redução de tempo e custos",
        "Estratégia personalizada",
        "Acompanhamento contínuo",
      ],
    },
    {
      icon: Building2,
      title: "Corporate",
      subtitle:
        "Impulsione o crescimento da sua empresa com segurança jurídica",
      description:
        "No mundo corporativo, cada decisão importa. Fornecemos assessoria jurídica completa para garantir que as suas operações empresariais decorram com segurança e eficiência. Desde fusões e aquisições até à estruturação de contratos complexos.",
      details: [
        {
          title: "Fusões e Aquisições (M&A)",
          desc: "Assessoria completa em compra, venda e fusão de empresas com due diligence rigorosa",
        },
        {
          title: "Due Diligence Jurídica",
          desc: "Análise detalhada de riscos e oportunidades antes de transações importantes",
        },
        {
          title: "Estruturação de Operações Financeiras",
          desc: "Desenho de estruturas jurídicas otimizadas para investimentos e financiamentos",
        },
        {
          title: "Compliance e Governança",
          desc: "Implementação de políticas e procedimentos para gestão ética e transparente",
        },
      ],
      benefits: [
        "Segurança nas transações",
        "Minimização de riscos",
        "Conformidade legal total",
      ],
    },
    {
      icon: FileText,
      title: "Direito Administrativo e Fiscal",
      subtitle: "Navegue com confiança pelo sistema fiscal e administrativo",
      description:
        "O relacionamento com entidades governamentais e a gestão de obrigações fiscais podem ser complexos. A nossa equipa especializada ajuda-o a compreender e cumprir todas as exigências legais, identificando oportunidades de otimização fiscal.",
      details: [
        {
          title: "Consultoria Fiscal e Tributária",
          desc: "Planeamento fiscal estratégico e gestão de obrigações tributárias",
        },
        {
          title: "Processos Aduaneiros",
          desc: "Assessoria em importação, exportação e regimes especiais de comércio",
        },
        {
          title: "Licenciamento e Autorizações",
          desc: "Obtenção de licenças, alvarás e autorizações governamentais",
        },
        {
          title: "Contencioso Administrativo",
          desc: "Defesa em disputas com autoridades fiscais e administrativas",
        },
      ],
      benefits: [
        "Otimização fiscal legal",
        "Redução de custos",
        "Prevenção de sanções",
      ],
    },
    {
      icon: Home,
      title: "Imobiliária e Terras",
      subtitle: "Proteja o seu património com segurança jurídica total",
      description:
        "Investir em imóveis e terras requer conhecimento especializado das leis moçambicanas. Ajudamos indivíduos e empresas a regularizar propriedades, obter direitos de uso e aproveitamento de terra (DUAT) e realizar transações imobiliárias com total segurança.",
      details: [
        {
          title: "Obtenção e Regularização de DUAT",
          desc: "Processo completo para garantir o direito legal sobre terrenos",
        },
        {
          title: "Registos Prediais e Cartorários",
          desc: "Registo e atualização de propriedades nos conservatórias competentes",
        },
        {
          title: "Contratos de Compra e Venda",
          desc: "Elaboração e revisão de contratos imobiliários seguros e completos",
        },
        {
          title: "Arrendamento e Locação",
          desc: "Gestão jurídica de contratos de arrendamento comercial e residencial",
        },
      ],
      benefits: [
        "Segurança jurídica total",
        "Processos acelerados",
        "Proteção patrimonial",
      ],
    },
    {
      icon: Users,
      title: "Laboral e Migração",
      subtitle: "Gerir pessoas com conformidade e eficiência",
      description:
        "As relações laborais exigem equilíbrio entre os direitos dos trabalhadores e as necessidades das empresas. Oferecemos assessoria completa em direito laboral, desde a elaboração de contratos até à resolução de disputas.",
      details: [
        {
          title: "Contratos de Trabalho",
          desc: "Elaboração de contratos adequados à legislação laboral moçambicana",
        },
        {
          title: "Vistos de Trabalho e Residência",
          desc: "Assessoria completa em processos de imigração para expatriados",
        },
        {
          title: "Compliance Laboral",
          desc: "Auditoria e adequação de práticas laborais às exigências legais",
        },
        {
          title: "Contencioso Laboral",
          desc: "Representação em disputas trabalhistas e negociação de acordos",
        },
      ],
      benefits: [
        "Conformidade legal",
        "Redução de litígios",
        "Processos simplificados",
      ],
    },
    {
      icon: Handshake,
      title: "Societário",
      subtitle: "Estruture a sua empresa para o sucesso",
      description:
        "Desde a constituição até à eventual dissolução, acompanhamos todo o ciclo de vida da sua empresa. Auxiliamos na escolha da estrutura societária mais adequada, na organização de assembleias e em processos de reestruturação.",
      details: [
        {
          title: "Constituição de Sociedades",
          desc: "Criação de empresas com a estrutura jurídica ideal para o seu negócio",
        },
        {
          title: "Reestruturação Societária",
          desc: "Alterações de capital, entrada de sócios e transformações empresariais",
        },
        {
          title: "Governança Corporativa",
          desc: "Implementação de regras e procedimentos para gestão eficaz",
        },
        {
          title: "Assembleia de Sócios",
          desc: "Organização e formalização de decisões societárias importantes",
        },
      ],
      benefits: [
        "Estrutura otimizada",
        "Prevenção de conflitos",
        "Crescimento sustentável",
      ],
    },
    {
      icon: CreditCard,
      title: "Recuperação de Créditos",
      subtitle: "Recupere o que é seu com estratégia e eficácia",
      description:
        "Créditos não pagos afetam o fluxo de caixa e a saúde financeira da sua empresa. A nossa equipa desenvolve estratégias personalizadas para recuperação de dívidas, seja através de negociação amigável ou ação judicial.",
      details: [
        {
          title: "Cobrança Judicial e Extrajudicial",
          desc: "Estratégias eficazes de recuperação adaptadas a cada situação",
        },
        {
          title: "Negociação de Acordos",
          desc: "Reestruturação de dívidas e acordos de pagamento viáveis",
        },
        {
          title: "Execução de Garantias",
          desc: "Acionamento de garantias bancárias, penhoras e hipotecas",
        },
        {
          title: "Gestão de Carteiras",
          desc: "Administração profissional de múltiplos créditos em mora",
        },
      ],
      benefits: [
        "Recuperação maximizada",
        "Custos controlados",
        "Resultados rápidos",
      ],
    },
  ];

  const processSteps = [
    {
      icon: Target,
      title: "Análise",
      desc: "Avaliamos a sua situação detalhadamente",
    },
    {
      icon: Shield,
      title: "Estratégia",
      desc: "Desenvolvemos um plano personalizado",
    },
    {
      icon: Clock,
      title: "Execução",
      desc: "Implementamos as soluções jurídicas",
    },
    {
      icon: CheckCircle2,
      title: "Resultado",
      desc: "Acompanhamos até alcançar o sucesso",
    },
  ];

  const toggleCard = (index) => {
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
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-20  overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="heading-display mb-6">
              <span className="text-primary">Áreas de Atuação</span>
            </h1>

            {/* <p className="text-lead text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Assessoria jurídica completa e personalizada para empresas e particulares.
              Transformamos complexidade jurídica em resultados concretos e mensuráveis.
            </p> */}
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                          <h3 className="h3 text-primary mb-1">
                            {service.title}
                          </h3>
                          <p className="small font-medium text-primary/70">
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

                      <p className="text-base text-muted-foreground leading-relaxed">
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
                        {service.details.map((detail, detailIndex) => (
                          <div
                            key={detailIndex}
                            className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 hover:border-primary/20 transition-colors duration-300"
                          >
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="small font-semibold text-foreground mb-1">
                                  {detail.title}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
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
                          <h4 className="small font-semibold text-primary">
                            Benefícios Principais
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {service.benefits.map((benefit, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-background rounded-full text-xs font-medium text-foreground border border-border"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Single CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(343 59% 20%) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-display text-primary mb-6">
              Pronto para Proteger os Seus Interesses?
            </h2>

            <p className="text-lead text-muted-foreground mb-12 max-w-3xl mx-auto">
              Entre em contacto connosco agora mesmo via WhatsApp e agende uma
              consultoria jurídica personalizada. A nossa equipa está pronta
              para analisar a sua situação e apresentar soluções eficazes para
              os seus desafios jurídicos.
            </p>

            {/* Feature boxes */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Shield,
                  title: "Proteção Legal",
                  desc: "Segurança jurídica total",
                },
                {
                  icon: Target,
                  title: "Foco em Resultados",
                  desc: "Soluções orientadas a objetivos",
                },
                {
                  icon: Clock,
                  title: "Resposta em 24h",
                  desc: "Atendimento ágil e eficiente",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="h4 text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Main CTA Button (remove wrappers, keep button) */}
            <button
              type="button"
              aria-label="Agendar consultoria via WhatsApp"
              onClick={() =>
                window.open(whatsappLink, "_blank", "noopener,noreferrer")
              }
              className="group px-10 py-5 bg-[rgb(81,21,38)] text-white font-bold text-lg rounded-xl hover:bg-[rgb(81,21,38)]/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <span>Agendar Consultoria</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default Servicos;