import { TelegramLogo, WhatsappLogo } from '@phosphor-icons/react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect } from 'react'
import { LAYER } from '../constants/layers'
import { EASE_DRAWER } from '../hooks/useReveal'
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
  const reduce = useReducedMotion()
  const itemDelay = (index: number) => 0.06 + index * 0.04

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

  const rise = (delay: number) => reduce
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : {
        initial: { opacity: 0, transform: 'translateY(48px)' },
        animate: { opacity: 1, transform: 'translateY(0px)' },
        exit: { opacity: 0, transform: 'translateY(24px)' },
        transition: { duration: 0.32, delay, ease: EASE_DRAWER },
      }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: EASE_DRAWER }}
          className="fixed inset-0 flex min-h-dvh flex-col bg-white px-6 py-5"
          style={{ zIndex: LAYER.mobileMenu }}
        >
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
              {navLinks.map((link, index) => (
                <motion.li {...rise(itemDelay(index))} key={link.href}>
                  <a href={link.href} onClick={onClose} className="block font-display text-h3 font-semibold text-ink transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto flex flex-col gap-5 pt-8">
            <motion.div {...rise(itemDelay(navLinks.length))} className="flex flex-col gap-2">
              {mobileMessengerItems.filter((item) => item.enabled).map((item) => (
                <a key={item.label} href={item.href} onClick={onClose} className="flex min-h-9 w-full items-center gap-2 rounded-[6px] bg-brand/65 px-4 py-2.5 text-body-sm font-semibold text-white transition-colors hover:bg-brand">
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </motion.div>
            <motion.div {...rise(itemDelay(navLinks.length + 1))}>
              <Button className="!rounded-[6px]" onClick={() => { onClose(); onPriceClick() }}>Отримати прайс</Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
