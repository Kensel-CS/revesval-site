# Plan SEO — REVESVAL

**Tipo de negocio**: Local service (cobertura nacional desde Valparaíso) — segmento B2B agrícola.
**Dominio**: revesval.cl
**Industria**: Construcción / impermeabilización agrícola / riego tecnificado.
**Buyer persona principal**: Agricultor / jefe de campo / ingeniero agrónomo / gerente de operaciones agrícolas que necesita resolver pérdidas de agua por infiltración en tranques de acumulación.

---

## 1. Posicionamiento y propuesta de valor

**Promesa SEO (la frase que tiene que rankear)**:
> Impermeabilización de tranques agrícolas con geomembrana HDPE — Chile

**Diferenciadores que tu contenido debe machacar (E-E-A-T)**:
- **Experience**: años en obra, m² instalados, proyectos por región.
- **Expertise**: técnica de electrofusión HDPE, espesores (1.0/1.5/2.0 mm), normativas.
- **Authoritativeness**: ficha técnica de geomembranas, proveedores certificados, asociación con proyectos de riego subvencionados (Ley 18.450 CNR).
- **Trustworthiness**: RUT empresa, dirección verificable, fotos reales en obra (ya las tienes), proyectos referenciables por región.

---

## 2. Keywords prioritarias (Chile)

### Tier 1 — Money keywords (alta intención comercial)
| Keyword | Volumen est. | Intención | Página objetivo |
|---|---|---|---|
| impermeabilización de tranques | media | comercial | **home** + landing servicio |
| revestimiento de tranques con geomembrana | media | comercial | landing servicio dedicado |
| geomembrana HDPE Chile | media-alta | comercial | landing servicio |
| empresa impermeabilización tranques | baja-media | transaccional | home |
| precio impermeabilización tranque agrícola | baja | comercial | landing servicio + FAQ |
| electrofusión HDPE | baja | informacional/comercial | servicio + blog |

### Tier 2 — Long tail técnico / informacional (captura intención temprana)
- "qué geomembrana usar para tranque de riego"
- "espesor geomembrana tranque agrícola"
- "cómo evitar filtraciones en tranque"
- "vida útil geomembrana HDPE Chile"
- "diseño de tranque de acumulación riego"
- "ley 18.450 CNR impermeabilización" (gancho con subsidio)

### Tier 3 — Local + nicho (cobertura por región)
- "impermeabilización tranques región de Valparaíso"
- "impermeabilización tranques región de O'Higgins"
- "geomembrana Coquimbo / Maule / Ñuble / Bío Bío"
- "impermeabilización embalses Atacama"

> Estas tier-3 alimentan páginas programáticas por región (ver §5).

---

## 3. Arquitectura de información (sitemap objetivo)

Hoy: one-pager. **Recomendación**: mantener home como hub, pero abrir subpáginas para concentrar autoridad temática y rankear por keyword.

```
/                              ← Home (hub, ranquea por "impermeabilización de tranques")
├── /servicios/
│   ├── /revestimiento-tranques-geomembrana/    ← landing servicio core
│   ├── /electrofusion-hdpe/                    ← landing servicio técnico
│   └── /diseno-proyectos-riego/                ← landing servicio complementario
├── /proyectos/                                  ← hub (case studies)
│   ├── /proyectos/tranque-quillota-2024/       ← caso 1
│   └── /proyectos/embalse-curico-2023/         ← caso 2
├── /cobertura/                                  ← hub regional
│   ├── /cobertura/valparaiso/
│   ├── /cobertura/ohiggins/
│   └── /cobertura/coquimbo/                    (págs programáticas, ver §5)
├── /recursos/                                   ← blog/guías técnicas
│   ├── /recursos/guia-geomembrana-hdpe/
│   ├── /recursos/ley-18450-cnr-subsidio-riego/
│   └── /recursos/espesor-geomembrana-tranque/
├── /nosotros/
├── /contacto/                                   ← formulario cotización
└── /cotizar/                                    ← CTA principal con form ampliado
```

**Quick win mientras vives en one-pager**: usar anchors `#servicios`, `#proyectos`, etc. con `<section id>` semánticos y `BreadcrumbList` schema, pero la migración a multi-página es prioridad media-alta para SEO real.

---

## 4. Plan editorial (calendario 6 meses)

Frecuencia: **1 artículo cada 2 semanas** (sostenible para empresa B2B).

| Mes | Tema | Tipo | Keyword principal |
|---|---|---|---|
| M1 | Guía completa: geomembrana HDPE para tranques agrícolas | Pillar (2.500+ palabras) | geomembrana HDPE tranque |
| M1 | Espesor de geomembrana: cómo elegir para tu tranque | How-to | espesor geomembrana tranque |
| M2 | Electrofusión HDPE: qué es y por qué importa | Explainer técnico | electrofusión HDPE |
| M2 | Ley 18.450 CNR: cómo subsidiar tu proyecto de riego | Guía/recurso | ley 18.450 riego subsidio |
| M3 | Caso de estudio: impermeabilización tranque en Quillota | Case study | tranque Valparaíso |
| M3 | Filtraciones en tranques: causas y soluciones | Pillar (problem-solution) | filtración tranque |
| M4 | Vida útil de geomembrana en clima chileno | Data-driven | vida útil geomembrana |
| M4 | Comparación: HDPE vs LDPE vs PVC para tranques | Comparativa | qué geomembrana usar |
| M5 | Diseño hidráulico de tranques de acumulación | Técnico avanzado | diseño tranque acumulación |
| M5 | Caso: embalse zona centro-sur 50.000 m³ | Case study | embalse 50000 m3 |
| M6 | Mantención de tranques impermeabilizados | Operativo | mantención tranque |
| M6 | ROI de un tranque impermeabilizado | Comercial | retorno inversión riego |

