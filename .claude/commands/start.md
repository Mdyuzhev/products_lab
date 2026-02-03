# /start — Инициализация сессии

Проверяет состояние проекта и готовность к работе.

```bash
# Git
git branch --show-current
git status --short
git log --oneline -3

# Node
node --version
npm --version

# Проект
cat package.json | grep -E '"name"|"version"'
ls -la src/pages/*.jsx 2>/dev/null | wc -l
ls -la src/components/*.jsx 2>/dev/null | wc -l
```

## Вывод

```markdown
## ✅ Products Lab Ready

**Branch:** main
**Version:** 0.1.0
**Repo:** https://github.com/Mdyuzhev/products_lab

### Статус
- Pages: X files
- Components: X files
- Build: ✅ ready

### Команды
- `/dev` — Запустить dev-сервер
- `/build` — Собрать для production
- `/deploy` — Деплой на GitHub Pages
- `/commit` — Закоммитить изменения
- `/push` — Быстрый пуш

### Секции
- Hero, About, Process, Partners, Hypotheses, Join
```
