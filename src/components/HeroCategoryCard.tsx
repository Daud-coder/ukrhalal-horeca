import { ArrowRight } from '@phosphor-icons/react'

type HeroCategoryCardProps = {
  title: string
  blurb: string
  image: string
  href: string
}

function HeroCategoryCard({ title, blurb, image, href }: HeroCategoryCardProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-[var(--radius-card)] border border-hairline bg-white p-[14px] shadow-[0_8px_24px_rgba(26,104,55,0.10)]"
    >
      <img src={image} alt="" width="64" height="64" className="h-16 w-16 shrink-0 object-contain" />
      <span className="min-w-0 flex-1">
        <span className="block font-display font-bold text-ink">{title}</span>
        <span className="mt-1 line-clamp-2 block text-xs text-ink-muted">{blurb}</span>
      </span>
      <ArrowRight size={20} aria-hidden="true" className="shrink-0 text-brand" />
    </a>
  )
}

export default HeroCategoryCard
