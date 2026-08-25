// Джерело цін: УкрХаляль_Прайс_HoReCa_19.08.26_Premium.pdf, актуально на 19.08.2026.
// Ціни за 1 кг, грн. Оновлювати цей файл при отриманні нового прайс-листа.
// Джерело фото: затверджена фотосесія (стиль — темна дерев'яна дошка), файли
// gen-*.jpg у public/images/products/; частина позицій ще на фото з першого
// заходу (PDF-каталог) або без фото (заглушка) — донабір триває.

export type ProductItem = {
  name: string;
  price: number | null; // null = "за запитом"
  image?: string; // з'явиться, коли будуть реальні фото позицій
};

export type ProductSection = {
  label?: string;
  items: ProductItem[];
};

export const productsByCategory: Record<string, ProductSection[]> = {
  beef: [
    {
      items: [
        { name: 'Лопатка без кістки', price: 307, image: '/images/products/gen-lopatka-bez-kistky.jpg' },
        { name: 'Лопатка зачищена', price: 317, image: '/images/products/gen-lopatka-zachyshchena.jpg' },
        { name: 'Ошийок', price: 291, image: '/images/products/gen-oshyiok.jpg' },
        { name: 'Задня частина', price: 325, image: '/images/products/gen-zadnya-chastyna.jpg' },
        { name: 'Задня частина зачищена', price: 350, image: '/images/products/beef-zadnya-chastyna-zachyshchena.jpg' },
        { name: 'Яловичина Вищий сорт Шматок', price: 360, image: '/images/products/gen-vyshchyi-sort-shmatok.jpg' },
        { name: "Куш баши (м'ясо кускове)", price: 365, image: '/images/products/gen-kushbashi.jpg' },
        { name: 'Контрнуар (Ленивець)', price: 431, image: '/images/products/gen-kontrnuar.jpg' },
        { name: 'Контрфіле повна зачистка ТОВСТЕ', price: 593, image: '/images/products/gen-kontrfile-povna-zachystka.jpg' },
        { name: 'Контрфіле повна зачистка ТОНКЕ', price: 528, image: '/images/products/gen-kontrfile-tonka-zachystka.jpg' },
        { name: 'Контрфіле с жирком та косою (біток)', price: 457, image: '/images/products/gen-kontrfile-z-zhyrkom.jpg' },
        { name: 'Качалка (Голяшка)', price: 272, image: '/images/products/gen-kachalka.jpg' },
        { name: 'Філе лопатки (Морковка)', price: 355, image: '/images/products/gen-file-lopatky.jpg' },
        { name: 'Антрекот', price: 332, image: '/images/products/gen-antrekot.jpg' },
        { name: "Грудинка Н/К (М'ясо на кістці)", price: 244, image: '/images/products/gen-hrudynka-nk.jpg' },
        { name: 'Грудинка без кістки', price: 307, image: '/images/products/beef-hrudynka-bez-kistky.jpg' },
        { name: 'Ребро звичайне', price: 244, image: '/images/products/gen-rebra-zvychaini.jpg' },
        { name: 'Ребро прайм', price: 282, image: '/images/products/gen-rebra-prime.jpg' },
        { name: 'Ребро без кістки', price: 263, image: '/images/products/gen-rebro-bez-kistky.jpg' },
        { name: 'Бріскет', price: 322, image: '/images/products/gen-brisket.jpg' },
        { name: 'Бріскет Прайм (4 кг+)', price: 382, image: '/images/products/gen-brisket-prime.jpg' },
        { name: 'Пашина зачищена', price: 272, image: '/images/products/gen-pashyna.jpg' },
        { name: 'Вирізка 1–1,5 кг', price: 875, image: '/images/products/gen-vyrizka.jpg' },
        { name: 'Вирізка 1,5–1,8 кг', price: 915, image: '/images/products/gen-vyrizka.jpg' },
        { name: 'Вирізка 1,8–2,2 кг', price: 975, image: '/images/products/gen-vyrizka.jpg' },
        { name: 'Вирізка без голови', price: 1265, image: '/images/products/gen-vyrizka-bez-holovy.jpg' },
        { name: 'Голова вирізки', price: 712, image: '/images/products/gen-holova-vyrizky.jpg' },
        { name: 'Фарш з яловичини', price: 254, image: '/images/products/gen-farsh.jpg' },
        { name: 'Фарш Мікс (яловичина + баранина)', price: 273, image: '/images/products/gen-farsh-mix.jpg' },
        { name: 'Вищий сорт (м\'ясо обрізь трімінг)', price: 302, image: '/images/products/gen-vyshchyi-sort.jpg' },
        { name: '1 сорт (трімінг 10% жиру)', price: 260, image: '/images/products/gen-1-sort.jpg' },
        { name: '2 сорт (трімінг 20% жиру)', price: 232, image: '/images/products/gen-2-sort.jpg' },
      ],
    },
    {
      label: 'Субпродукти яловичини',
      items: [
        { name: 'Щока', price: 355, image: '/images/products/gen-shchoka.jpg' },
        { name: 'Щока зачищена', price: 410, image: '/images/products/gen-shchoka-zachyshchena.jpg' },
        { name: 'Язик', price: 395, image: '/images/products/gen-yazyk.jpg' },
        { name: 'Печінка', price: 170, image: '/images/products/gen-pechinka.jpg' },
        { name: 'Серце', price: 177, image: '/images/products/gen-sertse.jpg' },
        { name: 'Ноги зачищені (копита)', price: 182, image: '/images/products/gen-nohy-chyshcheni.jpg' },
        { name: 'Хвіст', price: 172, image: '/images/products/gen-hvist.jpg' },
        { name: 'Мозок', price: 187, image: '/images/products/gen-mozok.jpg' },
        { name: "Яйця (сім'яники)", price: 187, image: '/images/products/gen-yaytsya.jpg' },
        { name: 'Жир', price: 125, image: '/images/products/gen-zhyr.jpg' },
        { name: 'Кістки', price: 64 },
        { name: 'Човники кістки', price: 140, image: '/images/products/gen-kistky-chovnyky.jpg' },
      ],
    },
  ],
  steaks: [
    {
      items: [
        { name: 'Фланк стейк', price: 382, image: '/images/products/gen-flank.jpg' },
        { name: 'Особуко стейк', price: 292, image: '/images/products/gen-osobuko.jpg' },
        { name: 'Рибай СЕЛЕКТ волога витримка', price: 610, image: '/images/products/gen-steak-ribai-select.jpg' },
        { name: 'Рибай ЧОЙС волога витримка', price: 822 },
        { name: 'Рибай ПРАЙМ волога витримка', price: 1012, image: '/images/products/gen-steak-ribai-prime.jpg' },
        { name: 'Клаб стейк', price: 665, image: '/images/products/gen-steak-klab.jpg' },
        { name: 'Нью-Йорк СЕЛЕКТ волога витримка', price: 595 },
        { name: 'Нью-Йорк ЧОЙС волога витримка', price: 680 },
        { name: 'Нью-Йорк ПРАЙМ волога витримка', price: 835, image: '/images/products/gen-steak-ny-prime.jpg' },
        { name: 'Ти-Бон', price: 810, image: '/images/products/gen-steak-ti-bone.jpg' },
        { name: 'Портер-Хаус', price: 902, image: '/images/products/gen-steak-porterhouse.jpg' },
        { name: 'Стейк Філе Міньйон', price: 1265 },
        { name: 'Томагавк стейк ПРАЙМ', price: 862 },
        { name: 'Ковбой СЕЛЕКТ', price: 602 },
        { name: 'Ковбой ЧОЙС', price: 712, image: '/images/products/gen-steak-kovboy-choys.jpg' },
        { name: 'Ковбой ПРАЙМ', price: 912 },
        { name: 'Піканья стейк', price: 480 },
      ],
    },
  ],
  lamb: [
    {
      items: [
        { name: 'Лопатка на кістці', price: 327, image: '/images/products/gen-lamb-lopatka-na-kistci.jpg' },
        { name: 'Лопатка без кістки', price: 370, image: '/images/products/gen-lamb-lopatka-bez-kistky.jpg' },
        { name: 'Задня частина без кістки', price: 441, image: '/images/products/gen-lamb-zadnya-bez-kistky.jpg' },
        { name: 'Задня частина на кістці', price: 354, image: '/images/products/gen-lamb-zadnya-na-kistci.jpg' },
        { name: 'Каре (12–13 ребер)', price: 590, image: '/images/products/gen-lamb-kare.jpg' },
        { name: 'Каре зачищене від жиру', price: 852 },
        { name: 'Гуляш', price: 290, image: '/images/products/gen-lamb-hulyash.jpg' },
        { name: 'Фарш', price: 295, image: '/images/products/gen-lamb-farsh.jpg' },
        { name: 'Ребро', price: 282, image: '/images/products/lamb-rebro.jpg' },
        { name: 'Ребро та грудина без кістки', price: 302, image: '/images/products/lamb-rebro.jpg' },
        { name: 'Ошийок на кістці', price: 301 },
        { name: 'Ошийок без кістки', price: 360 },
        { name: 'Біток без кістки (контрфіле)', price: 590, image: '/images/products/gen-lamb-bitok.jpg' },
        { name: 'Рулька ПЕРЕДНЯ', price: 360 },
        { name: 'Рулька ЗАДНЯ', price: 440 },
        { name: 'Вирізка', price: 570 },
        { name: 'Тушка баранини', price: null },
      ],
    },
    {
      label: 'Субпродукти баранини',
      items: [
        { name: 'Печінка', price: 241, image: '/images/products/gen-lamb-pechinka.jpg' },
        { name: 'Серце', price: 207, image: '/images/products/gen-lamb-sertse.jpg' },
        { name: 'Язик', price: 485 },
        { name: 'Курдюк', price: 535, image: '/images/products/gen-kurdyuk.jpg' },
        { name: 'Жир', price: 154, image: '/images/products/gen-lamb-zhyr.jpg' },
        { name: 'Жир СІТКА', price: 187, image: '/images/products/gen-lamb-zhyr.jpg' },
      ],
    },
  ],
  'young-lamb': [
    {
      items: [
        { name: 'Лопатка на кістці', price: 335, image: '/images/products/gen-younglamb-lopatka-na-kistci.jpg' },
        { name: 'Лопатка без кістки', price: 384 },
        { name: 'Задня частина без кістки', price: 452, image: '/images/products/gen-younglamb-zadnya-bez-kistky.jpg' },
        { name: 'Задня частина на кістці', price: 367, image: '/images/products/gen-younglamb-zadnya-na-kistci.jpg' },
        { name: 'Каре (12–13 ребер)', price: 641 },
        { name: 'Гуляш', price: 290, image: '/images/products/gen-younglamb-hulyash.jpg' },
        { name: 'Фарш', price: 297, image: '/images/products/gen-younglamb-farsh.jpg' },
        { name: 'Ребро', price: 290, image: '/images/products/gen-younglamb-rebro.jpg' },
        { name: 'Вирізка', price: 585 },
        { name: 'Тушка ягнятини', price: null },
      ],
    },
  ],
  chicken: [
    {
      items: [
        { name: 'Філе', price: 219, image: '/images/products/gen-chicken-file.jpg' },
        { name: 'Філе на шкірі', price: 213, image: '/images/products/gen-chicken-file-zi-shkuroyu.jpg' },
        { name: 'Бедро на кістці', price: 194, image: '/images/products/chicken-stehno.jpg' },
        { name: 'Бедро без кістки', price: 214, image: '/images/products/gen-chicken-stehno-bez-kistky.jpg' },
        { name: 'Бедро без кістки та без шкіри', price: 219, image: '/images/products/gen-chicken-stehno-bez-kistky-shkiry.jpg' },
        { name: 'Тушка', price: 159, image: '/images/products/gen-chicken-tushka-kuryacha.jpg' },
        { name: 'Тушка КУРЧА', price: 209, image: '/images/products/gen-chicken-tushka-kurcha.jpg' },
        { name: 'Окіст', price: 169, image: '/images/products/gen-chicken-okist.jpg' },
        { name: 'Окіст без кістки', price: 194, image: '/images/products/gen-chicken-okist-bez-kistky.jpg' },
        { name: 'Фарш', price: 169, image: '/images/products/gen-chicken-farsh.jpg' },
        { name: 'Гомілка', price: 109, image: '/images/products/gen-chicken-homilka.jpg' },
        { name: 'Крило (2 фаланги)', price: 109, image: '/images/products/gen-chicken-krylo.jpg' },
        { name: 'Печінка', price: 148, image: '/images/products/gen-chicken-pechinka.jpg' },
        { name: 'Серце', price: 148, image: '/images/products/gen-chicken-sertse.jpg' },
      ],
    },
  ],
  turkey: [
    {
      items: [
        { name: 'Філе', price: 384, image: '/images/products/gen-turkey-file.jpg' },
        { name: 'Бедро індика на кістці', price: 271 },
        { name: 'Бедро індика без кістки', price: 356 },
        { name: 'Тушка', price: null, image: '/images/products/turkey-tushka.jpg' },
      ],
    },
  ],
};
