import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, Pause, Volume2, VolumeX, ArrowRight, Phone, Mail } from 'lucide-react';
import { animations, glassmorphism, microInteractions, gradients } from '@/lib/design-system';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenTexts?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetweenTexts = 2000 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delayBetweenTexts]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-block">
      {currentText}
      <span className={`inline-block w-0.5 h-8 bg-blue-500 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
    </span>
  );
};

const ParticleField: React.FC = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export const ModernHeroSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const heroTexts = [
    "Excelência Jurídica",
    "Soluções Personalizadas",
    "Advocacia de Confiança",
    "Resultados Garantidos"
  ];

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Fallback gradient background */}
        </video>
        
        {/* Fallback Background */}
        <div className={`absolute inset-0 ${gradients.hero}`} />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Particle Effects */}
      <ParticleField />

      {/* Video Controls */}
      <div className="absolute top-6 right-6 z-20 flex space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleVideo}
          className={`${glassmorphism.light} p-3 rounded-full text-white hover:bg-white/20 transition-colors`}
        >
          {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          className={`${glassmorphism.light} p-3 rounded-full text-white hover:bg-white/20 transition-colors`}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        {/* Main Title */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animations.staggerContainer}
          className="space-y-6"
        >
          <motion.h1
            variants={animations.slideUp}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            <span className="block">Milagrosa Macuácua</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-light text-blue-300 mt-2">
              Advogados
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            variants={animations.slideUp}
            className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light min-h-[2.5rem] flex items-center justify-center"
          >
            <Typewriter texts={heroTexts} />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={animations.slideUp}
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Oferecemos serviços jurídicos de excelência com mais de 15 anos de experiência, 
            combinando tradição e inovação para proteger seus direitos e interesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={animations.slideUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={microInteractions.button}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Consulta Gratuita</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href="tel:+258-21-123456"
              whileHover="hover"
              whileTap="tap"
              variants={microInteractions.button}
              className={`${glassmorphism.medium} text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2`}
            >
              <Phone className="w-5 h-5" />
              <span>Ligar Agora</span>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={animations.slideUp}
            className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
          >
            {[
              { number: "15+", label: "Anos de Experiência" },
              { number: "500+", label: "Casos Resolvidos" },
              { number: "98%", label: "Taxa de Sucesso" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`${glassmorphism.light} p-6 rounded-xl text-center`}
              >
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-white/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToContent}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors group"
        >
          <span className="text-sm font-medium">Scroll para explorar</span>
          <div className={`${glassmorphism.light} p-2 rounded-full group-hover:bg-white/20 transition-colors`}>
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.button>
      </motion.div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-blue-400/20 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full"
        />
      </div>
    </section>
  );
};

export default ModernHeroSection;