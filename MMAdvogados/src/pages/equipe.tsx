import { Linkedin, Mail, Globe, Phone, MapPin, Award, BookOpen } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

const location = useLocation();

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossa Equipe
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os profissionais dedicados que compõem o time MMA Advogados, 
            prontos para oferecer a melhor assessoria jurídica.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Photo and Basic Info */}
              <div className="relative">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h2>
                  <p className="text-blue-600 font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-6">
                    {member.description}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Mail className="w-5 h-5 mr-3 text-blue-600" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 mr-3 text-blue-600" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                      <span>{member.location}</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4 mb-6">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Expandable Details */}
                  <details className="group">
                    <summary className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer list-none">
                      <span className="font-semibold text-gray-900">Ver Currículo Completo</span>
                      <div className="transform group-open:rotate-180 transition-transform">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>

                    <div className="p-4 space-y-6">
                      {/* Education */}
                      <div>
                        <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                          <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                          Formação Acadêmica
                        </h4>
                        <ul className="space-y-2">
                          {member.education.map((item, index) => (
                            <li key={index} className="text-gray-600">• {item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Experience */}
                      <div>
                        <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                          <Award className="w-5 h-5 mr-2 text-blue-600" />
                          Experiência Profissional
                        </h4>
                        <ul className="space-y-2">
                          {member.experience.map((item, index) => (
                            <li key={index} className="text-gray-600">• {item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Specialties */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Especialidades</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Languages */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Idiomas</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.languages.map((language, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
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