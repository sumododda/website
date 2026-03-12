"use client";
import { useReducedMotion } from "framer-motion";

/**
 * Returns Framer Motion props that respect prefers-reduced-motion.
 * If reduced motion is preferred, animations are disabled.
 */
export function useFadeIn(delay = 0) {
  const reduced = useReducedMotion();
  if (reduced) return {};
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] },
  };
}

export function useFadeInOnLoad(delay = 0) {
  const reduced = useReducedMotion();
  if (reduced) return {};
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] },
  };
}

export function useScaleIn(delay = 0) {
  const reduced = useReducedMotion();
  if (reduced) return {};
  return {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.3, delay, ease: [0.25, 0.1, 0.25, 1] },
  };
}
