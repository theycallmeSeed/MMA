import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AnimatedServicesSection from "@/components/AnimatedServicesSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { setPageSEO } from "@/lib/seo";

const Index = () => {
  useEffect(() => {
    setPageSEO({
      title: "Milagrosa Macuácua Advogados — Sociedade de Advogados em Moçambique",
      description:
        "Assessoria jurídica especializada para empresas e particulares em Moçambique. Direito empresarial, civil e laboral com rigor e Excelência.",
      path: "/",
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AnimatedServicesSection />
      <TeamSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
