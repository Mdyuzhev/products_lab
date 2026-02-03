# /deploy — Деплой на GitHub Pages

Собирает проект и пушит в GitHub. GitHub Actions автоматически задеплоит.

## Шаги

```bash
# 1. Проверить ветку
git branch --show-current

# 2. Собрать
npm run build

# 3. Закоммитить если есть изменения
git add -A
git status --short
git commit -m "chore: build for deploy" || echo "Nothing to commit"

# 4. Запушить
git push origin main
```

## Результат

После пуша:
1. GitHub Actions запустит workflow `.github/workflows/deploy.yml`
2. Соберёт проект
3. Задеплоит на GitHub Pages

**URL:** https://mdyuzhev.github.io/products_lab/

## Проверка статуса

- **Actions:** https://github.com/Mdyuzhev/products_lab/actions
- **Pages:** https://github.com/Mdyuzhev/products_lab/settings/pages

## Первый деплой

Если это первый деплой:
1. Убедиться что репозиторий создан на GitHub
2. Settings → Pages → Source: **GitHub Actions**
3. Выполнить `/deploy`

## Troubleshooting

### 404 на сайте
Проверить `base` в `vite.config.js`:
```js
base: '/products_lab/'
```

### Workflow не запускается
Settings → Actions → Workflow permissions → **Read and write**
