import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { TelegramLogo, WhatsappLogo } from '@phosphor-icons/react'
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { LAYER } from '../constants/layers'
import { useScrolled } from '../hooks/useScrolled'
import { EASE_OUT } from '../hooks/useReveal'
import { withBase } from '../lib/asset'
import { contacts } from '../data/contacts'
import { navLinks } from '../data/nav'
import { MobileMenu } from './MobileMenu'
import { ViberLogo } from './icons/ViberLogo'

const NAV_BREAKPOINT = 1180
const headerNavLinks = navLinks.filter((link) => link.href !== '#contact')
const messengerItems = [
  { label: 'Telegram', href: contacts.telegram, icon: <TelegramLogo size={20} weight="fill" className="shrink-0 text-[#229ED9]" aria-hidden="true" /> },
  { label: 'WhatsApp', href: contacts.whatsapp, icon: <WhatsappLogo size={20} weight="fill" className="shrink-0 text-[#25D366]" aria-hidden="true" /> },
  { label: 'Viber', href: contacts.viber, icon: <ViberLogo size={20} className="shrink-0 text-[#7360F2]" aria-hidden="true" /> },
].map((item) => ({ ...item, enabled: !/^TODO:/i.test(item.href.trim()) }))
type HeaderProps = { onLoginClick: () => void; onPriceClick: () => void }

