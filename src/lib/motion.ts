// Motion variants — elite defaults
// Use with `motion` package (drop-in framer replacement, smaller bundle)
// Import: import { motion } from "motion/react"

import type { Variants, Easing } from "motion/react";

// Easings — these three cover 90% of pro site motion
export const EASE_OUT_EXPO: Easing = [0.16, 1, 0.3, 1];
export const EASE_OUT_QUART: Easing = [0.25, 1, 0.5, 1];
export const EASE_IN_OUT: Easing = [0.65, 0, 0.35, 1];

// Entrance — fade up with blur-in (the current signature move)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

// Subtle fade — for things that shouldn't translate
export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
};

// Stagger container — wrap children for sequenced reveals
export const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

// Tight stagger for per-letter text reveals
export const charContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.025, delayChildren: 0.05 } },
};

export const charBlurIn: Variants = {
  hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};
