import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { Trophy, Users, Target, Award, Sparkles, Shield, Heart, Zap } from "lucide-react";
import milagrosaPortrait from "@/assets/milagrosa-portrait.jpg";

const Sobre = () => {
  const values = [
    {
      icon: Trophy,
      title: "Excelência",
      description: "Comprometemo-nos com os mais altos padrões de qualidade jurídica.",
      gradient: "from-amber-500/20 to-yellow-500/20"
    },
    {
      icon: Users,
      title: "Liderança Feminina",
      description: "Pioneiras no direito empresarial liderado por mulheres em Moçambique.",
      gradient: "from-rose-500/20 to-pink-500/20"
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Orientamos todas as nossas acções para alcançar os objectivos dos clientes.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Award,
      title: "Transparência",
      description: "Relatórios mensais e comunicação clara em todos os processos.",
      gradient: "from-purple-500/20 to-violet-500/20"
    }
  ];

  const achievements = [
    { icon: Shield, number: "15+", label: "Anos de Experiência" },
    { icon: Users, number: "200+", label: "Clientes Satisfeitos" },
    { icon: Trophy, number: "98%", label: "Taxa de Sucesso" },
    { icon: Heart, number: "24/7", label: "Suporte Dedicado" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Modern Design */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Sobre Nós</span>
            </div> */}
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              <span className="text-primary">Sobre Nós</span>
              <br />
              {/* <span className="text-gradient-primary">com Propósito</span> */}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conheça a história, valores e visão da sociedade de advogados que está 
              a revolucionar o mercado jurídico moçambicano.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <AboutSection />

      {/* Values Section with Enhanced Design */}
      <section className="relative py-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(hsl(343 59% 20%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(343 59% 20%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Os Nossos Valores</span>
            </div>
             */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
              Os Nossos Valores <span className="text-gradient-primary"></span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os valores fundamentais que sustentam cada decisão e diferenciam nosso trabalho.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                {/* Card with hover effect */}
                <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-3"
                     style={{ boxShadow: 'var(--shadow-card)' }}>
                  
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl font-serif font-semibold text-primary mb-4 group-hover:text-primary/90 transition-colors">
                      {value.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-20 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4 ">
              {/* <a href="/contactos" className="btn-elite group">
                <span className="flex items-center gap-2">
                  Entre em Contacto
                  <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </span>
              </a> */}
              <a href="/servicos" className="btn-outline-elite">
                Conheça as areas de atuação
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;