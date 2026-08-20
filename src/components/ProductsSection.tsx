import { motion, useReducedMotion } from 'motion/react'
import { categories, type Category } from '../data/categories'

type ProductCardProps = Pick<Category, 'slug' | 'title' | 'blurb' | 'image'>

function ProductCard({ slug, title, blurb, image }: ProductCardProps) {
  return (
    <a
      href="#contact"
      className="rounded-[1.75rem] bg-white p-1.5 shadow-[0_18px_40px_-24px_rgba(16,32,26,0.35)] ring-1 ring-ink/[0.06]"
    >
      <div className="overflow-hidden rounded-[calc(1.75rem-0.375rem)]">
        <div className="aspect-square bg-surface-alt">
          <img
            src={image || `/images/categories/${slug}.webp`}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain p-6"
          />
        </div>
        <div className="p-4">
          <h3 className="font-display text-title font-bold text-ink">{title}</h3>
          <p className="mt-1 text-caption text-ink-muted">{blurb}</p>
        </div>
      </div>
    </a>
  )
}

function ProductsSection() {
  const reduce = useReducedMotion()

  return (
    <section id="products" className="bg-white py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0, ease: [0.32, 0.72, 0, 1] }}
        >
          <h2 className="font-display text-h2 font-bold text-ink md:text-h2-lg">HoReCa продукція</h2>
        </motion.div>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.32, 0.72, 0, 1] }}
        >
          <p className="measure mt-4 text-body text-ink-muted">
            Повний асортимент халяльного м'яса для закладів харчування. Обсяги і ціни узгоджуємо під ваше меню.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.05, ease: [0.32, 0.72, 0, 1] }}
            >
              <ProductCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
