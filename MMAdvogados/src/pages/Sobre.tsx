import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { Trophy, Users, Target, Award } from "lucide-react";
import milagrosaPortrait from "@/assets/milagrosa-portrait.jpg";

const Sobre = () => {
  const values = [
    {
      icon: Trophy,
      title: "Excelência",
      description: "Comprometemo-nos com os mais altos padrões de qualidade jurídica."
    },
    {
      icon: Users,
      title: "Liderança Feminina",
      description: "Pioneiras no direito empresarial liderado por mulheres em Moçambique."
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Orientamos todas as nossas acções para alcançar os objectivos dos clientes."
    },
    {
      icon: Award,
      title: "Transparência",
      description: "Relatórios mensais e comunicação clara em todos os processos."
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
              Sobre Nós
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça a história, valores e visão da sociedade de advogados que está 
              a revolucionar o mercado jurídico moçambicano.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <AboutSection />

      {/* Values Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Os Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os pilares que sustentam nossa excelência e diferenciam nosso trabalho.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center card-elegant">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;