import {
  Scale,
  Building2,
  FileText,
  Home,
  Users,
  Handshake,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Scale,
      title: "Contencioso e Arbitragem",
      description:
        "Representação em tribunais e processos arbitrais, com foco em resolução eficiente de conflitos empresariais.",
      features: ["Litígios comerciais", "Arbitragem internacional", "Mediação"],
    },
    {
      icon: Building2,
      title: "Corporate",
      description:
        "Assessoria jurídica completa para operações empresariais, fusões, aquisições e estruturação corporativa.",
      features: ["M&A", "Due diligence", "Compliance"],
    },
    {
      icon: FileText,
      title: "Direito Administrativo e Fiscal",
      description:
        "Especialização em direito fiscal, aduaneiro e relações com entidades governamentais.",
      features: ["Consultoria fiscal", "Processos aduaneiros", "Licenciamento"],
    },
    {
      icon: Home,
      title: "Imobiliária e Terras",
      description:
        "Assessoria especializada em transações imobiliárias, regularização de terras e direito urbanístico.",
      features: ["DUAT", "Registos prediais", "Contratos imobiliários"],
    },
    {
      icon: Users,
      title: "Laboral e Migração",
      description:
        "Gestão de relações laborais, contratos de trabalho e processos migratórios para expatriados.",
      features: ["Contratos laborais", "Vistos de trabalho", "Compliance laboral"],
    },
    {
      icon: Handshake,
      title: "Societário",
      description:
        "Constituição de empresas, reestruturações societárias e governança corporativa.",
      features: ["Constituição", "Reestruturação", "Governança"],
    },
    {
      icon: CreditCard,
      title: "Recuperação de Créditos",
      description:
        "Estratégias eficazes para recuperação de dívidas e gestão de carteiras de crédito em mora.",
      features: ["Cobrança judicial", "Negociação", "Execução"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Serviços Jurídicos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções jurídicas especializadas para todas as necessidades
            empresariais, com foco em resultados e excelência técnica.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-elegant group cursor-pointer border-l-4 border-l-primary/20 hover:border-l-primary"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary ml-4">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center text-sm text-foreground/80"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
              
              <Button
                variant="ghost"
                className="w-full group-hover:bg-primary/5 transition-all duration-300"
              >
                Saiba Mais
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
            Regime de Avença Personalizado
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            O nosso regime de avença oferece assessoria jurídica contínua com relatórios mensais detalhados, 
            comunicação directa com a equipa e custos previsíveis. Ideal para empresas que necessitam de 
            acompanhamento jurídico regular em múltiplas áreas de direito, garantindo conformidade legal 
            e resposta rápida a questões urgentes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="btn-elite">
              Conhecer Planos de Avença
            </Button>
            <Button variant="outline" size="lg" className="btn-outline-elite">
              Agendar Consultoria
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;