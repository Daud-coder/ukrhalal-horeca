import { ArrowRight } from '@phosphor-icons/react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { useReveal, useRevealCascade } from '../hooks/useReveal'
import { withBase } from '../lib/asset'

const advantages = [
  { title: 'ПОГОДЖЕНИЙ ГРАФІК ПОСТАЧАННЯ', description: 'Приймаємо замовлення та плануємо доставку відповідно до графіка роботи вашого закладу.', emphasized: true },
  { title: 'ВЛАСНА ЛОГІСТИКА ПО КИЄВУ ТА ОБЛАСТІ', description: 'Контролюємо доставку та погоджуємо зручне вікно приймання продукції.', emphasized: true },
  { title: 'ФОРМАТ ПРОДУКЦІЇ ПІД ВАШУ КУХНЮ', description: 'Менеджер допоможе підібрати позиції, формат обробки, фасування та ступінь зачищення.' },
  { title: 'ПРОПОЗИЦІЯ ПІД ВАШ АСОРТИМЕНТ І ОБСЯГИ', description: 'Враховуємо потрібні позиції, регулярність замовлень і формат співпраці.', emphasized: true },
  { title: 'СТАБІЛЬНИЙ РЕЗУЛЬТАТ У СТРАВІ', description: 'Прагнемо зберігати погоджені характеристики продукції від поставки до поставки.' },
  { title: 'ДОКУМЕНТИ ТА ПІДТВЕРДЖЕНИЙ ХАЛЯЛЬ', description: 'Надаємо супровідні документи на продукцію та підтвердження для відповідних халяльних позицій.' },
]

function Advantages() {
  const reveal = useReveal(0.25)
  const cascade = useRevealCascade(0.2)
  const reduce = useReducedMotion()
  const bandRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: bandRef, offset: ['start end', 'end start'] })
  const bandY = useTransform(scrollYProgress, [0, 1], [-28, 28])

  return (
    <section
      id="advantages"
      className="overflow-hidden bg-[#f4efe5]"
    >
      <div className="bg-[#f4efe5]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <motion.div {...reveal()} className="flex flex-col px-6 py-14 sm:px-10 md:py-16 lg:px-[clamp(2.5rem,5vw,5.5rem)] lg:pb-[4rem] lg:pt-[6rem]">
            <p className="text-caption font-semibold tracking-[0.28em] text-[#164f37]">ЧОМУ НАМ ДОВІРЯЮТЬ</p>
            <span className="mt-5 h-px w-24 bg-[#b08a4a]" aria-hidden="true" />
            <h2 className="mt-9 max-w-[8.7ch] text-[clamp(4rem,7vw,7.8rem)] font-light uppercase leading-[0.82] tracking-[0.005em] text-[#10201a]" style={{ fontFamily: "'Alumni Sans', sans-serif" }}>
              ПОСТАЧАННЯ, НА ЯКЕ МОЖНА РОЗРАХОВУВАТИ
            </h2>
            <p className="mt-8 max-w-[32rem] text-body-lg text-ink-muted">Погоджуємо продукцію, формат обробки, документи та логістику під щоденну роботу вашого закладу.</p>
            <a href="#terms" className="group mt-8 inline-flex min-h-12 w-fit items-center gap-5 bg-[#113f2c] px-6 py-3 text-body-sm font-semibold tracking-[0.12em] text-white transition-colors duration-200 hover:bg-[#1a6837]">
              УМОВИ СПІВПРАЦІ
              <ArrowRight size={19} weight="light" aria-hidden="true" className="text-[#c69b53] transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none" />
            </a>
          </motion.div>

          <motion.div {...cascade.container} className="grid px-6 pb-14 sm:px-10 lg:grid-cols-2 lg:px-[clamp(2rem,4vw,4.5rem)] lg:py-[clamp(2.5rem,4vw,4.5rem)]">
            {advantages.map((item, index) => (
              <motion.article
                {...cascade.item}
                key={item.title}
                className={`border-[#285b45] py-8 lg:min-h-[218px] lg:px-[clamp(1.5rem,2.5vw,3rem)] lg:py-8 ${index > 0 ? 'border-t' : ''} ${index === 1 ? 'lg:border-t-0' : ''} ${index % 2 === 1 ? 'lg:border-l' : ''}`}
              >
                <p
                  className="tabular text-[clamp(4rem,6vw,5.75rem)] font-extralight leading-[0.8] tracking-[-0.03em] text-[#0d2d21]"
                  style={{ fontFamily: "'Alumni Sans', sans-serif", fontVariationSettings: "'wght' 200" }}
                >
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-7 max-w-[22rem] text-[clamp(1.35rem,1.65vw,1.7rem)] font-semibold uppercase leading-[0.98] tracking-[0.005em] text-ink" style={{ fontFamily: "'Alumni Sans', sans-serif" }}>
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[24rem] text-body-sm text-ink-muted">{item.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
      <div
        ref={bandRef}
        className="relative h-44 overflow-hidden sm:h-52 lg:h-[clamp(10rem,14vw,14rem)]"
        role="img"
        aria-label="М’ясні вирізки на дерев’яній дошці"
      >
        <motion.div
          aria-hidden="true"
          className="absolute -top-10 -bottom-10 inset-x-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${withBase('/images/advantages-steaks-board.webp')}')`, y: reduce ? 0 : bandY }}
        />
      </div>
    </section>
  )
}

export default Advantages
