import { CheckCircle, Users, Target, Trophy } from "lucide-react";
import milagrosaPortrait from "@/assets/milagrosa-portrait.jpg";
import legalTeam from "@/assets/legal-team.jpg";

const AboutSection = () => {
  const achievements = [
    "Sociedade liderada por mulheres em Moçambique",
    "Especialização em regime de avença empresarial",
    "Equipa jovem, técnica e dinâmica",
    "Relatórios mensais e transparência total",
  ];

  return (

    
    <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-muted/20">

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
            Sobre Nós
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
           Uma sociedade de advogados pioneira em Moçambique, assente nos valores da excelência, da inovação e da liderança exercida por mulheres, ao serviço de empresas e particulares.
          </p>
        </div>

        

        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-20">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-foreground">
              <Trophy className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Fundadora & CEO</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary">
              Milagrosa Macuácua
            </h3>
            
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Advogada visionária e empreendedora, Milagrosa Macuácua fundou esta
              sociedade com o objectivo de revolucionar o sector jurídico
              moçambicano através da excelência técnica e inovação no
              atendimento empresarial.
            </p>
            
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Com formação jurídica sólida e experiência internacional, ela lidera uma equipa de 15+ advogados 
              especializados que oferece soluções jurídicas de alta qualidade. O nosso regime de avença exclusivo 
              inclui assessoria jurídica contínua, relatórios mensais detalhados, comunicação directa por WhatsApp 
              e telefone, e resposta garantida em 24 horas para questões urgentes, proporcionando tranquilidade 
              e previsibilidade de custos às empresas.
            </p>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm lg:text-base">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={milagrosaPortrait}
                alt="Milagrosa Macuácua - Fundadora"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative lg:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={legalTeam}
                alt="Equipa Jurídica"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          <div className="space-y-6 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-foreground">
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">A Nossa Equipa</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary">
              Jovem, Técnica e Dinâmica
            </h3>
            
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              A nossa equipa é composta por jovens profissionais altamente
              qualificados, com formação técnica especializada e uma abordagem
              dinâmica aos desafios jurídicos contemporâneos.
            </p>
            
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Combinamos experiência sólida com inovação, utilizando tecnologia de ponta, plataformas digitais 
              para acompanhamento de processos em tempo real, e metodologias modernas de gestão jurídica. 
              A nossa abordagem inclui análise de riscos detalhada, due diligence completa e estratégias 
              personalizadas para cada sector de actividade, garantindo resultados mensuráveis e ROI comprovado.
            </p>

            <div className="grid grid-cols-2 gap-6 lg:gap-8 pt-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-xs lg:text-sm text-muted-foreground">
                  Advogados Especializados
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">7</div>
                <div className="text-xs lg:text-sm text-muted-foreground">
                  Áreas de Especialização
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 lg:mt-20 text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Target className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">A Nossa Missão</span>
          </div>
          
          <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-primary mb-6">
            Transformar o Direito Empresarial em Moçambique
          </h3>
          
          <p className="text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Prestar Serviços Juridicos com Excelência, Oferecendo Soluções Inovadoras para Obtenção de Resultados Expressivos que Garantam a Satisfação dos Clientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;