import React, { useEffect, useState, useRef } from "react";
import LazyImage from "@/components/LazyImage";
import { CheckCircle, Users, Trophy, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const carouselImages = [
  "/images/office-1.webp",
  "/images/office-2.webp",
  "/images/office-3.webp",
];

const AboutSection: React.FC = () => {
  const shouldReduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [firstLoaded, setFirstLoaded] = useState(false);
  const timerRef = useRef<number | null>(null);

  // autoplay respeitando prefers-reduced-motion
  useEffect(() => {
    if (shouldReduce || !firstLoaded) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % carouselImages.length);
    }, 4500);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [shouldReduce, firstLoaded]);

  const goTo = (i: number) => {
    setIndex(i % carouselImages.length);
    if (!shouldReduce) {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = window.setInterval(() => {
        setIndex((s) => (s + 1) % carouselImages.length);
      }, 4500);
    }
  };
  const goPrev = () =>
    goTo((index - 1 + carouselImages.length) % carouselImages.length);
  const goNext = () => goTo((index + 1) % carouselImages.length);

  return (
    <section
      id="sobre-nos"
      className="py-16 lg:py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🔥 TÍTULO PRINCIPAL — ADICIONADO */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-center">
          <span className="text-primary">Sobre Nós</span>
          <br />
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* TEXT + CTA */}
          <div className="order-2 lg:order-1 space-y-6">


            {/* <h3
              id="about-mini-title"
              className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary"
            >
              Sobre a Sociedade
            </h3> */}

            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              A sociedade exerce a advocacia com base no rigor técnico, na
              análise jurídica criteriosa e no respeito pelos princípios éticos
              que regem a profissão. A actuação da firma abrange o
              acompanhamento jurídico de empresas e particulares, incluindo
              matérias de natureza preventiva, contenciosa e de assessoria
              jurídica continuada
            </p>

            {/* Nota de resposta
            <p className="text-sm text-muted-foreground">Resposta prioritária em 24h</p> */}

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
                    <motion.div
                      key={src}
                      className="absolute inset-0"
                      initial={shouldReduce ? {} : { opacity: 0, scale: 1.03 }}
                      animate={
                        isActive
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 1.02 }
                      }
                      transition={{ duration: 0.7 }}
                      style={{ willChange: "opacity, transform" }}
                    >
                      {(() => {
                        const base = src.replace(/\.webp$/i, "");
                        const srcMain = src; // usar arquivo original como principal
                        const srcSet = `${base}-800.webp 800w, ${base}-1200.webp 1200w`;
                        const sizes = "(max-width:768px) 800px, 100vw";
                        return (
                          <LazyImage
                            src={srcMain}
                            srcSet={srcSet}
                            sizes={sizes}
                            alt={`Galeria ${i + 1}`}
                            priority={false}
                            width={1600}
                            height={900}
                            className="w-full h-full object-cover"
                            onLoad={
                              i === 0 ? () => setFirstLoaded(true) : undefined
                            }
                            fallbackSrc={src}
                          />
                        );
                      })()}
                    </motion.div>
                  );
                })}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>

              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="h-10 w-10 rounded-full bg-card/80 border border-border text-foreground hover:bg-card backdrop-blur-sm flex items-center justify-center"
                  aria-label="Slide anterior"
                  title="Slide anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="h-10 w-10 rounded-full bg-card/80 border border-border text-foreground hover:bg-card backdrop-blur-sm flex items-center justify-center"
                  aria-label="Próximo slide"
                  title="Próximo slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div
                className="absolute bottom-4 right-4 flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-3 py-2 border border-border"
                role="tablist"
                aria-label="Selecionar slide do escritório"
              >
                {carouselImages.map((_, i) => {
                  const active = i === index;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => goTo(i)}
                      className={`h-2.5 w-2.5 rounded-full ${
                        active ? "bg-primary" : "bg-foreground/40"
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
                      aria-label={`Ir para slide ${i + 1}`}
                      aria-selected={active}
                      role="tab"
                      title={`Slide ${i + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Botão no centro e final da section */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/sobre"
            className="group px-10 py-5 bg-[rgb(81,21,38)] text-white font-bold text-lg rounded-xl hover:bg-[rgb(81,21,38)]/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            Saber mais
            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