---

## 5. SEO programático: páginas por región

15 regiones × 1 página `/cobertura/<region>/` con contenido único:
- H1: "Impermeabilización de tranques en {Región}"
- Estadísticas locales (hectáreas regadas, principales cultivos)
- Proyectos realizados en la región (mínimo 2 menciones reales o "consultar")
- Mapa estático
- FAQ específica por zona (clima, suelos típicos)
- LocalBusiness schema con `areaServed` específico

**Quality gate**: Mínimo 60% contenido único por página. Si no se tiene, agrupar regiones (ej. "Zona norte / centro / sur"). El skill SEO marca HARD STOP a 50+ páginas programáticas con bajo contenido único.

---

## 6. Quick wins técnicos (orden de implementación)

1. **Reducir tamaño del HTML** (hoy 35 MB) → extraer imágenes base64 a archivos. → Mejora LCP de >8s a <2.5s. ✅ siguiente paso (`/seo images optimize`)
2. **Inyectar Schema.org**: Organization, LocalBusiness, Service, BreadcrumbList, FAQPage. ✅ siguiente paso (`/seo schema`)
3. **Open Graph + Twitter Cards**: hoy faltan. Bloquea share en WhatsApp/Linkedin.
4. **Sitemap.xml + robots.txt**: robots ya está. Falta sitemap.
5. **Canonical URL** (hoy ausente): `<link rel="canonical" href="https://revesval.cl/">`
6. **hreflang `es-CL`** (no urgente — solo si abren a otros mercados hispanos).
7. **Imágenes**: alt text descriptivo con keyword en cada imagen, formato WebP/AVIF, dimensiones intrínsecas, lazy loading bajo el fold.
8. **HTTPS forzado**: ✅ ya está en `.htaccess`.
9. **Performance budget**: HTML <100 KB, total página <2 MB, LCP <2.5s, INP <200ms, CLS <0.1.

---

## 7. Off-page y autoridad

- **Google Business Profile**: ficha "REVESVAL" verificada, categoría "Contratista de obras agrícolas" / "Servicio de impermeabilización". Fotos, reseñas (pedir a clientes activos).
- **Directorios sectoriales**: Páginas Amarillas, RedAgrícola, Portalagrochile, Agroinsumos, FIA. Citations consistentes (NAP exacto).
- **Asociaciones gremiales**: SNA, Fedefruta, asociaciones de canalistas → buscar perfil de empresa colaboradora con enlace dofollow.
- **Casos en medios**: RedAgrícola, Mundoagro, Campo Sureño — pitch de case studies con números reales (m³ ahorrados, % filtración reducida).
- **Backlinks técnicos**: artículos invitados en blogs de riego tecnificado, alianzas con marcas de geomembrana (que enlacen a "instaladores autorizados").

---

## 8. Medición y KPIs

| KPI | Baseline | Target 6 meses | Herramienta |
|---|---|---|---|
| Impresiones GSC | — | 5.000/mes | Google Search Console |
| Clicks GSC | — | 250/mes | Google Search Console |
| Posición media keyword Tier 1 | — | <15 | GSC + manual |
| Leads (formulario cotizar) | — | 10/mes | GA4 event |
| LCP móvil | >8s | <2.5s | PageSpeed Insights |
| INP móvil | — | <200ms | CrUX |
| GBP impressions | — | 1.000/mes | GBP Insights |
| Reseñas GBP | — | 10 con avg ≥4.5 | GBP |

**Reto explícito (ACCEPT)**: si en 90 días post-deploy no hay >50 clicks/mes en GSC, revisar (a) crawl bloqueos, (b) intención de query, (c) competencia real para "impermeabilización tranques Chile".

---

## 9. Roadmap 90 días

| Semana | Entregable |
|---|---|
| 1 | Optimización imágenes + Schema.org + canonical + OG/Twitter + sitemap.xml — *deploy técnico* |
| 2 | GBP creado/verificado, NAP en footer, 5 citations primarias |
| 3-4 | Migración a multi-página (servicios + proyectos + cobertura) |
| 5-6 | 2 pillar articles (geomembrana HDPE, ley 18.450) |
| 7-8 | 3 landing pages regionales (Valparaíso, O'Higgins, Coquimbo) |
| 9-10 | 2 case studies con fotos + métricas + schema `Article` |
| 11-12 | Outreach: 5 directorios sectoriales + 2 pitch a medios |

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
