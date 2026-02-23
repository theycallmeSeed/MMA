import React, { useState, memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Linkedin,
  Mail,
  Globe,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Sparkles,
  Users2,
  ChevronDown,
  GraduationCap,
  Briefcase,
  Languages,
  Target,
  ArrowRight,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animation-variants";
import { useIsMobile } from "@/hooks/use-mobile";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  photo: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website?: string;
  education: string[];
  experience: string[];
  specialties: string[];
  languages: string[];
}

/* Componente isolado para cada cartão -> estado local garante que só ele abre/fecha */
const TeamMemberCard: React.FC<{ member: TeamMember; index: number }> = ({
  member,
  index,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="group relative"
      variants={slideUp}
      transition={{ delay: index * 0.05 }}
      style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
    >
      <div
        className="relative h-full rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative p-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden relative ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                ) : null}

                <div
                  className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ${
                    member.photo ? "hidden" : ""
                  }`}
                >
                  <span className="text-4xl font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 p-2 bg-primary rounded-full border-4 border-card">
                <Award className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {member.name}
            </h2>
            <p className="text-primary font-semibold mb-4 text-sm">
              {member.position}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {member.description}
            </p>
          </div>

          <div className="space-y-3 mb-6 text-sm">
            <div className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{member.email}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>{member.phone}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>{member.location}</span>
            </div>
          </div>

          <div className="flex justify-center gap-3 mb-6">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl hover:scale-110 transition-all duration-300 group/link"
            >
              <Linkedin className="w-5 h-5 text-primary group-hover/link:text-primary/80" />
            </a>
            <a
              href={`mailto:${member.email}`}
              className="p-2.5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl hover:scale-110 transition-all duration-300 group/link"
            >
              <Mail className="w-5 h-5 text-primary group-hover/link:text-primary/80" />
            </a>
            {member.website && (
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl hover:scale-110 transition-all duration-300 group/link"
              >
                <Globe className="w-5 h-5 text-primary group-hover/link:text-primary/80" />
              </a>
            )}
          </div>

          {/* Toggle botão com estado local */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl hover:from-primary/10 hover:to-accent/10 transition-all duration-300"
            aria-expanded={open}
            aria-controls={`member-details-${member.id}`}
          >
            <span className="font-semibold text-foreground flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              Currículo Completo
            </span>
            <ChevronDown
              className={`w-5 h-5 text-primary transform transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                id={`member-details-${member.id}`}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6"
                style={{
                  transformOrigin: "top",
                  willChange: "transform, opacity",
                }}
              >
                <div className="space-y-6 px-2">
                  <div>
                    <h4 className="flex items-center text-base font-semibold text-foreground mb-3">
                      <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                      Formação Académica
                    </h4>
                    <ul className="space-y-2">
                      {member.education.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center text-base font-semibold text-foreground mb-3">
                      <Briefcase className="w-5 h-5 mr-2 text-primary" />
                      Experiência Profissional
                    </h4>
                    <ul className="space-y-2">
                      {member.experience.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="flex items-center text-base font-semibold text-foreground mb-3">
                      <Sparkles className="w-5 h-5 mr-2 text-primary" />
                      Especialidades
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gradient-to-br from-primary/10 to-accent/10 text-foreground text-xs font-medium rounded-full border border-primary/20"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center text-base font-semibold text-foreground mb-3">
                      <Languages className="w-5 h-5 mr-2 text-primary" />
                      Idiomas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.languages.map((language, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-secondary/50 text-foreground text-xs font-medium rounded-full"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
      </div>
    </motion.div>
  );
};

const MemoTeamMemberCard = memo(TeamMemberCard);

const Equipe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const shouldReduce = useReducedMotion();
  const isMobile = useIsMobile();

  const teamMembers: TeamMember[] = [
    // ... mantém os objetos dos membros que já tinhas (copiar tal como estão)
    {
      id: 1,
      name: "Milagrosa Macuácua",
      position: "Sócio - Direito Empresarial",
      photo: "/images/dra-milagrosa.webp",
      description:
        "Advogada com mais de 15 anos de experiência em Direito Civil e Consumerista. Especialista em casos complexos de responsabilidade civil.",
      email: "maria@mmadvogados.com",
      phone: "+351 912 345 678",
      location: "Lisboa, Portugal",
      linkedin: "https://linkedin.com/in/mariasilva",
      website: "https://mariasilva.adv.br",
      education: [
        "Mestrado em Direito Civil - Universidade de Lisboa",
        "Pós-Graduação em Direito do Consumidor - Universidade Católica",
        "Bacharelado em Direito - Universidade de Coimbra",
      ],
      experience: [
        "Sócia Fundadora na MMA Advogados (2018 - Presente)",
        "Advogada Sénior no escritório Silva & Associados (2010-2018)",
        "Estagiária no Tribunal Judicial de Lisboa (2008-2010)",
      ],
      specialties: [
        "Direito Civil",
        "Direito do Consumidor",
        "Responsabilidade Civil",
        "Contratos",
      ],
      languages: [
        "Português (Nativo)",
        "Inglês (Avançado)",
        "Espanhol (Intermediário)",
      ],
    },
    // ... restantes membros (mantém todos os dados iguais aos que tens)
    {
      id: 2,
      name: "Marlete Miguel",
      position: "Sócio - Direito Empresarial",
      photo: "/images/marlete-portrait.webp",

      description:
        "Especialista em Direito Empresarial e Societário. Atua na assessoria jurídica de empresas nacionais e multinacionais.",
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        "MBA em Gestão Jurídica - Universidade do Porto",
        "Especialização em Direito Societário - Universidade Nova de Lisboa",
        "Bacharelado em Direito - Universidade do Minho",
      ],
      experience: [
        "Sócio na MMA Advogados (2018 - Presente)",
        "Consultor Jurídico na Empresa XYZ (2014-2018)",
        "Advogado Júnior no escritório Empresarial Legal (2011-2014)",
      ],
      specialties: [
        "Direito Societário",
        "Fusões e Aquisições",
        "Contratos Empresariais",
        "Compliance",
      ],
      languages: [
        "Português (Nativo)",
        "Inglês (Fluente)",
        "Francês (Intermediário)",
      ],
    },
    {
      id: 3,
      name: "Cláudia Semente",
      position: "Associada Sénior - Direito da Família",
      photo: "/images/claudia-portrait.webp",
      description:
        "Especialista em Direito de Família e Sucessões com abordagem humanizada e sensível para casos familiares complexos.",
      email: "ana@mmadvogados.com",
      phone: "+351 914 567 890",
      location: "Lisboa, Portugal",
      linkedin: "https://linkedin.com/in/anacosta",
      education: [
        "Especialização em Direito de Família - Universidade de Lisboa",
        "Curso de Mediação de Conflitos Familiares",
        "Bacharelado em Direito - Universidade de Évora",
      ],
      experience: [
        "Associada Sénior na MMA Advogados (2020 - Presente)",
        "Advogada especializada em Família no escritório Familiar & Associados (2015-2020)",
        "Mediadora Judicial (2013-2015)",
      ],
      specialties: [
        "Divórcio e Separação",
        "Guarda de Menores",
        "Inventários e Partilhas",
        "Alimentos",
      ],
      languages: [
        "Português (Nativo)",
        "Espanhol (Avançado)",
        "Inglês (Intermediário)",
      ],
    },
    {
      id: 4,
      name: "Tecla Ntauma",
      position: "Assistente Administrativa",
      photo: "/images/tecla-portrait.webp",
      description:
        "Profissional dedicada à gestão administrativa e suporte operacional, garantindo eficiência nos processos internos.",
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        "Curso de Gestão Administrativa",
        "Formação em Atendimento ao Cliente",
        "Certificação em Microsoft Office",
      ],
      experience: [
        "Assistente Administrativa na MMA Advogados (2020 - Presente)",
        "Apoio Administrativo em escritório jurídico (2018-2020)",
      ],
      specialties: [
        "Gestão de Agenda",
        "Atendimento ao Cliente",
        "Organização Documental",
        "Suporte Operacional",
      ],
      languages: ["Português (Nativo)", "Inglês (Intermediário)"],
    },
    {
      id: 5,
      name: "Helodia Malate",
      position: "Advogada - Direito Laboral",
      photo: "/images/helodia-portrait.webp",
      description:
        "Advogada, vocacionada na área de recuperação de créditos judicial e extrajudicial com domínio em Direito de Família e Laboral.",
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        "Mestrado em Direito Laboral - Universidade do Porto",
        "Especialização em Relações Laborais",
        "Bacharelado em Direito - Universidade do Minho",
      ],
      experience: [
        "Advogada na MMA Advogados (2019 - Presente)",
        "Consultora Laboral (2016-2019)",
        "Estagiária em escritório especializado (2015-2016)",
      ],
      specialties: [
        "Direito Laboral",
        "Contratos de Trabalho",
        "Rescisões",
        "Compliance Laboral",
      ],
      languages: [
        "Português (Nativo)",
        "Inglês (Fluente)",
        "Francês (Intermediário)",
      ],
    },
    {
      id: 6,
      name: "Maura Matsinhe",
      position: "Advogada - Direito de Família ",
      photo: "/images/maura-portrait.webp",
      description:
        "Especialista na área de Direito de Civil, Direito de Família e na Área de recuperação judicial e extrajudicial.",
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        "Pós-Graduação em Direito Imobiliário",
        "Especialização em Direito Urbanístico",
        "Bacharelado em Direito",
      ],
      experience: [
        "Advogada na MMA Advogados (2020 - Presente)",
        "Consultora Imobiliária Jurídica (2017-2020)",
        "Advogada Júnior em escritório especializado (2015-2017)",
      ],
      specialties: [
        "Direito Imobiliário",
        "Regularização de Terras",
        "Contratos de Compra e Venda",
        "DUAT",
      ],
      languages: ["Português (Nativo)", "Inglês (Fluente)", "Francês (Básico)"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            variants={shouldReduce ? {} : fadeIn}
            initial={shouldReduce ? undefined : "hidden"}
            whileInView={shouldReduce ? undefined : "visible"}
            viewport={shouldReduce ? undefined : { once: true, amount: 0.3 }}
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
            }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              <span className="text-primary">Equipa</span>
            </h1>

            {/* <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Uma equipa de advogados especializados, comprometidos em oferecer 
              assessoria jurídica de elite com resultados excepcionais.
            </p> */}

            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-12"
              variants={shouldReduce ? {} : staggerContainer}
              initial={shouldReduce ? undefined : "hidden"}
              whileInView={shouldReduce ? undefined : "visible"}
              viewport={shouldReduce ? undefined : { once: true, amount: 0.3 }}
              style={{ willChange: "transform, opacity" }}
            >
              {[
                { icon: Users2, number: "6+", label: "Profissionais" },
                {
                  icon: Award,
                  number: "50+",
                  label: "Anos de Experiência Combinada",
                },
                { icon: Target, number: "7", label: "Áreas de Especialização" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center"
                  variants={shouldReduce ? {} : slideUp}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-3">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isMobile ? "visible" : undefined}
            whileInView={isMobile ? undefined : "visible"}
            viewport={
              isMobile
                ? undefined
                : { once: true, amount: 0.2, margin: "0px 0px -10% 0px" }
            }
          >
            {teamMembers.map((member, index) => (
              <MemoTeamMemberCard
                key={member.id}
                member={member}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Pronto para Trabalhar com{" "}
            <span className="text-gradient-primary">os Melhores?</span>
          </h2>

          <p className="text-lg text-foreground mb-8 leading-relaxed">
            A nossa equipa está pronta para oferecer soluções jurídicas
            personalizadas que atendam às suas necessidades específicas.
          </p>

          <motion.button
            onClick={() => navigate("/servicos")}
            className="group px-10 py-5 bg-[rgb(81,21,38)] text-white font-bold text-lg rounded-xl hover:bg-[rgb(81,21,38)]/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
            variants={shouldReduce ? {} : fadeIn}
            initial={shouldReduce ? undefined : "hidden"}
            whileInView={shouldReduce ? undefined : "visible"}
            viewport={shouldReduce ? undefined : { once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Ver os nossos serviços"
          >
            <span>Ver os Nossos Serviços</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipe;
