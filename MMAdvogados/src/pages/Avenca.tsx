
import { 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Clock, 
  Scale, 
  Handshake, 
  TrendingUp, 
  FileText,
  Users,
  Briefcase
} from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Avenca = () => {
  const whatsappMessage = encodeURIComponent(
    `Olá, gostaria de saber mais sobre o Regime de Avença para a minha empresa.\n\nNome da Empresa: [nome]\nSector: [sector]`
  );
  
  const whatsappLink = `https://wa.me/258871549533?text=${whatsappMessage}`;

  const benefits = [
    {
      icon: TrendingUp,
      title: "Previsibilidade Financeira",
      description: "Custo fixo mensal que elimina surpresas orçamentais com honorários advocatícios."
    },
    {
      icon: Clock,
      title: "Resposta Prioritária",
      description: "SLA (Acordo de Nível de Serviço) garantido para consultas urgentes e análise contratual."
    },
    {
      icon: Shield,
      title: "Prevenção de Riscos",
      description: "Actuação proactiva para identificar e mitigar riscos legais antes que se tornem problemas."
    },
    {
      icon: Scale,
      title: "Conformidade Legal",
      description: "Garantia de que a sua empresa opera sempre dentro dos marcos regulatórios actuais."
    },
    {
      icon: Handshake,
      title: "Parceria Estratégica",
      description: "Advogados que conhecem o seu negócio a fundo e participam na tomada de decisões."
    },
    {
      icon: Users,
      title: "Gestão de RH",
      description: "Apoio contínuo em questões laborais, contratações e processos disciplinares."
    }
  ];

  const plans = [
    {
      name: "Essencial",
      description: "Ideal para pequenas empresas e startups em crescimento.",
      features: [
        "Consultoria jurídica geral (limitada)",
        "Revisão de contratos padrão",
        "Apoio em questões laborais básicas",
        "Resposta em até 48h úteis"
      ],
      recommended: false
    },
    {
      name: "Empresarial",
      description: "Protecção completa para PMEs consolidadas.",
      features: [
        "Consultoria jurídica ilimitada",
        "Gestão de contratos complexos",
        "Compliance laboral e fiscal",
        "Recuperação de crédito extrajudicial",
        "Resposta em até 24h úteis"
      ],
      recommended: true
    },
    {
      name: "Corporativo",
      description: "Soluções à medida para grandes organizações.",
      features: [
        "Equipa dedicada exclusiva",
        "Auditoria legal permanente",
        "Representação em contencioso",
        "Participação em reuniões de direcção",
        "Atendimento prioritário imediato"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        
        {/* Abstract Shapes */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Solução Corporativa
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                Departamento Jurídico <span className="text-primary">Sob Medida</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                O Regime de Avença oferece à sua empresa a segurança de um departamento jurídico interno, com a flexibilidade e eficiência de uma equipa externa especializada.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg h-14 px-8 rounded-xl gap-2 shadow-lg shadow-primary/20 bg-[rgb(81,21,38)] text-white hover:bg-[rgb(81,21,38)]/90"
                  onClick={() => window.open(whatsappLink, "_blank", "noopener,noreferrer")}
                >
                  Solicitar Proposta
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg h-14 px-8 rounded-xl border-primary/30 text-primary hover:bg-primary/5"
                  asChild
                >
                  <a href="#como-funciona">
                    Como Funciona
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-card border border-border rounded-2xl p-8 shadow-2xl max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-6 border-b border-border pb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Protecção Contínua</h3>
                    <p className="text-sm text-muted-foreground">Cobertura jurídica 360º</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Análise de contratos em 24h",
                    "Pareceres laborais ilimitados",
                    "Representação fiscal",
                    "Due diligence preventiva"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    Junte-se a mais de 50 empresas protegidas
                  </p>
                </div>
              </div>
              
              {/* Decorative elements behind card */}
              <div className="absolute top-10 -right-10 w-full h-full bg-primary/5 rounded-2xl -z-10 transform -rotate-3" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Porquê escolher o Regime de Avença?
            </h2>
            <p className="text-lg text-muted-foreground">
              Mais do que advogados, somos parceiros estratégicos para o crescimento sustentável do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Structure (Conceptual) */}
      <section id="como-funciona" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Planos Adaptáveis
            </h2>
            <p className="text-lg text-muted-foreground">
              Estruturamos a nossa avença conforme a dimensão e as necessidades específicas da sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col p-8 rounded-3xl border ${
                  plan.recommended 
                    ? "border-primary shadow-xl bg-card z-10 scale-105" 
                    : "border-border bg-muted/10"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                    Mais Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="flex-1 space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.recommended ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full py-6 rounded-xl text-base font-semibold ${
                    plan.recommended 
                      ? "bg-[rgb(81,21,38)] text-white hover:bg-[rgb(81,21,38)]/90 shadow-lg shadow-primary/20" 
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                  onClick={() => window.open(whatsappLink, "_blank", "noopener,noreferrer")}
                >
                  Falar com Especialista
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            A sua empresa merece segurança jurídica total
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Agende uma reunião inicial sem compromisso para avaliarmos as necessidades do seu negócio.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-primary font-bold text-lg h-16 px-10 rounded-xl shadow-xl hover:scale-105 transition-transform"
            onClick={() => window.open(whatsappLink, "_blank", "noopener,noreferrer")}
          >
            Agendar Reunião de Diagnóstico
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Avenca;
