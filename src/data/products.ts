// Джерело цін: УкрХаляль_Прайс_HoReCa_19.08.26_Premium.pdf та
// УкрХаляль_Прайс_Ковбаси_Напівфабрикати_Преміум.pdf, актуально на 19.08.2026.
// Ціни за 1 кг, грн, якщо не вказано інший unit. Оновлювати цей файл при
// отриманні нового прайс-листа.
// Джерело фото: затверджена фотосесія (стиль — темна дерев'яна дошка), файли
// gen-*.jpg у public/images/products/; частина позицій ще на фото з першого
// заходу (PDF-каталог) або без фото (заглушка) — донабір триває. Ковбаси та
// напівфабрикати поки без фото — окремої фотосесії для них не було.

export type ProductItem = {
  name: string;
  price: number | null; // null = "за запитом"
  image?: string; // з'явиться, коли будуть реальні фото позицій
  unit?: string; // напр. 'уп.' або 'шт.'; за замовчуванням "1 кг"
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
        { name: 'Кістки', price: 64, image: '/images/products/gen-beef-kistky.jpg' },
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
        { name: 'Рибай ЧОЙС волога витримка', price: 822, image: '/images/products/gen-steak-ribai-choys.jpg' },
        { name: 'Рибай ПРАЙМ волога витримка', price: 1012, image: '/images/products/gen-steak-ribai-prime.jpg' },
        { name: 'Клаб стейк', price: 665, image: '/images/products/gen-steak-klab.jpg' },
        { name: 'Нью-Йорк СЕЛЕКТ волога витримка', price: 595, image: '/images/products/gen-steak-ny-select.jpg' },
        { name: 'Нью-Йорк ЧОЙС волога витримка', price: 680, image: '/images/products/gen-steak-ny-choys.jpg' },
        { name: 'Нью-Йорк ПРАЙМ волога витримка', price: 835, image: '/images/products/gen-steak-ny-prime.jpg' },
        { name: 'Ти-Бон', price: 810, image: '/images/products/gen-steak-ti-bone.jpg' },
        { name: 'Портер-Хаус', price: 902, image: '/images/products/gen-steak-porterhouse.jpg' },
        { name: 'Стейк Філе Міньйон', price: 1265, image: '/images/products/gen-steak-file-minyon.jpg' },
        { name: 'Томагавк стейк ПРАЙМ', price: 862, image: '/images/products/gen-steak-tamahavk-prime.jpg' },
        { name: 'Ковбой СЕЛЕКТ', price: 602, image: '/images/products/gen-steak-kovboy-select.jpg' },
        { name: 'Ковбой ЧОЙС', price: 712, image: '/images/products/gen-steak-kovboy-choys.jpg' },
        { name: 'Ковбой ПРАЙМ', price: 912, image: '/images/products/gen-steak-kovboy-prime.jpg' },
        { name: 'Піканья стейк', price: 480, image: '/images/products/gen-steak-pikanya.jpg' },
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
        { name: 'Каре зачищене від жиру', price: 852, image: '/images/products/gen-lamb-kare-zachyshchene.jpg' },
        { name: 'Гуляш', price: 290, image: '/images/products/gen-lamb-hulyash.jpg' },
        { name: 'Фарш', price: 295, image: '/images/products/gen-lamb-farsh.jpg' },
        { name: 'Ребро', price: 282, image: '/images/products/lamb-rebro.jpg' },
        { name: 'Ребро та грудина без кістки', price: 302, image: '/images/products/lamb-rebro.jpg' },
        { name: 'Ошийок на кістці', price: 301, image: '/images/products/gen-lamb-oshyiok-na-kistci.jpg' },
        { name: 'Ошийок без кістки', price: 360, image: '/images/products/gen-lamb-oshyiok-bez-kistky.jpg' },
        { name: 'Біток без кістки (контрфіле)', price: 590, image: '/images/products/gen-lamb-bitok.jpg' },
        { name: 'Рулька ПЕРЕДНЯ', price: 360, image: '/images/products/gen-lamb-rulka-perednya.jpg' },
        { name: 'Рулька ЗАДНЯ', price: 440, image: '/images/products/gen-lamb-rulka-zadnya.jpg' },
        { name: 'Вирізка', price: 570 },
        { name: 'Тушка баранини', price: null, image: '/images/products/gen-lamb-tushka.jpg' },
      ],
    },
    {
      label: 'Субпродукти баранини',
      items: [
        { name: 'Печінка', price: 241, image: '/images/products/gen-lamb-pechinka.jpg' },
        { name: 'Серце', price: 207, image: '/images/products/gen-lamb-sertse.jpg' },
        { name: 'Язик', price: 485, image: '/images/products/gen-lamb-yazyk.jpg' },
        { name: 'Курдюк', price: 535, image: '/images/products/gen-kurdyuk.jpg' },
        { name: 'Жир', price: 154, image: '/images/products/gen-lamb-zhyr.jpg' },
        { name: 'Жир СІТКА', price: 187, image: '/images/products/gen-lamb-zhyr-sitka.jpg' },
      ],
    },
  ],
  'young-lamb': [
    {
      items: [
        { name: 'Лопатка на кістці', price: 335, image: '/images/products/gen-younglamb-lopatka-na-kistci.jpg' },
        { name: 'Лопатка без кістки', price: 384, image: '/images/products/gen-younglamb-lopatka-bez-kistky.jpg' },
        { name: 'Задня частина без кістки', price: 452, image: '/images/products/gen-younglamb-zadnya-bez-kistky.jpg' },
        { name: 'Задня частина на кістці', price: 367, image: '/images/products/gen-younglamb-zadnya-na-kistci.jpg' },
        { name: 'Каре (12–13 ребер)', price: 641, image: '/images/products/gen-younglamb-kare.jpg' },
        { name: 'Гуляш', price: 290, image: '/images/products/gen-younglamb-hulyash.jpg' },
        { name: 'Фарш', price: 297, image: '/images/products/gen-younglamb-farsh.jpg' },
        { name: 'Ребро', price: 290, image: '/images/products/gen-younglamb-rebro.jpg' },
        { name: 'Вирізка', price: 585, image: '/images/products/gen-younglamb-vyrizka.jpg' },
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
        { name: 'Бедро індика на кістці', price: 271, image: '/images/products/gen-turkey-stehno-na-kistci.jpg' },
        { name: 'Бедро індика без кістки', price: 356, image: '/images/products/gen-turkey-stehno-bez-kistky.jpg' },
        { name: 'Тушка', price: null, image: '/images/products/turkey-tushka.jpg' },
      ],
    },
  ],
  sausages: [
    {
      label: 'Копченості та паштети',
      items: [
        { name: 'Паштет курячий (УкрХаляль)', price: 200 },
        { name: 'Грудинка теляча копчена (крафт)', price: 500, image: '/images/products/sausages-hrudynka-teliacha-kopchena-kraft.jpg' },
        { name: 'Ребро копчене (крафт)', price: 410 },
        { name: 'Балик теляч. копчений (крафт)', price: 1045, image: '/images/products/sausages-balyk-teliach-kopchenyi-kraft.jpg' },
        { name: 'Джерки яловичі (ворчестер)', price: 1650, image: '/images/products/sausages-dzherky-ialovychi-vorchester.jpg' },
        { name: 'Джерки курячі', price: 1650, image: '/images/products/sausages-dzherky-kuriachi.jpg' },
        { name: 'Крило куряче копчене (УкрХаляль)', price: 290 },
        { name: 'Гомілка копчена (УкрХаляль)', price: 320 },
        { name: 'Філе Янтарне с/к (УкрХаляль)', price: 650, image: '/images/products/sausages-file-iantarne-s-k-ukrkhalial.jpg' },
      ],
    },
    {
      label: 'Ковбаси варені',
      items: [
        { name: 'Ковбаса Лікарська в/с (УкрХаляль)', price: 380 },
        { name: 'Ковбаса Елітна вар.', price: 447 },
        { name: 'Шинка Делікатесна в/с (УкрХаляль)', price: 405 },
      ],
    },
    {
      label: 'Преміум-ВІ',
      items: [
        { name: 'ВІ Махан (конина)', price: 840 },
        { name: 'ВІ Курхан', price: 800, image: '/images/products/sausages-vi-kurkhan.jpg' },
        { name: 'ВІ Салямі яловича с/к', price: 800 },
        { name: 'ВІ Кримські', price: 305, image: '/images/products/sausages-vi-krymski.jpg' },
        { name: 'ВІ Болгарська', price: 375, image: '/images/products/sausages-vi-bolharska.jpg' },
      ],
    },
    {
      label: 'Ковбаски',
      items: [
        { name: 'Мюнхенські ковбаски (УкрХаляль)', price: 400, image: '/images/products/sausages-miunkhenski-kovbasky-ukrkhalial.jpg' },
        { name: 'Мюнхенські ковбаски з сиром (УкрХаляль)', price: 410, image: '/images/products/sausages-miunkhenski-kovbasky-z-syrom-ukrkhalial.jpg' },
        { name: 'Мисливські ковбаски', price: 300, image: '/images/products/sausages-myslyvski-kovbasky.jpg' },
        { name: 'Баварські ковбаски', price: 310, image: '/images/products/sausages-bavarski-kovbasky.jpg' },
        { name: 'Баварські ковбаски з сиром', price: 330, image: '/images/products/sausages-bavarski-kovbasky-z-syrom.jpg' },
      ],
    },
    {
      label: 'Сосиски та сардельки',
      items: [
        { name: 'Сосиски молочні', price: 275, image: '/images/products/sausages-sosysky-molochni.jpg' },
        { name: 'Сосиски з сиром', price: 345, image: '/images/products/sausages-sosysky-z-syrom.jpg' },
        { name: 'Сосиски Дитячі в/с (УкрХаляль)', price: 342, image: '/images/products/sausages-sosysky-dytiachi-v-s-ukrkhalial.jpg' },
        { name: 'Сардельки «Житомирські» в/с (УкрХаляль)', price: 360 },
      ],
    },
    {
      label: 'Ковбаси Н/К та С/К',
      items: [
        { name: 'Столична н/к в/с (УкрХаляль)', price: 570 },
        { name: 'Віденська н/к 1с (УкрХаляль)', price: 455 },
        { name: 'Салямі Київська н/к (УкрХаляль)', price: 360 },
        { name: 'Голандська з сиром', price: 540, image: '/images/products/sausages-holandska-z-syrom.jpg' },
        { name: 'Татарська в/с', price: 520, image: '/images/products/sausages-tatarska-v-s.jpg' },
        { name: 'Ковбаса Харківська с/к', price: 730, image: '/images/products/sausages-kovbasa-kharkivska-s-k.jpg' },
      ],
    },
    {
      label: 'Нові позиції',
      items: [
        { name: 'Шинка Лідер', price: 430 },
        { name: 'Дитячі Лідер', price: 310 },
        { name: 'Молочна ковбаса', price: 400 },
        { name: 'Сервелат Баварський', price: 420, image: '/images/products/sausages-servelat-bavarskyi.jpg' },
        { name: 'Сардельки телячі', price: 360, image: '/images/products/sausages-sardelky-teliachi.jpg' },
      ],
    },
  ],
  semi: [
    {
      label: 'Пельмені',
      items: [
        { name: 'Пельмені курячі (900 г)', price: 255, unit: 'уп.', image: '/images/products/semi-pelmeni-kuriachi-900-h.jpg' },
        { name: 'Пельмені яловичі (900 г)', price: 260, unit: 'уп.', image: '/images/products/semi-pelmeni-ialovychi-900-h.jpg' },
        { name: 'Пельмені з баранини (900 г)', price: 280, unit: 'уп.', image: '/images/products/semi-pelmeni-z-baranyny-900-h.jpg' },
        { name: "Пельмені Мікс (ялов.+курка) 900 г", price: 260, unit: 'уп.', image: '/images/products/semi-pelmeni-miks-ialov-kurka-900-h.jpg' },
        { name: 'Пельмені з індички 500 г', price: 193, unit: 'уп.', image: '/images/products/semi-pelmeni-z-indychky-500-h.jpg' },
        { name: 'Міні пельмені з курятиною', price: 170, unit: 'шт.' },
        { name: 'Міні пельмені з яловичиною', price: 175, unit: 'шт.' },
        { name: 'Міні пельмені з баранини', price: 180, unit: 'шт.' },
        { name: 'Пельмені Малюкам (400 г)', price: 190, unit: 'уп.', image: '/images/products/semi-pelmeni-maliukam-400-h.jpg' },
      ],
    },
    {
      label: 'Самса',
      items: [
        { name: 'Самса курка', price: 295, unit: 'шт.', image: '/images/products/semi-samsa-kurka.jpg' },
        { name: 'Самса яловича', price: 310, unit: 'шт.', image: '/images/products/semi-samsa-ialovycha.jpg' },
        { name: 'Самса з бараниною', price: 330, unit: 'шт.', image: '/images/products/semi-samsa-z-baranynoiu.jpg' },
        { name: 'Міні самса з куркою 500 г', price: 175, unit: 'уп.', image: '/images/products/semi-mini-samsa-z-kurkoiu-500-h.jpg' },
        { name: 'Міні самса з телятиною 500 г', price: 180, unit: 'уп.', image: '/images/products/semi-mini-samsa-z-teliatynoiu-500-h.jpg' },
        { name: 'Міні самса з бараниною 500 г', price: 190, unit: 'уп.', image: '/images/products/semi-mini-samsa-z-baranynoiu-500-h.jpg' },
      ],
    },
    {
      label: 'Страви та вироби',
      items: [
        { name: 'Хінкалі', price: 275, image: '/images/products/semi-khinkali.jpg' },
        { name: 'Манти з телятиною', price: 275, unit: 'уп.', image: '/images/products/semi-manty-z-teliatynoiu.jpg' },
        { name: 'Долма', price: 380, unit: 'уп.', image: '/images/products/semi-dolma.jpg' },
        { name: 'Голубці з яловичиною', price: 310, unit: 'уп.', image: '/images/products/semi-holubtsi-z-ialovychynoiu.jpg' },
        { name: 'Чебуреки яловичі 400 г', price: 160, unit: 'уп.', image: '/images/products/semi-chebureky-ialovychi-400-h.jpg' },
        { name: 'Люля-кебаб з яловичини', price: 280, unit: 'уп.' },
      ],
    },
    {
      label: 'Дитячі та снекові',
      items: [
        { name: 'Нагетси курячі (400 г)', price: 170, unit: 'уп.' },
        { name: 'Тефтельки Дитячі (400 г)', price: 185, unit: 'уп.', image: '/images/products/semi-teftelky-dytiachi-400-h.jpg' },
        { name: 'Сирники ванільні (400 г)', price: 175, unit: 'уп.', image: '/images/products/semi-syrnyky-vanilni-400-h.jpg' },
        { name: 'Млинці з куркою', price: 170, unit: 'уп.', image: '/images/products/semi-mlyntsi-z-kurkoiu.jpg' },
        { name: 'Міні млинці з сиром 600 г', price: 325, unit: 'уп.', image: '/images/products/semi-mini-mlyntsi-z-syrom-600-h.jpg' },
      ],
    },
    {
      label: 'Бургери',
      items: [
        { name: 'Бургер курячий', price: 230, image: '/images/products/semi-burher-kuriachyi.jpg' },
        { name: 'Бургер яловичина охолоджений', price: 255, image: '/images/products/semi-burher-ialovychyna-okholodzhenyi.jpg' },
        { name: 'Бургер Мікс (баранина+яловичина)', price: 265 },
      ],
    },
    {
      label: 'Тушонка',
      items: [
        { name: 'Тушонка з яловичини в/с ДСТУ', price: 175, unit: 'уп.' },
        { name: 'Тушонка з баранини в/с ДСТУ', price: 180, unit: 'уп.', image: '/images/products/semi-tushonka-z-baranyny-v-s-dstu.jpg' },
        { name: 'Тушонка з курятини ж/б 525 г', price: 140, unit: 'уп.', image: '/images/products/semi-tushonka-z-kuriatyny-zh-b-525-h.jpg' },
      ],
    },
  ],
};
