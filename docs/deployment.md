# Деплой сайту

**Публічна адреса:** https://daud-coder.github.io/ukrhalal-horeca/

## Що це і як влаштовано

- Репозиторій: `Daud-coder/ukrhalal-horeca` (публічний, GitHub).
- Гілка `main` — вихідний код (те, що ми правимо).
- Гілка `gh-pages` — тільки зібраний білд (`dist/`), окремий "історія" без зв'язку з `main`. GitHub Pages віддає сайт саме з неї.
- Деплой **не автоматичний** — після кожної зміни, яку треба показати на публічній адресі, потрібно вручну зібрати і перезалити `gh-pages` (команди нижче). Просто `git push` у `main` сайт НЕ оновлює.

## Як оновити сайт після правок

```bash
cd "/Users/davidsittarov/Сайт Укр Халяль Версия 9"

# 1. Закомітити зміни в main як завжди
git add -A
git commit -m "..."
git push origin main

# 2. Зібрати продакшн-білд і залити в gh-pages
rm -rf dist
npm run build
REMOTE_URL=$(git remote get-url origin)
cd dist
git init -q
git checkout -q -b gh-pages
git add -A
git commit -q -m "Deploy: $(cd .. && git rev-parse --short HEAD)"
git remote add origin "$REMOTE_URL"
git push -f origin gh-pages
cd ..
```

Після пушу GitHub Pages збирає сторінку сам (без нашого втручання), але **CDN (Fastly) кешує `index.html` до 10 хвилин** — одразу після деплою на публічній адресі якийсь час може показуватись стара версія. Це не баг: якщо не терпиться перевірити відразу — додати до адреси будь-який `?query`, наприклад `?v=2`, це обходить кеш конкретного edge-вузла.

## Важливий нюанс з путями до картинок

`vite.config.ts` встановлює `base` умовно:

```ts
base: command === 'build' ? '/ukrhalal-horeca/' : '/',
```

- **Локальна розробка** (`npm run dev`) — `base: '/'`, сайт як завжди на `localhost:5174/`.
- **Продакшн-білд** (`npm run build`, тобто і крок 2 вище) — `base: '/ukrhalal-horeca/'`, бо GitHub Pages віддає проєкт із підпапки, а не з кореня домену.

Vite сам підставляє `base` тільки для файлів, які він бандлить (JS/CSS-чанки, шрифти через CSS `url()`, посилання в `index.html`). Але для картинок з `public/`, які підключені прямим рядком типу `<img src="/images/foo.png">`, він цього не робить — це просто рядок у коді, Vite його не чіпає. Тому всі такі місця в компонентах обгорнуті хелпером `withBase()` з `src/lib/asset.ts`:

```ts
export function withBase(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
```

**Якщо додаєш нову картинку з `public/` десь у коді — обов'язково через `withBase('/images/новый-файл.png')`, інакше вона зникне саме на продакшн-адресі** (локально й на превʼю в Claude Code все одно буде виглядати нормально, бо там `base` завжди `/`).

## Якщо знадобиться свій домен

Купити домен → прописати CNAME на `daud-coder.github.io` → додати файл `public/CNAME` з текстом домену → пересобрати й задеплоїти як звично. Код міняти не треба.
