import { ArrowRight } from '@phosphor-icons/react'

type HeroCategoryCardProps = {
  title: string
  image: string
  href: string
}

function HeroCategoryCard({ title, image, href }: HeroCategoryCardProps) {
  return (
    <a
      href={href}
      className="flex w-full items-center gap-3 rounded-[var(--radius-card)] border border-hairline bg-white p-3 shadow-[0_8px_24px_rgba(26,104,55,0.10)] sm:w-[288px]"
    >
      <img src={image} alt="" width="48" height="48" className="h-12 w-12 shrink-0 object-contain" />
      <span className="min-w-0 flex-1 font-display text-lg font-bold text-ink">{title}</span>
      <ArrowRight size={20} aria-hidden="true" className="shrink-0 text-brand" />
    </a>
  )
}

export default HeroCategoryCard
