# REVESVAL — Sitio Web

Sitio estático one-page para **revesval.cl** — impermeabilización de tranques agrícolas con geomembrana HDPE, cobertura nacional.

---

## Stack Tecnológico

| Componente | Tecnología | Detalle |
|---|---|---|
| **Hosting** | Netlify (gratis) | CDN global, SSL automático, deploy continuo |
| **CMS** | Decap CMS + Netlify Identity | Panel visual en `/admin/` para editar contenido |
| **Repositorio** | GitHub (`Kensel-CS/revesval-site`) | Código fuente y versionamiento |
| **Build** | Node.js (`build.js`) | Compila la plantilla inyectando datos de `content.json` |
| **Dominio** | NIC Chile | `revesval.cl` apuntando a nameservers de Netlify |
| **Formulario** | FormSubmit | Envío de cotizaciones a `contactorevesval@gmail.com` |

---

## Estructura del Proyecto

```
TomasSite/
├── src/
│   └── index.html              ← Plantilla con placeholders {{variable}}
├── build.js                    ← Script de compilación (src → public)
├── public/                     ← Sitio compilado (lo que se publica)
│   ├── index.html              ← Página final generada
│   ├── admin/
│   │   ├── index.html          ← Panel CMS
│   │   └── config.yml          ← Configuración de campos editables
│   ├── data/
│   │   ├── content.json        ← Textos, imágenes y datos del sitio
│   │   └── projects/           ← Proyectos individuales (1 JSON por proyecto)
│   ├── assets/
│   │   ├── img/                ← Imágenes del sitio (WebP/JPG)
│   │   └── video/              ← Video del hero (.mp4)
│   ├── robots.txt
│   └── sitemap.xml
├── docs/                       ← Documentación interna (SEO, Ads, etc.)
├── .github/workflows/
│   └── deploy.yml              ← Deploy automático vía GitHub Actions
└── package.json
```

---

## Cómo Editar Contenido (CMS)

1. Ir a **https://tu-sitio.netlify.app/admin/**
2. Iniciar sesión con el usuario invitado vía Netlify Identity
3. Secciones editables:
   - **Hero**: título, subtítulo, video/imagen de fondo
   - **Nuestra Empresa**: textos, cifras (m², hectáreas, años)
   - **Servicios**: cards resumen + detalles individuales con imagen
   - **Crisis Hídrica**: textos y fondo
   - **Contacto**: teléfonos, correo, ubicación
   - **Footer**: descripción, copyright, eslogan
4. **Proyectos**: se gestionan como colección individual (agregar, editar, eliminar, reordenar)
5. Al guardar, Decap CMS hace commit a GitHub → Netlify detecta el cambio → recompila y despliega automáticamente

> **Tiempo de deploy**: ~1-2 minutos desde que se guarda un cambio en el CMS.

---

## Cómo Funciona el Build

```
content.json + src/index.html  →  build.js  →  public/index.html
```

El script `build.js` toma la plantilla (`src/index.html`) y reemplaza los placeholders `{{variable}}` con los valores de `public/data/content.json`. También genera bloques dinámicos:

- `{{hero_media_block}}` → video o imagen según configuración
- `{{empresa_cifras_block}}` → grid de métricas
- `{{servicios_summary_block}}` → cards de servicios
- `{{contacto_bullets_block}}` → lista de datos de contacto
- `{{proyectos_block}}` → galería de proyectos desde archivos individuales

### Build manual (desarrollo local)

```bash
npm run build
```

---

## Deploy y CI/CD

El sitio se despliega automáticamente con cada push a `main`:

1. **Alguien edita** en el CMS o se hace push manual
2. **GitHub** recibe el commit
3. **Netlify** detecta el cambio, ejecuta `npm run build`
4. **Resultado** se publica en la CDN global de Netlify

No se necesita intervención manual para el deploy.

### Configuración de Netlify

- **Build command**: `npm run build`
- **Publish directory**: `public`
- **Branch**: `main`

---

## Dominio

- **Registrador**: NIC Chile (`revesval.cl`)
- **DNS**: Apuntado a los nameservers de Netlify
- **SSL**: Certificado HTTPS automático via Let's Encrypt (gestionado por Netlify)

Para cambiar de dominio o agregar uno nuevo: Netlify → Site configuration → Domain management.

---

## Gestión de Usuarios (Admin)

El acceso al CMS está controlado por **Netlify Identity** (solo por invitación):

- No se permite registro público
- Los usuarios se invitan desde: Netlify → Site configuration → Identity
- Solo los usuarios invitados pueden acceder a `/admin/`

---

## Notas Técnicas

- **SEO**: Schema.org (Organization, LocalBusiness, WebSite, Service, BreadcrumbList), Open Graph, Twitter Cards, canonical, robots, geo meta
- **Performance**: imágenes en WebP, assets nombrados por hash (cache-busting automático), gzip
- **Formulario**: enviado vía FormSubmit a `contactorevesval@gmail.com` sin backend propio
- **Analytics**: Google Analytics y Tag Manager integrados

---

## Documentación Adicional

| Archivo | Contenido |
|---|---|
| `docs/SEO_Plan_REVESVAL.md` | Plan SEO a 6 meses |
| `docs/Estrategia_GoogleAds_REVESVAL.txt` | Estrategia de Google Ads |
| `docs/REVESVAL_Resumen_Ejecutivo.docx` | Resumen ejecutivo del proyecto |
| `CLAUDE.md` | Guía técnica para asistentes IA |
