import { useEffect, useState } from 'react'
import { LAYER } from '../constants/layers'
import { Button } from './ui/Button'
import { navLinks } from '../data/nav'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  onLoginClick: () => void
  onPriceClick: () => void
}

export function MobileMenu({ open, onClose, onLoginClick, onPriceClick }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!open) return () => undefined
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    setMounted(true)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      setMounted(false)
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, open])

  if (!open) return null
  return (
    <div className="fixed inset-0 flex min-h-dvh flex-col bg-white/80 px-6 py-5 backdrop-blur-2xl" style={{ zIndex: LAYER.mobileMenu }}>
      <div className="flex items-center justify-between">
        <img src="/logo/ukrhalal-horeca.png" alt="УкрХаляль HoReCa" width="880" height="612" className="h-[38px] w-auto" />
        <button type="button" aria-label="Закрити меню" onClick={onClose} className="p-2">
          <span className="relative block h-5 w-6">
            <span className="absolute left-0 top-[7px] h-[2px] w-6 rotate-45 rounded-full bg-ink transition-transform duration-250 ease-drawer motion-reduce:transition-none" />
            <span className="absolute left-0 h-[2px] w-6 -rotate-45 rounded-full bg-ink transition-transform duration-250 ease-drawer motion-reduce:transition-none" />
          </span>
        </button>
      </div>
      <nav aria-label="Мобільна навігація" className="mt-8">
        <ul className="space-y-5">
          {navLinks.map((link, index) => <li key={link.href}><a href={link.href} onClick={onClose} style={{ transitionDelay: `${40 + index * 40}ms` }} className={`block font-display text-h3 font-semibold text-ink transition-[transform,opacity] duration-320 ease-drawer hover:text-brand motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>{link.label}</a></li>)}
        </ul>
      </nav>
      <div className="mt-auto flex flex-col gap-3 pt-8">
        <Button style={{ transitionDelay: `${40 + navLinks.length * 40}ms` }} className={`transition-[transform,opacity] duration-320 ease-drawer motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} onClick={() => { onClose(); onLoginClick() }}>Увійти в кабінет</Button>
        <Button variant="outline" style={{ transitionDelay: `${40 + (navLinks.length + 1) * 40}ms` }} className={`transition-[transform,opacity] duration-320 ease-drawer motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} onClick={() => { onClose(); onPriceClick() }}>Запросити прайс</Button>
      </div>
    </div>
  )
}
