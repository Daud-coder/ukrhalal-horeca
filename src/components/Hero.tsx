import { ArrowRight, ForkKnife, MapPin, Truck } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { EASE_DRAWER, EASE_OUT } from '../hooks/useReveal'
import { withBase } from '../lib/asset'

type HeroProps = { onPriceClick: () => void }

const categoryLinks = [
  { label: 'Яловичина', slug: 'beef' },
  { label: 'Баранина', slug: 'lamb' },
  { label: 'Курка', slug: 'chicken' },
  { label: 'Стейки', slug: 'steaks' },
  { label: 'Індичка', slug: 'turkey' },
  { label: 'Ковбасні вироби', slug: 'sausages' },
  { label: 'Напівфабрикати', slug: 'semi' },
]
const railItems = [
  { label: 'HORECA', Icon: ForkKnife },
  { label: 'КИЇВ ТА ОБЛАСТЬ', Icon: MapPin },
  { label: 'ОПТОВІ ПОСТАВКИ', Icon: Truck },
]

function Hero({ onPriceClick }: HeroProps) {
  const reduce = useReducedMotion()
  const rise = (delay: number) => reduce ? {} : { initial: { opacity: 0, transform: 'translateY(12px)' }, animate: { opacity: 1, transform: 'translateY(0px)' }, transition: { duration: 0.5, delay, ease: EASE_DRAWER } }

  return (
    <section className="relative flex min-h-[100dvh] overflow-hidden bg-ink text-white lg:min-h-[720px]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.img
          src={withBase('/images/hero-industrial-v6.webp')}
          alt=""
          width="3344"
          height="1882"
          fetchPriority="high"
          decoding="async"
          aria-hidden="true"
          initial={reduce ? false : { scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: EASE_OUT }}
          className="h-full w-full object-cover object-[62%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(7,18,13,0.78)_0%,rgba(7,18,13,0.42)_24%,rgba(7,18,13,0)_44%),linear-gradient(90deg,rgba(7,18,13,0.42)_0%,rgba(7,18,13,0.28)_42%,rgba(7,18,13,0.08)_74%,rgba(7,18,13,0.04)_100%)] max-md:bg-[linear-gradient(180deg,rgba(7,18,13,0.58)_0%,rgba(7,18,13,0.42)_58%,rgba(7,18,13,0.65)_100%)]" />
      </div>

      <div className="relative flex w-full flex-col px-5 pb-0 pt-40 sm:px-6 lg:px-8 nav:pt-40">
        <div className="relative flex flex-1 flex-col justify-center gap-12 pb-12 md:block lg:pb-24">
          <div className="min-w-0 md:max-w-[62%]">
            <motion.p {...rise(0)} className="relative -top-6 text-[clamp(1.5rem,2.2vw,2rem)] font-black italic leading-none tracking-[0.09em] text-[#2f9855] drop-shadow-[0_2px_12px_rgba(4,18,11,0.98)]">УКРХАЛЯЛЬ · HoReCa</motion.p>
            <motion.h1 {...rise(0.06)} className="mt-5 max-w-[780px] font-display text-[clamp(2.65rem,5.4vw,4.9rem)] font-semibold uppercase leading-[1.02] tracking-[-0.035em] text-white">М’ЯСО <span className="inline-block whitespace-nowrap tracking-[0.015em]">ДЛЯ</span> ПРОФЕСІЙНОЇ <span className="block">КУХНІ</span></motion.h1>
            <motion.p {...rise(0.12)} className="mt-7 max-w-[46ch] border-l-2 border-[#63c779] pl-4 text-[clamp(1.1rem,1.55vw,1.35rem)] font-medium leading-[1.55] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.72)]">Стабільні поставки м’яса для ресторанів, кафе, готелів і кейтерингу. Погоджуємо асортимент, формат обробки та графік доставки під роботу вашої кухні.</motion.p>
            <motion.p {...rise(0.15)} className="mt-3 max-w-[46ch] pl-[calc(1rem+2px)] text-[clamp(0.85rem,1.05vw,0.95rem)] font-medium leading-[1.5] text-white/75 drop-shadow-[0_2px_8px_rgba(0,0,0,0.72)]">Халяльні позиції — з необхідним підтвердженням і супровідними документами.</motion.p>
            <motion.div {...rise(0.18)} className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
              <button type="button" onClick={onPriceClick} className="inline-flex min-h-12 items-center justify-center rounded-[6px] bg-brand px-6 py-3 font-semibold text-white transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-brand-dark active:scale-[0.98] focus-visible:outline-white motion-reduce:transform-none">Отримати пропозицію</button>
              <a href="#contact" className="group inline-flex min-h-12 items-center justify-center gap-3 border-b border-brand px-1 py-3 font-semibold text-white transition-[border-color,color] duration-200 hover:border-white hover:text-brand focus-visible:outline-white">
                Обговорити постачання
                <ArrowRight size={18} weight="light" aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none" />
              </a>
            </motion.div>
          </div>

          <nav aria-label="Категорії продукції" className="min-w-0 md:absolute md:right-[-16px] md:top-0 md:w-[260px] lg:w-[320px]">
            <ul className="grid grid-cols-1 gap-x-8 min-[560px]:grid-cols-2 md:grid-cols-1">
              {categoryLinks.map(({ label, slug }, index) => (
                <motion.li {...rise(0.24 + index * 0.045)} key={label}>
                  <a
                    href={`#products-${slug}`}
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.hash = `products-${slug}`
                      document.getElementById('products')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
                    }}
                    className="group flex min-h-12 items-center justify-between gap-4 border-b border-white/40 py-3 font-display text-[clamp(1.1rem,1.9vw,1.55rem)] font-medium tracking-[-0.02em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] transition-[color,border-color] duration-200 hover:border-[#63c779] hover:text-white focus-visible:border-[#63c779] focus-visible:text-white focus-visible:outline-white"
                  >
                    <span className="origin-left transition-transform duration-200 ease-out group-hover:scale-[1.055] group-focus-visible:scale-[1.055] motion-reduce:transform-none">{label}</span>
                    <ArrowRight size={18} weight="light" aria-hidden="true" className="shrink-0 text-white transition-[color,transform] duration-200 group-hover:translate-x-1 group-hover:text-[#63c779] group-focus-visible:translate-x-1 group-focus-visible:text-[#63c779] motion-reduce:transform-none" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="grid border-t border-white/25 sm:grid-cols-3">
          {railItems.map(({ label, Icon }, index) => (
            <div key={label} className={`flex min-h-14 items-center gap-3 py-4 text-caption font-semibold tracking-[0.08em] text-white/78 sm:px-5 ${index > 0 ? 'border-t border-white/20 sm:border-l sm:border-t-0' : ''}`}>
              <Icon size={17} weight="light" aria-hidden="true" className="shrink-0 text-brand" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
