import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { AnimationWrapper } from "@/components/animations";
import { Scale, Building2, FileText, Home, Users, Handshake, CreditCard, Sparkles, CheckCircle2, ArrowRight, Shield, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink, getWhatsAppConsultoriaLinkExact } from "@/lib/utils";

const Servicos = () => {
  const detailedServices = [
    {
      icon: Scale,
      title: "Contencioso e Arbitragem",
      subtitle: "Defesa dos seus direitos com excelência e estratégia",
      description: "Quando surgem conflitos no mundo dos negócios, é fundamental ter ao seu lado quem compreende profundamente as suas necessidades. A nossa equipa representa empresas e particulares em tribunais e processos arbitrais, focando-se sempre em alcançar a melhor solução possível para o seu caso. Oferecemos uma abordagem estratégica, transparente e orientada para resultados.",
      details: [
        {
          title: "Litígios Comerciais e Empresariais",
          desc: "Representação em disputas contratuais, responsabilidade civil e conflitos societários"
        },
        {
          title: "Arbitragem Nacional e Internacional",
          desc: "Resolução privada e eficiente de conflitos com maior agilidade que tribunais"
        },
        {
          title: "Mediação e Resolução Alternativa",
          desc: "Negociação assistida para acordos que preservam relações comerciais"
        },
        {
          title: "Execução de Sentenças",
          desc: "Garantia do cumprimento efetivo de decisões judiciais e arbitrais"
        }
      ],
      benefits: ["Redução de tempo e custos", "Estratégia personalizada", "Acompanhamento contínuo"]
    },
    {
      icon: Building2,
      title: "Corporate",
      subtitle: "Impulsione o crescimento da sua empresa com segurança jurídica",
      description: "No mundo corporativo, cada decisão importa. Fornecemos assessoria jurídica completa para garantir que as suas operações empresariais decorram com segurança e eficiência. Desde fusões e aquisições até à estruturação de contratos complexos, a nossa equipa trabalha lado a lado consigo para proteger os seus interesses e maximizar oportunidades de crescimento.",
      details: [
        {
          title: "Fusões e Aquisições (M&A)",
          desc: "Assessoria completa em compra, venda e fusão de empresas com due diligence rigorosa"
        },
        {
          title: "Due Diligence Jurídica",
          desc: "Análise detalhada de riscos e oportunidades antes de transações importantes"
        },
        {
          title: "Estruturação de Operações Financeiras",
          desc: "Desenho de estruturas jurídicas otimizadas para investimentos e financiamentos"
        },
        {
          title: "Compliance e Governança",
          desc: "Implementação de políticas e procedimentos para gestão ética e transparente"
        }
      ],
      benefits: ["Segurança nas transações", "Minimização de riscos", "Conformidade legal total"]
    },
    {
      icon: FileText,
      title: "Direito Administrativo e Fiscal",
      subtitle: "Navegue com confiança pelo sistema fiscal e administrativo",
      description: "O relacionamento com entidades governamentais e a gestão de obrigações fiscais podem ser complexos. A nossa equipa especializada ajuda-o a compreender e cumprir todas as exigências legais, ao mesmo tempo que identifica oportunidades de otimização fiscal. Defendemos os seus interesses perante autoridades administrativas e fiscais, garantindo que a sua empresa opera em plena conformidade.",
      details: [
        {
          title: "Consultoria Fiscal e Tributária",
          desc: "Planeamento fiscal estratégico e gestão de obrigações tributárias"
        },
        {
          title: "Processos Aduaneiros",
          desc: "Assessoria em importação, exportação e regimes especiais de comércio"
        },
        {
          title: "Licenciamento e Autorizações",
          desc: "Obtenção de licenças, alvarás e autorizações governamentais"
        },
        {
          title: "Contencioso Administrativo",
          desc: "Defesa em disputas com autoridades fiscais e administrativas"
        }
      ],
      benefits: ["Otimização fiscal legal", "Redução de custos", "Prevenção de sanções"]
    },
    {
      icon: Home,
      title: "Imobiliária e Terras",
      subtitle: "Proteja o seu património com segurança jurídica total",
      description: "Investir em imóveis e terras requer conhecimento especializado das leis moçambicanas. Ajudamos indivíduos e empresas a regularizar propriedades, obter direitos de uso e aproveitamento de terra (DUAT) e realizar transações imobiliárias com total segurança. A nossa experiência garante que cada etapa do processo decorre sem contratempos, protegendo o seu investimento.",
      details: [
        {
          title: "Obtenção e Regularização de DUAT",
          desc: "Processo completo para garantir o direito legal sobre terrenos"
        },
        {
          title: "Registos Prediais e Cartorários",
          desc: "Registo e atualização de propriedades nos conservatórias competentes"
        },
        {
          title: "Contratos de Compra e Venda",
          desc: "Elaboração e revisão de contratos imobiliários seguros e completos"
        },
        {
          title: "Arrendamento e Locação",
          desc: "Gestão jurídica de contratos de arrendamento comercial e residencial"
        }
      ],
      benefits: ["Segurança jurídica total", "Processos acelerados", "Proteção patrimonial"]
    },
    {
      icon: Users,
      title: "Laboral e Migração",
      subtitle: "Gerir pessoas com conformidade e eficiência",
      description: "As relações laborais exigem equilíbrio entre os direitos dos trabalhadores e as necessidades das empresas. Oferecemos assessoria completa em direito laboral, desde a elaboração de contratos até à resolução de disputas. Para empresas com colaboradores estrangeiros, facilitamos todos os processos migratórios, garantindo conformidade com a legislação moçambicana.",
      details: [
        {
          title: "Contratos de Trabalho",
          desc: "Elaboração de contratos adequados à legislação laboral moçambicana"
        },
        {
          title: "Vistos de Trabalho e Residência",
          desc: "Assessoria completa em processos de imigração para expatriados"
        },
        {
          title: "Compliance Laboral",
          desc: "Auditoria e adequação de práticas laborais às exigências legais"
        },
        {
          title: "Contencioso Laboral",
          desc: "Representação em disputas trabalhistas e negociação de acordos"
        }
      ],
      benefits: ["Conformidade legal", "Redução de litígios", "Processos simplificados"]
    },
    {
      icon: Handshake,
      title: "Societário",
      subtitle: "Estruture a sua empresa para o sucesso",
      description: "Desde a constituição até à eventual dissolução, acompanhamos todo o ciclo de vida da sua empresa. Auxiliamos na escolha da estrutura societária mais adequada, na organização de assembleias, na entrada de novos sócios e em processos de reestruturação. O nosso objetivo é garantir que a sua empresa tenha uma base jurídica sólida para crescer e prosperar.",
      details: [
        {
          title: "Constituição de Sociedades",
          desc: "Criação de empresas com a estrutura jurídica ideal para o seu negócio"
        },
        {
          title: "Reestruturação Societária",
          desc: "Alterações de capital, entrada de sócios e transformações empresariais"
        },
        {
          title: "Governança Corporativa",
          desc: "Implementação de regras e procedimentos para gestão eficaz"
        },
        {
          title: "Assembleia de Sócios",
          desc: "Organização e formalização de decisões societárias importantes"
        }
      ],
      benefits: ["Estrutura otimizada", "Prevenção de conflitos", "Crescimento sustentável"]
    },
    {
      icon: CreditCard,
      title: "Recuperação de Créditos",
      subtitle: "Recupere o que é seu com estratégia e eficácia",
      description: "Créditos não pagos afetam o fluxo de caixa e a saúde financeira da sua empresa. A nossa equipa desenvolve estratégias personalizadas para recuperação de dívidas, seja através de negociação amigável ou ação judicial. Gerimos carteiras de crédito em mora e executamos garantias, sempre com foco em maximizar a recuperação e minimizar custos e tempo.",
      details: [
        {
          title: "Cobrança Judicial e Extrajudicial",
          desc: "Estratégias eficazes de recuperação adaptadas a cada situação"
        },
        {
          title: "Negociação de Acordos",
          desc: "Reestruturação de dívidas e acordos de pagamento viáveis"
        },
        {
          title: "Execução de Garantias",
          desc: "Acionamento de garantias bancárias, penhoras e hipotecas"
        },
        {
          title: "Gestão de Carteiras",
          desc: "Administração profissional de múltiplos créditos em mora"
        }
      ],
      benefits: ["Recuperação maximizada", "Custos controlados", "Resultados rápidos"]
    }
  ];

  const processSteps = [
    { icon: Target, title: "Análise", desc: "Avaliamos a sua situação detalhadamente" },
    { icon: Shield, title: "Estratégia", desc: "Desenvolvemos um plano personalizado" },
    { icon: Clock, title: "Execução", desc: "Implementamos as soluções jurídicas" },
    { icon: CheckCircle2, title: "Resultado", desc: "Acompanhamos até alcançar o sucesso" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navigation />

      {/* Hero Section Enhanced */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Serviços Jurídicos Especializados</span>
            </motion.div> */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              <span className="text-primary">Áreas de Atuação</span>
              <br />
              {/* <span className="text-gradient-primary">que Transformam Desafios</span> */}
            </h1>

            <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
              Assessoria jurídica completa e personalizada para empresas e particulares.
              Transformamos complexidade jurídica em resultados concretos e mensuráveis.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:scale-110 transition-all duration-300">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services with Modern Layout */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Decorative element */}
                <div className={`absolute ${index % 2 === 0 ? '-left-4' : '-right-4'} top-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-transparent opacity-20`}></div>

                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start`}>
                  {/* Content Side */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    {/* Header */}
                    <div className="mb-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl group-hover:scale-110 transition-transform">
                          <service.icon className="h-10 w-10 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-2">
                            {service.title}
                          </h2>
                          <p className="text-lg text-primary/70 font-medium">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                          <p className="text-lg text-foreground leading-relaxed">
                            {service.description}
                          </p>
                    </div>

                    {/* Details Cards */}
                    <div className="space-y-4 mb-8">
                      {service.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="group p-5 rounded-xl bg-gradient-to-br from-card to-muted/20 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <div>
                              <h4 className="font-semibold text-foreground mb-1">
                                {detail.title}
                              </h4>
                              <p className="text-sm text-foreground leading-relaxed">
                                {detail.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                      <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                        <Sparkles className="h-5 w-5" />
                        Benefícios Principais
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground border border-border"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={generateWhatsAppLink(
                        "+258 87 154 9533",
                        `Bom dia, gostaria de agendar uma consultoria jurídica com a vossa sociedade de advogados.

Nome: [escreva aqui o seu nome]
Contacto: [telefone ou e-mail]
Assunto: ${service.title}
Data/Hora Preferencial: [insira a sua disponibilidade]

Aguardo o vosso contacto de confirmação.
Muito obrigado(a).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button className="btn-elite group">
                        <span className="flex items-center gap-2">
                          Solicitar Consultoria
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </a>
                  </div>

                  {/* Visual Side */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                    <div className="lg:sticky lg:top-32">
                      {/* Main Card */}
                      <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-elegant)' }}>
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-primary/60"></div>

                        {/* Pattern Overlay */}
                        <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                          backgroundSize: '20px 20px'
                        }}></div>

                        {/* Content */}
                        <div className="relative p-12 flex flex-col items-center justify-center min-h-[400px]">
                          <service.icon className="h-32 w-32 text-primary-foreground/90 mb-6" strokeWidth={1.5} />
                          <h3 className="text-2xl font-serif font-bold text-primary-foreground text-center">
                            {service.title}
                          </h3>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-8 right-8 w-24 h-24 bg-primary-foreground/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-8 left-8 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl"></div>
                      </div>

                      {/* Floating badge */}
                      <div className="absolute -top-4 -right-4 px-4 py-2 bg-accent rounded-full border-4 border-background shadow-lg">
                        <span className="text-sm font-bold text-accent-foreground">Especializado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(hsl(343 59% 20%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(343 59% 20%) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">


            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Precisa de Assessoria Jurídica <span className="text-gradient-primary">Especializada?</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Oferecemos consultoria jurídica especializada com análise detalhada da sua situação,
              identificação de riscos e oportunidades, e recomendações estratégicas personalizadas.
              A nossa equipa avalia as suas necessidades específicas e apresenta soluções jurídicas
              eficazes para impulsionar o crescimento sustentável do seu negócio.
            </p>
          </div>

          {/* Feature boxes */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Shield, title: "Proteção Legal", desc: "Segurança jurídica total" },
              { icon: Target, title: "Foco em Resultados", desc: "Soluções orientadas a objetivos" },
              { icon: Clock, title: "Resposta Rápida", desc: "Atendimento ágil e eficiente" }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-all duration-300" style={{ boxShadow: 'var(--shadow-card)' }}>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Servicos;
