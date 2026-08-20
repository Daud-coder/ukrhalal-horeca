import { ArrowRight } from '@phosphor-icons/react'

type HeroCategoryCardProps = {
  title: string
  image: string
  href: string
}

// Картка побудована як фізична пластина в оправі: зовнішня напівпрозора обойма
// з волосяним кантом, усередині суцільне біле ядро з власним внутрішнім бліком.
// Радіус ядра вирахуваний від радіуса обойми мінус падінг, щоб дуги були концентричні.
function HeroCategoryCard({ title, image, href }: HeroCategoryCardProps) {
  return (
    <a
      href={href}
      className="group block w-full rounded-[1.75rem] bg-white/85 p-1.5 ring-1 ring-ink/[0.06] shadow-[0_22px_48px_-22px_rgba(16,32,26,0.45)] transition-[transform,box-shadow] duration-200 ease-drawer hover:-translate-y-1 hover:shadow-[0_30px_60px_-22px_rgba(16,32,26,0.5)] active:scale-[0.985] motion-reduce:transform-none motion-reduce:transition-none sm:w-[300px]"
    >
      <span className="flex items-center gap-3 rounded-[calc(1.75rem-0.375rem)] bg-white p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[calc(1.75rem-0.75rem)] bg-surface-alt">
          <img src={image} alt="" width="48" height="48" className="h-11 w-11 object-contain" />
        </span>

        <span className="min-w-0 flex-1 font-display text-title font-bold text-ink">
          {title}
        </span>

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft transition-transform duration-200 ease-drawer group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none">
          <ArrowRight size={16} weight="light" aria-hidden="true" className="text-brand" />
        </span>
      </span>
    </a>
  )
}

export default HeroCategoryCard
