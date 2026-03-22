import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AnimatedServicesSection from "@/components/AnimatedServicesSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <SEO
        title={t("page.index.seo.title")}
        description={t("page.index.seo.desc")}
        canonicalPath="/"
      />
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
