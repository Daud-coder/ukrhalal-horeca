import { ArrowRight } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { featuredCategories } from '../data/categories'
import HeroCategoryCard from './HeroCategoryCard'
import { Button } from './ui/Button'

type HeroProps = {
  onPriceClick: () => void
}

function Hero({ onPriceClick }: HeroProps) {
  const reduce = useReducedMotion()
  const rise = (delay: number) => reduce ? {} : { initial: { opacity: 0, transform: 'translateY(12px)' }, animate: { opacity: 1, transform: 'translateY(0px)' }, transition: { duration: 0.5, delay, ease: [0.32, 0.72, 0, 1] as const } }

  return (
    <section className="relative min-h-[calc(100dvh-72px)] overflow-hidden lg:min-h-[620px] lg:h-[min(calc(100dvh-72px),47.5vw)]">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/hero-kitchen.webp"
          alt=""
          width="2400"
          height="1140"
          fetchPriority="high"
          decoding="async"
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <img
          src="/images/hero-kitchen-blur.webp"
          alt=""
          aria-hidden="true"
          width="2400"
          height="1140"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{
            maskImage: 'linear-gradient(100deg, #000 0%, #000 22%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.18) 56%, transparent 68%)',
            WebkitMaskImage: 'linear-gradient(100deg, #000 0%, #000 22%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.18) 56%, transparent 68%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(100deg, rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.45) 20%, rgba(255,255,255,0.26) 38%, rgba(255,255,255,0.09) 54%, rgba(255,255,255,0.01) 68%, rgba(255,255,255,0) 78%)',
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
                <span className="text-brand-dark">УКРХАЛЯЛЬ</span>
                <br />
                <span className="text-ink">HoReCa B2B</span>
              </h1>
            </motion.div>

            <motion.div {...rise(0.06)}>
              <p className="mt-6 max-w-[34ch] text-body-lg font-medium text-ink">
                М'ясо для ресторанів, кафе, готелів та кейтерингу. Від надійного постачальника по Києву,
                Київській області та Україні.
              </p>
            </motion.div>

            <motion.div {...rise(0.12)} className="mt-10 flex flex-col gap-5 sm:flex-row">
              <Button size="md" onClick={onPriceClick}>Запросити прайс</Button>
              <Button as="a" href="#products" variant="link" size="md" iconRight={<ArrowRight size={20} weight="light" aria-hidden="true" />}>
                Каталог продукції
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end lg:self-start">
            {featuredCategories.map((category, index) => (
              <motion.div {...rise(0.24 + index * 0.06)} key={category.slug} className={index % 2 === 1 ? 'w-full lg:w-auto lg:mr-6' : 'w-full lg:w-auto'}>
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
