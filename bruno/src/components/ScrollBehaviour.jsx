import { motion } from "motion/react";
import { useState, useEffect } from "react";

const animationVariants = {
  "shift-left": {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  "shift-right": {
    hidden: { x: -300, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  "rise-below": {
    hidden: { y: 300, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
};

export function ScrollReveal({ children, variant, amount = 0.2, duration = 0.8, minWidth = 768 }) {
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia(`(min-width: ${minWidth}px)`).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);

    const handleScreenChange = (event) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener('change', handleScreenChange);
    return () => mediaQuery.removeEventListener('change', handleScreenChange);
  }, [minWidth]);


  if (!isDesktop) {
    return <>{children}</>;
  }

  return (
    <motion.div
      variants={animationVariants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
