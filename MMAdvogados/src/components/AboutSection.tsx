import React, { useEffect, useState, useRef } from "react";
import { CheckCircle, Users, Trophy } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const carouselImages = [
  "/images/milagrosa-portrait.jpg",
  "/images/legal-team.jpg",
  "/images/office-1.jpg",
  "/images/office-2.jpg",
];

const AboutSection: React.FC = () => {
  const shouldReduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  // autoplay respeitando prefers-reduced-motion
  useEffect(() => {
    if (shouldReduce) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % carouselImages.length);
    }, 4500);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [shouldReduce]);

  const goTo = (i: number) => {
    setIndex(i % carouselImages.length);
    if (!shouldReduce) {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = window.setInterval(() => {
        setIndex((s) => (s + 1) % carouselImages.length);
      }, 4500);
    }
  };

  return (
    <section
      id="sobre-nos"
      className="py-16 lg:py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 TÍTULO PRINCIPAL — ADICIONADO */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6 text-center">
          Sobre Nós
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* TEXT + CTA */}
          <div className="order-2 lg:order-1 space-y-6">

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 text-accent-foreground w-max">
              <Trophy className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Fundadora & CEO</span>
            </div>

            <h3
              id="about-mini-title"
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary"
            >
              Uma sociedade de advogados orientada para resultados
            </h3>

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Fundada por Milagrosa Macuácua, a nossa firma alia rigor técnico e práticas modernas para entregar soluções jurídicas claras e com resultados mensuráveis. Atendemos empresas e particulares com foco em prevenção, litígio estratégico e regimes de avença.
            </p>

            {/* Nota de resposta */}
            <p className="text-sm text-muted-foreground">Resposta prioritária em 24h</p>

            {/* Achievements */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span className="text-sm text-foreground">
                  Sociedade liderada por mulheres
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-1" />
                <span className="text-sm text-foreground">
                  Regime de avença empresarial
                </span>
              </div>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-50">
                {carouselImages.map((src, i) => {
                  const isActive = index === i;
                  return (
                    <motion.img
                      key={src}
                      src={src}
                      alt={`Galeria ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={shouldReduce ? {} : { opacity: 0, scale: 1.03 }}
                      animate={
                        isActive
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 1.02 }
                      }
                      transition={{ duration: 0.7 }}
                      style={{ willChange: "opacity, transform" }}
                    />
                  );
                })}
              </div>

              {/* Controls */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
                  <button
                    onClick={() =>
                      goTo((index - 1 + carouselImages.length) % carouselImages.length)
                    }
                    className="bg-white/80 hover:bg-white px-3 py-2 rounded-full shadow-sm transition"
                  >
                    ‹
                  </button>
                </div>

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
                  <button
                    onClick={() => goTo((index + 1) % carouselImages.length)}
                    className="bg-white/80 hover:bg-white px-3 py-2 rounded-full shadow-sm transition"
                  >
                    ›
                  </button>
                </div>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-auto">
                  {carouselImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`w-2.5 h-2.5 rounded-full transition ${
                        i === index ? "bg-primary" : "bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Botão no centro e final da section */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/sobre"
            className="inline-block rounded-md bg-[rgb(81,21,38)] text-white px-6 py-3 font-semibold shadow-sm hover:bg-[rgb(81,21,38)]/90 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Saber mais
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
