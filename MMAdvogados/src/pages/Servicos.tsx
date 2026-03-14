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
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const AVENCA_SLUG = "avenca";

const Servicos = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

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
        // {
        //   title: "Arbitragem Nacional e Internacional",
        //   desc: "Resolução privada e eficiente de conflitos com maior agilidade que tribunais",
        // },
        {
          title: "Mediação e Resolução Alternativa",
          desc: "Negociação assistida para acordos que preservam relações comerciais",
        },
        {
          title: "Execução de Sentenças",
          desc: "Garantia do cumprimento efectivo de decisões judiciais e arbitrais",
        },
      ],
      benefits: [
        "Redução de tempo e custos",
        "Estratégia personalizada",
        "Acompanhamento contínuo",
      ],
    },

    {
      icon: CreditCard,
      title: "Recuperação de Créditos",
      subtitle: "Recupere o que é seu com estratégia e eficácia",
      description:
        "Créditos não pagos afectam o fluxo de caixa e a saúde financeira da sua empresa. A nossa equipa desenvolve estratégias personalizadas para recuperação de dívidas, seja através de negociação amigável ou acção judicial.",
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
          desc: "Accionamento de garantias bancárias, penhoras e hipotecas",
        },
        {
          title: "Gestão de Carteiras",
          desc: "Administração profissional de múltiplos créditos em mora",
        },
      ],
      benefits: ["Recuperação maximizada", "Custos controlados", "Maior celeridade"],
    },
    {
      icon: Home,
      title: "Direito da Família e Sucessões",
      subtitle: "Protecção jurídica nas relações familiares e patrimoniais",
      description:
        "O Direito da Família regula o casamento, as uniões de facto, a igualdade de direitos e deveres entre cônjuges, o divórcio, a separação de bens e a protecção especial aos menores. Por sua vez, o Direito das Sucessões disciplina a transmissão do património, a herança e a partilha de bens, assegurando equilíbrio e legalidade nos processos sucessórios.",
      details: [
        {
          title: "Regulação das Relações Familiares",
          desc: "Assessoria jurídica em casamento, união de facto, divórcio e definição de regimes de bens.",
        },
        {
          title: "Protecção de Menores",
          desc: "Intervenção em matérias de guarda, alimentos e responsabilidade parental.",
        },
        {
          title: "Planeamento Sucessório",
          desc: "Estruturação jurídica da transmissão patrimonial com prevenção de conflitos futuros.",
        },
        {
          title: "Processos de Herança e Partilha",
          desc: "Assistência jurídica em inventários, partilha de bens e regularização patrimonial.",
        },
      ],
      benefits: [
        "Protecção dos direitos familiares",
        "Segurança na transmissão patrimonial",
        "Acompanhamento jurídico sensível e especializado",
      ],
    },

    {
      icon: Scale,
      title: "Direito Fiscal e Aduaneiro",
      subtitle: "Conformidade tributária e gestão estratégica de riscos",
      description:
        "O Direito Fiscal e Aduaneiro regula a tributação da actividade empresarial em Moçambique, abrangendo impostos internos, direitos aduaneiros e obrigações declarativas. A correcta gestão fiscal é essencial para garantir conformidade legal, eficiência financeira e mitigação de riscos perante a Autoridade Tributária e as Alfândegas.",
      details: [
        {
          title: "Auditoria e Consultoria Fiscal",
          desc: "Revisão da situação tributária da empresa, identificação de contingências e emissão de pareceres técnicos especializados.",
        },
        {
          title: "Planeamento Fiscal",
          desc: "Estruturação estratégica das operações empresariais com optimização lícita da carga tributária.",
        },
        {
          title: "Regimes Especiais e Benefícios Fiscais",
          desc: "Enquadramento em regimes fiscais específicos, incentivos ao investimento e zonas económicas especiais.",
        },
        {
          title: "Contencioso Tributário e Aduaneiro",
          desc: "Representação em processos administrativos e judiciais relacionados com liquidações adicionais, coimas e apreensões aduaneiras.",
        },
      ],
      benefits: [
        "Conformidade legal assegurada",
        "Redução de riscos fiscais",
        "Segurança jurídica nas operações comerciais",
      ],
    },
    {
        icon: Handshake,
        title: "Societário",
        subtitle: "Estruture a sua empresa com segurança",
        description:
          "Desde a constituição até à eventual dissolução, acompanhamos o ciclo de vida da sua empresa. Auxiliamos na escolha da estrutura societária, organização de assembleias e reestruturações.",
        details: [
          { title: "Constituição de Sociedades", desc: "Criação de empresas com estrutura jurídica adequada ao seu negócio" },
          { title: "Reestruturação Societária", desc: "Alterações de capital, entrada de sócios e transformações empresariais" },
          { title: "Governança Corporativa", desc: "Regras e procedimentos para gestão eficaz e transparente" },
          { title: "Assembleias e Actas", desc: "Organização e formalização de deliberações societárias" },
        ],
        benefits: ["Estrutura optimizada", "Prevenção de conflitos", "Crescimento sustentável"],
      },
      {
  icon: FileText,
  slug: AVENCA_SLUG,
  title: "Regime de Avença Personalizado",
  subtitle: "Assistência jurídica contínua, com flexibilidade e previsibilidade",
  description:
    "O regime de avença personalizado é um contrato de prestação de serviços contínuos entre uma empresa e um profissional independente/liberal, ajustado às necessidades específicas do cliente. Caracteriza-se por uma remuneração mensal certa, pela ausência de subordinação (horários e regras internas) e por uma finalidade técnica específica, oferecendo uma flexibilidade superior aos contratos de trabalho tradicionais, sem comprometer o rigor e a conformidade legal.",
  details: [
    {
      title: "Prestação Contínua e Planeada",
      desc: "Acompanhamento jurídico permanente, com prioridades definidas conforme a realidade operacional do cliente.",
    },
    {
      title: "Escopo Ajustado ao Cliente",
      desc: "Serviços modelados às necessidades específicas da empresa, com possibilidade de revisão periódica do plano de assistência.",
    },
    {
      title: "Remuneração Mensal Certa",
      desc: "Previsibilidade de custos, com honorários mensais previamente acordados, facilitando o controlo orçamental.",
    },
    {
      title: "Independência Técnica e Não Subordinação",
      desc: "Actuação sem vínculo laboral, mantendo autonomia profissional e enquadramento jurídico adequado.",
    },
  ],
  benefits: [
    "Acompanhamento jurídico contínuo",
    "Custos previsíveis e controlados",
    "Flexibilidade superior ao contrato de trabalho",
  ],
},
    {
        icon: Building2,
        title: "Corporate",
        subtitle: "Impulsione o crescimento da sua empresa com segurança jurídica",
        description:
          "No mundo corporativo, cada decisão importa. Fornecemos assessoria jurídica completa para garantir que as suas operações empresariais decorram com segurança e eficiência. Desde fusões e aquisições até à estruturação de contratos complexos.",
        details: [
          {
            title: "Fusões e Aquisições",
            desc: "Assessoria completa em compra, venda e fusão de empresas com due diligence rigorosa",
          },
          {
            title: "Due Diligence Jurídica",
            desc: "Análise detalhada de riscos e oportunidades antes de transacções importantes",
          },
          {
            title: "Estruturação de Operações Financeiras",
            desc: "Desenho de estruturas jurídicas optimizadas para investimentos e financiamentos",
          },
          {
            title: "Compliance e Governança",
            desc: "Implementação de políticas e procedimentos para gestão ética e transparente",
          },
        ],
        benefits: ["Segurança nas transacções", "Minimização de riscos", "Conformidade legal total"],
      },

    

    
  ];

  // Mantém os passos como “processo”, mas separa as ÁREAS que estavam aqui dentro.
  const processSteps = [
    { icon: Target, title: "Análise", desc: "Avaliamos a sua situação detalhadamente" },
    { icon: Shield, title: "Estratégia", desc: "Desenvolvemos um plano personalizado" },
    { icon: Clock, title: "Execução", desc: "Implementamos as soluções jurídicas" },
    // Evitar “Resultado”, conforme o teu requisito anterior:
    { icon: CheckCircle2, title: "Acompanhamento", desc: "Mantemos o seguimento do processo com rigor e transparência" },
  ];

  // Estas eram áreas de actuação, mas estavam no array errado (processSteps).
  const extraServiceAreas = useMemo(
    () => [
      {
      icon: Pickaxe,
      title: "Direito Mineiro",
      subtitle: "Segurança jurídica para o sector extractivo",
      description:
        "O sector mineiro constitui um dos pilares da economia moçambicana, com destaque para recursos como carvão, rubis, grafite, ouro e outros minerais estratégicos. A exploração mineira enfrenta desafios regulatórios, ambientais e sociais, exigindo acompanhamento jurídico especializado para garantir legalidade, sustentabilidade e estabilidade operacional.",
      details: [
        {
          title: "Licenciamento Mineiro",
          desc: "Assistência na aquisição de licenças e autorizações junto das entidades competentes, incluindo pedidos de prospecção, pesquisa e concessão mineira.",
        },
        {
          title: "Conformidade Ambiental e Social",
          desc: "Acompanhamento jurídico na gestão de impacto ambiental e relacionamento com comunidades locais.",
        },
        {
          title: "Contratos e Operações Mineiras",
          desc: "Elaboração e revisão de contratos de exploração, fornecimento e parceria estratégica.",
        },
        {
          title: "Relações Laborais no Sector Mineiro",
          desc: "Assessoria jurídica em matérias emergentes do contrato de trabalho aplicável às operações minerais.",
        },
      ],
      benefits: [
        "Segurança jurídica na exploração",
        "Mitigação de riscos regulatórios",
        "Estruturação sólida de projectos mineiros",
      ],
    },
      {
        icon: FileText,
        title: "Direito Administrativo",
        subtitle: "Navegue com confiança pelo sistema administrativo",
        description:
          "A relação entre administração pública e particulares é possível de gerar conflitos, das quais a nossa intervenção vai pressupor apoio para casos de recursos e impugnaçoes em defesa dos interesses particulares,  bem como, o apoio na gestão desta relação",
        details: [
          { title: "Parecer e Consultoria", desc: "Emissão de pareceres e orientação jurídica para decisões administrativas. Apoio jurídico no processo de concurso público e elaboração de Debriefing e reclamações após resultados do concurso" },
          { title: "Contratação Pública", desc: "Apoio em procedimentos, impugnações e conformidade em processos de procurement" },
          { title: "Contencioso Administrativo", desc: "Defesa em litígios com autoridades e entidades públicas" },
          { title: "Pareceres e Consultoria", desc: "Emissão de pareceres e orientação jurídica para decisões administrativas" },
        ],
        benefits: ["Conformidade administrativa", "Redução de riscos regulatórios", "Maior segurança nas decisões"],
      },
      {
        icon: Home,
        title: "Imobiliária e Terras",
        subtitle: "Proteja o seu património com segurança jurídica",
        description:
          "Prestamos apoio à pessoas singulares e colectivas na regularização de propriedades(obtenção da Certidão Predial) e no processo de transacção imobiliária,  assim como na regularização de terra (DUAT).",
        details: [
          { title: "Obtenção e Regularização de DUAT", desc: "Acompanhamento completo para garantir o direito legal sobre terrenos" },
          { title: "Registos Prediais e Cartorários", desc: "Registo e actualização de propriedades nas conservatórias competentes" },
          { title: "Escritura pública de compra e venda", desc: "Elaboração  e revisão e contratos promessa de compra e venda, apoio e acompanhamento na realização da escritura de compra e venda de imóveis" },
          { title: "Arrendamento", desc: "Gestão jurídica de contratos de arrendamento comercial e residencial" },
        ],
        benefits: ["Segurança jurídica", "Processos mais claros", "Protecção patrimonial"],
      },
      {
        icon: Users,
        title: "Laboral e Migração",
        subtitle: "Gerir pessoas com conformidade e eficiência",
        description:
          "As relações laborais exigem equilíbrio entre direitos e deveres. Prestamos assessoria em direito laboral e apoio em processos migratórios, com enfoque na conformidade e prevenção de litígios.",
        details: [
          { title: "Contratos de Trabalho", desc: "Elaboração de contratos adequados à legislação laboral moçambicana" },
          { title: " Vistos de Trabalho, Turismo, Residência, Negócio, Autorização de Trabalho, DIRE'S", desc: "Acompanhamento em processos de contratação de trabalhador estrangeiro" },
          { title: "Compliance Laboral", desc: "Auditoria e adequação de práticas laborais às exigências legais" },
          { title: "Contencioso Laboral", desc: "Representação em litígios e negociação de acordos" },
        ],
        benefits: ["Conformidade legal", "Redução de litígios", "Processos simplificados"],
      },
      
    ],
    []
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
              <span className="text-primary">Áreas de Atuação</span>
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
              Serviço Especial
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl xl:text-6xl font-serif font-bold tracking-tight text-primary leading-[1.05] mb-5">
            Regime de Avença
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
            Uma solução jurídica contínua para empresas que procuram previsibilidade,
            proximidade estratégica e acompanhamento consistente, sem a rigidez de uma
            estrutura interna.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Mais controlo sobre custos jurídicos",
              "Maior proximidade com a realidade da empresa",
              "Actuação preventiva em vez de apenas reactiva",
              "Uma estrutura pensada para apoiar decisões com segurança",
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
              Descubra como este modelo pode melhorar a previsibilidade financeira,
              reforçar a conformidade legal e dar à sua empresa um apoio jurídico
              mais próximo, estratégico e contínuo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/avenca"
              aria-label="Conhecer detalhes do Regime de Avença"
              className="group inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-[rgb(81,21,38)] text-white font-semibold shadow-xl shadow-[rgba(81,21,38,0.22)] hover:bg-[rgb(81,21,38)]/92 hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Conhecer Regime de Avença
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
