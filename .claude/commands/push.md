# /push — Быстрый пуш

Добавляет все изменения, коммитит и пушит.

## Использование

```
/push [message]
```

## Шаги

```bash
git add -A
git status --short
git commit -m "$MESSAGE"
git push origin main
```

## Примеры

```
/push fix responsive layout on mobile
/push add new hypothesis cards
/push update partners section
/push fix navbar animation
```

## После пуша

GitHub Actions автоматически:
1. Соберёт проект
2. Задеплоит на https://mdyuzhev.github.io/products_lab/

Статус: https://github.com/Mdyuzhev/products_lab/actions
