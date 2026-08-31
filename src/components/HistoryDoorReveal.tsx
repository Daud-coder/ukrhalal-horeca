import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useRef } from 'react'
import { useReveal, useRevealCascade } from '../hooks/useReveal'
import { DoorCornerFlourish } from './icons/DoorCornerFlourish'

const milestones = [
  {
    year: '2011',
    title: 'ПОЧАТОК ІСТОРІЇ',
    text: 'Перші поставки якісного халяльного м’яса для закладів Києва — з часом до партнерів долучились і приватні клієнти.',
  },
  {
    year: '2020',
    title: 'РОЗВИТОК HORECA',
    text: 'Стрімкий розвиток HoReCa і розширення роздрібної мережі — відкриття двох фірмових магазинів «УкрХаляль».',
  },
  {
    year: '2026',
    title: 'ФОКУС НА ПРОФЕСІЙНІЙ КУХНІ',
    text: 'Розвиваємо асортимент, логістику та сервіс відповідно до потреб ресторанів, кафе, готелів і кейтерингу.',
  },
]

function easeOutStops(start: number, end: number): [number, number, number] {
  return [start, start + (end - start) * 0.6, end]
}

function DoorPanel({ rotateY, side }: { rotateY: MotionValue<number>; side: 'left' | 'right' }) {
  const isLeft = side === 'left'
  return (
    <motion.div
      style={{ rotateY, backfaceVisibility: 'hidden' }}
      className={`absolute inset-y-0 w-1/2 border border-[#b08a4a]/55 [box-shadow:0_20px_60px_rgba(20,30,20,0.22)] ${isLeft ? 'left-0 origin-left' : 'right-0 origin-right'}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(244,239,229,0.62), rgba(244,239,229,0.36))',
          backdropFilter: 'blur(2px) saturate(1.15)',
          WebkitBackdropFilter: 'blur(2px) saturate(1.15)',
          boxShadow: 'inset 0 0 0 2px #b08a4a, inset 0 0 0 13px rgba(176,138,74,0.4)',
        }}
      />
      <DoorCornerFlourish size={26} className={`absolute top-3 text-[#b08a4a] ${isLeft ? 'left-3' : 'right-3 scale-x-[-1]'}`} aria-hidden="true" />
      <DoorCornerFlourish
        size={26}
        className={`absolute bottom-3 scale-y-[-1] text-[#b08a4a] ${isLeft ? 'left-3' : 'right-3 scale-x-[-1]'}`}
        aria-hidden="true"
      />
    </motion.div>
  )
}

type MilestoneMotionStyle = {
  opacity?: MotionValue<number>
  y?: MotionValue<number>
  scale?: MotionValue<number>
}

function Timeline({ motionStyles }: { motionStyles?: MilestoneMotionStyle[] }) {
  const cascade = useRevealCascade()

  return (
    <motion.div {...(motionStyles ? {} : cascade.container)} className="relative z-0 self-start border-l border-[#b08a4a] pl-8 sm:pl-12 lg:pl-8">
      {milestones.map((item, index) => (
        <motion.article
          {...(motionStyles ? {} : cascade.item)}
          key={item.year}
          style={motionStyles ? { opacity: motionStyles[index].opacity, y: motionStyles[index].y, scale: motionStyles[index].scale } : undefined}
          className={`relative grid gap-2 py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6 ${index > 0 ? 'border-t border-[#b08a4a]' : ''}`}
        >
          <span className="absolute -left-[2.27rem] top-8 size-4 rounded-full border-[4px] border-[#b08a4a] bg-[#f4efe5] sm:-left-[3.27rem] lg:-left-[2.48rem]" aria-hidden="true" />
          <p
            className="tabular text-[clamp(4.75rem,7.5vw,7rem)] font-extralight leading-[0.8] tracking-[-0.03em] text-[#0d2d21]"
            style={{ fontFamily: "'Alumni Sans', sans-serif" }}
          >
            {item.year}
          </p>
          <div className="self-center">
            <h3 className="text-[clamp(1.15rem,1.18vw,1.35rem)] font-medium uppercase leading-tight tracking-[-0.01em] text-[#111c17]" style={{ fontFamily: "'Alumni Sans', sans-serif" }}>
              {item.title}
            </h3>
            <p className="mt-1.5 max-w-[25rem] text-[0.76rem] leading-[1.45] text-[#35423b]">{item.text}</p>
          </div>
        </motion.article>
      ))}
    </motion.div>
  )
}

function HistoryDoorReveal() {
  const reduce = useReducedMotion()
  const reveal = useReveal()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start start', 'end end'] })

  const leftDoorRotate = useTransform(scrollYProgress, easeOutStops(0, 0.3), [0, -78, -104])
  const rightDoorRotate = useTransform(scrollYProgress, easeOutStops(0, 0.3), [0, 78, 104])

  const m1Opacity = useTransform(scrollYProgress, easeOutStops(0.24, 0.36), [0, 0.7, 1])
  const m1Y = useTransform(scrollYProgress, easeOutStops(0.24, 0.36), [14, 4, 0])
  const m1Scale = useTransform(scrollYProgress, easeOutStops(0.24, 0.36), [0.92, 0.98, 1])
  const m2Opacity = useTransform(scrollYProgress, easeOutStops(0.36, 0.48), [0, 0.7, 1])
  const m2Y = useTransform(scrollYProgress, easeOutStops(0.36, 0.48), [14, 4, 0])
  const m2Scale = useTransform(scrollYProgress, easeOutStops(0.36, 0.48), [0.92, 0.98, 1])
  const m3Opacity = useTransform(scrollYProgress, easeOutStops(0.48, 0.6), [0, 0.7, 1])
  const m3Y = useTransform(scrollYProgress, easeOutStops(0.48, 0.6), [14, 4, 0])
  const m3Scale = useTransform(scrollYProgress, easeOutStops(0.48, 0.6), [0.92, 0.98, 1])
  const milestoneMotion = [
    { opacity: m1Opacity, y: m1Y, scale: m1Scale },
    { opacity: m2Opacity, y: m2Y, scale: m2Scale },
    { opacity: m3Opacity, y: m3Y, scale: m3Scale },
  ]

  if (reduce) {
    return (
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.18fr)_minmax(0,1.22fr)] lg:gap-[clamp(1.75rem,2.5vw,3rem)]">
        <motion.div {...reveal(0.05)} className="about-year-slot self-start" aria-label="2011 рік">
          <p
            className="about-year tabular text-[clamp(9rem,14vw,16rem)] font-light leading-[0.76] tracking-[-0.07em] text-[#0d2d21]"
            style={{ fontFamily: "'Alumni Sans', sans-serif" }}
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
            «УкрХаляль» постачає м’ясо та м’ясні вироби для HoReCa й ритейлу. Допомагаємо закладам погодити асортимент, формат продукції та логістику так, щоб кухня працювала стабільно й передбачувано.
          </p>
          <p className="mt-3 max-w-[30rem] text-[clamp(0.9rem,0.92vw,1rem)] leading-[1.55] text-[#28342e]">
            Для нас важливо не просто привезти продукцію, а забезпечити зрозумілий процес роботи: від замовлення та документів до приймання поставки й вирішення поточних питань.
          </p>
        </motion.div>

        <Timeline />
      </div>
    )
  }

  return (
    <div ref={wrapperRef} className="relative h-auto lg:h-[280vh]">
      <div className="static lg:sticky lg:top-[92px] lg:flex lg:h-[calc(100dvh-92px)] lg:items-center lg:overflow-hidden">
        {/* Door layer — behind the numeral/heading, in front of the timeline */}
        <div
          aria-hidden="true"
          style={{ perspective: 1800 }}
          className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-screen -translate-x-1/2 lg:block"
        >
          <DoorPanel rotateY={leftDoorRotate} side="left" />
          <DoorPanel rotateY={rightDoorRotate} side="right" />
        </div>

        <div className="relative z-0 mx-auto grid w-full max-w-[1440px] gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.18fr)_minmax(0,1.22fr)] lg:gap-[clamp(1.75rem,2.5vw,3rem)] lg:px-[clamp(3rem,4vw,4.25rem)]">
          {/* Numeral + heading — always visible, outside the door mechanism, floats above the door layer */}
          <motion.div {...reveal(0.05)} className="about-year-slot relative z-20 self-start" aria-label="2011 рік">
            <p
              className="about-year tabular text-[clamp(9rem,14vw,16rem)] font-light leading-[0.76] tracking-[-0.07em] text-[#0d2d21]"
              style={{ fontFamily: "'Alumni Sans', sans-serif" }}
              aria-hidden="true"
            >
              2011
            </p>
          </motion.div>

          <motion.div {...reveal(0.1)} className="relative z-20 self-start lg:pt-2">
            <h2
              className="max-w-[14ch] text-[clamp(3rem,3.55vw,4rem)] font-light uppercase leading-[0.94] tracking-[-0.025em] text-[#111c17]"
              style={{ fontFamily: "'Alumni Sans', sans-serif" }}
            >
              ВІД ПЕРШОЇ ПОСТАВКИ ДО НАДІЙНОГО ПАРТНЕРСТВА
            </h2>
            <span className="mt-6 block h-px w-32 bg-[#b08a4a]" aria-hidden="true" />
            <p className="mt-5 max-w-[30rem] text-[clamp(0.9rem,0.92vw,1rem)] leading-[1.55] text-[#28342e]">
              «УкрХаляль» постачає м’ясо та м’ясні вироби для HoReCa й ритейлу. Допомагаємо закладам погодити асортимент, формат продукції та логістику так, щоб кухня працювала стабільно й передбачувано.
            </p>
            <p className="mt-3 max-w-[30rem] text-[clamp(0.9rem,0.92vw,1rem)] leading-[1.55] text-[#28342e]">
              Для нас важливо не просто привезти продукцію, а забезпечити зрозумілий процес роботи: від замовлення та документів до приймання поставки й вирішення поточних питань.
            </p>
          </motion.div>

          {/* Timeline — hidden behind the doors, revealed stage by stage */}
          <Timeline motionStyles={milestoneMotion} />
        </div>
      </div>
    </div>
  )
}

export default HistoryDoorReveal
