import { ArrowRight, Certificate, Handshake, Tag, Truck } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { featuredCategories } from '../data/categories'
import HeroCategoryCard from './HeroCategoryCard'
import { Button } from './ui/Button'

type HeroProps = {
  onPriceClick: () => void
}

function Hero({ onPriceClick }: HeroProps) {
  const reduce = useReducedMotion()
  const rise = (delay: number) => reduce ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay, ease: [0.32, 0.72, 0, 1] as const } }

  return (
    <section className="relative min-h-[calc(100dvh-72px)] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/hero-kitchen.webp"
          alt=""
          width="2400"
          height="1140"
          fetchPriority="high"
          decoding="async"
          aria-hidden="true"
          className="h-full w-full object-cover object-right"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, #FFFFFF 0%, #FFFFFF 20%, rgba(255,255,255,0.93) 34%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.08) 66%, rgba(255,255,255,0) 78%)',
          }}
        />
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.80) 55%, rgba(255,255,255,0.55) 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 pb-28 pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <motion.div {...rise(0)}>
              <h1 className="text-balance font-display text-display font-extrabold md:text-display-md lg:text-display-lg">
                <span className="text-brand">УКРХАЛЯЛЬ</span>
                <br />
                <span className="text-ink">HoReCa B2B</span>
              </h1>
            </motion.div>

            <motion.div {...rise(0.06)}>
              <p className="mt-6 max-w-[46ch] text-body-lg text-ink-muted">
                М'ясо для ресторанів, кафе, готелів та кейтерингу. Від надійного постачальника по Києву,
                Київській області та Україні.
              </p>
            </motion.div>

            <motion.div {...rise(0.12)} className="mt-10 grid max-w-[27rem] grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft ring-1 ring-brand/10"><Tag size={22} weight="light" aria-hidden="true" className="text-brand" /></span>
                <p className="mt-3 text-body-sm font-semibold text-ink">Гнучкі ціни</p>
                <p className="mt-1 text-caption text-ink-muted">Під обсяг вашого закладу</p>
              </div>
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft ring-1 ring-brand/10"><Truck size={22} weight="light" aria-hidden="true" className="text-brand" /></span>
                <p className="mt-3 text-body-sm font-semibold text-ink">Стабільні поставки</p>
                <p className="mt-1 text-caption text-ink-muted">Графік без зривів</p>
              </div>
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft ring-1 ring-brand/10"><Handshake size={22} weight="light" aria-hidden="true" className="text-brand" /></span>
                <p className="mt-3 text-body-sm font-semibold text-ink">Персональний підхід</p>
                <p className="mt-1 text-caption text-ink-muted">Свій менеджер</p>
              </div>
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft ring-1 ring-brand/10"><Certificate size={22} weight="light" aria-hidden="true" className="text-brand" /></span>
                <p className="mt-3 text-body-sm font-semibold text-ink">Халяль стандарти</p>
                <p className="mt-1 text-caption text-ink-muted">Підтверджена якість</p>
              </div>
            </motion.div>

            <motion.div {...rise(0.18)} className="mt-10 flex flex-col gap-5 sm:flex-row">
              <Button size="md" onClick={onPriceClick}>Запросити прайс</Button>
              <Button as="a" href="#products" variant="link" size="md" iconRight={<ArrowRight size={20} aria-hidden="true" />}>
                Каталог продукції
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            {featuredCategories.map((category, index) => (
              <motion.div {...rise(0.24 + index * 0.06)} key={category.slug} className={index % 2 === 1 ? 'w-full lg:mr-16' : 'w-full'}>
                <HeroCategoryCard title={category.title} image={category.image} href="#products" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
