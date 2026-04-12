// Variantes de animação para uso em todo o projeto
import { Variants } from "framer-motion";

// Helper function to safely check if device is mobile without causing hydration mismatch
// This is used for static variants. For component-level animations, use the useMediaQuery hook
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

export const getFadeIn = (isMobile: boolean = false): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: isMobile ? 0.3 : 0.6, ease: "easeOut" },
  },
});

export const getSlideUp = (isMobile: boolean = false): Variants => ({
  hidden: { opacity: 0, y: isMobile ? 0 : 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: isMobile ? 0.3 : 0.6, ease: "easeOut" },
  },
});

export const getSlideLeft = (isMobile: boolean = false): Variants => ({
  hidden: { opacity: 0, x: isMobile ? 0 : 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: isMobile ? 0.3 : 0.6, ease: "easeOut" },
  },
});

export const getSlideRight = (isMobile: boolean = false): Variants => ({
  hidden: { opacity: 0, x: isMobile ? 0 : -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: isMobile ? 0.3 : 0.6, ease: "easeOut" },
  },
});

export const getScale = (isMobile: boolean = false): Variants => ({
  hidden: { opacity: 0, scale: isMobile ? 1 : 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: isMobile ? 0.3 : 0.6, ease: "easeOut" },
  },
});

export const getStaggerContainer = (isMobile: boolean = false): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isMobile ? 0.1 : 0.2,
    },
  },
});

// Retro-compatibilidade (vai usar detecção window para evitar quebrar o que já existe)
export const fadeIn: Variants = getFadeIn(isMobileDevice());
export const slideUp: Variants = getSlideUp(isMobileDevice());
export const slideLeft: Variants = getSlideLeft(isMobileDevice());
export const slideRight: Variants = getSlideRight(isMobileDevice());
export const scale: Variants = getScale(isMobileDevice());
export const staggerContainer: Variants = getStaggerContainer(isMobileDevice());
