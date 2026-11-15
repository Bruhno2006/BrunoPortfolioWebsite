import { motion } from "motion/react";

const animationVariants = {
  "shift-left": {
    hidden: { x: 300, opacity: 0 },
    visible: { x: 0, opacity: 1},
  },
  "shift-right": {
    hidden: { x: -300, opacity: 0 },
    visible: { x: 0, opacity: 1},
  },
  "rise-below": {
    hidden: { y: 300, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
};

export function ScrollReveal({ children, variant = "rise-below", duration = 0.8, amount = 0.2}) {
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
