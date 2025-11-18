import { Linkedin, Mail, Globe, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { slideUp, staggerContainer, fadeIn } from '@/lib/animation-variants';

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

const TeamSection = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Milagrosa Macuácua",
      position: "Assistente Administrativa",
      photo: "/images/milagrosa-portrait.jpg",
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
      photo: "/images/marlet-portait.jpg",
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
      photo: "/images/claudia-portait.jpg",
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
      photo: "/images/tecla-portait.jpg",
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
      photo: "/images/Helodia-portait.jpg",
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
      photo: "/images/maura-portait.jpg",
      description: "Especialista em Direito Empresarial e Societário. Atua na assessoria jurídica de empresas nacionais e multinacionais.",
      // email: "joao@mmadvogados.com",
      // phone: "+351 913 456 789",
      // location: "Porto, Portugal",
      // linkedin: "https://linkedin.com/in/joaosantos",
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
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
    {member.photo ? (
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          target.nextElementSibling?.classList.remove("hidden");
        }}
      />
    ) : null}

    {/* Fallback com iniciais */}
    <div
      className={`absolute inset-0 bg-primary/10 flex items-center justify-center ${member.photo ? 'hidden' : ''}`}
    >
      <span className="text-3xl sm:text-4xl font-bold text-primary">
        {member.name.split(' ').map(n => n[0]).join('')}
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
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="/equipe"
              className="group relative overflow-hidden px-8 py-4 text-lg border border-border/50 rounded-lg transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative flex items-center gap-2 z-10">
                Ver Equipe Completa
                <ArrowRight className="h-4 w-4 inline-block transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

