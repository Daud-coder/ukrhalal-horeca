import { Handshake, Truck, Users } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'

const trustItems = [
  {
    icon: Users,
    title: '200+',
    description: 'Постійних клієнтів',
    tabular: true,
  },
  {
    icon: Truck,
    title: 'Власна логістика',
    description: 'Контроль доставки',
    tabular: false,
  },
  {
    icon: Handshake,
    title: 'Персональний менеджер',
    description: 'Швидка відповідь на запити',
    tabular: false,
  },
]

function TrustBand() {
  const reduce = useReducedMotion()

  return (
    <section className="border-y border-hairline bg-surface-alt py-16">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {trustItems.map(({ icon: Icon, title, description, tabular }, index) => (
          <motion.div
            key={title}
            initial={reduce ? false : { opacity: 0, transform: 'translateY(16px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.06, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-center gap-4"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-brand/10 bg-brand-soft">
              <Icon size={24} weight="light" aria-hidden="true" className="text-brand" />
            </span>
            <div>
              <p className={`text-h3 font-bold text-ink${tabular ? ' tabular' : ''}`}>{title}</p>
              <p className="text-body-sm text-ink-muted">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default TrustBand
