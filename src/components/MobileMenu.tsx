import { TelegramLogo, WhatsappLogo } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { LAYER } from '../constants/layers'
import { contacts } from '../data/contacts'
import { withBase } from '../lib/asset'
import { Button } from './ui/Button'
import { ViberLogo } from './icons/ViberLogo'
import { navLinks } from '../data/nav'

const mobileMessengerItems = [
  { label: 'Telegram', href: contacts.telegram, icon: <TelegramLogo size={22} weight="fill" className="text-[#229ED9]" aria-hidden="true" /> },
  { label: 'WhatsApp', href: contacts.whatsapp, icon: <WhatsappLogo size={22} weight="fill" className="text-[#25D366]" aria-hidden="true" /> },
  { label: 'Viber', href: contacts.viber, icon: <ViberLogo size={22} className="text-[#7360F2]" aria-hidden="true" /> },
].map((item) => ({ ...item, enabled: !/^TODO:/i.test(item.href.trim()) }))

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  onPriceClick: () => void
}

export function MobileMenu({ open, onClose, onPriceClick }: MobileMenuProps) {
  const [render, setRender] = useState(open)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    let frame: number | undefined
    let showFallback: number | undefined
    let closeTimer: number | undefined
    if (open) {
      setRender(true)
      frame = requestAnimationFrame(() => setMounted(true))
      showFallback = window.setTimeout(() => setMounted(true), 60)
    } else {
      setMounted(false)
      closeTimer = window.setTimeout(() => setRender(false), 200)
    }
    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame)
      if (showFallback !== undefined) window.clearTimeout(showFallback)
      if (closeTimer !== undefined) window.clearTimeout(closeTimer)
    }
  }, [open])

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

  if (!render) return null
  return (
    <div className={`fixed inset-0 flex min-h-dvh flex-col bg-white px-6 py-5 transition-opacity duration-200 ease-drawer motion-reduce:transition-none ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ zIndex: LAYER.mobileMenu }}>
      <div className="flex items-center justify-between">
        <img src={withBase('/logo/ukrhalal-horeca.png')} alt="УкрХаляль HoReCa" width="880" height="612" className="h-auto w-[124px]" />
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
      <div className="mt-auto flex flex-col gap-5 pt-8">
        <div
          style={{ transitionDelay: `${40 + navLinks.length * 40}ms` }}
          className={`flex flex-col gap-2 transition-[transform,opacity] duration-320 ease-drawer motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          {mobileMessengerItems.filter((item) => item.enabled).map((item) => (
            <a key={item.label} href={item.href} onClick={onClose} className="flex min-h-9 w-full items-center gap-2 rounded-[6px] bg-brand/65 px-4 py-2.5 text-body-sm font-semibold text-white transition-colors hover:bg-brand">
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>
        <Button style={{ transitionDelay: `${40 + (navLinks.length + 1) * 40}ms` }} className={`!rounded-[6px] transition-[transform,opacity] duration-320 ease-drawer motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`} onClick={() => { onClose(); onPriceClick() }}>Отримати прайс</Button>
      </div>
    </div>
  )
}
