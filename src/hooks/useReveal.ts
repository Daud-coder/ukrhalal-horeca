import { useReducedMotion } from 'motion/react'

/** Matches the --ease-drawer token in index.css. */
export const EASE_DRAWER = [0.32, 0.72, 0, 1] as const

/** Matches the --ease-out token in index.css. */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const

export function useReveal(amount = 0.18) {
  const reduce = useReducedMotion()
  return (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, transform: 'translateY(14px)' },
    whileInView: { opacity: 1, transform: 'translateY(0px)' },
    viewport: { once: true, amount },
    transition: { duration: 0.5, delay, ease: EASE_DRAWER },
  })
}

/**
 * Cascade variant of useReveal: put `container` on the parent and `item` on
 * each child instead of hand-tuning `reveal(index * delay)` per child — the
 * stagger lives in one place and children animate as a single group.
 */
export function useRevealCascade(amount = 0.18, stagger = 0.06) {
  const reduce = useReducedMotion()

  const container = {
    initial: 'hidden',
    whileInView: 'show',
    viewport: { once: true, amount },
    variants: {
      hidden: {},
      show: { transition: reduce ? {} : { staggerChildren: stagger, delayChildren: 0.03 } },
    },
  } as const

  const item = {
    variants: {
      hidden: reduce ? {} : { opacity: 0, transform: 'translateY(14px)' },
      show: { opacity: 1, transform: 'translateY(0px)', transition: { duration: 0.5, ease: EASE_DRAWER } },
    },
  } as const

  return { container, item }
}
