import { motion } from 'motion/react'
import { useReveal } from '../hooks/useReveal'
import { withBase } from '../lib/asset'

const milestones = [
  {
    year: '2011',
    title: 'ПОЧАТОК ІСТОРІЇ',
    text: 'Перші поставки якісного халяльного м’яса для приватних клієнтів.',
  },
  {
    year: '2020+',
    title: 'РОЗВИТОК HORECA',
    text: 'Розширили асортимент, посилили логістику та зосередилися на потребах професійних кухонь.',
  },
  {
    year: '2026',
    title: '200+ ПОСТІЙНИХ ПАРТНЕРІВ',
    text: 'Нам довіряють ресторани, кафе, готелі та кейтерингові компанії Києва.',
  },
]

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
]

function AboutSection() {
  const reveal = useReveal()

  return (
    <section id="about" className="scroll-mt-[92px] overflow-hidden bg-[#f4efe5] text-[#10201a]">
      <div className="mx-auto max-w-[1440px] px-6 pb-0 pt-12 sm:px-10 lg:px-[clamp(3rem,4vw,4.25rem)] lg:pt-10">
        <motion.div {...reveal()}>
          <span className="block h-px w-36 bg-[#b08a4a]" aria-hidden="true" />
          <p className="mt-5 text-xs font-semibold tracking-[0.34em] text-[#102a20]">ПРО КОМПАНІЮ</p>
        </motion.div>

        <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.18fr)_minmax(0,1.22fr)] lg:gap-[clamp(1.75rem,2.5vw,3rem)]">
          <motion.div {...reveal(0.05)} className="about-year-slot self-start" aria-label="2011 рік">
            <p
              className="about-year tabular text-[clamp(9rem,14vw,16rem)] font-extralight leading-[0.76] tracking-[-0.07em] text-[#0d2d21]"
              style={{ fontFamily: "'Alumni Sans', sans-serif", fontVariationSettings: "'wght' 200" }}
              aria-hidden="true"
            >
              2011
            </p>
          </motion.div>

          <motion.div {...reveal(0.1)} className="self-start lg:pt-2">
            <h2
              className="max-w-[14ch] text-[clamp(3rem,3.55vw,4rem)] font-light uppercase leading-[0.94] tracking-[-0.025em] text-[#111c17]"
              style={{ fontFamily: "'Alumni Sans', sans-serif" }}
            >
              ВІД ПЕРШОЇ ПОСТАВКИ ДО НАДІЙНОГО ПАРТНЕРСТВА
            </h2>
            <span className="mt-6 block h-px w-32 bg-[#b08a4a]" aria-hidden="true" />
            <p className="mt-5 max-w-[30rem] text-[clamp(0.9rem,0.92vw,1rem)] leading-[1.55] text-[#28342e]">
              «УкрХаляль» — надійний постачальник м’ясної продукції для HoReCa та ритейлу. Ми поєднуємо стабільні поставки, власну логістику та глибоке розуміння потреб професійної кухні.
            </p>
          </motion.div>

          <div className="relative self-start border-l border-[#b08a4a] pl-8 sm:pl-12 lg:pl-8">
            {milestones.map((item, index) => (
              <motion.article
                {...reveal(0.14 + index * 0.06)}
                key={item.year}
                className={`relative grid gap-3 py-4 sm:grid-cols-[5.25rem_1fr] sm:gap-5 ${index > 0 ? 'border-t border-[#b08a4a]' : ''}`}
              >
                <span className="absolute -left-[2.27rem] top-5 size-4 rounded-full border-[4px] border-[#b08a4a] bg-[#f4efe5] sm:-left-[3.27rem] lg:-left-[2.48rem]" aria-hidden="true" />
                <p className="tabular text-[clamp(2.7rem,3vw,3.45rem)] font-light leading-none text-[#123d2c]" style={{ fontFamily: "'Alumni Sans', sans-serif" }}>
                  {item.year}
                </p>
                <div>
                  <h3 className="text-[clamp(1.15rem,1.18vw,1.35rem)] font-medium uppercase leading-tight tracking-[-0.01em] text-[#111c17]" style={{ fontFamily: "'Alumni Sans', sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-[25rem] text-[0.76rem] leading-[1.45] text-[#35423b]">{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-2 grid max-w-[1440px] lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div {...reveal(0.22)} className="px-6 pb-10 sm:px-10 lg:px-[clamp(3rem,4vw,4.25rem)] lg:pb-8">
          <div className="flex items-center gap-5">
            <p className="shrink-0 text-xs font-medium tracking-[0.3em] text-[#b08a4a]">НАМ ДОВІРЯЮТЬ</p>
            <span className="h-px flex-1 bg-[#b08a4a]" aria-hidden="true" />
          </div>
          <div className="mt-5 grid grid-cols-3 items-center gap-x-5 gap-y-4 sm:grid-cols-4 xl:grid-cols-6">
            {partners.map((partner) => (
              <div key={partner.src} className="flex h-[70px] items-center justify-center overflow-hidden bg-transparent sm:h-[78px]">
                <img
                  src={withBase(partner.src)}
                  alt={partner.alt}
                  className="max-h-full max-w-full bg-transparent object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.figure {...reveal(0.25)} className="relative min-h-[280px] overflow-hidden sm:min-h-[340px] lg:min-h-[300px] lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
          <img
            src={withBase('/images/about-delivery-v2.jpg')}
            alt="Передача вакуумованої м’ясної продукції УкрХаляль професійній кухні"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
        </motion.figure>
      </div>
    </section>
  )
}

export default AboutSection
