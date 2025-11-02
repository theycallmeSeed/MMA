import React from 'react';
import { motion } from 'framer-motion';

// Componente de provedor de animações para envolver todas as páginas
const ScrollAnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationProvider;