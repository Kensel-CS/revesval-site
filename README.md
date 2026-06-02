# REVESVAL — Sitio web

Sitio estático one-page para **revesval.cl** (impermeabilización de tranques agrícolas con geomembrana HDPE — cobertura nacional desde Valparaíso).

## Estructura

```
TomasSite/
├── public/                       ← Subir TODO el contenido a public_html
│   ├── index.html                ← Página principal (~900 KB)
│   ├── .htaccess                 ← HTTPS forzado, gzip, caché
│   ├── robots.txt
│   └── assets/
│       ├── img/                  ← 17 JPG extraídos del HTML
│       └── video/                ← Video del hero (.mp4)
├── docs/                         ← Documentación interna (NO subir)
│   ├── SEO_Plan_REVESVAL.md      ← Plan SEO 6 meses
│   ├── REVESVAL_Resumen_Ejecutivo.docx
│   └── Estrategia_GoogleAds_REVESVAL.txt
├── backups/                      ← Versiones previas (gitignored)
├── CLAUDE.md                     ← Guía para asistentes IA
└── README.md
```

## Deploy al VPS por File Manager

1. cPanel → **File Manager** → entrar a `public_html/`.
2. Subir **todo el contenido de `public/`** (los archivos, no la carpeta):
   - `index.html`
   - `.htaccess` *(en cPanel activar "Mostrar archivos ocultos")*
   - `robots.txt`
   - Carpeta `assets/` completa
3. Verificar en `https://revesval.cl`:
   - Render correcto del HTML.
   - Reproducción del video del hero (`assets/video/<hash>.mp4`).
   - Forzado de HTTPS funcionando.
   - Imágenes cargando desde `assets/img/`.

## Estado SEO (junio 2026)

- ✅ Schema.org JSON-LD: `Organization`, `LocalBusiness`, `WebSite`, 3 × `Service`, `BreadcrumbList`.
- ✅ Open Graph + Twitter Cards.
- ✅ `canonical`, `robots`, `geo` meta.
- ⏳ **Placeholders pendientes** antes de deploy: teléfono real, lat/long en `LocalBusiness`, RRSS en `sameAs`, crear `assets/og-image.jpg` (1200×630) y `assets/logo.png`.
- ⏳ Falta `sitemap.xml`.

## Notas técnicas

- **HTML**: ~900 KB tras extraer todos los assets embebidos (antes 35 MB).
- **Assets**: 17 JPG únicos (deduplicados por SHA-1) + 1 MP4. Nombrados por hash → cache-busting automático al cambiar contenido.
- **Próximas optimizaciones recomendadas**:
  - Convertir JPG → WebP/AVIF (~70% adicional menos).
  - Comprimir MP4 (23 MB → ~3 MB con H.264 baseline 720p).
  - Migrar a multi-página (`/servicios/`, `/proyectos/`, `/cobertura/<region>/`) para concentrar autoridad temática.

## Dominio y hosting

- Dominio: **revesval.cl**
- Hosting: Páginas de Chile (Apache + cPanel)
