import { List } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'
import { MobileMenu } from './MobileMenu'
import { Button } from './ui/Button'
import { navLinks } from '../data/nav'

export const Z_INDEX = 40
const NAV_BREAKPOINT = 1180

type HeaderProps = { onLoginClick: () => void; onPriceClick: () => void }

export function Header({ onLoginClick, onPriceClick }: HeaderProps) {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  // Меню існує тільки для вузьких екранів. Коли користувач повертає телефон або
  // розтягує вікно, його треба саме розмонтувати: інакше блокування скролу на body
  // залишиться висіти. matchMedia спрацьовує і на зміну розміру, і на поворот екрана.
  useEffect(() => {
    const query = window.matchMedia(`(min-width: ${NAV_BREAKPOINT}px)`)
    const closeOnDesktop = () => {
      if (query.matches) setMenuOpen(false)
    }
    closeOnDesktop()
    query.addEventListener('change', closeOnDesktop)
    return () => query.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <>
      <header className={`sticky top-0 transition-[height] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none ${scrolled ? 'h-[60px] bg-white/94 shadow-[0_1px_0_rgba(16,32,26,0.06),0_12px_28px_-24px_rgba(16,32,26,0.5)] backdrop-blur' : 'h-[72px] bg-white'}`} style={{ zIndex: Z_INDEX }}>
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between gap-6 px-6">
          <a href="#top" aria-label="На початок сторінки" className="shrink-0">
            <img src="/logo/ukrhalal-horeca.png" alt="УкрХаляль HoReCa" width="880" height="612" className={`${scrolled ? 'h-[38px]' : 'h-[44px]'} w-auto transition-[height] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none`} />
          </a>
          <nav aria-label="Основна навігація" className="hidden nav:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => <li key={link.href}><a href={link.href} className="whitespace-nowrap text-sm font-medium text-ink transition-[color] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-brand motion-reduce:transition-none">{link.label}</a></li>)}
            </ul>
          </nav>
          <div className="hidden shrink-0 items-center gap-3 nav:flex">
            <Button size="sm" onClick={onLoginClick}>Увійти в кабінет</Button>
            <Button size="sm" variant="outline" onClick={onPriceClick}>Запросити прайс</Button>
          </div>
          <button type="button" aria-label="Відкрити меню" onClick={() => setMenuOpen(true)} className="rounded-[var(--radius-btn)] p-2 text-ink hover:bg-brand-soft nav:hidden">
            <List size={30} weight="light" aria-hidden="true" />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onLoginClick={onLoginClick} onPriceClick={onPriceClick} />
    </>
  )
}
