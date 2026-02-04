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
│
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions для автодеплоя
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── SmoothScroll.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Hero.jsx
│   │   ├── ChampionshipBanner.jsx  # Баннер чемпионата на главной
│   │   ├── Championship.jsx        # Страница "Расти в ИТ"
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
│   ├── videos/             # Видео презентаций
│   └── 404.html
│
├── Tasks/
│   ├── DEPLOY_GITHUB_PAGES.md
│   └── cases/              # Материалы кейсов
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Роуты

| URL | Компонент | Описание |
|-----|-----------|----------|
| `/` | Home | Главная страница |
| `/championship` | Championship | Страница "Расти в ИТ" |

---

## Design System

| Элемент | Цвет | Tailwind |
|---------|------|----------|
| Фон | Тёмно-фиолетовый | `bg-slate-950` |
| Карточки | Glass effect | `glass`, `glass-purple` |
| Акцент 1 | Фиолетовый | `text-violet-400`, `bg-violet-500` |
| Акцент 2 | Оранжевый | `text-orange-400`, `bg-orange-500` |
| Чемпионат | Янтарный | `text-amber-400`, `bg-amber-500` |
| Ростелеком | Синий | `text-blue-400` |
| Успех | Изумрудный | `text-emerald-400` |

---

## Чемпионат "Расти в ИТ" 2025

### Статистика
- 730 регистраций
- 100+ команд
- 5 финалистов на трек
- 1 000 000 ₽ призовой фонд

### Победители

| Место | Приз | Команда | Кейс | Проект |
|-------|------|---------|------|--------|
| 🥇 1 | 500 000 ₽ | #106 | Wink | SCORE360 — Performance Review |
| 🥈 2 | 300 000 ₽ | #108 | Сигма | Автооценка ответов (NLP) |
| 🥉 3 | 200 000 ₽ | #5 | РТК ИТ | SmartStorage — Умный склад |

### Видео
- `Tasks/cases/SmartStorage1.mp4` — презентация 3 места
- TODO: Загрузить на YouTube и вставить embed

---

## GitHub Pages

**URL:** https://mdyuzhev.github.io/products_lab/

### Важно

В `vite.config.js` параметр `base`:
```js
base: '/products_lab/'
```

---

## Development Workflow

```bash
npm run dev         # http://localhost:3000
npm run build       # → dist/
npm run preview     # Превью на :4173

git add -A && git commit -m "feat: description" && git push
```

---

## Task Priorities

### ✅ Done
- [x] Базовая структура React + Vite + Tailwind
- [x] Hero, About, Process, Partners, Hypotheses, Join
- [x] GitHub Actions CI/CD
- [x] Страница чемпионата "Расти в ИТ"
- [x] Баннер чемпионата на главной
- [x] Данные победителей с городами

### 🔄 Next
- [ ] Embed видео презентаций (YouTube)
- [ ] Реальные гипотезы от Ростелекома
- [ ] Логотипы партнёров
- [ ] Форма подачи заявки

---

## Principles

1. **Молодёжный дизайн** — фиолетово-оранжевая палитра, анимации
2. **Продуктовый фокус** — гипотезы, MVP, валидация
3. **Mobile-first** — проверяй адаптивность
4. **Коммиты осмысленные** — `feat/fix/chore(scope): message`

---

*Проект: Ростелеком × ВУЗы | Февраль 2025*
