import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animation-variants";
import { Trophy, Users, Target, Award, Shield, Heart, Building2, ArrowRight, CheckCircle } from "lucide-react";

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

  const founderAchievements = [
    "Sociedade liderada por mulheres em Moçambique",
    "Especialização em regime de avença empresarial",
    "Equipa jovem, técnica e dinâmica",
    "Relatórios mensais e transparência total",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              <span className="text-primary">Sobre Nós</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma sociedade de advogados pioneira em Moçambique, assente nos valores da excelência, da inovação e da liderança exercida por mulheres, ao serviço de empresas e particulares.
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
                style={{ boxShadow: 'var(--shadow-card)' }}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História com Escritório Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Imagem do Escritório */}
            <motion.div className="relative group" variants={slideUp}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
                <img 
                  // src={escritorioImage} 
                  alt="Escritório MM Advogados" 
                  className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="p-3 bg-primary/90 backdrop-blur-sm rounded-xl">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Escritório em Maputo</p>
                    <p className="text-white/80 text-sm">Moçambique</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* História do Escritório */}
            <motion.div className="space-y-6" variants={slideUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Nossa História</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Uma Jornada de <span className="text-gradient-primary">Excelência Jurídica</span>
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Fundada com a visão de transformar o panorama jurídico em Moçambique, a MM Advogados nasceu do compromisso inabalável com a excelência e a inovação no direito empresarial.
                </p>
                
                <p>
                  Sob a liderança pioneira de mulheres empreendedoras e visionárias, construímos uma reputação sólida baseada em resultados concretos e relacionamentos duradouros com nossos clientes. Ao longo dos anos, expandimos nossa expertise para abranger todas as áreas críticas do direito empresarial.
                </p>

                <p>
                  Em 20XX, movida pelo sonho de contribuir no empoderamento feminino, decidimos fundar a Milagrosa Macuacua Advogados, um escritório composto 100% por mulheres, dentre Advogadas, Advogadas Estagiárias, bem como pessoal de apoio.
                </p>

                <p className="font-semibold text-foreground">
                  Hoje, somos reconhecidos como referência em direito empresarial, mantendo sempre nossos valores fundamentais: excelência, transparência e compromisso com resultados.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section - Milagrosa Macuácua */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-background"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="space-y-6" variants={slideUp}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-foreground">
                <Trophy className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Fundadora & CEO</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Milagrosa Macuácua
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Milagrosa Macuacua é sócia e fundadora da MM Advogados. Desempenha as suas actividades nas áreas de XXXXXXXXXXXXXXX.
                </p>
                
                <p>
                  Foi Presidente do Conselho Provincial da Ordem dos Advogados de Moçambique entre XXX e XXXX, sendo que actualmente desempenha as funções de Conselheira, no mesmo organismo. É membro da Comissão Nacional de Avaliação de Estágio na Ordem dos Advogados de Moçambique, organismo responsável pela avaliação para acreditação dos Advogados Estagiários.
                </p>

                <p>
                  Milagrosa Macuacua é licenciada em Direito pela Faculdade de Direito da Universidade Eduardo Mondlane, desde 2009, instituição pela qual se encontra a finalizar o seu Mestrado em Ciências Jurídicas.
                </p>

                <p>
                  Iniciou a sua carreira na Sal e Cadeira (2010), tendo de seguida passado pela Opelegis (20XXX). Exerceu, igualmente o cargo de Delegada Distrital do Instituto de Patrocínio e Assistência Jurídica (IPAJ), entre 20XX e 20XX.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                {founderAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative" variants={slideUp}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl border border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
                <img
                  src="/images/milagrosa-portrait.jpg"
                  alt="Milagrosa Macuácua - Fundadora"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <div className="relative overflow-hidden rounded-2xl border border-border" style={{ boxShadow: 'var(--shadow-card)' }}>
                <img
                  src="/images/legal-team.jpg"
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
              
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                Jovem, Técnica e Dinâmica
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  A nossa equipa é composta por jovens profissionais altamente qualificados, com formação técnica especializada e uma abordagem dinâmica aos desafios jurídicos contemporâneos.
                </p>
                
                <p>
                  Combinamos experiência sólida com inovação, utilizando tecnologia de ponta, plataformas digitais para acompanhamento de processos em tempo real, e metodologias modernas de gestão jurídica.
                </p>

                <p>
                  A nossa abordagem inclui análise de riscos detalhada, due diligence completa e estratégias personalizadas para cada sector de actividade, garantindo resultados mensuráveis e ROI comprovado.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">
                    Advogados Especializados
                  </div>
                </div>
                <div className="text-center p-6 rounded-xl bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-2">7</div>
                  <div className="text-sm text-muted-foreground">
                    Áreas de Especialização
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background"></div>
        
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(hsl(343 59% 20%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(343 59% 20%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
              Os Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os valores fundamentais que sustentam cada decisão e diferenciam nosso trabalho.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="relative group"
                variants={slideUp}
              >
                <div className="relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-3"
                     style={{ boxShadow: 'var(--shadow-card)' }}>
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
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

                  <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12 border border-border"
            style={{ boxShadow: 'var(--shadow-card)' }}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Target className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">A Nossa Missão</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Transformar o Direito Empresarial em Moçambique
            </h3>
            
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Prestar Serviços Jurídicos com Excelência, Oferecendo Soluções Inovadoras para Obtenção de Resultados Expressivos que Garantam a Satisfação dos Clientes.
            </p>

            <div className="mt-8">
              <a 
                href="/servicos" 
                className="group inline-flex items-center gap-2 px-8 py-4 text-lg border border-border/50 rounded-lg transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
              >
                <span>Conheça as Áreas de Atuação</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
