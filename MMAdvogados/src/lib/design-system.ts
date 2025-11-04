// Sistema de Design Moderno - Milagrosa Macuácua Advogados
import { Variants } from "framer-motion";

// Paleta de Cores Profissional
export const colors = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  secondary: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  accent: {
    gold: '#d4af37',
    platinum: '#e5e4e2',
    bronze: '#cd7f32',
  }
};

// Gradientes Modernos
export const gradients = {
  primary: 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800',
  secondary: 'bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500',
  glass: 'bg-gradient-to-br from-white/20 via-white/10 to-transparent',
  dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black',
  hero: 'bg-gradient-to-br from-blue-900/90 via-indigo-900/80 to-purple-900/70',
  card: 'bg-gradient-to-br from-white/10 via-white/5 to-transparent',
  text: 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent',
};

// Efeitos Glassmorphism
export const glassmorphism = {
  light: 'backdrop-blur-md bg-white/10 border border-white/20 shadow-xl',
  medium: 'backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl',
  heavy: 'backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl',
  dark: 'backdrop-blur-md bg-black/10 border border-white/10 shadow-xl',
  navbar: 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-white/20',
  card: 'backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300',
};

// Sistema de Tipografia
export const typography = {
  display: 'font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-tight',
  h1: 'font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
  h2: 'font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
  h3: 'font-serif text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight',
  h4: 'font-sans text-xl md:text-2xl font-semibold leading-tight',
  body: 'font-sans text-base md:text-lg leading-relaxed',
  caption: 'font-sans text-sm text-gray-600 dark:text-gray-400',
  button: 'font-sans text-sm md:text-base font-semibold tracking-wide',
};

// Sistema de Espaçamento
export const spacing = {
  section: 'py-16 md:py-24 lg:py-32',
  container: 'px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto',
  card: 'p-6 md:p-8 lg:p-10',
  button: 'px-6 py-3 md:px-8 md:py-4',
};

// Animações Avançadas
export const animations = {
  // Text reveal animation
  textReveal: {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as Variants,

  // Stagger children animation
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  } as Variants,

  // Hover animations
  hoverScale: {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  } as Variants,

  // Slide animations
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  } as Variants,

  slideLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  } as Variants,

  slideRight: {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  } as Variants,

  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as Variants,

  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  } as Variants,

  // Page transitions
  pageTransition: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: "easeInOut" }
  },

  // Parallax effect
  parallax: {
    hidden: { y: 0 },
    visible: { 
      y: -50,
      transition: { duration: 1, ease: "easeOut" }
    }
  } as Variants,
};

// Micro-interações
export const microInteractions = {
  button: {
    whileHover: { scale: 1.02, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  },
  card: {
    whileHover: { y: -5, scale: 1.02 },
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  icon: {
    whileHover: { rotate: 360, scale: 1.1 },
    transition: { duration: 0.3 }
  }
};

// Breakpoints responsivos
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Shadows modernas
export const shadows = {
  soft: 'shadow-lg shadow-black/5',
  medium: 'shadow-xl shadow-black/10',
  hard: 'shadow-2xl shadow-black/20',
  glow: 'shadow-2xl shadow-blue-500/20',
  inner: 'inset shadow-lg shadow-black/10',
};

export default {
  colors,
  gradients,
  glassmorphism,
  typography,
  spacing,
  animations,
  microInteractions,
  breakpoints,
  shadows,
};