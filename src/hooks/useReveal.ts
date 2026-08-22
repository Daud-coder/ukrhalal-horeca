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
