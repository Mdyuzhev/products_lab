# Задача: Первичный деплой Products Lab на GitHub Pages

## Цель
Выполнить полный цикл: проверка → сборка → инициализация git → push → деплой на GitHub Pages.

## Контекст
- **Проект**: Products Lab
- **Репозиторий**: https://github.com/Mdyuzhev/products_lab
- **Результат**: https://mdyuzhev.github.io/products_lab/
- **Директория**: E:\Politech\products_lab

---

## Выполнение

### ШАГ 1: Проверка окружения
```bash
cd E:\Politech\products_lab
node --version
npm --version
git --version
```
**Критерий**: Все команды выполняются без ошибок.

---

### ШАГ 2: Установка зависимостей
```bash
npm install
```
**Критерий**: `node_modules/` создана, нет ошибок.

---

### ШАГ 3: Локальная проверка сборки
```bash
npm run build
```
**Критерий**: Папка `dist/` создана, содержит `index.html` и `assets/`.

---

### ШАГ 4: Инициализация Git
```bash
git init
git add .
git status
```
**Критерий**: Все файлы добавлены в staging.

---

### ШАГ 5: Первый коммит
```bash
git commit -m "feat: initial Products Lab setup

- React 18 + Vite + Tailwind CSS
- Framer Motion animations
- Sections: Hero, About, Process, Partners, Hypotheses, Join
- GitHub Actions CI/CD for auto-deploy
- Claude agent configuration"
```
**Критерий**: Коммит создан успешно.

---

### ШАГ 6: Подключение remote
```bash
git remote add origin https://github.com/Mdyuzhev/products_lab.git
git branch -M main
```
**Критерий**: Remote добавлен, ветка переименована в main.

---

### ШАГ 7: Push в GitHub
```bash
git push -u origin main
```
**Критерий**: Код успешно запушен в репозиторий.

**Если ошибка авторизации**: Сообщить пользователю о необходимости ввести credentials или использовать SSH.

---

### ШАГ 8: Инструкция для пользователя

После успешного push вывести:

```
## ✅ Код успешно загружен в GitHub!

### Следующий шаг (выполняет пользователь вручную):

1. Открой: https://github.com/Mdyuzhev/products_lab/settings/pages
2. В разделе "Source" выбери: **GitHub Actions**
3. Подожди 1-2 минуты

### Проверка:
- Статус деплоя: https://github.com/Mdyuzhev/products_lab/actions
- Готовый сайт: https://mdyuzhev.github.io/products_lab/

### Если что-то пошло не так:
- Проверь Settings → Actions → Workflow permissions → "Read and write permissions"
```

---

## Чеклист завершения

- [ ] npm install — успешно
- [ ] npm run build — dist/ создан
- [ ] git init + add + commit — выполнено
- [ ] git remote add origin — выполнено
- [ ] git push -u origin main — выполнено
- [ ] Инструкция пользователю выведена

---

## Возможные проблемы

### npm install падает
```bash
rm -rf node_modules package-lock.json
npm install
```

### git push требует авторизацию
Сообщить пользователю:
- Использовать GitHub Desktop
- Или настроить SSH ключ
- Или ввести Personal Access Token

### Репозиторий не существует
Сообщить пользователю создать репозиторий на https://github.com/new с именем `products_lab`

---

## После выполнения

Сайт будет доступен по адресу:
**https://mdyuzhev.github.io/products_lab/**

Для последующих обновлений достаточно:
```bash
git add .
git commit -m "описание изменений"
git push
```
