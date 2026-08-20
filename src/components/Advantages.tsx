import { Certificate, Handshake, Tag, Truck } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'

function Advantages() {
  const reduce = useReducedMotion()

  return (
    <section id="advantages" className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, transform: 'translateY(16px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0, ease: [0.32, 0.72, 0, 1] }}
        >
          <h2 className="font-display text-h2 font-bold text-ink md:text-h2-lg">Переваги співпраці</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            key="Гнучкі ціни"
            initial={reduce ? false : { opacity: 0, transform: 'translateY(16px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0 * 0.06, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="border-t border-hairline pt-6">
              <Tag size={26} weight="light" aria-hidden="true" className="text-brand" />
              <h3 className="mt-4 font-display text-title font-bold text-ink">Гнучкі ціни</h3>
              <p className="mt-2 text-body-sm text-ink-muted">Під обсяг вашого закладу</p>
            </div>
          </motion.div>
          <motion.div
            key="Стабільні поставки"
            initial={reduce ? false : { opacity: 0, transform: 'translateY(16px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 1 * 0.06, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="border-t border-hairline pt-6">
              <Truck size={26} weight="light" aria-hidden="true" className="text-brand" />
              <h3 className="mt-4 font-display text-title font-bold text-ink">Стабільні поставки</h3>
              <p className="mt-2 text-body-sm text-ink-muted">Графік без зривів</p>
            </div>
          </motion.div>
          <motion.div
            key="Персональний підхід"
            initial={reduce ? false : { opacity: 0, transform: 'translateY(16px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 2 * 0.06, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="border-t border-hairline pt-6">
              <Handshake size={26} weight="light" aria-hidden="true" className="text-brand" />
              <h3 className="mt-4 font-display text-title font-bold text-ink">Персональний підхід</h3>
              <p className="mt-2 text-body-sm text-ink-muted">Свій менеджер</p>
            </div>
          </motion.div>
          <motion.div
            key="Халяль стандарти"
            initial={reduce ? false : { opacity: 0, transform: 'translateY(16px)' }}
            whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 3 * 0.06, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="border-t border-hairline pt-6">
              <Certificate size={26} weight="light" aria-hidden="true" className="text-brand" />
              <h3 className="mt-4 font-display text-title font-bold text-ink">Халяль стандарти</h3>
              <p className="mt-2 text-body-sm text-ink-muted">Підтверджена якість</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Advantages
