import { ArrowRight, Award, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

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
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 fade-in-up-delay leading-tight">
            Excelência Jurídica para{" "}
            <span className="text-gradient-primary bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">Empresas</span> que Exigem{" "}
            <span className="text-gradient-primary bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text text-transparent">Resultados</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed fade-in-up-delay px-4 sm:px-0">
            Sociedade de advogados de elite em Maputo com mais de 5 anos de experiência, 200+ processos exitosos 
            e regime de avença que oferece assessoria jurídica contínua, relatórios mensais detalhados e 
            comunicação directa com advogados especializados em 7 áreas do direito empresarial.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in-up-delay px-4 sm:px-0">
            <a href="/servicos">
            <Button size="lg" className="btn-elite group px-6 lg:px-8 py-3 lg:py-4 w-full sm:w-auto text-base">
              Conhecer os Nossos Serviços
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              // className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground  px-6 lg:px-8 py-3 lg:py-4 w-full sm:w-auto text-base transition-all duration-300"
            >
              Agendar Consultoria
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto fade-in-up-delay px-4 sm:px-0">
            <div className="text-center p-4 rounded-lg bg-primary-foreground/5 backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
                50+
              </div>
              <div className="text-primary-foreground/80 text-sm lg:text-base">
                Empresas Atendidas
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-primary-foreground/5 backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
                200+
              </div>
              <div className="text-primary-foreground/80 text-sm lg:text-base">
                Processos Exitosos
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-primary-foreground/5 backdrop-blur-sm">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-2">
                5+
              </div>
              <div className="text-primary-foreground/80 text-sm lg:text-base">
                Anos de Excelência
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;