#!/bin/bash
# Одноразовый деплой-скрипт з бекапом і откатом.
# Запуск: bash deploy.sh
set -euo pipefail
cd "$(dirname "$0")"

REMOTE_URL=$(git remote get-url origin)
SHORT_SHA=$(git rev-parse --short HEAD)
BACKUP_SHA=$(git ls-remote origin gh-pages | cut -f1)

echo "Поточний gh-pages (бекап для відкату): $BACKUP_SHA"
echo "Деплоїмо коміт main: $SHORT_SHA"

rollback() {
  echo ""
  echo "!!! Помилка деплою. Відкочую gh-pages до $BACKUP_SHA ..."
  git push -f origin "$BACKUP_SHA":gh-pages
  echo "Відкат виконано."
  exit 1
}
trap rollback ERR

rm -rf dist
npm run build

cd dist
rm -rf .git
git init -q
git checkout -q -b gh-pages
git add -A
git commit -q -m "Deploy: $SHORT_SHA"
git remote add origin "$REMOTE_URL"
git push -f origin gh-pages
cd ..

trap - ERR
echo ""
echo "Готово. Задеплоєно $SHORT_SHA."
echo "Якщо щось піде не так, відкат вручну:"
echo "  git push -f origin $BACKUP_SHA:gh-pages"
