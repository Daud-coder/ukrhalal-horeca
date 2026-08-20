import { X } from '@phosphor-icons/react'
import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = { open: boolean; onClose: () => void; title: string; children: ReactNode }

const focusableSelector = [
  'a[href]', 'button:not([disabled])', 'input:not([disabled])',
  'select:not([disabled])', 'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export function Modal({ open, onClose, title, children }: ModalProps) {
  const [render, setRender] = useState(open)
  const [shown, setShown] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const titleId = `modal-${useId().replace(/:/g, '')}`

  useEffect(() => {
    let animationFrame: number | undefined
    let showFallback: number | undefined
    let closeTimer: number | undefined
    if (open) {
      setRender(true)
      animationFrame = requestAnimationFrame(() => setShown(true))
      // Страховка: якщо кадри анімації придушені (вкладка у фоні), rAF може не
      // спрацювати, і діалог лишиться прозорим, продовжуючи блокувати сторінку.
      // Таймер гарантує показ навіть тоді.
      showFallback = window.setTimeout(() => setShown(true), 60)
    } else {
      setShown(false)
      closeTimer = window.setTimeout(() => setRender(false), 160)
    }
    return () => {
      if (animationFrame !== undefined) cancelAnimationFrame(animationFrame)
      if (showFallback !== undefined) window.clearTimeout(showFallback)
      if (closeTimer !== undefined) window.clearTimeout(closeTimer)
    }
  }, [open])

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

  // Залежність саме від render, а не від open: панель монтується на один рендер
  // пізніше за open, і якщо чіплятися за open, ефект спрацює тоді, коли panelRef
  // ще порожній, і діалог відкриється без фокуса.
  useEffect(() => {
    if (!open || !render) return () => undefined
    previousFocusRef.current = document.activeElement as HTMLElement | null
    // Фокус переводимо синхронно: на момент useEffect панель уже в DOM, чекати кадр
    // не потрібно, а відкладений через requestAnimationFrame виклик скасовувався
    // власним cleanup у StrictMode, і діалог відкривався без фокуса.
    const firstFocusable = panelRef.current?.querySelector<HTMLElement>(focusableSelector)
    ;(firstFocusable ?? panelRef.current)?.focus()
    return () => {
      previousFocusRef.current?.focus()
    }
  }, [open, render])

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

  if (!render) return null
  return createPortal(
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-6 backdrop-blur transition-opacity duration-200 ease-out motion-reduce:transition-none ${shown ? 'opacity-100' : 'opacity-0'}`} onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <div ref={panelRef} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} className={`w-full max-w-lg rounded-[2rem] bg-white/85 p-1.5 ring-1 ring-ink/[0.06] shadow-[0_40px_80px_-32px_rgba(16,32,26,0.55)] transition-[transform,opacity] duration-220 ease-out motion-reduce:transition-none motion-reduce:transform-none ${shown ? 'scale-100 translate-y-0 opacity-100' : 'scale-[0.96] translate-y-2 opacity-0'}`}>
        <div className="rounded-[calc(2rem-0.375rem)] bg-white p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          <div className="flex items-start justify-between gap-6">
            <h2 id={titleId} className="font-display text-h3 font-semibold text-ink">{title}</h2>
            <button type="button" aria-label="Закрити" onClick={onClose} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-alt text-ink transition-[transform] duration-200 ease-drawer hover:bg-brand-soft active:scale-[0.97] motion-reduce:transform-none motion-reduce:transition-none">
              <X size={24} weight="light" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-5 text-ink-muted">{children}</div>
        </div>
      </div>
    </div>, document.body,
  )
}
