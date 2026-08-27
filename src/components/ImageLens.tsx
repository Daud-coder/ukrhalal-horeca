import { useReducedMotion } from 'motion/react'
import { useRef } from 'react'

type ImageLensProps = {
  src: string
  zoom?: number
  size?: number
}

/**
 * Cursor-following circular magnifier. Drop inside a `relative overflow-hidden`
 * image container; only activates on fine/hover-capable pointers (see
 * `.image-lens-hit` in index.css) so it's a no-op on touch. Writes directly to
 * the DOM on pointermove rather than through React state, since this needs to
 * update every frame without triggering a re-render.
 */
function ImageLens({ src, zoom = 2.2, size = 160 }: ImageLensProps) {
  const reduce = useReducedMotion()
  const lensRef = useRef<HTMLDivElement>(null)
  const lastPos = useRef({ x: 0, y: 0 })

  if (reduce) return null

  function render(px: number, py: number, visible: boolean) {
    const lens = lensRef.current
    if (!lens) return
    const s = visible ? 1 : 0.85
    lens.style.transform = `translate(${px - size / 2}px, ${py - size / 2}px) scale(${s})`
    lens.style.opacity = visible ? '1' : '0'
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const lens = lensRef.current
    const rect = e.currentTarget.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top
    lastPos.current = { x: px, y: py }
    if (lens) {
      lens.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`
      lens.style.backgroundPosition = `${-(px * zoom - size / 2)}px ${-(py * zoom - size / 2)}px`
    }
    render(px, py, true)
  }

  function handleLeave() {
    render(lastPos.current.x, lastPos.current.y, false)
  }

  return (
    <div
      className="image-lens-hit absolute inset-0 z-10"
      onPointerEnter={handlePointerMove}
      onPointerMove={handlePointerMove}
      onPointerLeave={handleLeave}
    >
      <div
        ref={lensRef}
        aria-hidden="true"
        className="image-lens pointer-events-none absolute rounded-full border-2 border-white/80 shadow-[0_10px_28px_rgba(16,32,26,0.4)] bg-no-repeat"
        style={{ width: size, height: size, backgroundImage: `url(${src})` }}
      />
    </div>
  )
}

export default ImageLens
