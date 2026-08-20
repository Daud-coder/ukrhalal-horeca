import { ArrowRight, Certificate, Handshake, Tag, Truck } from '@phosphor-icons/react'
import { featuredCategories } from '../data/categories'
import HeroCategoryCard from './HeroCategoryCard'
import { Button } from './ui/Button'

type HeroProps = {
  onPriceClick: () => void
}

function Hero({ onPriceClick }: HeroProps) {
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

      <div className="relative mx-auto max-w-[1280px] px-6 pb-20 pt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-brand">УКРХАЛЯЛЬ</span>
              <br />
              <span className="text-ink">HoReCa B2B</span>
            </h1>

            <p className="mt-6 max-w-[46ch] text-lg text-ink-muted">
              М'ясо для ресторанів, кафе, готелів та кейтерингу. Від надійного постачальника по Києву,
              Київській області та Україні.
            </p>

            <div className="mt-10 grid max-w-[27rem] grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <Tag size={26} aria-hidden="true" className="text-brand" />
                <p className="mt-3 text-sm font-semibold text-ink">Гнучкі ціни</p>
                <p className="mt-1 text-xs text-ink-muted">Під обсяг вашого закладу</p>
              </div>
              <div>
                <Truck size={26} aria-hidden="true" className="text-brand" />
                <p className="mt-3 text-sm font-semibold text-ink">Стабільні поставки</p>
                <p className="mt-1 text-xs text-ink-muted">Графік без зривів</p>
              </div>
              <div>
                <Handshake size={26} aria-hidden="true" className="text-brand" />
                <p className="mt-3 text-sm font-semibold text-ink">Персональний підхід</p>
                <p className="mt-1 text-xs text-ink-muted">Свій менеджер</p>
              </div>
              <div>
                <Certificate size={26} aria-hidden="true" className="text-brand" />
                <p className="mt-3 text-sm font-semibold text-ink">Халяль стандарти</p>
                <p className="mt-1 text-xs text-ink-muted">Підтверджена якість</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row">
              <Button size="md" onClick={onPriceClick}>Запросити прайс</Button>
              <Button as="a" href="#products" variant="link" size="md" iconRight={<ArrowRight size={20} aria-hidden="true" />}>
                Каталог продукції
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            {featuredCategories.map((category, index) => (
              <div key={category.slug} className={index % 2 === 1 ? 'w-full lg:mr-16' : 'w-full'}>
                <HeroCategoryCard title={category.title} image={category.image} href="#products" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
