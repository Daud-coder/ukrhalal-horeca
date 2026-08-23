import { ArrowUpRight } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { Fragment, useState } from 'react'
import { categories, type Category } from '../data/categories'
import { productsByCategory } from '../data/products'
import { EASE_OUT, useReveal } from '../hooks/useReveal'
import { withBase } from '../lib/asset'

type ProductCardProps = Pick<Category, 'title' | 'image'> & {
  expandable: boolean
  open: boolean
  onToggle: () => void
}

function ProductCard({ title, image, expandable, open, onToggle }: ProductCardProps) {
  const content = (
    <>
      <div className="aspect-[1.68/1] overflow-hidden bg-[#e6e1d8]">
        <img src={withBase(image)} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-220 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
      </div>
      <div className="mt-2 flex min-h-[62px] items-center justify-between gap-4 border-y border-[#17392c] px-3 py-2 md:min-h-[68px]">
        <div className="min-w-0 flex-1 overflow-hidden">
          <h3 style={{ fontFamily: '"Alumni Sans", sans-serif', transform: 'scaleX(0.76)', transformOrigin: 'left center', width: '131.58%' }} className="whitespace-nowrap text-[clamp(2rem,2.5vw,2.85rem)] font-light uppercase leading-none tracking-[0.01em] text-[#103328]">{title}</h3>
        </div>
        <ArrowUpRight
          size={27}
          weight="light"
          aria-hidden="true"
          className={`shrink-0 text-[#b8883b] transition-transform duration-300 motion-reduce:transform-none ${expandable ? (open ? 'rotate-180' : '') : 'group-hover:-translate-y-1 group-hover:translate-x-1'}`}
        />
      </div>
    </>
  )

  if (expandable) {
    return (
      <button type="button" onClick={onToggle} aria-expanded={open} className="group block w-full text-left active:scale-[0.99] transition-transform duration-150 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#b78b3e] motion-reduce:transform-none">
        {content}
      </button>
    )
  }

  return (
    <a href="#contact" className="group block active:scale-[0.99] transition-transform duration-150 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#b78b3e] motion-reduce:transform-none" aria-label={`${title} — отримати консультацію`}>
      {content}
    </a>
  )
}

function ProductsSection() {
  const reveal = useReveal()
  const reduce = useReducedMotion()
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  return (
    <section id="products" className="scroll-mt-24 bg-[#f3eee4] py-14 text-[#103328] md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-7 lg:px-10">
        <motion.div {...reveal()} className="grid gap-8 lg:grid-cols-[minmax(0,1.78fr)_minmax(280px,0.52fr)] lg:items-end lg:gap-14">
          <div>
            <div className="flex items-center gap-4 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#a77b32]">
              <span className="h-px w-12 bg-[#b8883b]" aria-hidden="true" />
              Каталог продукції
            </div>
            <div className="mt-6 overflow-visible">
              <h2 style={{ fontFamily: '"Alumni Sans", sans-serif', transform: 'scaleX(0.74)', transformOrigin: 'left center', width: '135.14%' }} className="whitespace-normal text-[clamp(5rem,7vw,7rem)] font-light uppercase leading-[0.82] tracking-[0.01em] text-[#103328] lg:whitespace-nowrap">
                М’ясо для професійної кухні
              </h2>
            </div>
          </div>
          <p className="max-w-[430px] border-l border-[#b8883b] py-1 pl-6 text-[clamp(1rem,1.35vw,1.28rem)] leading-[1.55] text-[#3f4d47] lg:mb-2">
            Відібрані відруби та м’ясні вироби для стабільної якості страв у ресторанах, готелях і закладах громадського харчування.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-x-[14px] gap-y-[18px] sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {categories.map((category, index) => {
            const sections = productsByCategory[category.slug]
            const isOpen = openSlug === category.slug
            return (
              <Fragment key={category.slug}>
                <motion.div {...reveal(index * 0.05)} className={`relative ${index % 2 !== 1 ? 'after:absolute after:-right-[7px] after:inset-y-0 after:w-px after:bg-[#17392c] sm:after:content-[\"\"]' : ''} ${index % 4 !== 3 ? 'lg:after:absolute lg:after:-right-[7px] lg:after:inset-y-0 lg:after:w-px lg:after:bg-[#17392c] lg:after:content-[\"\"]' : 'lg:after:content-none'}`}>
                  <ProductCard
                    title={category.title}
                    image={category.image}
                    expandable={!!sections}
                    open={isOpen}
                    onToggle={() => setOpenSlug((prev) => (prev === category.slug ? null : category.slug))}
                  />
                </motion.div>
                {sections && isOpen && (
                  <motion.div
                    initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25, ease: EASE_OUT }}
                    className="col-span-full overflow-hidden"
                  >
                    <div className="rounded-[8px] border border-[#17392c]/15 bg-white/70 p-4 sm:p-6">
                      <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#a77b32]">Ціни вказані за 1 кг</p>
                      {sections.map((section, sectionIndex) => (
                        <div key={section.label ?? sectionIndex} className={sectionIndex > 0 ? 'mt-6' : ''}>
                          {section.label && (
                            <h4 className="mb-2 text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-[#103328]/70">{section.label}</h4>
                          )}
                          <ul>
                            {section.items.map((item) => (
                              <li key={item.name} className="flex items-center justify-between gap-3 border-b border-[#17392c]/10 py-3 last:border-b-0">
                                <div className="flex min-w-0 items-center gap-3">
                                  {item.image ? (
                                    <img src={withBase(item.image)} alt="" className="size-[72px] shrink-0 rounded-[6px] bg-[#e6e1d8] object-cover" />
                                  ) : (
                                    <div className="size-[72px] shrink-0 rounded-[6px] bg-[#e6e1d8]" aria-hidden="true" />
                                  )}
                                  <span className="truncate text-[1rem] text-[#103328]">{item.name}</span>
                                </div>
                                <span className={`shrink-0 whitespace-nowrap text-[1rem] ${item.price === null ? 'italic text-[#3f4d47]/70' : 'font-semibold text-[#103328]'}`}>
                                  {item.price === null ? 'За запитом' : `${item.price} грн`}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