export function Header({ onLoginClick, onPriceClick }: HeaderProps) {
  const reduce = useReducedMotion()
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  const [messengersOpen, setMessengersOpen] = useState(false)
  const messengersRef = useRef<HTMLDivElement>(null)
  const messengersButtonRef = useRef<HTMLButtonElement>(null)
  const messengersMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const query = window.matchMedia(`(min-width: ${NAV_BREAKPOINT}px)`)
    const handleBreakpointChange = () => {
      if (query.matches) setMenuOpen(false)
      else setMessengersOpen(false)
    }
    handleBreakpointChange()
    query.addEventListener('change', handleBreakpointChange)
    return () => query.removeEventListener('change', handleBreakpointChange)
  }, [])

  useEffect(() => {
    if (!messengersOpen) return () => undefined

    const focusFrame = requestAnimationFrame(() => {
      const firstLink = messengersMenuRef.current?.querySelector<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])')
      ;(firstLink ?? messengersMenuRef.current)?.focus()
    })
    const handlePointerDown = (event: PointerEvent) => {
      if (!messengersRef.current?.contains(event.target as Node)) setMessengersOpen(false)
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setMessengersOpen(false)
      messengersButtonRef.current?.focus()
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      cancelAnimationFrame(focusFrame)
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [messengersOpen])

  const handleMessengerMenuKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return
    const items = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])'))
    if (!items.length) return

    event.preventDefault()
    const currentIndex = items.indexOf(document.activeElement as HTMLElement)
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? items.length - 1
        : event.key === 'ArrowDown'
          ? (currentIndex + 1) % items.length
          : (currentIndex - 1 + items.length) % items.length
    items[nextIndex]?.focus()
  }

  return (
    <>
      <header className="pointer-events-none sticky top-0 h-0" style={{ zIndex: LAYER.header }}>
        <div className={`pointer-events-auto border-b transition-[background-color,border-color] duration-250 motion-reduce:transition-none ${scrolled ? 'border-white/20 bg-ink/95' : 'border-white/20 bg-transparent'}`}>
          <div className="mx-auto flex h-[92px] max-w-[1280px] items-center gap-7 px-5 sm:px-6 lg:px-8">
            <a href="#top" aria-label="На початок сторінки" className="relative flex h-[76px] w-[122px] shrink-0 items-center justify-center focus-visible:outline-offset-4">
              <img
                src={withBase('/logo/ukrhalal-illuminated.png')}
                alt=""
                width="900"
                height="595"
                className="h-auto w-full object-contain [filter:drop-shadow(0_0_3px_rgba(255,255,255,0.98))_drop-shadow(0_0_10px_rgba(255,248,220,0.82))_drop-shadow(0_0_22px_rgba(255,248,220,0.42))]"
              />
            </a>
            <nav aria-label="Основна навігація" className="ml-auto hidden nav:block">
              <ul className="flex items-center gap-6">
                {headerNavLinks.map((link) => <li key={link.href}><a href={link.href} className="inline-flex min-h-9 items-center whitespace-nowrap rounded-[6px] bg-brand/65 px-3 py-2 text-body-sm font-medium text-white transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-brand active:scale-[0.98] focus-visible:bg-brand focus-visible:outline-offset-3 motion-reduce:transform-none">{link.label}</a></li>)}
              </ul>
            </nav>
            <div className="hidden shrink-0 items-center gap-3 nav:flex">
              <button type="button" onClick={onLoginClick} className="min-h-9 rounded-[6px] bg-brand/65 px-3 py-2 text-body-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-brand active:scale-[0.98] focus-visible:bg-brand motion-reduce:transform-none">Увійти в кабінет</button>
              <div ref={messengersRef} className="relative">
                <button
                  ref={messengersButtonRef}
                  type="button"
                  aria-expanded={messengersOpen}
                  aria-controls="desktop-messengers-menu"
                  aria-haspopup="menu"
                  onClick={() => setMessengersOpen((open) => !open)}
                  className="min-h-9 rounded-[6px] bg-brand/65 px-3 py-2 text-body-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-brand active:scale-[0.98] focus-visible:bg-brand motion-reduce:transform-none"
                >
                  Месенджери
                </button>
                <AnimatePresence>
                  {messengersOpen && (
                    <motion.div
                      ref={messengersMenuRef}
                      id="desktop-messengers-menu"
                      role="menu"
                      aria-label="Месенджери"
                      tabIndex={-1}
                      onKeyDown={handleMessengerMenuKeyDown}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, transform: 'scale(0.95)' }}
                      animate={{ opacity: 1, transform: 'scale(1)' }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, transform: 'scale(0.95)' }}
                      transition={{ duration: 0.16, ease: EASE_OUT }}
                      style={{ transformOrigin: 'top right' }}
                      className="absolute right-0 top-full mt-2 flex min-w-[11rem] flex-col gap-1.5 focus:outline-none"
                    >
                      {messengerItems.map((item) => item.enabled ? (
                        <a key={item.label} href={item.href} role="menuitem" className="flex min-h-9 w-full items-center gap-2 whitespace-nowrap rounded-[6px] bg-brand/65 px-3 py-2 text-body-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-brand active:scale-[0.98] focus-visible:bg-brand motion-reduce:transform-none">
                          {item.icon}
                          {item.label}
                        </a>
                      ) : (
                        <span key={item.label} role="menuitem" aria-disabled="true" className="flex min-h-9 w-full cursor-not-allowed items-center gap-2 whitespace-nowrap rounded-[6px] bg-ink-muted/20 px-3 py-2 text-body-sm font-semibold text-ink-muted/55">
                          {item.icon}
                          {item.label}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <button type="button" aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'} aria-expanded={menuOpen} onClick={() => setMenuOpen(true)} className="ml-auto rounded-[4px] p-2 nav:hidden">
              <span className="relative block h-5 w-6">
                <span className={`absolute left-0 top-[7px] h-[2px] w-6 transition-[background-color,transform] duration-250 ease-drawer motion-reduce:transition-none ${scrolled ? 'bg-ink' : 'bg-white'} ${menuOpen ? 'rotate-45' : '-translate-y-1'}`} />
                <span className={`absolute left-0 h-[2px] w-6 transition-[background-color,transform] duration-250 ease-drawer motion-reduce:transition-none ${scrolled ? 'bg-ink' : 'bg-white'} ${menuOpen ? '-rotate-45' : 'translate-y-1'}`} />
              </span>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onLoginClick={onLoginClick} onPriceClick={onPriceClick} />
    </>
  )
}
