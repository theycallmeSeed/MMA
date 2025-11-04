import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
  delay?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '-100px',
    delay = 0
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold,
    once: triggerOnce,
    margin: rootMargin
  });

  return {
    ref,
    isInView,
    variants: {
      hidden: { 
        opacity: 0, 
        y: 50,
        transition: { duration: 0.6, delay }
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, delay }
      }
    },
    controls: isInView ? 'visible' : 'hidden'
  };
};

export const useStaggerAnimation = (itemCount: number, staggerDelay: number = 0.1) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    threshold: 0.1,
    once: true,
    margin: '-50px'
  });

  return {
    ref,
    isInView,
    containerVariants: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: 0.2
        }
      }
    },
    itemVariants: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    },
    controls: isInView ? 'visible' : 'hidden'
  };
};

export const useParallaxScroll = (speed: number = 0.5) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      if (element) {
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};

export const useScrollProgress = () => {
  const ref = useRef(null);
  
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      
      document.documentElement.style.setProperty('--scroll-progress', scrollPercent.toString());
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return ref;
};