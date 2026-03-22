import React, { useState, memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
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
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  photo: string;
  photoSrcSet?: string;
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
  const { t } = useLanguage();

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
                  <LazyImage
                    src={member.photo}
                    srcSet={member.photoSrcSet}
                    sizes="(max-width: 768px) 96px, 128px"
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    fallbackSrc={member.photo}
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

          <div className="flex justify-center gap-3 mb-6">

            <Button
              type="button"
              className="h-11 px-5"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-controls={`member-details-${member.id}`}
              aria-label={`Ver perfil completo de ${member.name}`}
              title="Ver Perfil"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                {t("page.equipa.profile.btn")}
              </span>
              <ChevronDown
                className={`ml-2 w-5 h-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </Button>
          </div>

          

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
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <a href={`mailto:${member.email}`} className="underline underline-offset-2">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <a href={`tel:${member.phone}`} className="underline underline-offset-2">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{member.location}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="flex items-center text-base font-semibold text-foreground mb-3">
                      <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                      {t("page.equipa.profile.education")}
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
                      {t("page.equipa.profile.experience")}
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
                      {t("page.equipa.profile.specialties")}
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
                      {t("page.equipa.profile.languages")}
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
  const { t } = useLanguage();

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Milagrosa Macuácua",
      position: t("team.m1.position"),
      photo: "/images/dra-milagrosa.webp",
      description: t("team.m1.desc"),
      email: "maria@mmadvogados.com",
      phone: "+351 912 345 678",
      location: "Lisboa, Portugal",
      linkedin: "https://linkedin.com/in/mariasilva",
      website: "https://mariasilva.adv.br",
      education: [
        t("team.m1.edu.1"),
        t("team.m1.edu.2"),
        t("team.m1.edu.3"),
      ],
      experience: [
        t("team.m1.exp.1"),
        t("team.m1.exp.2"),
        t("team.m1.exp.3"),
      ],
      specialties: [
        t("team.m1.spec.1"),
        t("team.m1.spec.2"),
        t("team.m1.spec.3"),
        t("team.m1.spec.4"),
      ],
      languages: [
        t("team.m1.lang.1"),
        t("team.m1.lang.2"),
        t("team.m1.lang.3"),
      ],
    },
    {
      id: 2,
      name: "Marlete Miguel",
      position: t("team.m2.position"),
      photo: "/images/marlete-portrait.webp",
      description: t("team.m2.desc"),
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        t("team.m2.edu.1"),
        t("team.m2.edu.2"),
        t("team.m2.edu.3"),
      ],
      experience: [
        t("team.m2.exp.1"),
        t("team.m2.exp.2"),
        t("team.m2.exp.3"),
      ],
      specialties: [
        t("team.m2.spec.1"),
        t("team.m2.spec.2"),
        t("team.m2.spec.3"),
        t("team.m2.spec.4"),
      ],
      languages: [
        t("team.m2.lang.1"),
        t("team.m2.lang.2"),
        t("team.m2.lang.3"),
      ],
    },
    {
      id: 3,
      name: "Cláudia Semente",
      position: t("team.m3.position"),
      photo: "/images/claudia-portrait.webp",
      description: t("team.m3.desc"),
      email: "ana@mmadvogados.com",
      phone: "+351 914 567 890",
      location: "Lisboa, Portugal",
      linkedin: "https://linkedin.com/in/anacosta",
      education: [
        t("team.m3.edu.1"),
        t("team.m3.edu.2"),
        t("team.m3.edu.3"),
      ],
      experience: [
        t("team.m3.exp.1"),
        t("team.m3.exp.2"),
        t("team.m3.exp.3"),
      ],
      specialties: [
        t("team.m3.spec.1"),
        t("team.m3.spec.2"),
        t("team.m3.spec.3"),
        t("team.m3.spec.4"),
      ],
      languages: [
        t("team.m3.lang.1"),
        t("team.m3.lang.2"),
        t("team.m3.lang.3"),
      ],
    },
    {
      id: 4,
      name: "Beatriz Macamo",
      position: t("team.m4.position"),
      photo: "/images/beatriz-portait.webp",
      description: t("team.m4.desc"),
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        t("team.m4.edu.1"),
        t("team.m4.edu.2"),
        t("team.m4.edu.3"),
      ],
      experience: [
        t("team.m4.exp.1"),
        t("team.m4.exp.2"),
        t("team.m4.exp.3"),
      ],
      specialties: [
        t("team.m4.spec.1"),
        t("team.m4.spec.2"),
        t("team.m4.spec.3"),
        t("team.m4.spec.4"),
      ],
      languages: [t("team.m4.lang.1"), t("team.m4.lang.2"), t("team.m4.lang.3")],
    },
    {
      id: 5,
      name: "Albertina Nhantumbo",
      position: t("team.m5.position"),
      photo: "/images/albertina-portait.webp",
      description: t("team.m5.desc"),
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        t("team.m5.edu.1"),
        t("team.m5.edu.2"),
        t("team.m5.edu.3"),
      ],
      experience: [
        t("team.m5.exp.1"),
        t("team.m5.exp.2"),
        t("team.m5.exp.3"),
      ],
      specialties: [
        t("team.m5.spec.1"),
        t("team.m5.spec.2"),
        t("team.m5.spec.3"),
        t("team.m5.spec.4"),
      ],
      languages: [t("team.m5.lang.1"), t("team.m5.lang.2"), t("team.m5.lang.3")],
    },
    {
      id: 6,
      name: "Helodia Malate",
      position: t("team.m6.position"),
      photo: "/images/heloida2-portait.webp",
      description: t("team.m6.desc"),
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        t("team.m6.edu.1"),
        t("team.m6.edu.2"),
        t("team.m6.edu.3"),
      ],
      experience: [
        t("team.m6.exp.1"),
        t("team.m6.exp.2"),
        t("team.m6.exp.3"),
      ],
      specialties: [
        t("team.m6.spec.1"),
        t("team.m6.spec.2"),
        t("team.m6.spec.3"),
        t("team.m6.spec.4"),
      ],
      languages: [
        t("team.m6.lang.1"),
        t("team.m6.lang.2"),
        t("team.m6.lang.3"),
      ],
    },
    {
      id: 7,
      name: "Maura Matsinhe",
      position: t("team.m7.position"),
      photo: "/images/maura-portrait.webp",
      description: t("team.m7.desc"),
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        t("team.m7.edu.1"),
        t("team.m7.edu.2"),
        t("team.m7.edu.3"),
      ],
      experience: [
        t("team.m7.exp.1"),
        t("team.m7.exp.2"),
        t("team.m7.exp.3"),
      ],
      specialties: [
        t("team.m7.spec.1"),
        t("team.m7.spec.2"),
        t("team.m7.spec.3"),
        t("team.m7.spec.4"),
      ],
      languages: [t("team.m7.lang.1"), t("team.m7.lang.2"), t("team.m7.lang.3")],
    },
    {
      id: 8,
      name: "Dulce Venâncio",
      position: t("team.m8.position"),
      photo: "/images/dulce-portait.webp",
      description: t("team.m8.desc"),
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        t("team.m8.edu.1"),
        t("team.m8.edu.2"),
        t("team.m8.edu.3"),
      ],
      experience: [
        t("team.m8.exp.1"),
        t("team.m8.exp.2"),
        t("team.m8.exp.3"),
      ],
      specialties: [
        t("team.m8.spec.1"),
        t("team.m8.spec.2"),
        t("team.m8.spec.3"),
        t("team.m8.spec.4"),
      ],
      languages: [t("team.m8.lang.1"), t("team.m8.lang.2"), t("team.m8.lang.3")],
    },
    {
      id: 9,
      name: "Filomena Jaques",
      position: t("team.m9.position"),
      photo: "/images/filomena-portait.webp",
      description: t("team.m9.desc"),
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        t("team.m9.edu.1"),
        t("team.m9.edu.2"),
        t("team.m9.edu.3"),
      ],
      experience: [
        t("team.m9.exp.1"),
        t("team.m9.exp.2"),
        t("team.m9.exp.3"),
      ],
      specialties: [
        t("team.m9.spec.1"),
        t("team.m9.spec.2"),
        t("team.m9.spec.3"),
        t("team.m9.spec.4"),
      ],
      languages: [t("team.m9.lang.1"), t("team.m9.lang.2"), t("team.m9.lang.3")],
    },
    {
      id: 10,
      name: "Tecla Ntauma",
      position: t("team.m10.position"),
      photo: "/images/tecla2-portrait.webp",
      description: t("team.m10.desc"),
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        t("team.m10.edu.1"),
        t("team.m10.edu.2"),
        t("team.m10.edu.3"),
      ],
      experience: [
        t("team.m10.exp.1"),
        t("team.m10.exp.2"),
      ],
      specialties: [
        t("team.m10.spec.1"),
        t("team.m10.spec.2"),
        t("team.m10.spec.3"),
        t("team.m10.spec.4"),
      ],
      languages: [t("team.m10.lang.1"), t("team.m10.lang.2")],
    },
    {
      id: 11,
      name: "Ester Chipe",
      position: t("team.m11.position"),
      photo: "/images/ester-portrait.webp",
      description: t("team.m11.desc"),
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        t("team.m11.edu.1"),
        t("team.m11.edu.2"),
        t("team.m11.edu.3"),
      ],
      experience: [
        t("team.m11.exp.1"),
        t("team.m11.exp.2"),
      ],
      specialties: [
        t("team.m11.spec.1"),
        t("team.m11.spec.2"),
        t("team.m11.spec.3"),
        t("team.m11.spec.4"),
      ],
      languages: [t("team.m11.lang.1"), t("team.m11.lang.2")],
    },
  ];

  const peopleJsonLd = {
    "@context": "https://schema.org",
    "@graph": teamMembers.map((m) => ({
      "@type": "Person",
      "name": m.name,
      "jobTitle": m.position,
      "worksFor": {
        "@type": "Organization",
        "name": "Milagrosa Macuácua Advogados, LDA",
        "url": "https://madvogados.co.mz/"
      }
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={t("page.equipa.seo.title")}
        description={t("page.equipa.seo.desc")}
        canonicalPath="/equipe"
        jsonLd={peopleJsonLd}
      />
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
              <span className="text-primary">{t("page.equipa.hero.title")}</span>
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
                { icon: Users2, number: "6+", label: t("page.equipa.stat1") },
                {
                  icon: Award,
                  number: "50+",
                  label: t("page.equipa.stat2"),
                },
                { icon: Target, number: "12", label: t("page.equipa.stat3") },
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

      <section className="py-16">
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

      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-background"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            {t("page.equipa.cta.title.1")}{" "}
            <span className="text-gradient-primary">{t("page.equipa.cta.title.2")}</span>
          </h2>

          <p className="text-lg text-foreground mb-8 leading-relaxed">
            {t("page.equipa.cta.desc")}
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
            <span>{t("page.equipa.cta.btn")}</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipe;
