export type Category = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  featured: boolean;
};

export const categories: Category[] = [
  {
    slug: 'beef',
    title: 'Яловичина',
    blurb: 'Преміальні відруби та частини',
    image: '/images/categories/beef.webp',
    featured: true,
  },
  {
    slug: 'lamb',
    title: 'Баранина',
    blurb: "Витримане м'ясо для насичених страв",
    image: '/images/categories/lamb.webp',
    featured: true,
  },
  {
    slug: 'young-lamb',
    title: 'Ягнятина',
    blurb: "Ніжне молоде м'ясо",
    image: '/images/categories/young-lamb.webp',
    featured: false,
  },
  {
    slug: 'chicken',
    title: 'Курка',
    blurb: 'Тушки, філе та розбирання',
    image: '/images/categories/chicken.webp',
    featured: true,
  },
  {
    slug: 'turkey',
    title: 'Індичка',
    blurb: 'Філе та відруби індички',
    image: '/images/categories/turkey.webp',
    featured: false,
  },
  {
    slug: 'steaks',
    title: 'Стейки',
    blurb: 'Відбірні стейки для вашого меню',
    image: '/images/categories/steaks.webp',
    featured: true,
  },
  {
    slug: 'sausages',
    title: 'Ковбаси та нарізки',
    blurb: "Ковбаси і м'ясні нарізки",
    image: '/images/categories/sausages.webp',
    featured: false,
  },
  {
    slug: 'semi',
    title: 'Напівфабрикати',
    blurb: 'Готові до приготування позиції',
    image: '/images/categories/semi.webp',
    featured: false,
  },
];

export const featuredCategories = categories.filter((c) => c.featured);
