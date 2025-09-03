import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import { Scale, Building2, FileText, Home, Users, Handshake, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink, getWhatsAppConsultoriaLinkExact } from "@/lib/utils";

const Servicos = () => {
  const detailedServices = [
    {
      icon: Scale,
      title: "Contencioso e Arbitragem",
      description: "Representação especializada em tribunais e processos arbitrais com foco em resolução eficiente de conflitos empresariais.",
      details: [
        "Litígios comerciais e empresariais",
        "Arbitragem nacional e internacional",
        "Mediação e resolução alternativa de conflitos",
        "Execução de sentenças e laudos arbitrais",
        "Contencioso fiscal e administrativo"
      ]
    },
    {
      icon: Building2,
      title: "Corporate",
      description: "Assessoria jurídica completa para operações empresariais, fusões, aquisições e estruturação corporativa.",
      details: [
        "Fusões e aquisições (M&A)",
        "Due diligence jurídica",
        "Estruturação de operações financeiras",
        "Compliance e governança corporativa",
        "Contratos comerciais complexos"
      ]
    },
    {
      icon: FileText,
      title: "Direito Administrativo e Fiscal",
      description: "Especialização em direito fiscal, aduaneiro e relações com entidades governamentais.",
      details: [
        "Consultoria fiscal e tributária",
        "Processos aduaneiros e comercio internacional",
        "Licenciamento e autorizações",
        "Contencioso administrativo",
        "Compliance regulatório"
      ]
    },
    {
      icon: Home,
      title: "Imobiliária e Terras",
      description: "Assessoria especializada em transações imobiliárias, regularização de terras e direito urbanístico.",
      details: [
        "Obtenção e regularização de DUAT",
        "Registos prediais e cartorários",
        "Contratos de compra e venda",
        "Arrendamento e locação",
        "Direito urbanístico e construção"
      ]
    },
    {
      icon: Users,
      title: "Laboral e Migração",
      description: "Gestão de relações laborais, contratos de trabalho e processos migratórios para expatriados.",
      details: [
        "Contratos de trabalho e consultoria laboral",
        "Vistos de trabalho e residência",
        "Compliance laboral e auditoria",
        "Contencioso laboral",
        "Processos migratórios complexos"
      ]
    },
    {
      icon: Handshake,
      title: "Societário",
      description: "Constituição de empresas, reestruturações societárias e governança corporativa.",
      details: [
        "Constituição de sociedades",
        "Reestruturação societária",
        "Governança corporativa",
        "Assembleia de sócios",
        "Dissolução e liquidação"
      ]
    },
    {
      icon: CreditCard,
      title: "Recuperação de Créditos",
      description: "Estratégias eficazes para recuperação de dívidas e gestão de carteiras de crédito em mora.",
      details: [
        "Cobrança judicial e extrajudicial",
        "Negociação de acordos",
        "Execução de garantias",
        "Gestão de carteiras de crédito",
        "Insolvência e recuperação de empresas"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Serviços Jurídicos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções jurídicas especializadas e inovadoras para todas as 
              necessidades empresariais, com foco em resultados excepcionais.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {detailedServices.map((service, index) => (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mr-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-primary">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
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
                  >
                    <Button className="btn-elite">
                      Solicitar Consultoria
                    </Button>
                  </a>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <service.icon className="h-32 w-32 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Precisa de Assessoria Jurídica Especializada?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Oferecemos consultoria jurídica especializada com análise detalhada da sua situação, 
            identificação de riscos e oportunidades, e recomendações estratégicas personalizadas. 
            A nossa equipa avalia as suas necessidades específicas e apresenta soluções jurídicas 
            eficazes para impulsionar o crescimento sustentável da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppConsultoriaLinkExact()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="btn-elite">
                Agendar Consultoria
              </Button>
            </a>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;