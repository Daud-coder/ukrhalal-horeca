import { ArrowUpRight } from '@phosphor-icons/react'
import { motion } from 'motion/react'
import { categories, type Category } from '../data/categories'
import { useReveal } from '../hooks/useReveal'
import { withBase } from '../lib/asset'

type ProductCardProps = Pick<Category, 'title' | 'image'>

function ProductCard({ title, image }: ProductCardProps) {
  return (
    <a href="#contact" className="group block active:scale-[0.99] transition-transform duration-150 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#b78b3e] motion-reduce:transform-none" aria-label={`${title} — отримати консультацію`}>
      <div className="aspect-[1.68/1] overflow-hidden bg-[#e6e1d8]">
        <img src={withBase(image)} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-220 group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
      </div>
      <div className="mt-2 flex min-h-[62px] items-center justify-between gap-4 border-y border-[#17392c] px-3 py-2 md:min-h-[68px]">
        <div className="min-w-0 flex-1 overflow-hidden">
          <h3 style={{ fontFamily: '"Alumni Sans", sans-serif', transform: 'scaleX(0.76)', transformOrigin: 'left center', width: '131.58%' }} className="whitespace-nowrap text-[clamp(2rem,2.5vw,2.85rem)] font-light uppercase leading-none tracking-[0.01em] text-[#103328]">{title}</h3>
        </div>
        <ArrowUpRight size={27} weight="light" aria-hidden="true" className="shrink-0 text-[#b8883b] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transform-none" />
      </div>
    </a>
  )
}

function ProductsSection() {
  const reveal = useReveal()

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
          {categories.map((category, index) => (
            <motion.div {...reveal(index * 0.05)} key={category.slug} className={`relative ${index % 2 !== 1 ? 'after:absolute after:-right-[7px] after:inset-y-0 after:w-px after:bg-[#17392c] sm:after:content-[\"\"]' : ''} ${index % 4 !== 3 ? 'lg:after:absolute lg:after:-right-[7px] lg:after:inset-y-0 lg:after:w-px lg:after:bg-[#17392c] lg:after:content-[\"\"]' : 'lg:after:content-none'}`}>
              <ProductCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
