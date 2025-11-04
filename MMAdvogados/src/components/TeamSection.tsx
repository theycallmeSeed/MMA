import { Linkedin, Mail, Globe, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { animations, glassmorphism, gradients, microInteractions } from '@/lib/design-system';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  photo: string;
  description: string;
  // email: string;
  // phone: string;
  // location: string;
  // linkedin: string;
  // website?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Milagrosa Macuácua",
    position: "Assistente Administrativa",
    photo: "/src/assets/milagrosa-portrait.jpg",
    description: "Advogada com mais de 15 anos de experiência em Direito Civil e Consumerista. Especialista em casos complexos de responsabilidade civil.",
    // email: "maria@mmadvogados.com",
    // phone: "+351 912 345 678",
    // location: "Lisboa, Portugal",
    // linkedin: "https://linkedin.com/in/mariasilva",
  },
  {
    id: 2,
    name: "Marlete Miguel",
    position: "Sócio - Direito Empresarial",
    photo: "/src/assets/marlet-portait.jpg",
    description: "Especialista em Direito Empresarial e Societário. Atua na assessoria jurídica de empresas nacionais e multinacionais.",
    // email: "joao@mmadvogados.com",
    // phone: "+351 913 456 789",
    // location: "Porto, Portugal",
    // linkedin: "https://linkedin.com/in/joaosantos",
  },
  {
    id: 3,
    name: "Cláudia Semente",
    position: "Associada Sênior - Direito da Família",
    photo: "/src/assets/claudia-portait.jpg",
    description: "Especialista em Direito de Família e Sucessões com abordagem humanizada e sensível para casos familiares complexos.",
    // email: "ana@mmadvogados.com",
    // phone: "+351 914 567 890",
    // location: "Lisboa, Portugal",
    // linkedin: "https://linkedin.com/in/anacosta",
  },
  {
    id: 4,
    name: "Tecla Ntauma",
    position: "Sócio - Direito Empresarial",
    photo: "/src/assets/tecla-portait.jpg",
    description: "Especialista em Direito Empresarial e Societário. Atua na assessoria jurídica de empresas nacionais e multinacionais.",
    // email: "joao@mmadvogados.com",
    // phone: "+351 913 456 789",
    // location: "Porto, Portugal",
    // linkedin: "https://linkedin.com/in/joaosantos",
  },
  {
    id: 5,
    name: "Helodia Malate",
    position: "Sócio - Direito Empresarial",
    photo: "/src/assets/Helodia-portait.jpg",
    description: "Especialista em Direito Empresarial e Societário. Atua na assessoria jurídica de empresas nacionais e multinacionais.",
    // email: "joao@mmadvogados.com",
    // phone: "+351 913 456 789",
    // location: "Porto, Portugal",
    // linkedin: "https://linkedin.com/in/joaosantos",
  },
  {
    id: 6,
    name: "Maura Matsinhe",
    position: "Sócio - Direito Empresarial",
    photo: "/src/assets/maura-portait.jpg",
    description: "Especialista em Direito Empresarial e Societário. Atua na assessoria jurídica de empresas nacionais e multinacionais.",
    // email: "joao@mmadvogados.com",
    // phone: "+351 913 456 789",
    // location: "Porto, Portugal",
    // linkedin: "https://linkedin.com/in/joaosantos",
  },
];

const TeamSection = () => {
  // Animation hooks
  const headerAnimation = useScrollAnimation();
  const teamAnimation = useStaggerAnimation(teamMembers.length);
  const sectionAnimation = useScrollAnimation();

  return (
    <motion.section 
      ref={sectionAnimation.ref}
      initial="hidden"
      animate={sectionAnimation.controls}
      variants={animations.fadeIn}
      className={`py-20 ${gradients.section} relative overflow-hidden`}
    >
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          ref={headerAnimation.ref}
          initial="hidden"
          animate={headerAnimation.controls}
          variants={animations.slideUp}
          className="text-center mb-16"
        >
          <motion.div 
            variants={animations.slideUp}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20"
          >
            <ArrowRight className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nossa Equipe
            </span>
          </motion.div>
          
          <motion.h2 
            variants={animations.slideUp}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Nossa Equipe
            </span>
          </motion.h2>
          
          <motion.p 
            variants={animations.slideUp}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Conheça os profissionais dedicados que compõem o time MMA Advogados, 
            prontos para oferecer a melhor assessoria jurídica.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          ref={teamAnimation.ref}
          initial="hidden"
          animate={teamAnimation.controls}
          variants={animations.stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={animations.slideUp}
              whileHover="hover"
              className="group relative h-full flex flex-col"
            >
              <motion.div
                variants={microInteractions.card}
                className={`${glassmorphism.light} rounded-2xl overflow-hidden border border-white/20 hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col`}
              >
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Foto */}
                <div className="relative">
                  <div className="flex justify-center mt-6">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden relative shadow-lg"
                    >
                      {member.photo ? (
                        <motion.img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            target.nextElementSibling?.classList.remove("hidden");
                          }}
                        />
                      ) : null}

                      {/* Fallback com iniciais */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center ${member.photo ? 'hidden' : ''}`}
                      >
                        <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg sm:text-xl font-bold text-foreground mb-2"
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-blue-600 font-semibold mb-3 text-sm sm:text-base"
                  >
                    {member.position}
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-muted-foreground mb-4 text-xs sm:text-sm flex-1"
                  >
                    {member.description}
                  </motion.p>

                  {/* Contact Info */}
                  {/* <div className="space-y-2 mb-4 text-xs sm:text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary flex-shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary flex-shrink-0" />
                      <span className="truncate">{member.phone}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary flex-shrink-0" />
                      <span className="truncate">{member.location}</span>
                    </div>
                  </div> */}

                  {/* Social Links */}
                  <div className="flex space-x-2 sm:space-x-3 mt-auto">
                    {/* <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-all flex-shrink-0"
                    > */}
                      {/* <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" /> */}
                    {/* </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-1.5 sm:p-2 bg-secondary text-secondary-foreground rounded-lg hover:scale-105 transition-all flex-shrink-0"
                    >
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a> */}
                    {/* {member.website && (
                      // <a
                      //   href={member.website}
                      //   target="_blank"
                      //   rel="noopener noreferrer"
                      //   className="p-1.5 sm:p-2 bg-accent text-accent-foreground rounded-lg hover:scale-105 transition-all flex-shrink-0"
                      // >
                        <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    )} */}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
       {/* CTA Button com espaçamento melhorado */}
<div className="mt-16 pt-12 border-t border-border/30">
  <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
    <a
      href="/equipe"
      className="btn-outline-elite group relative overflow-hidden px-8 py-4 text-lg"
    >
      {/* Efeito de brilho no hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
      
      <span className="relative flex items-center gap-2 z-10">
        Ver Equipe Completa
        <ArrowRight className="h-4 w-4 inline-block transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  </div>
</div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
