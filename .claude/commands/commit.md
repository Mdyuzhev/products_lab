# /commit — Умный коммит

## Использование

```
/commit [message]
```

## Шаги

```bash
git status --short
git diff --stat HEAD

# Определить тип из изменённых файлов
CHANGED=$(git diff --name-only HEAD)
if echo "$CHANGED" | grep -q "src/pages/"; then TYPE="feat"; SCOPE="pages"
elif echo "$CHANGED" | grep -q "src/components/"; then TYPE="feat"; SCOPE="ui"
elif echo "$CHANGED" | grep -q "src/index.css"; then TYPE="style"; SCOPE="css"
elif echo "$CHANGED" | grep -q ".claude/"; then TYPE="chore"; SCOPE="config"
elif echo "$CHANGED" | grep -q "Tasks/"; then TYPE="docs"; SCOPE="tasks"
else TYPE="chore"; SCOPE=""; fi

git add -A
git commit -m "$TYPE($SCOPE): $MESSAGE"
```

## Формат коммитов

```
feat(pages): add new hypothesis card
feat(ui): update navbar animations
style(css): adjust violet gradient
data(hypotheses): add real Rostelecom hypotheses
chore(config): update vite config
docs(tasks): add deployment guide
```

## Типы коммитов

| Тип | Когда использовать |
|-----|-------------------|
| `feat` | Новая функциональность |
| `fix` | Исправление бага |
| `style` | Изменения в стилях |
| `data` | Обновление данных/контента |
| `chore` | Конфигурация, сборка |
| `docs` | Документация |
