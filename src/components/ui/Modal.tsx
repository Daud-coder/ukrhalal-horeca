import { X } from '@phosphor-icons/react'
import { useEffect, useId, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = { open: boolean; onClose: () => void; title: string; children: ReactNode }

const focusableSelector = [
  'a[href]', 'button:not([disabled])', 'input:not([disabled])',
  'select:not([disabled])', 'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export function Modal({ open, onClose, title, children }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const titleId = `modal-${useId().replace(/:/g, '')}`

  useEffect(() => {
    if (!open) return () => undefined
    const body = document.body
    const previousOverflow = body.style.overflow
    const previousPaddingRight = body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`
    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPaddingRight
    }
  }, [open])

  useEffect(() => {
    if (!open) return () => undefined
    previousFocusRef.current = document.activeElement as HTMLElement | null
    // Фокус переводимо синхронно: на момент useEffect панель уже в DOM, чекати кадр
    // не потрібно, а відкладений через requestAnimationFrame виклик скасовувався
    // власним cleanup у StrictMode, і діалог відкривався без фокуса.
    const firstFocusable = panelRef.current?.querySelector<HTMLElement>(focusableSelector)
    ;(firstFocusable ?? panelRef.current)?.focus()
    return () => {
      previousFocusRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return () => undefined
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return
      const elements = Array.from(panelRef.current.querySelectorAll<HTMLElement>(focusableSelector))
      const first = elements[0]
      const last = elements.at(-1)
      if (!first || !last) {
        event.preventDefault()
        panelRef.current.focus()
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose, open])

  if (!open) return null
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/45 p-6" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <div ref={panelRef} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} className="w-full max-w-lg rounded-[var(--radius-card)] bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-6">
          <h2 id={titleId} className="text-2xl font-semibold text-ink">{title}</h2>
          <button type="button" aria-label="Закрити" onClick={onClose} className="shrink-0 rounded-[var(--radius-btn)] p-2 text-ink hover:bg-brand-soft">
            <X size={24} aria-hidden="true" />
          </button>
        </div>
        <div className="mt-5 text-ink-muted">{children}</div>
      </div>
    </div>, document.body,
  )
}
