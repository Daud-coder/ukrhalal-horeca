import { X } from '@phosphor-icons/react'
import { useEffect } from 'react'
import { Z_INDEX } from './Header'
import { Button } from './ui/Button'
import { navLinks } from '../data/nav'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  onLoginClick: () => void
  onPriceClick: () => void
}

export function MobileMenu({ open, onClose, onLoginClick, onPriceClick }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return () => undefined
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, open])

  if (!open) return null
  return (
    <div className="fixed inset-0 flex min-h-dvh flex-col bg-white px-6 py-5" style={{ zIndex: Z_INDEX }}>
      <div className="flex items-center justify-between">
        <img src="/logo/ukrhalal-horeca.png" alt="УкрХаляль HoReCa" width="880" height="612" className="h-[38px] w-auto" />
        <button type="button" aria-label="Закрити меню" onClick={onClose} className="rounded-[var(--radius-btn)] p-2 text-ink hover:bg-brand-soft">
          <X size={30} aria-hidden="true" />
        </button>
      </div>
      <nav aria-label="Мобільна навігація" className="mt-8">
        <ul className="space-y-5">
          {navLinks.map((link) => <li key={link.href}><a href={link.href} onClick={onClose} className="font-display text-2xl font-semibold text-ink hover:text-brand">{link.label}</a></li>)}
        </ul>
      </nav>
      <div className="mt-auto flex flex-col gap-3 pt-8">
        <Button onClick={() => { onClose(); onLoginClick() }}>Увійти в кабінет</Button>
        <Button variant="outline" onClick={() => { onClose(); onPriceClick() }}>Запросити прайс</Button>
      </div>
    </div>
  )
}
