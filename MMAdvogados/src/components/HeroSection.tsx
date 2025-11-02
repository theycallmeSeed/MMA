import { ArrowRight, Award, Users, Briefcase, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import { getWhatsAppConsultoriaLinkExact } from "@/lib/utils";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero principal - Milagrosa Macuácua Advogados"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat hero-parallax"
        style={{
          backgroundImage: `url(${heroBanner})`,
          willChange: 'transform',
        }}
        role="img"
        aria-label="Escritório de advocacia profissional"
      >
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60 sm:from-primary/90 sm:via-primary/75 sm:to-primary/50"></div>
        
        {/* Radial Vignette for Focus */}
        <div className="absolute inset-0 bg-radial-gradient opacity-60"></div>
        
        {/* Animated Subtle Gradient (very slow) */}
        <div className="absolute inset-0 hero-gradient-animation opacity-20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        <div className="max-w-5xl mx-auto">


          {/* Main Headline with Decorative Line */}
          <div className="relative mb-8">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight hero-title-reveal"
              style={{ animationDelay: '0.4s' }}
            >
              Excelência Jurídica para{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/80 bg-clip-text text-transparent font-extrabold">
                  Empresas
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/80 to-transparent rounded-full"></span>
              </span>
              {" "}e{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent via-accent/90 to-accent/80 bg-clip-text text-transparent font-extrabold">
                  Particulares
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/80 to-transparent rounded-full"></span>
              </span>
            </h1>
            
            {/* Decorative accent line below title */}
            <div className="flex items-center justify-center mt-6 hero-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Subtitle with Optimized Reading Width */}
          <p 
            className="text-lg md:text-xl lg:text-2xl text-primary-foreground/95 mb-10 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 hero-fade-in drop-shadow-lg"
            style={{ animationDelay: '0.7s' }}
          >
            Somos uma sociedade de advogados sediada em Maputo, com mais de cinco anos de experiência dedicada ao apoio jurídico no setor empresarial e particular. Ao longo deste percurso, acompanhámos um vasto número de processos, sempre com foco na defesa rigorosa dos interesses dos nossos clientes e na procura de soluções práticas e seguras.
          </p>

          {/* CTA Buttons with Proper Accessibility */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4 sm:px-0 hero-fade-in"
            style={{ animationDelay: '0.9s' }}
          >
            <Button 
              asChild
              size="lg" 
              className="btn-elite group px-8 py-6 w-full sm:w-auto text-base shadow-2xl hover:shadow-accent/50 hover:-translate-y-1 transition-all duration-300 focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2"
              aria-label="Conhecer os nossos serviços jurídicos"
            >
              <a href="/servicos">
                <span className="flex items-center gap-2">
                  Conhecer os Nossos Serviços
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 w-full sm:w-auto text-base transition-all duration-300 backdrop-blur-sm bg-primary-foreground/5 hover:shadow-xl hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
              aria-label="Agendar consultoria jurídica via WhatsApp"
            >
              <a 
                href={getWhatsAppConsultoriaLinkExact()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consultoria
              </a>
            </Button>
          </div>


        </div>
      </div>

      {/* Scroll Indicator with Improved Animation */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hero-scroll-indicator"
        role="img"
        aria-label="Rolar para baixo para ver mais conteúdo"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/60 rounded-full flex justify-center relative group cursor-pointer hover:border-accent transition-colors duration-300">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 scroll-dot"></div>
        </div>
        <p className="text-xs text-primary-foreground/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Deslize
        </p>
      </div>

      {/* Custom Styles */}
      <style>{`
        /* Parallax effect on scroll */
        @media (prefers-reduced-motion: no-preference) {
          .hero-parallax {
            animation: subtleParallax 20s ease-in-out infinite alternate;
          }
          
          @keyframes subtleParallax {
            0% { transform: scale(1.05) translateY(0); }
            100% { transform: scale(1.08) translateY(-10px); }
          }
        }

        /* Radial gradient vignette */
        .bg-radial-gradient {
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%);
        }

        /* Animated gradient overlay */
        .hero-gradient-animation {
          background: linear-gradient(
            45deg,
            hsl(343 59% 20%),
            hsl(343 45% 30%),
            hsl(45 93% 85%),
            hsl(343 59% 20%)
          );
          background-size: 400% 400%;
          animation: gradientShift 30s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Fade in animations */
        @media (prefers-reduced-motion: no-preference) {
          .hero-fade-in {
            opacity: 0;
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .hero-title-reveal {
            opacity: 0;
            animation: titleReveal 1s ease-out forwards;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes titleReveal {
            from {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        }

        /* Scroll indicator animation */
        @media (prefers-reduced-motion: no-preference) {
          .hero-scroll-indicator {
            animation: floatUpDown 3s ease-in-out infinite;
          }

          .scroll-dot {
            animation: scrollDot 2s ease-in-out infinite;
          }

          @keyframes floatUpDown {
            0%, 100% { transform: translate(-50%, 0); }
            50% { transform: translate(-50%, -10px); }
          }

          @keyframes scrollDot {
            0%, 100% { 
              transform: translateY(0);
              opacity: 1;
            }
            50% { 
              transform: translateY(12px);
              opacity: 0.3;
            }
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .hero-parallax,
          .hero-gradient-animation,
          .hero-fade-in,
          .hero-title-reveal,
          .hero-scroll-indicator,
          .scroll-dot {
            animation: none !important;
          }
          
          .hero-fade-in,
          .hero-title-reveal {
            opacity: 1 !important;
            transform: none !important;
          }
        }

        /* Focus visible improvements */
        *:focus-visible {
          outline: 3px solid hsl(45 93% 85%);
          outline-offset: 4px;
          border-radius: 4px;
        }
      `}</style>
    </motion.section>
  );
};

export default HeroSection;