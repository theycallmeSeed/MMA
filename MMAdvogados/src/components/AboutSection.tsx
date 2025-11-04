import { CheckCircle, Users, Target, Trophy } from "lucide-react";
import milagrosaPortrait from "@/assets/milagrosa-portrait.jpg";
import legalTeam from "@/assets/legal-team.jpg";
import { motion } from "framer-motion";
import { useScrollAnimation, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { animations, glassmorphism, gradients } from "@/lib/design-system";

const AboutSection = () => {
  const achievements = [
    "Sociedade liderada por mulheres em Moçambique",
    "Especialização em regime de avença empresarial",
    "Equipa jovem, técnica e dinâmica",
    "Relatórios mensais e transparência total",
  ];

  // Animation hooks
  const headerAnimation = useScrollAnimation({ delay: 0.2 });
  const founderAnimation = useScrollAnimation({ delay: 0.4 });
  const teamAnimation = useScrollAnimation({ delay: 0.6 });
  const missionAnimation = useScrollAnimation({ delay: 0.8 });
  const achievementsStagger = useStaggerAnimation(achievements.length, 0.15);

  return (
    <section className={`py-16 lg:py-20 ${gradients.section} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={headerAnimation.ref}
          initial="hidden"
          animate={headerAnimation.controls}
          variants={headerAnimation.variants}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            variants={animations.slideUp}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 mb-6"
          >
            <Users className="h-5 w-5 mr-2" />
            <span className="text-sm font-semibold">Conheça-nos</span>
          </motion.div>
          
          <motion.h2 
            variants={animations.slideUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
          >
            Sobre Nós
          </motion.h2>
          
          <motion.p 
            variants={animations.slideUp}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Uma sociedade de advogados pioneira em Moçambique, assente nos valores da excelência, 
            da inovação e da liderança exercida por mulheres, ao serviço de empresas e particulares.
          </motion.p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          ref={founderAnimation.ref}
          initial="hidden"
          animate={founderAnimation.controls}
          variants={animations.staggerContainer}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-20"
        >
          <motion.div 
            variants={animations.slideUp}
            className="space-y-6 order-2 lg:order-1"
          >
            <motion.div 
              variants={animations.slideUp}
              className={`inline-flex items-center px-6 py-3 rounded-full ${glassmorphism.light} backdrop-blur-sm`}
            >
              <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Fundadora & CEO</span>
            </motion.div>
            
            <motion.h3 
              variants={animations.slideUp}
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              Milagrosa Macuácua
            </motion.h3>
            
            <motion.p 
              variants={animations.slideUp}
              className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Milagrosa Macuacua, é sócia e fundadora da MM Advogados.
              Desempenha as suas actividades nas áreas de XXXXXXXXXXXXXXX
              Foi Presidente do Conselho Provincial da Ordem dos Advogados de Moçambique entre XXX e XXXX, sendo que actualmente desempenha as funções de Conselheira, no mesmo organismo. É membro da Comissão Nacional de Avaliação de Estágio na Ordem dos Advogados de Moçambique, organismo responsável pela avaliação para acreditação doa Advogados Estagiários.
              Milagrosa Macuacua, é licenciada em Direito pela Faculdade de Direito da Universidade Eduardo Mondlane, desde 2009, instituição pela qual se encontra a finalizar o seu Mestrado em Cièncias Jurídicas.
              Milagorsa Macuacua, iniciou a sua carreira na Sal e Cadeira (2010), tendo de seguida passado pela Opelegis (20XXX). Exerceu, igualmente a cargo de Delegada Distrital do Instituto de Patrocínio e Assistência Jurídica (IPAJ), entre 20XX e 20XX.
              Em 20XX, movida pelo sonho de contribuir no empoderamento feminino, decidiu fundar a Milagrosa Macuacua Advogados, Sociedade Unipessoal Limitada, um escritório composto 100% por mulheres, dentre Advogadas, Advogadas Estagiárias, bem como pessoal de apoio
            </motion.p>
            
            <motion.p 
              variants={animations.slideUp}
              className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Com formação jurídica sólida e experiência internacional, ela lidera uma equipa de 15+ advogados 
              especializados que oferece soluções jurídicas de alta qualidade. O nosso regime de avença exclusivo 
              inclui assessoria jurídica contínua, relatórios mensais detalhados, comunicação directa por WhatsApp 
              e telefone, e resposta garantida em 24 horas para questões urgentes, proporcionando tranquilidade 
              e previsibilidade de custos às empresas.
            </motion.p>

            <motion.div 
              ref={achievementsStagger.ref}
              initial="hidden"
              animate={achievementsStagger.controls}
              variants={achievementsStagger.containerVariants}
              className="space-y-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index} 
                  variants={achievementsStagger.itemVariants}
                  className="flex items-start space-x-3 group"
                >
                  <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-sm lg:text-base">
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            variants={animations.slideUp}
            className="relative order-1 lg:order-2 group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={milagrosaPortrait}
                alt="Milagrosa Macuácua - Fundadora"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
              <div className={`absolute inset-0 ${glassmorphism.light} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          ref={teamAnimation.ref}
          initial="hidden"
          animate={teamAnimation.controls}
          variants={animations.staggerContainer}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-20"
        >
          <motion.div 
            variants={animations.slideUp}
            className="relative lg:order-2 group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={legalTeam}
                alt="Equipa Jurídica"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent" />
              <div className={`absolute inset-0 ${glassmorphism.light} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-28 h-28 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-36 h-36 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-20 blur-xl" />
          </motion.div>

          <motion.div 
            variants={animations.slideUp}
            className="space-y-6 lg:order-1"
          >
            <motion.div 
              variants={animations.slideUp}
              className={`inline-flex items-center px-6 py-3 rounded-full ${glassmorphism.light} backdrop-blur-sm`}
            >
              <Users className="h-5 w-5 mr-2 text-blue-500" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">A Nossa Equipa</span>
            </motion.div>
            
            <motion.h3 
              variants={animations.slideUp}
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Jovem, Técnica e Dinâmica
            </motion.h3>
            
            <motion.p 
              variants={animations.slideUp}
              className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              A nossa equipa é composta por jovens profissionais altamente
              qualificados, com formação técnica especializada e uma abordagem
              dinâmica aos desafios jurídicos contemporâneos.
            </motion.p>
            
            <motion.p 
              variants={animations.slideUp}
              className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Combinamos experiência sólida com inovação, utilizando tecnologia de ponta, plataformas digitais 
              para acompanhamento de processos em tempo real, e metodologias modernas de gestão jurídica. 
              A nossa abordagem inclui análise de riscos detalhada, due diligence completa e estratégias 
              personalizadas para cada sector de actividade, garantindo resultados mensuráveis e ROI comprovado.
            </motion.p>

            <motion.div 
              variants={animations.slideUp}
              className="grid grid-cols-2 gap-6 lg:gap-8 pt-6"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className={`text-center p-6 rounded-xl ${glassmorphism.light} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">4+</div>
                <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                  Advogados Especializados
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className={`text-center p-6 rounded-xl ${glassmorphism.light} backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">7</div>
                <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                  Áreas de Especialização
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          ref={missionAnimation.ref}
          initial="hidden"
          animate={missionAnimation.controls}
          variants={missionAnimation.variants}
          className={`mt-16 lg:mt-20 text-center ${glassmorphism.medium} rounded-3xl p-8 lg:p-12 backdrop-blur-xl border border-white/10 relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500" />
          </div>
          
          <motion.div 
            variants={animations.slideUp}
            className={`inline-flex items-center px-6 py-3 rounded-full ${glassmorphism.light} backdrop-blur-sm mb-6 relative z-10`}
          >
            <Target className="h-5 w-5 mr-2 text-blue-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">A Nossa Missão</span>
          </motion.div>
          
          <motion.h3 
            variants={animations.slideUp}
            className="text-xl md:text-2xl lg:text-3xl font-serif font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6 relative z-10"
          >
            Transformar o Direito Empresarial em Moçambique
          </motion.h3>
          
          <motion.p 
            variants={animations.slideUp}
            className="text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed relative z-10"
          >
            Prestar Serviços Juridicos com Excelência, Oferecendo Soluções Inovadoras para Obtenção de Resultados Expressivos que Garantam a Satisfação dos Clientes.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;