import React from "react";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { generateWhatsAppLink, getWhatsAppConsultoriaLinkExact } from "@/lib/utils";

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Scale,
      title: "Contencioso e Arbitragem",
      image: "/src/assets/legal-team.jpg",
      description:
        "Representação em tribunais e processos arbitrais, com foco em resolução eficiente de conflitos empresariais.",
      features: ["Litígios comerciais", "Arbitragem internacional", "Mediação"],
      detailedDescription: "A nossa equipa atua na representação de clientes em tribunais judiciais e em processos arbitrais, nacionais e internacionais. Procuramos sempre soluções eficazes para a resolução de litígios comerciais, conjugando estratégia jurídica sólida com mecanismos alternativos, como a mediação e a arbitragem. A prioridade é assegurar a defesa dos interesses dos nossos clientes, reduzindo riscos e garantindo maior previsibilidade nos processos de resolução de conflitos empresariais."
    },
    {
      icon: Building2,
      title: "Corporate",
      image: "/src/assets/office-interior.jpg",
      description:
        "Assessoria jurídica completa para operações empresariais, fusões, aquisições e estruturação corporativa.",
      features: ["M&A", "Due diligence", "Compliance"],
      detailedDescription: "Prestamos assessoria jurídica completa em matérias de direito societário e operações empresariais. Acompanhamos processos de fusões e aquisições (M&A), realizamos auditorias legais (due diligence) e implementamos programas de compliance adequados ao enquadramento legal moçambicano e internacional. O nosso apoio permite às empresas estruturar operações de forma segura, transparente e alinhada com as melhores práticas de governança corporativa."
    },
    {
      icon: FileText,
      title: "Direito Administrativo e Fiscal",
      image: "/src/assets/legal-team.jpg",
      description:
        "Especialização em direito fiscal, aduaneiro e relações com entidades governamentais.",
      features: ["Consultoria fiscal", "Processos aduaneiros", "Licenciamento"],
      detailedDescription: "Apoiamos empresas e particulares em matérias fiscais, aduaneiras e administrativas. A nossa intervenção inclui consultoria fiscal preventiva, representação em processos de natureza tributária, acompanhamento de questões aduaneiras e apoio no relacionamento com entidades públicas. Atuamos também em processos de licenciamento, garantindo a conformidade legal e a mitigação de riscos perante a Administração Pública."
    },
    {
      icon: Home,
      title: "Imobiliária e Terras",
      image: "/src/assets/office-interior.jpg",
      description:
        "Assessoria especializada em transações imobiliárias, regularização de terras e direito urbanístico.",
      features: ["DUAT", "Registos prediais", "Contratos imobiliários"],
      detailedDescription: "Disponibilizamos assessoria especializada em transações imobiliárias e em procedimentos relacionados com a regularização de terras em Moçambique. A nossa intervenção abrange a obtenção e renovação de DUAT (Direito de Uso e Aproveitamento da Terra), registos prediais e a elaboração de contratos imobiliários. Trabalhamos ainda em matérias de direito urbanístico, apoiando promotores, investidores e particulares em todas as fases dos seus projetos."
    },
    {
      icon: Users,
      title: "Laboral e Migração",
      image: "/src/assets/legal-team.jpg",
      description:
        "Gestão de relações laborais, contratos de trabalho e processos migratórios para expatriados.",
      features: ["Contratos laborais", "Vistos de trabalho", "Compliance laboral"],
      detailedDescription: "Prestamos apoio jurídico na gestão de relações laborais e na mobilidade internacional de trabalhadores. Aconselhamos na elaboração e revisão de contratos de trabalho, em políticas de recursos humanos e em processos disciplinares. Em matéria migratória, auxiliamos na obtenção de vistos de trabalho e de residência para expatriados, assegurando conformidade legal com as normas laborais e de imigração vigentes."
    },
    {
      icon: Handshake,
      title: "Societário",
      image: "/src/assets/office-interior.jpg",
      description:
        "Constituição de empresas, reestruturações societárias e governança corporativa.",
      features: ["Constituição", "Reestruturação", "Governança"],
      detailedDescription: "Acompanhamos a constituição de novas sociedades, a reestruturação de empresas já existentes e a implementação de boas práticas de governança. Prestamos aconselhamento jurídico em todas as fases do ciclo de vida societário, desde a escolha da forma jurídica mais adequada até à gestão de alterações estatutárias, reorganizações e processos de sucessão empresarial."
    },
    {
      icon: CreditCard,
      title: "Recuperação de Créditos",
      image: "/src/assets/legal-team.jpg",
      description:
        "Estratégias eficazes para recuperação de dívidas e gestão de carteiras de crédito em mora.",
      features: ["Cobrança judicial", "Negociação", "Execução"],
      detailedDescription: "Desenvolvemos estratégias jurídicas e extrajudiciais para a recuperação de créditos em mora. Atuamos em cobranças judiciais, execuções e negociações com devedores, procurando soluções céleres que preservem os interesses dos nossos clientes. A nossa abordagem inclui também a gestão de carteiras de crédito, com medidas preventivas para reduzir a exposição a incumprimentos futuros."
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
              className="card-elegant group cursor-pointer border-l-4 border-l-primary/20 hover:border-l-primary overflow-hidden"
            >
              {/* Service Image */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="p-6">
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
                onClick={() => setSelectedService(index)}
              >
                Saiba Mais
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal/Dialog */}
        {selectedService !== null && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                      {services[selectedService] && React.createElement(services[selectedService].icon, { className: "h-8 w-8 text-primary" })}
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-primary">
                      {services[selectedService]?.title}
                    </h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedService(null)}
                    className="hover:bg-muted"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {services[selectedService]?.detailedDescription}
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-primary mb-4">
                      Principais Serviços
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services[selectedService]?.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-sm text-foreground/80"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end mt-8 space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedService(null)}
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
                    <Button className="btn-elite">
                      Solicitar Consultoria
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

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
          
            <a
              href={getWhatsAppConsultoriaLinkExact()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="btn-outline-elite">
                Agendar Consultoria
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;