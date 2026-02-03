# /build — Сборка для production

Собирает оптимизированную версию для деплоя.

```bash
npm run build
ls -la dist/
du -sh dist/
```

## Вывод

```markdown
## ✅ Build Complete

**Output:** dist/
**Size:** ~XXX KB

### Содержимое
- index.html
- assets/
  - *.js (React + Framer Motion bundle)
  - *.css (Tailwind)

**Next:** `/deploy` или `npm run preview`
```

## Превью сборки

```bash
npm run preview
# Откроется на http://localhost:4173/products_lab/
```
