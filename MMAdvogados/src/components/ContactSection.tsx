import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, useStaggerAnimation } from '@/hooks/useScrollAnimation';
import { animations } from '@/styles/animations';
import { glassmorphism } from '@/styles/glassmorphism';
import { gradients } from '@/styles/gradients';
import { microInteractions } from '@/styles/micro-interactions';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [headerAnimation, headerRef] = useScrollAnimation();
  const [formAnimation, formRef] = useScrollAnimation();
  const [infoAnimation, infoRef] = useScrollAnimation();
  const [sectionAnimation, sectionRef] = useScrollAnimation();

  return (
    <section>
      <h2>Entre em contato</h2>
      <p>Formulário de contato aqui.</p>
    </section>
  );
};

export default ContactSection;