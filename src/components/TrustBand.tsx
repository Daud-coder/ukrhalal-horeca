import { Handshake, Truck, Users } from '@phosphor-icons/react'

const trustItems = [
  {
    icon: Users,
    title: '200+',
    description: 'Постійних клієнтів',
    tabular: true,
  },
  {
    icon: Truck,
    title: 'Своя логістика',
    description: 'Оперативна доставка',
    tabular: false,
  },
  {
    icon: Handshake,
    title: 'Індивідуальний підхід',
    description: 'До кожного закладу',
    tabular: false,
  },
]

function TrustBand() {
  return (
    <section className="border-y border-hairline bg-surface-alt py-10">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {trustItems.map(({ icon: Icon, title, description, tabular }) => (
          <div key={title} className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-soft ring-1 ring-brand/10">
              <Icon size={24} weight="light" aria-hidden="true" className="text-brand" />
            </span>
            <div>
              <p className={`text-h3 font-bold text-ink${tabular ? ' tabular' : ''}`}>{title}</p>
              <p className="text-body-sm text-ink-muted">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBand
