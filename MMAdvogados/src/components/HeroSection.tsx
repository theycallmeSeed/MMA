import { ArrowRight, Award, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import { getWhatsAppConsultoriaLinkExact } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24" >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Milagrosa Macuácua Advogados"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          

          {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 fade-in-up-delay leading-tight hero-text-shadow-xl">
  Excelência Jurídica para{" "}
  <span className="hero-gradient-text">Empresas</span> e{" "}
  <span className="hero-gradient-text">Particulares</span>
</h1>


          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed fade-in-up-delay px-4 sm:px-0 hero-text-shadow">
           Somos uma sociedade de advogados sediada em Maputo, com mais de cinco anos de experiência dedicada ao apoio jurídico no setor empresarial e particular. Ao longo deste percurso, acompanhámos um vasto número de processos, sempre com foco na defesa rigorosa dos interesses dos nossos clientes e na procura de soluções práticas e seguras.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in-up-delay px-4 sm:px-0">
            <a href="/servicos">
            <Button size="lg" className="btn-elite group px-6 lg:px-8 py-3 lg:py-4 w-full sm:w-auto text-base">
              Conhecer os Nossos Serviços
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            </a>
            
            <a 
              href={getWhatsAppConsultoriaLinkExact()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 lg:px-8 py-3 lg:py-4 w-full sm:w-auto text-base transition-all duration-300 drop-shadow-lg"
              >
                Agendar Consultoria
              </Button>
            </a>
            </div>
          

        
         
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center drop-shadow-lg">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;