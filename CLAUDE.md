# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Static one-page site for **revesval.cl**. No build system, no dependencies, no package manager. The deliverable is a single self-contained HTML file deployed by uploading via cPanel File Manager to `public_html/` on Páginas de Chile (Apache shared hosting).

## Repo layout (load-bearing)

- `public/` — exactly what gets uploaded to `public_html/`. Nothing else goes here.
  - `index.html` — the entire site. ~35 MB because images, a fallback video, and an SVG are embedded as base64 `data:` URIs. Treat it as the source of truth, not a build artifact.
  - `.htaccess` — forces HTTPS, enables gzip, sets cache headers, disables directory listing.
  - `robots.txt`
- `docs/` — internal docs (DOCX brief, Google Ads strategy). **Never** deploy.
- `backups/` — previous HTML versions kept for reference. **Never** deploy.

The numbered Spanish folders (`01_Paginas_Web/`, `02_Documentos/`, `03_Estrategia_GoogleAds/`) from the original handoff have been flattened into the structure above — don't reintroduce them.

## Working with `index.html`

- The file is ~35 MB and **exceeds the Read tool's token limit**. Use `sed -n 'A,Bp'` or `grep -n` to inspect specific sections; do not try to Read the whole file.
- Around line 1130 there is a `<video>` with two `<source>` tags: an external `strip_vid.mp4` (not present in the repo) followed by an embedded base64 mp4 fallback. The external file is optional — the page works without it. Don't "fix" the missing file by deleting the external `<source>`; the intent is that whoever has the original `.mp4` can drop it next to `index.html` for better performance.
- Edits to copy/markup are done directly on `public/index.html`. There is no source-to-build step.

## Deploy

No CI. Deploy is manual:
1. cPanel → File Manager → `public_html/`.
2. Upload the **contents** of `public/` (files, not the folder). Enable "Show hidden files" so `.htaccess` is visible after upload.
3. Verify HTTPS redirect, video playback, and that `index.html` is served as the directory index.

## When making changes

- Keep `public/` deployable as-is at all times — anything committed there will end up on the live server on the next manual upload.
- If extracting embedded assets to separate files (a known future improvement noted in `README.md`), put them under `public/assets/` and update `.htaccess` cache rules if new MIME types are introduced.
- The `.htaccess` assumes Apache + mod_rewrite/mod_deflate/mod_expires (standard on Páginas de Chile). Don't add Nginx-only syntax.
