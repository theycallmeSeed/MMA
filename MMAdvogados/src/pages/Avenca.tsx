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
import SEO from "@/components/SEO";

const Avenca = () => {
  const whatsappMessage = encodeURIComponent(
    `Olá, gostaria de saber mais sobre o Regime de Avença para a minha empresa.\n\nNome da Empresa: [nome]\nSector: [sector]`
  );
  
  const whatsappLink = `https://wa.me/258868603610?text=${whatsappMessage}`;

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
      <SEO
        title="Regime de Avença | Milagrosa Macuácua Advogados"
        description="Regime de avença empresarial com excelência: apoio jurídico contínuo, previsível e estratégico para o seu negócio em Moçambique."
        canonicalPath="/avenca"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />

        {/* REMOVIDO: os dois divs com blur-3xl que existiam aqui.
            blur-3xl é renderizado pela GPU e é pesado em mobile,
            causando delay visível ao carregar a página.
            Como tinham opacidade quase nula (bg-primary/5), a
            remoção não tem impacto visual perceptível. */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              // ALTERADO: duration de 0.6 para 0.3.
              // No mobile o JS do Framer Motion demora mais a executar,
              // fazendo o conteúdo ficar invisível por mais tempo.
              // Reduzir a duração encurta esse período de espera.
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Regime de Avença
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                Acompanhamento Jurídico <span className="text-primary">Contínuo</span> para Empresas
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Um modelo de assistência jurídica pensado para empresas que valorizam
                previsibilidade, organização e apoio técnico regular na gestão das suas
                decisões e operações.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mb-10">
                {[
                  "Maior previsibilidade na gestão jurídica",
                  "Acompanhamento regular e estruturado",
                  "Apoio técnico ajustado à realidade da empresa",
                  "Uma relação jurídica contínua e próxima",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border bg-card/80 px-4 py-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/10 shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-sm md:text-[15px] text-foreground/90 font-medium leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg h-14 px-8 rounded-xl gap-2 shadow-lg shadow-primary/20 bg-[rgb(81,21,38)] text-white hover:bg-[rgb(81,21,38)]/90"
                  onClick={() => window.open(whatsappLink, "_blank", "noopener,noreferrer")}
                >
                  Solicitar Informações
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              // ALTERADO: duration de 0.8 para 0.4, delay de 0.2 para 0.1.
              // O delay de 0.2s somado à duração de 0.8s significava que
              // este card só ficava visível ao fim de ~1s em mobile.
              // Com 0.4 + 0.1 fica visível em ~0.5s.
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-card border border-border rounded-[28px] p-8 shadow-2xl max-w-md mx-auto">
                <div className="flex items-center gap-4 mb-6 border-b border-border pb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">
                      Estrutura Jurídica Regular
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Apoio contínuo, organizado e alinhado com a actividade da empresa
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Análise e revisão de instrumentos contratuais",
                    "Apoio em matérias laborais e societárias",
                    "Orientação jurídica recorrente para decisões empresariais",
                    "Acompanhamento preventivo de situações sensíveis",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-border/50"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium text-sm text-foreground/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Conheça em detalhe como o Regime de Avença pode ser estruturado de
                    acordo com a dimensão, organização e necessidades da sua empresa.
                  </p>
                </div>
              </div>

              <div className="absolute top-10 -right-10 w-full h-full bg-primary/5 rounded-[28px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Vantagens de uma assistência jurídica em regime de avença
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Uma solução pensada para empresas que pretendem maior continuidade no
              acompanhamento jurídico, melhor organização interna e apoio técnico mais
              próximo no dia-a-dia empresarial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                // ALTERADO: duration de 0.5 para 0.3, delay de idx*0.08 para idx*0.04.
                // Com 6 cards e delay de 0.08s, o último card só animava ao fim
                // de 0.48s após entrar no viewport — perceptível como "lentidão".
                // Com 0.04s de intervalo o escalonamento fica suave mas rápido.
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                viewport={{ once: true }}
                className="group bg-card p-8 rounded-[24px] border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/10">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* <div className="mt-14 text-center">
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              Cada empresa tem a sua própria dinâmica, os seus riscos e as suas
              prioridades. Por isso, o regime de avença deve ser compreendido de forma
              personalizada, com enquadramento claro e ajustado à realidade do negócio.
            </p>

            <Button
              size="lg"
              className="text-lg h-14 px-8 rounded-xl gap-2 shadow-lg shadow-primary/20 bg-[rgb(81,21,38)] text-white hover:bg-[rgb(81,21,38)]/90"
              onClick={() => window.open(whatsappLink, "_blank", "noopener,noreferrer")}
            >
              Falar com a Nossa Equipa
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div> */}
        </div>
      </section>

      {/* Plans Structure (Conceptual)
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
      </section> */}

      {/* CTA Final */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="rounded-[28px] border border-border bg-card px-6 py-12 md:px-10 md:py-14 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Fale connosco sobre o enquadramento mais adequado para a sua empresa
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Agende um primeiro contacto para compreender de que forma o Regime de
              Avença pode ser estruturado em função da actividade, dimensão e
              necessidades jurídicas do seu negócio.
            </p>

            <Button
              size="lg"
              variant="secondary"
              className="text-lg h-14 px-8 rounded-xl gap-2 shadow-lg shadow-primary/20 bg-[rgb(81,21,38)] text-white hover:bg-[rgb(81,21,38)]/90"
              onClick={() => window.open(whatsappLink, "_blank", "noopener,noreferrer")}
            >
              Agendar Reunião Inicial
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Avenca;