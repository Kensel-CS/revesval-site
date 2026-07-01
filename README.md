<div align="center">

# REVESVAL

**Sitio web corporativo · Impermeabilización de tranques agrícolas**

[revesval.cl](https://revesval.cl)

<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)
![Decap CMS](https://img.shields.io/badge/Decap_CMS-FF0082?style=flat-square&logo=netlify-cms&logoColor=white)

</div>

---

## Sobre el Proyecto

Sitio web one-page de alto rendimiento para **REVESVAL**, empresa chilena especializada en impermeabilización de tranques agrícolas con geomembrana HDPE, soldadura por electrofusión y diseño de proyectos de riego. Cobertura nacional.

El sitio fue diseñado, desarrollado y desplegado en producción con un sistema de autogestión de contenidos (CMS) que permite al cliente editar textos, imágenes, servicios y proyectos sin intervención técnica.

### Alcance del desarrollo

- Diseño UI/UX responsive (mobile-first)
- Desarrollo frontend completo (HTML/CSS/JS — sin frameworks)
- Sistema de compilación estática con Node.js
- Integración de CMS headless (Decap CMS + Netlify Identity)
- SEO técnico avanzado (Schema.org, Open Graph, sitemap)
- Deploy continuo con CI/CD automatizado
- Formulario de contacto funcional
- Estrategia de Google Ads y plan SEO a 6 meses

---

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | HTML5 · CSS3 · Vanilla JS |
| Build | Node.js (compilador estático custom) |
| CMS | Decap CMS + Netlify Identity |
| Hosting | Netlify (CDN global · SSL automático) |
| Formulario | FormSubmit (sin backend) |
| Analytics | Google Analytics 4 + Tag Manager |
| Dominio | NIC Chile → DNS Netlify |

---

## Arquitectura

```
src/index.html          Plantilla con {{placeholders}}
       +
content.json            Datos editables (CMS)
projects/*.json         Proyectos individuales
       ↓
    build.js            Compilador Node.js
       ↓
public/index.html       Sitio estático final
       ↓
    Netlify             CDN + HTTPS + Deploy automático
```

El cliente edita contenido desde un panel visual → Decap CMS escribe un commit en GitHub → Netlify detecta el cambio, recompila y despliega automáticamente en ~1 minuto.

---

## Características Técnicas

**Performance**
- Imágenes optimizadas en WebP
- Assets nombrados por hash de contenido (cache-busting automático)
- Video hero con poster base64 para carga instantánea
- CSS y JS inlined — zero requests adicionales

**SEO**
- Schema.org: `Organization`, `LocalBusiness`, `WebSite`, `Service`, `BreadcrumbList`
- Open Graph + Twitter Cards
- Meta `canonical`, `robots`, `geo`
- `sitemap.xml` + `robots.txt`

**CMS (Autogestión)**
- Panel protegido con autenticación (Netlify Identity — solo invitación)
- Secciones editables: Hero, Empresa, Servicios, Proyectos, Contacto, Footer
- Galería de proyectos como colección individual (CRUD completo)
- Subida de imágenes directa desde el panel

**Otros**
- Formulario de cotización con validación y envío sin backend
- Botón flotante de WhatsApp con badge interactivo
- Animaciones de scroll (reveal on scroll)
- Página 404 personalizada
- Favicon con monograma de marca

---

## Estructura

```
├── src/index.html              Plantilla fuente
├── build.js                    Compilador estático
├── package.json
├── public/                     Directorio publicado
│   ├── index.html              Sitio compilado
│   ├── 404.html                Página de error personalizada
│   ├── favicon.png
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── data/
│   │   ├── content.json        Contenido general
│   │   └── projects/           Proyectos (1 JSON c/u)
│   ├── assets/
│   │   ├── img/                Imágenes (WebP/PNG/JPG)
│   │   └── video/              Video hero (MP4)
│   └── panel-revesval/         CMS (acceso restringido)
│       ├── index.html
│       └── config.yml
└── docs/                       Documentación interna
    ├── SEO_Plan_REVESVAL.md
    ├── Estrategia_GoogleAds_REVESVAL.txt
    └── REVESVAL_Resumen_Ejecutivo.docx
```

---

## Build y Deploy

```bash
# Compilación local
npm run build

# Deploy → automático con cada push a main
# Netlify ejecuta: npm run build → publica public/
```

---

<div align="center">

<br>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=16&duration=2500&pause=1500&color=00FF41&center=true&vCenter=true&width=500&lines=%24+echo+%22Desarrollado+por+Kensel+Campusano%22;+Ingeniero+en+Inform%C3%A1tica;+Desarrollador+Web+Full+Stack;+Chile+%F0%9F%87%A8%F0%9F%87%B1" alt="Terminal Typing">

<br>

[![GitHub](https://img.shields.io/badge/GitHub-0D1117?style=flat-square&logo=github&logoColor=00FF41)](https://github.com/Kensel-CS)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0D1117?style=flat-square&logo=linkedin&logoColor=00FF41)](https://linkedin.com/in/kensel-campusano)
[![Email](https://img.shields.io/badge/Email-0D1117?style=flat-square&logo=gmail&logoColor=00FF41)](mailto:kenselcampusano@gmail.com)

<sub>Proyecto entregado · Junio 2026 · Estado: ✔ producción</sub>

</div>

