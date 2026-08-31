import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { withBase } from '../lib/asset'
import HistoryDoorReveal from './HistoryDoorReveal'
import ImageLens from './ImageLens'

const partners = [
  { src: '/partners/oji-burger-final-v2.png', alt: 'Oji Burger' },
  { src: '/partners/ami-cafe-final-v2.png', alt: 'Ami Cafe' },
  { src: '/partners/italist-final-v2.png', alt: 'Italist Pizza & Pasta' },
  { src: '/partners/remi-cafe-final-v2.png', alt: 'REMI Cafe' },
  { src: '/partners/the-burger-final-v2.png', alt: 'The Burger' },
  { src: '/partners/ministry-shawarma-final-v3.png', alt: 'Міністерство шаурми' },
  { src: '/partners/peran-food-final-v2.png', alt: 'Peran Food' },
  { src: '/partners/meridian-final-v3.png', alt: 'Міжнародний дитячий садок Meridian' },
  { src: '/partners/usta-doner-final-v2.png', alt: 'Usta Döner' },
  { src: '/partners/publicist-final-v2.png', alt: 'Публіцист' },
  { src: '/partners/kosatka-final-v2.png', alt: 'Косатка' },
  { src: '/partners/hilton-final-v2.png', alt: 'Hilton Hotels & Resorts' },
  { src: '/partners/ottoman-house-cafe-final-v2.png', alt: 'Ottoman House Cafe' },
]

function AboutSection() {
  const reveal = useReveal()
  const reduce = useReducedMotion()
  const photoRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ['start end', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], ['-11%', '-1%'])

  return (
    <section id="about" className="scroll-mt-[92px] bg-[#f4efe5] text-[#10201a]">
      <div className="mx-auto max-w-[1440px] px-6 pt-12 sm:px-10 lg:px-[clamp(3rem,4vw,4.25rem)] lg:pt-10">
        <motion.div {...reveal()}>
          <span className="block h-px w-36 bg-[#b08a4a]" aria-hidden="true" />
          <p className="mt-5 text-xs font-semibold tracking-[0.34em] text-[#102a20]">ПРО КОМПАНІЮ</p>
        </motion.div>
      </div>

      <div className="mt-7">
        <HistoryDoorReveal />
      </div>

      <div className="mx-auto mt-2 grid max-w-[1440px] lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div {...reveal(0.22)} className="min-w-0 px-6 pb-10 sm:px-10 lg:px-[clamp(3rem,4vw,4.25rem)] lg:pb-8">
          <div className="flex items-center gap-5">
            <p className="shrink-0 text-xs font-medium tracking-[0.3em] text-[#b08a4a]">НАМ ДОВІРЯЮТЬ</p>
            <span className="h-px flex-1 bg-[#b08a4a]" aria-hidden="true" />
          </div>
          <p className="mt-3 max-w-[30rem] text-[0.82rem] leading-[1.5] text-[#3f4d47]">
            Заклади, для яких важливі стабільність постачання, якість продукції та оперативна комунікація.
          </p>
          {reduce ? (
            <div className="mt-5 grid grid-cols-2 items-center gap-x-5 gap-y-4 sm:grid-cols-3 xl:grid-cols-4">
              {partners.map((partner) => (
                <div key={partner.src} className="flex h-[140px] items-center justify-center overflow-hidden bg-transparent sm:h-[156px]">
                  <img
                    src={withBase(partner.src)}
                    alt={partner.alt}
                    className="max-h-full max-w-full bg-transparent object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              className="partner-marquee mt-5 overflow-hidden"
              style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
            >
              <div className="partner-marquee-track flex w-max items-center gap-x-14">
                {[...partners, ...partners].map((partner, index) => (
                  <div key={`${partner.src}-${index}`} className="flex h-[140px] w-[256px] shrink-0 items-center justify-center overflow-hidden bg-transparent sm:h-[156px] sm:w-[296px]">
                    <img
                      src={withBase(partner.src)}
                      alt={index < partners.length ? partner.alt : ''}
                      aria-hidden={index < partners.length ? undefined : true}
                      className="max-h-full max-w-full bg-transparent object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        <motion.figure {...reveal(0.25)} ref={photoRef} className="relative min-h-[280px] overflow-hidden sm:min-h-[340px] lg:min-h-[300px] lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
          <motion.img
            src={withBase('/images/about-delivery-v2.jpg')}
            alt="Передача вакуумованої м’ясної продукції УкрХаляль професійній кухні"
            style={{ y: reduce ? '-6%' : photoY }}
            className="absolute inset-0 h-[112%] w-full object-cover object-center"
            loading="lazy"
          />
          <ImageLens src={withBase('/images/about-delivery-v2.jpg')} />
        </motion.figure>
      </div>
    </section>
  )
}

export default AboutSection
