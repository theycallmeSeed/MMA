import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AnimatedServicesSection from "@/components/AnimatedServicesSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
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
