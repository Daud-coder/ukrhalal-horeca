import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'

export function useScrolled(threshold: number = 40): boolean {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(() => scrollY.get() > threshold)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > threshold)
  })

  return scrolled
}
