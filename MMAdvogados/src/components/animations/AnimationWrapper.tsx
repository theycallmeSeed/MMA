import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

interface AnimationWrapperProps {
  children: React.ReactNode;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-100px" });
  const controls = useAnimation();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: animation === "slideUp" ? 50 : 0,
      x: animation === "slideLeft" ? 50 : animation === "slideRight" ? -50 : 0,
      scale: animation === "scale" ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
