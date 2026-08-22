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
      className="group flex min-h-20 w-full items-center gap-3 rounded-card border border-hairline bg-white/95 p-3 transition-[border-color,background-color,transform] duration-200 ease-drawer hover:-translate-y-px hover:border-brand/30 hover:bg-white active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none lg:w-[292px]"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-surface-alt">
        <img src={image} alt="" width="48" height="48" className="h-11 w-11 object-contain" />
      </span>

      <span className="min-w-0 flex-1 font-display text-body font-semibold text-ink">
        {title}
      </span>

      <ArrowRight size={18} weight="light" aria-hidden="true" className="shrink-0 text-brand transition-transform duration-200 ease-drawer group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
    </a>
  )
}

export default HeroCategoryCard
