import { Linkedin, Mail, Globe, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { slideUp, staggerContainer, fadeIn } from "@/lib/animation-variants";
import LazyImage from "@/components/LazyImage";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  photo: string;
  description: string;
}

const TeamSection = () => {
  const navigate = useNavigate();
  const shouldReduce = useReducedMotion();
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Milagrosa Macuácua",
      position: "Assistente Administrativa",
      photo: "/images/dra-milagrosa.webp",
      description:
        "Advogada com mais de 15 anos de experiência em Direito Civil e Consumerista. Especialista em casos complexos de responsabilidade civil.",
  
    },
    {
      id: 2,
      name: "Marlete Miguel",
      position: "Sócio - Direito Empresarial",
      photo: "/images/marlete-portrait.webp",
      description:
        "Especialista em Direito Empresarial e Societário. Atua na assessoria jurídica de empresas nacionais e multinacionais.",
    },
    {
      id: 3,
      name: "Cláudia Semente",
      position: "Associada Sênior - Direito da Família",
      photo: "/images/claudia-portrait.webp",
      description:
        "Especialista em Direito de Família e Sucessões com abordagem humanizada e sensível para casos familiares complexos.",
    
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient-primary mb-4">
            Nossa Equipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça os profissionais dedicados que compõem o time MMA Advogados,
            prontos para oferecer a melhor assessoria jurídica.
          </p>
        </div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={shouldReduce ? {} : staggerContainer}
          initial={shouldReduce ? undefined : "hidden"}
          whileInView={shouldReduce ? undefined : "visible"}
          viewport={shouldReduce ? undefined : { once: true, amount: 0.2 }}
          style={{
            willChange: "transform, opacity",
            backfaceVisibility: "hidden",
          }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="card-elegant rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
              variants={slideUp}
            >
              {/* Foto */}
              <div className="relative">
                <div className="flex justify-center mt-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden relative shadow-lg">
                    {member.photo
                      ? (() => {
                          const base = member.photo.replace(/\.webp$/i, "");
                          const src = member.photo;
                          const srcSet = `${base}-400.webp 400w, ${base}-800.webp 800w`;
                          const sizes = "160px";
                          return (
                            <LazyImage
                              src={src}
                              srcSet={srcSet}
                              sizes={sizes}
                              alt={member.name}
                              width={160}
                              height={160}
                              className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                              fallbackSrc={member.photo}
                            />
                          );
                        })()
                      : null}

                    {/* Fallback com iniciais */}
                    <div
                      className={`absolute inset-0 bg-primary/10 flex items-center justify-center ${
                        member.photo ? "hidden" : ""
                      }`}
                    >
                      <span className="text-3xl sm:text-4xl font-bold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3 text-sm sm:text-base">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground mb-4 text-xs sm:text-sm flex-1">
                    {member.description}
                  </p>


                  {/* Social Links */}
                  <div className="flex space-x-2 sm:space-x-3 mt-auto">
                
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button com espaçamento melhorado */}
        <motion.div
          className="mt-16 pt-12 border-t border-border/30"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <button
            onClick={() => navigate("/equipe")}
            aria-label="Ver equipe completa"
            className="group px-10 py-5 bg-[rgb(81,21,38)] text-white font-bold text-lg rounded-xl hover:bg-[rgb(81,21,38)]/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            <span> Ver Equipe Completa</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
