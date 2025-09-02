import { Linkedin, Mail, Globe, Phone, MapPin, Award, BookOpen } from 'lucide-react';
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
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

const Equipe = () => {
  const location = useLocation();
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Maria Silva",
      position: "Sócia Fundadora - Direito Civil",
      photo: "/images/team/maria-silva.jpg",
      description: "Advogada com mais de 15 anos de experiência em Direito Civil e Consumerista. Especialista em casos complexos de responsabilidade civil.",
      email: "maria@mmadvogados.com",
      phone: "+351 912 345 678",
      location: "Lisboa, Portugal",
      linkedin: "https://linkedin.com/in/mariasilva",
      website: "https://mariasilva.adv.br",
      education: [
        "Mestrado em Direito Civil - Universidade de Lisboa",
        "Pós-Graduação em Direito do Consumidor - Universidade Católica",
        "Bacharelado em Direito - Universidade de Coimbra"
      ],
      experience: [
        "Sócia Fundadora na MMA Advogados (2018 - Presente)",
        "Advogada Sênior no escritório Silva & Associados (2010-2018)",
        "Estagiária no Tribunal Judicial de Lisboa (2008-2010)"
      ],
      specialties: [
        "Direito Civil",
        "Direito do Consumidor",
        "Responsabilidade Civil",
        "Contratos"
      ],
      languages: ["Português (Nativo)", "Inglês (Avançado)", "Espanhol (Intermediário)"]
    },
    {
      id: 2,
      name: "João Santos",
      position: "Sócio - Direito Empresarial",
      photo: "/images/team/joao-santos.jpg",
      description: "Especialista em Direito Empresarial e Societário. Atua na assessoria jurídica de empresas nacionais e multinacionais.",
      email: "joao@mmadvogados.com",
      phone: "+351 913 456 789",
      location: "Porto, Portugal",
      linkedin: "https://linkedin.com/in/joaosantos",
      education: [
        "MBA em Gestão Jurídica - Universidade do Porto",
        "Especialização em Direito Societário - Universidade Nova de Lisboa",
        "Bacharelado em Direito - Universidade do Minho"
      ],
      experience: [
        "Sócio na MMA Advogados (2018 - Presente)",
        "Consultor Jurídico na Empresa XYZ (2014-2018)",
        "Advogado Júnior no escritório Empresarial Legal (2011-2014)"
      ],
      specialties: [
        "Direito Societário",
        "Fusões e Aquisições",
        "Contratos Empresariais",
        "Compliance"
      ],
      languages: ["Português (Nativo)", "Inglês (Fluente)", "Francês (Intermediário)"]
    },
    {
      id: 3,
      name: "Ana Costa",
      position: "Associada Sênior - Direito da Família",
      photo: "/images/team/ana-costa.jpg",
      description: "Especialista em Direito de Família e Sucessões com abordagem humanizada e sensível para casos familiares complexos.",
      email: "ana@mmadvogados.com",
      phone: "+351 914 567 890",
      location: "Lisboa, Portugal",
      linkedin: "https://linkedin.com/in/anacosta",
      education: [
        "Especialização em Direito de Família - Universidade de Lisboa",
        "Curso de Mediação de Conflitos Familiares",
        "Bacharelado em Direito - Universidade de Évora"
      ],
      experience: [
        "Associada Sênior na MMA Advogados (2020 - Presente)",
        "Advogada especializada em Família no escritório Familiar & Associados (2015-2020)",
        "Mediadora Judicial (2013-2015)"
      ],
      specialties: [
        "Divórcio e Separação",
        "Guarda de Menores",
        "Inventários e Partilhas",
        "Alimentos"
      ],
      languages: ["Português (Nativo)", "Espanhol (Avançado)", "Inglês (Intermediário)"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero py-16">
       <Navigation />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gradient-primary mb-4">
            Nossa Equipe
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conheça os profissionais dedicados que compõem o time MMA Advogados, 
            prontos para oferecer a melhor assessoria jurídica.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="card-elegant rounded-2xl overflow-hidden"
            >
              {/* Foto / Iniciais */}
              <div className="relative">
                <div className="h-64 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover shadow-card"
                    />
                  ) : (
                    <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-muted-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {member.name}
                  </h2>
                  <p className="text-primary font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {member.description}
                  </p>

                  {/* Contact */}
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="w-5 h-5 mr-3 text-primary" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Phone className="w-5 h-5 mr-3 text-primary" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-5 h-5 mr-3 text-primary" />
                      <span>{member.location}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4 mb-6">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-secondary text-secondary-foreground rounded-lg hover:scale-105 transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-accent text-accent-foreground rounded-lg hover:scale-105 transition-all"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Detalhes Expandíveis */}
                  <details className="group">
                    <summary className="flex items-center justify-between p-3 bg-muted rounded-lg cursor-pointer list-none">
                      <span className="font-semibold text-foreground">Ver Currículo Completo</span>
                      <div className="transform group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>

                    <div className="p-4 space-y-6">
                      {/* Formação */}
                      <div>
                        <h4 className="flex items-center text-lg font-semibold text-foreground mb-3">
                          <BookOpen className="w-5 h-5 mr-2 text-primary" />
                          Formação Acadêmica
                        </h4>
                        <ul className="space-y-2">
                          {member.education.map((item, index) => (
                            <li key={index} className="text-muted-foreground">• {item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Experiência */}
                      <div>
                        <h4 className="flex items-center text-lg font-semibold text-foreground mb-3">
                          <Award className="w-5 h-5 mr-2 text-primary" />
                          Experiência Profissional
                        </h4>
                        <ul className="space-y-2">
                          {member.experience.map((item, index) => (
                            <li key={index} className="text-muted-foreground">• {item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Especialidades */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Especialidades</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Idiomas */}
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">Idiomas</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.languages.map((language, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                            >
                              {language}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipe;
