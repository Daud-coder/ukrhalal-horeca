import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { Fragment, useState } from 'react'
import { categories, type Category } from '../data/categories'
import { productsByCategory, type ProductItem } from '../data/products'
import { EASE_OUT, useReveal } from '../hooks/useReveal'
import { withBase } from '../lib/asset'

const GRID_CLASSES = 'grid gap-x-[14px] gap-y-[18px] sm:grid-cols-2 lg:grid-cols-4'

type ProductCardProps = Pick<Category, 'title' | 'image'> & {
  expandable: boolean
  onOpen: () => void
}

function ProductCard({ title, image, expandable, onOpen }: ProductCardProps) {
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
          className="shrink-0 text-[#b8883b] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none"
        />
      </div>
    </>
  )

  if (expandable) {
    return (
      <button type="button" onClick={onOpen} className="group block w-full text-left active:scale-[0.99] transition-transform duration-150 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#b78b3e] motion-reduce:transform-none">
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

function ProductItemCard({ item }: { item: ProductItem }) {
  return (
    <div className="flex flex-col">
      <div className="aspect-square overflow-hidden bg-[#e6e1d8]">
        {item.image && (
          <img src={withBase(item.image)} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
        )}
      </div>
      <div className="mt-2 bg-[#103328] px-3 py-2 text-center text-[0.92rem] font-semibold leading-snug text-white">
        {item.name}
      </div>
      <div className="mt-1.5 self-center rounded-full bg-[#b8883b] px-4 py-1 text-[0.88rem] font-semibold text-white">
        {item.price === null ? 'За запитом' : `${item.price} грн за 1 кг`}
      </div>
    </div>
  )
}

function ProductsSection() {
  const reveal = useReveal()
  const reduce = useReducedMotion()
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const openCategory = categories.find((category) => category.slug === openSlug)
  const openSections = openSlug ? productsByCategory[openSlug] : undefined

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

        {openCategory && openSections ? (
          <motion.div
            key={openCategory.slug}
            initial={reduce ? { opacity: 0 } : { opacity: 0, transform: 'translateY(8px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            className="mt-12"
          >
            <div className="mb-6 flex items-center gap-4">
              <button
                type="button"
                onClick={() => setOpenSlug(null)}
                className="flex min-h-9 items-center gap-2 whitespace-nowrap rounded-[6px] bg-[#103328] px-3 py-2 text-body-sm font-semibold text-white transition-[background-color,transform] duration-200 hover:-translate-y-px hover:bg-[#17392c] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b78b3e] motion-reduce:transform-none"
              >
                <ArrowLeft size={18} weight="bold" aria-hidden="true" />
                Назад
              </button>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#a77b32]">Ціни вказані за 1 кг</p>
            </div>

            {openSections.map((section, sectionIndex) => (
              <div key={section.label ?? sectionIndex} className={sectionIndex > 0 ? 'mt-8' : ''}>
                {section.label && (
                  <h4 className="mb-3 text-[0.85rem] font-semibold uppercase tracking-[0.15em] text-[#103328]/70">{section.label}</h4>
                )}
                <div className={GRID_CLASSES}>
                  {section.items.map((item) => (
                    <ProductItemCard key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, transform: 'translateY(8px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            className={`mt-12 ${GRID_CLASSES} lg:mt-12`}
          >
            {categories.map((category, index) => {
              const sections = productsByCategory[category.slug]
              return (
                <Fragment key={category.slug}>
                  <motion.div {...reveal(index * 0.05)} className={`relative ${index % 2 !== 1 ? 'after:absolute after:-right-[7px] after:inset-y-0 after:w-px after:bg-[#17392c] sm:after:content-[\"\"]' : ''} ${index % 4 !== 3 ? 'lg:after:absolute lg:after:-right-[7px] lg:after:inset-y-0 lg:after:w-px lg:after:bg-[#17392c] lg:after:content-[\"\"]' : 'lg:after:content-none'}`}>
                    <ProductCard
                      title={category.title}
                      image={category.image}
                      expandable={!!sections}
                      onOpen={() => setOpenSlug(category.slug)}
                    />
                  </motion.div>
                </Fragment>
              )
            })}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ProductsSection
