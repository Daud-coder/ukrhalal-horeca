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
      <header className={`pointer-events-none sticky top-0 px-4 ${scrolled ? 'pt-3' : 'pt-5'}`} style={{ zIndex: Z_INDEX }}>
        <div className={`pointer-events-auto mx-auto flex w-max max-w-[calc(100vw-2rem)] items-center gap-4 rounded-full bg-white/75 py-2 pl-5 pr-2 ring-1 ring-ink/[0.07] shadow-[0_18px_45px_-20px_rgba(16,32,26,0.4)] backdrop-blur-xl transition-[background-color,box-shadow,padding] duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none ${scrolled ? 'bg-white/90 shadow-[0_22px_55px_-20px_rgba(16,32,26,0.5)]' : ''}`}>
          <a href="#top" aria-label="На початок сторінки" className="shrink-0">
            <img src="/logo/ukrhalal-horeca.png" alt="УкрХаляль HoReCa" width="880" height="612" className={`${scrolled ? 'h-[34px]' : 'h-[40px]'} w-auto transition-[height] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none`} />
          </a>
          <nav aria-label="Основна навігація" className="hidden nav:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => <li key={link.href}><a href={link.href} className="whitespace-nowrap text-body-sm font-medium text-ink transition-[color] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-brand motion-reduce:transition-none">{link.label}</a></li>)}
            </ul>
          </nav>
          <div className="hidden shrink-0 items-center gap-3 nav:flex">
            <Button size="sm" onClick={onLoginClick}>Увійти в кабінет</Button>
            <Button size="sm" variant="outline" onClick={onPriceClick}>Запросити прайс</Button>
          </div>
          <button type="button" aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'} aria-expanded={menuOpen} onClick={() => setMenuOpen(true)} className="p-2 nav:hidden">
            <span className="relative block h-5 w-6">
              <span className={`absolute left-0 top-[7px] h-[2px] w-6 rounded-full bg-ink transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none ${menuOpen ? 'rotate-45' : '-translate-y-1'}`} />
              <span className={`absolute left-0 h-[2px] w-6 rounded-full bg-ink transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] motion-reduce:transition-none ${menuOpen ? '-rotate-45' : 'translate-y-1'}`} />
            </span>
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onLoginClick={onLoginClick} onPriceClick={onPriceClick} />
    </>
  )
}
