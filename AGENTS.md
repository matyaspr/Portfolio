# AGENTS.md — Portfolio SPA

## Dev workflow

```bash
# Hot-reload (requires Node.js locally)
npm install && npm start        # → http://localhost:3000

# Docker (no Node.js needed)
docker compose up -d            # → http://localhost:3000
docker compose build            # rebuild after changes
docker compose down             # stop
```

No test/lint/typecheck commands exist (`react-scripts` only provides `start` and `build`).

## Architecture notes

- **SPA without React Router** — single-page scroll, hash-free navigation via `document.getElementById().scrollIntoView()`. All sections are siblings in the `<main>` element.
- **Theme system**: `src/context/ThemeContext.js` — applies `.dark` (default) or `.light` class to `<html>`. CSS variables in `:root` / `.light` control all colors. Theme persisted to `localStorage["theme"]`.
- **Content data** is in `src/data/projects.js` and `src/data/skills.js` — edit these to customize projects/skills. Experience and Hero content is in components directly.
- **No CSS framework** — all styles in `src/App.css` using CSS custom properties. Only dependency is Google Fonts (Inter) loaded in `public/index.html`.
- **Entrypoint**: `src/index.js` → `src/App.js` → wraps everything in `ThemeProvider`.

## Docker

- Multi-stage build: `node:20-alpine` builds, `nginx:1.25-alpine` serves.
- nginx config (`nginx.conf`) has SPA fallback: `try_files $uri $uri/ /index.html`.
- Container exposes port 80, mapped to 3000 in docker-compose.
- Rebuild is needed after any source change (no volume mount for dev).

## Customization

| What | Where |
|------|-------|
| Projects | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| Experience | `src/components/Experience.js` |
| Hero text | `src/components/Hero.js` |
| Contact links | `src/components/Contact.js` |

## Conventions

- Components use `export default function ComponentName()` — no class components, no named exports.
- Imports use relative paths without file extensions.
- CSS uses BEM-like naming with `--` modifier convention (e.g., `btn--primary`).
- `<html>` gets the theme class; `body` has no class changes.
