# Инструкция: Деплой Products Lab на GitHub Pages

## Метаданные
- **Проект**: Products Lab
- **Репозиторий**: https://github.com/Mdyuzhev/products_lab
- **Результат**: https://mdyuzhev.github.io/products_lab/
- **Время выполнения**: ~10 минут

---

## ШАГ 0: Подготовка

### 0.1 Проверка окружения
```bash
# Проверить наличие git
git --version

# Проверить наличие node/npm
node --version
npm --version
```

### 0.2 Перейти в директорию проекта
```bash
cd E:\Politech\products_lab
```

---

## ШАГ 1: Локальная проверка

### 1.1 Установить зависимости
```bash
npm install
```

### 1.2 Запустить dev-сервер и проверить работоспособность
```bash
npm run dev
```
**Ожидаемый результат**: Сайт открывается на http://localhost:3000

### 1.3 Собрать production-версию
```bash
npm run build
```
**Ожидаемый результат**: Папка `dist/` создана без ошибок

### 1.4 Проверить production-сборку локально
```bash
npm run preview
```
**Ожидаемый результат**: Сайт работает на http://localhost:4173/products_lab/

---

## ШАГ 2: Инициализация Git-репозитория

### 2.1 Инициализировать git (если ещё не инициализирован)
```bash
git init
```

### 2.2 Проверить .gitignore
```bash
cat .gitignore
```
**Должны быть исключены**: `node_modules/`, `dist/`, `.env`

### 2.3 Добавить все файлы
```bash
git add .
```

### 2.4 Создать первый коммит
```bash
git commit -m "feat: initial Products Lab setup

- React + Vite + Tailwind CSS
- Framer Motion animations
- GitHub Actions CI/CD
- Sections: Hero, About, Process, Partners, Hypotheses, Join"
```

---

## ШАГ 3: Подключение к GitHub

### 3.1 Добавить remote origin
```bash
git remote add origin https://github.com/Mdyuzhev/products_lab.git
```

### 3.2 Переименовать ветку в main
```bash
git branch -M main
```

### 3.3 Запушить в репозиторий
```bash
git push -u origin main
```

**Если требуется авторизация**: Использовать GitHub token или SSH ключ

---

## ШАГ 4: Настройка GitHub Pages

### 4.1 Перейти в Settings репозитория
URL: https://github.com/Mdyuzhev/products_lab/settings/pages

### 4.2 Настроить Source
- **Source**: `GitHub Actions`
- НЕ выбирать `Deploy from a branch`

### 4.3 Дождаться выполнения workflow
URL: https://github.com/Mdyuzhev/products_lab/actions

**Ожидаемый результат**: 
- Job `build` — ✅ Success
- Job `deploy` — ✅ Success

---

## ШАГ 5: Верификация деплоя

### 5.1 Проверить URL сайта
```
https://mdyuzhev.github.io/products_lab/
```

### 5.2 Чеклист проверки
- [ ] Главная страница загружается
- [ ] Навигация работает (скролл к секциям)
- [ ] Анимации отрабатывают
- [ ] Мобильное меню открывается
- [ ] Нет ошибок в консоли браузера (F12 → Console)

---

## Возможные проблемы и решения

### Проблема: 404 на GitHub Pages
**Причина**: Неправильный `base` в vite.config.js
**Решение**: Проверить что `base: '/products_lab/'`

### Проблема: Белый экран после деплоя
**Причина**: Ошибки в сборке или путях
**Решение**: 
```bash
# Проверить консоль браузера на ошибки
# Пересобрать с очисткой кэша
rm -rf dist node_modules
npm install
npm run build
```

### Проблема: Роутинг не работает (404 на подстраницах)
**Причина**: GitHub Pages не поддерживает SPA роутинг
**Решение**: Проверить наличие `public/404.html` с редиректом

### Проблема: Actions workflow не запускается
**Причина**: Нет прав на GitHub Pages
**Решение**: 
1. Settings → Actions → General
2. Workflow permissions: `Read and write permissions`

---

## Последующие обновления

### Для обновления сайта
```bash
cd E:\Politech\products_lab
git add .
git commit -m "fix/feat/docs: описание изменений"
git push
```

Workflow автоматически пересоберёт и задеплоит сайт.

---

## Контакты

- **Репозиторий**: https://github.com/Mdyuzhev/products_lab
- **GitHub Pages**: https://mdyuzhev.github.io/products_lab/
