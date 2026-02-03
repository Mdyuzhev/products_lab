# Products Lab — Agent Context

## Identity

| Field | Value |
|-------|-------|
| Name | Products Lab |
| Stack | React 18 + Tailwind CSS + Vite + Framer Motion |
| Purpose | Платформа трансфера продуктовых гипотез Ростелеком → ВУЗы |
| Deploy | GitHub Pages |
| Repo | https://github.com/Mdyuzhev/products_lab |

---

## Quick Start

```bash
/start              # Проверить статус
/dev                # Запустить dev-сервер
/build              # Собрать для production
/deploy             # Деплой на GitHub Pages
/commit [msg]       # Умный коммит
/push [msg]         # Быстрый пуш
```

---

## Architecture

```
products_lab/
├── .claude/
│   ├── CLAUDE.md           # Этот файл
│   ├── settings.json       # Настройки агента
│   └── commands/           # Slash-команды
│       ├── start.md
│       ├── dev.md
│       ├── build.md
│       ├── commit.md
│       ├── deploy.md
│       └── push.md
│
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions для автодеплоя
│
├── src/
│   ├── components/         # React компоненты
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── SmoothScroll.jsx
│   ├── pages/              # Секции страницы
│   │   ├── Home.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Process.jsx
│   │   ├── Partners.jsx
│   │   ├── Hypotheses.jsx
│   │   └── Join.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
│   ├── favicon.svg
│   └── 404.html            # SPA redirect для GitHub Pages
│
├── Tasks/
│   └── DEPLOY_GITHUB_PAGES.md
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Design System

| Элемент | Цвет | Tailwind |
|---------|------|----------|
| Фон | Тёмно-фиолетовый | `bg-slate-950` |
| Карточки | Glass effect | `glass`, `glass-purple` |
| Акцент 1 | Фиолетовый | `text-violet-400`, `bg-violet-500` |
| Акцент 2 | Оранжевый | `text-orange-400`, `bg-orange-500` |
| Ростелеком | Синий | `text-blue-400` |
| Сириус | Фиолетовый | `text-violet-400` |
| Политех | Оранжевый | `text-orange-400` |
| Успех | Изумрудный | `text-emerald-400` |
| Внимание | Розовый | `text-pink-400` |

### Градиенты
```css
/* Основной */
from-violet-400 via-purple-400 to-orange-400

/* Кнопка Primary */
from-violet-600 to-orange-500

/* Фоновый */
from-violet-950/20 to-orange-950/10
```

---

## GitHub Pages

**URL:** https://mdyuzhev.github.io/products_lab/

### Настройка

1. Репозиторий: https://github.com/Mdyuzhev/products_lab
2. Settings → Pages → Source: GitHub Actions
3. При пуше в main — автодеплой через `.github/workflows/deploy.yml`

### Важно

В `vite.config.js` параметр `base` должен совпадать с именем репозитория:
```js
base: '/products_lab/'
```

---

## Секции страницы

| Секция | ID | Описание |
|--------|-----|----------|
| Hero | `#hero` | Главный экран с анимациями |
| About | `#about` | О программе и преимуществах |
| Process | `#process` | 5 шагов от гипотезы до прототипа |
| Partners | `#partners` | Ростелеком, Сириус, Политех |
| Hypotheses | `#hypotheses` | Каталог продуктовых гипотез |
| Join | `#join` | Как участвовать |

---

## Development Workflow

```bash
# Локальная разработка
npm run dev         # http://localhost:3000

# Сборка
npm run build       # → dist/
npm run preview     # Превью сборки на :4173

# Деплой
git add -A
git commit -m "feat: description"
git push origin main   # → автодеплой
```

---

## Task Priorities

### ✅ Done
- [x] Базовая структура React + Vite + Tailwind
- [x] Hero с анимациями Framer Motion
- [x] Секция About с карточками
- [x] Process — 5 шагов workflow
- [x] Partners — карточки партнёров
- [x] Hypotheses — каталог гипотез (заглушки)
- [x] Join — формы участия
- [x] GitHub Actions CI/CD
- [x] Smooth scroll + навигация

### 🔄 Next
- [ ] Реальные гипотезы от Ростелекома
- [ ] Логотипы партнёров
- [ ] Страницы отдельных гипотез
- [ ] Форма подачи заявки (Google Forms / Airtable)
- [ ] Телеграм-бот для уведомлений

---

## Principles

1. **Молодёжный дизайн** — фиолетово-оранжевая палитра, анимации
2. **Продуктовый фокус** — гипотезы, MVP, валидация
3. **Не ломай работающее** — инкрементальные изменения
4. **Mobile-first** — проверяй адаптивность
5. **Коммиты осмысленные** — `feat/fix/chore(scope): message`

---

## Контакты

- **GitHub:** https://github.com/Mdyuzhev/products_lab
- **Live:** https://mdyuzhev.github.io/products_lab/

---

*Проект: Ростелеком × ВУЗы | Февраль 2025*
