import { ArrowUpRight } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { contacts } from '../data/contacts'
import { useReveal } from '../hooks/useReveal'
import { withBase } from '../lib/asset'

const socialPlaceholders = [
  {
    key: 'instagram',
    label: 'Instagram',
    badge: (
      <span className="grid size-10 shrink-0 place-items-center overflow-hidden rounded-[22%]" aria-hidden="true">
        <img src={withBase('/social/instagram.jpeg')} alt="" className="h-full w-full scale-110 object-cover" />
      </span>
    ),
  },
  {
    key: 'tiktok',
    label: 'TikTok',
    badge: (
      <span className="grid size-9 shrink-0 place-items-center overflow-hidden rounded-[22%]" aria-hidden="true">
        <img src={withBase('/social/tiktok.jpeg')} alt="" className="h-full w-full scale-110 object-cover" />
      </span>
    ),
  },
  {
    key: 'facebook',
    label: 'Facebook',
    badge: (
      <span className="grid size-8 shrink-0 place-items-center overflow-hidden rounded-[22%]" aria-hidden="true">
        <img src={withBase('/social/facebook.jpeg')} alt="" className="h-full w-full scale-110 object-cover" />
      </span>
    ),
  },
]

function ContactSection() {
  const reveal = useReveal()

  return (
    <section id="contact" className="scroll-mt-24 overflow-hidden bg-ink py-5 text-white sm:py-7 lg:py-9">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.02] shadow-[0_20px_65px_rgba(0,0,0,0.35)]">
          <span className="pointer-events-none absolute inset-4 rounded-[1rem] border border-white/8" aria-hidden="true" />

          <div className="grid lg:grid-cols-[1.12fr_1fr_0.72fr]">
            <motion.figure {...reveal()} className="relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden px-4 pb-10 pt-8 sm:min-h-[360px] sm:px-8 lg:min-h-0 lg:px-4 lg:pb-10 lg:pt-9">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[90%] -translate-x-1/2 -translate-y-1/2 opacity-90 blur-[50px]"
                style={{
                  background:
                    'radial-gradient(closest-side at 50% 22%, rgba(59,130,246,0.30), transparent 68%), radial-gradient(closest-side at 50% 80%, rgba(240,173,60,0.38), transparent 70%)',
                }}
              />
              <p className="relative z-10 mb-3 max-w-[19rem] text-center text-[0.72rem] font-semibold uppercase leading-snug tracking-[0.13em] text-white/80">
                Обслуговуємо <span className="text-[#b78b3e]">200+</span> закладів по всій Україні
              </p>
              <img
                src={withBase('/images/ukraine-map-cutout.webp')}
                alt="Карта України з контурним підсвічуванням"
                className="relative z-10 w-full max-w-[540px] object-contain drop-shadow-[0_22px_38px_rgba(0,0,0,0.55)] drop-shadow-[0_0_40px_rgba(183,139,62,0.22)]"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="absolute bottom-5 left-8 z-20 text-[0.64rem] font-medium uppercase tracking-[0.27em] text-white/55 sm:left-12">
                Працюємо для професійної кухні
              </figcaption>
            </motion.figure>

            <motion.div {...reveal(0.08)} className="relative flex flex-col justify-center border-t border-white/12 px-7 py-8 sm:px-12 sm:py-10 lg:border-l lg:border-t-0 lg:px-[clamp(2.25rem,3vw,3.4rem)] lg:py-9">
              <div className="flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#b78b3e]">
                <span className="h-px w-12 bg-[#b78b3e]" aria-hidden="true" />
                Контакти
              </div>
              <h2 className="mt-5 max-w-[11ch] text-[clamp(2.15rem,2.9vw,2.9rem)] font-light uppercase leading-[0.96] tracking-[-0.015em] text-white" style={{ fontFamily: "'Alumni Sans', sans-serif" }}>
                Обговоріть умови співпраці HoReCa
              </h2>
              <p className="mt-3 max-w-[29rem] text-[0.86rem] leading-[1.6] text-white/60">
                Зателефонуйте — підберемо асортимент, формат обробки та зручний графік постачання для вашого закладу.
              </p>

              <div className="mt-6 border-t border-[#b78b3e]/70">
                {contacts.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="group flex min-h-[56px] items-center justify-between gap-5 border-b border-white/12 py-2.5 text-white transition-colors hover:text-[#63c779]">
                    <span className="tabular text-[clamp(1.3rem,1.6vw,1.6rem)] font-light tracking-[0.035em]" style={{ fontFamily: "'Alumni Sans', sans-serif" }}>
                      {phone.display}
                    </span>
                    <ArrowUpRight size={20} weight="light" aria-hidden="true" className="shrink-0 text-[#b78b3e] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-1 motion-reduce:transform-none" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.aside {...reveal(0.14)} className="relative flex flex-col justify-center border-t border-white/12 px-7 py-8 sm:px-12 sm:py-10 lg:border-l lg:border-t-0 lg:px-[clamp(1.75rem,2.3vw,2.5rem)] lg:py-9" aria-label="Соціальні мережі">
              <div className="flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#b78b3e]">
                <span className="h-px w-12 bg-[#b78b3e]" aria-hidden="true" />
                Ми онлайн
              </div>
              <h2 className="mt-5 max-w-[8ch] text-[clamp(1.7rem,2.1vw,2.3rem)] font-light uppercase leading-[0.98] text-white" style={{ fontFamily: "'Alumni Sans', sans-serif" }}>
                Слідкуйте за УкрХаляль
              </h2>
              <p className="mt-2.5 max-w-[24rem] text-[0.82rem] leading-[1.55] text-white/60">Новини, асортимент і робота з професійною кухнею.</p>

              <div className="mt-4 grid gap-2">
                {socialPlaceholders.map(({ key, label, badge }) => (
                  <div key={key} className="flex min-h-[50px] items-center justify-between border border-white/15 px-4 text-white transition-colors hover:border-[#b78b3e]/60" title="Посилання буде додано">
                    <span className="flex items-center gap-2.5 text-[0.84rem] font-semibold">
                      {badge}
                      {label}
                    </span>
                    <ArrowUpRight size={17} weight="light" aria-hidden="true" className="text-[#b78b3e]" />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[0.62rem] uppercase tracking-[0.18em] text-white/35">Посилання будуть додані</p>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
