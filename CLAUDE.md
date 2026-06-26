# CLAUDE.md

This file provides guidance to AI coding assistants working with this repository.

## What this repo is

Static one-page site for **revesval.cl** — impermeabilización de tranques agrícolas con geomembrana HDPE. Hosted on **Netlify** with content managed via **Decap CMS**.

## Architecture

```
src/index.html  ←  plantilla con placeholders {{variable}}
     +
public/data/content.json  ←  datos editables (CMS o manual)
public/data/projects/*.json  ←  proyectos individuales
     ↓
build.js  (node build.js)
     ↓
public/index.html  ←  sitio compilado final
```

- **`src/index.html`** — Template HTML (~370 KB, includes base64-embedded poster image). Contains `{{placeholder}}` tokens replaced at build time.
- **`build.js`** — Node.js build script. Reads `content.json` + project files, generates dynamic HTML blocks (hero media, services, projects gallery, contact bullets, company metrics), then does a recursive key replacement pass. Output goes to `public/index.html`.
- **`public/`** — Published directory on Netlify. Everything here is served to visitors.
- **`public/admin/`** — Decap CMS panel (Netlify Identity auth, git-gateway backend).
- **`public/data/`** — JSON data files edited by the CMS.
- **`docs/`** — Internal documentation (SEO plan, Google Ads strategy). Not deployed.

## Build

```bash
npm run build    # runs: node build.js
```

Build is triggered automatically by Netlify on every push to `main`.

## Working with the template

- `src/index.html` is large (~370 KB) due to an embedded base64 video poster. Use `grep -n` or line-range reads to inspect specific sections.
- CSS is inlined in `<style>` blocks within the `<head>`. Sections are labeled with `/* ═══ SECTION NAME ═══ */` comments.
- JS is inlined at the bottom of the file in `<script>` blocks.

## Key conventions

- All images in `public/assets/img/` are named by content hash (e.g., `f53e8b9a53.webp`) for automatic cache-busting.
- Projects are individual JSON files in `public/data/projects/`, one per project.
- The CMS config is at `public/admin/config.yml` — keep field names in sync with `content.json` keys and `build.js` replacements.
- Keep `public/` deployable at all times — Netlify serves this directory directly.

## Deploy

Automatic via Netlify CI/CD:
1. Push to `main` (manual or via CMS edit)
2. Netlify runs `npm run build`
3. Publishes `public/` to CDN

No manual deploy steps needed.
