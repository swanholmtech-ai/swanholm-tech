import { Variants } from "framer-motion";

// Dramatic fade in from bottom with rotation
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1], // Dramatic easing
    },
  },
};

// Powerful slide from left with scale
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -120,
    rotate: -8,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Powerful slide from right with scale
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 120,
    rotate: 8,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Dramatic zoom effect
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Faster stagger for impact
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

// Bouncy list items with rotation
export const listItemVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
    rotate: -5,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

// Intense blur reveal
export const blurIn: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(20px)",
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Flip in animation
export const flipIn: Variants = {
  hidden: {
    opacity: 0,
    rotateX: -90,
    transformPerspective: 1000,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Explosive entrance
export const explosiveEntry: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};
