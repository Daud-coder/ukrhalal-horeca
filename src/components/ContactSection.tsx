import { ArrowUpRight, InstagramLogo, TiktokLogo } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { contacts } from '../data/contacts'

const socialPlaceholders = [
  { label: 'Instagram', Icon: InstagramLogo },
  { label: 'TikTok', Icon: TiktokLogo },
]

function ContactSection() {
  const reduce = useReducedMotion()
  const reveal = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, transform: 'translateY(14px)' },
    whileInView: { opacity: 1, transform: 'translateY(0px)' },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.5, delay, ease: [0.32, 0.72, 0, 1] as const },
  })

  return (
    <section id="contact" className="scroll-mt-24 overflow-hidden bg-[#fbf8f1] py-6 text-[#0b2b20] sm:py-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#123c2d]/20 bg-[#fbf8f1] shadow-[0_20px_65px_rgba(10,32,24,0.12)]">
          <span className="pointer-events-none absolute inset-4 rounded-[1rem] border border-[#123c2d]/15" aria-hidden="true" />

          <div className="grid lg:min-h-[690px] lg:grid-cols-[1.12fr_1fr_0.72fr]">
            <motion.figure {...reveal()} className="relative flex min-h-[390px] items-center justify-center overflow-hidden px-4 pb-20 pt-10 sm:min-h-[520px] sm:px-8 lg:min-h-0 lg:px-4 lg:pb-24 lg:pt-14">
              <img
                src="/images/ukraine-map-embedded.png"
                alt="Карта України з контурним підсвічуванням"
                className="relative z-10 w-full max-w-[650px] object-contain mix-blend-multiply drop-shadow-[0_12px_18px_rgba(20,39,31,0.12)]"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="absolute bottom-10 left-8 z-20 text-[0.68rem] font-medium uppercase tracking-[0.27em] text-[#0b2b20] sm:left-12">
                Працюємо для професійної кухні
              </figcaption>
            </motion.figure>

            <motion.div {...reveal(0.08)} className="relative flex flex-col justify-center border-t border-[#123c2d]/25 px-7 py-14 sm:px-12 lg:border-l lg:border-t-0 lg:px-[clamp(2.5rem,3.5vw,4.1rem)] lg:py-16">
              <div className="flex items-center gap-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b78b3e]">
                <span className="h-px w-12 bg-[#b78b3e]" aria-hidden="true" />
                Контакти
              </div>
              <h2 className="mt-9 max-w-[9ch] text-[clamp(3.8rem,5.5vw,6rem)] font-light uppercase leading-[0.9] tracking-[-0.015em] text-[#0b2b20]" style={{ fontFamily: "'Alumni Sans', sans-serif" }}>
                Обговоріть умови співпраці HoReCa
              </h2>
              <p className="mt-7 max-w-[31rem] text-[clamp(0.95rem,1.15vw,1.12rem)] leading-[1.7] text-[#506158]">
                Зателефонуйте — підберемо асортимент, формат обробки та зручний графік постачання для вашого закладу.
              </p>

              <div className="mt-10 border-t border-[#b78b3e]">
                {contacts.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="group flex min-h-[72px] items-center justify-between gap-5 border-b border-[#123c2d]/25 py-4 text-[#0b2b20] transition-colors hover:text-[#1a6837]">
                    <span className="tabular text-[clamp(1.7rem,2.2vw,2.15rem)] font-light tracking-[0.035em]" style={{ fontFamily: "'Alumni Sans', sans-serif" }}>
                      {phone.display}
                    </span>
                    <ArrowUpRight size={24} weight="light" aria-hidden="true" className="shrink-0 text-[#b78b3e] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-1 motion-reduce:transform-none" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.aside {...reveal(0.14)} className="relative flex flex-col justify-center border-t border-[#123c2d]/25 px-7 py-14 sm:px-12 lg:border-l lg:border-t-0 lg:px-[clamp(2rem,2.7vw,3rem)] lg:py-16" aria-label="Соціальні мережі">
              <div className="flex items-center gap-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b78b3e]">
                <span className="h-px w-12 bg-[#b78b3e]" aria-hidden="true" />
                Ми онлайн
              </div>
              <h2 className="mt-8 max-w-[8ch] text-[clamp(2.8rem,3.5vw,4.1rem)] font-light uppercase leading-[0.93] text-[#0b2b20]" style={{ fontFamily: "'Alumni Sans', sans-serif" }}>
                Слідкуйте за УкрХаляль
              </h2>
              <p className="mt-5 max-w-[24rem] text-sm leading-[1.65] text-[#506158]">Новини, асортимент і робота з професійною кухнею.</p>

              <div className="mt-9 grid gap-3">
                {socialPlaceholders.map(({ label, Icon }) => (
                  <div key={label} className="flex min-h-[78px] items-center justify-between border border-[#123c2d]/35 px-5 text-[#0b2b20]" title="Посилання буде додано">
                    <span className="flex items-center gap-3 text-sm font-semibold">
                      <span className="grid size-10 place-items-center rounded-full border border-current" aria-hidden="true">
                        <Icon size={20} weight="light" />
                      </span>
                      {label}
                    </span>
                    <ArrowUpRight size={20} weight="light" aria-hidden="true" className="text-[#b78b3e]" />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[0.65rem] uppercase tracking-[0.18em] text-[#7d867f]">Посилання будуть додані</p>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
