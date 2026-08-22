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
    image: '/images/catalog-approved/beef.png',
    featured: true,
  },
  {
    slug: 'lamb',
    title: 'Баранина',
    blurb: "Витримане м'ясо для насичених страв",
    image: '/images/catalog-approved/lamb.png',
    featured: true,
  },
  {
    slug: 'young-lamb',
    title: 'Ягнятина',
    blurb: "Ніжне молоде м'ясо",
    image: '/images/catalog-approved/young-lamb.png',
    featured: false,
  },
  {
    slug: 'chicken',
    title: 'Курка',
    blurb: 'Тушки, філе та розбирання',
    image: '/images/catalog-approved/chicken.png',
    featured: true,
  },
  {
    slug: 'turkey',
    title: 'Індичка',
    blurb: 'Філе та відруби індички',
    image: '/images/catalog-approved/turkey.png',
    featured: false,
  },
  {
    slug: 'steaks',
    title: 'Стейки',
    blurb: 'Відбірні стейки для вашого меню',
    image: '/images/catalog-approved/steaks.png',
    featured: true,
  },
  {
    slug: 'sausages',
    title: 'Ковбаси та сосиски',
    blurb: "Ковбаси і м'ясні нарізки",
    image: '/images/catalog-approved/sausages.png',
    featured: false,
  },
  {
    slug: 'semi',
    title: 'Напівфабрикати',
    blurb: 'Готові до приготування позиції',
    image: '/images/catalog-approved/semi.png',
    featured: false,
  },
];

export const featuredCategories = categories.filter((c) => c.featured);
