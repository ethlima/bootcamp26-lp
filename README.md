# Ethereum Lima Bootcamp 2026 — Landing

Sitio estático de la landing del bootcamp en `bootcamp.ethlima.org`.
Astro 6 + Tailwind v4 + TypeScript 6, sin dependencias JS en el cliente más allá
de un `IntersectionObserver` para reveals y un toggle de tema.

## Stack

- **[Astro 6](https://astro.build)** — generador estático
- **[Tailwind CSS v4](https://tailwindcss.com)** — utilidades + tokens en `@theme`
- **TypeScript 6** strict
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — sitemap.xml + hreflang automático
- **pnpm** como package manager

## Requisitos

- Node ≥ 22
- pnpm (recomendado), npm o bun

## Cómo correrlo

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # output a dist/
pnpm preview  # sirve dist/
pnpm check    # type-check
```

## Estructura

```
src/
├── data/
│   ├── content.es.ts    ← copy en español (default)
│   ├── content.en.ts    ← copy en inglés
│   ├── icons.ts         ← catálogo de SVG paths (12 íconos)
│   └── tokens.ts        ← brandColors + accentPalette + stepColors
├── i18n/
│   └── index.ts         ← getContent(lang), isLocale, helpers de locale
├── styles/
│   └── global.css       ← @theme con tokens light/dark + utilidades de marca
├── layouts/
│   └── Layout.astro     ← <head> con SEO, hreflang, FOUC prevention
├── components/
│   ├── Nav, Hero, Intro, Marquee, HowItWorks, Audience, Curriculum,
│   ├── Outcomes, Ecosystem, Process, FAQ, FinalCTA, Footer
│   └── ui/{Section, Button, Eyebrow, CardGlow, Icon, ThemeToggle}
└── pages/
    ├── index.astro      ← / (español)
    └── en/index.astro   ← /en/ (inglés)

public/
├── assets/              ← logo, favicon, llama, hero ETH Lima Day
└── robots.txt
```

## Editar contenido

**Texto y copy** → `src/data/content.es.ts` y `src/data/content.en.ts`.
Estructura espejo entre los dos archivos. Los componentes leen el dict según
el `Astro.currentLocale` actual.

**Tokens de color (brand)** → `src/styles/global.css` (CSS vars en `@theme`)
para los colores fijos, y `src/data/tokens.ts` para los hex que se usan
en estilos inline (gradient strings, alpha appending). Mantener ambos en sync.

**Íconos** → `src/data/icons.ts`. Path SVG single-line (24x24 viewBox).
Se invocan vía `<Icon name="..." />`.

**Fechas del bootcamp** → `src/data/content.es.ts` y `content.en.ts`
(claves `cohort.startLabel`, `cohort.endLabel`, `cohort.startDate`) más
`src/pages/index.astro` y `src/pages/en/index.astro` para el `hasCourseInstance`
del JSON-LD (claves `startDate` y `endDate` en formato ISO `YYYY-MM-DD`).

## i18n

URL structure:
- `/` → español (default, `prefixDefaultLocale: false`)
- `/en/` → inglés

Toggle de idioma (ES↔EN) en el Nav, hreflang alternates en `<head>`,
sitemap con `xhtml:link rel="alternate"` por locale.

Para agregar un idioma: crear `content.{xx}.ts`, registrarlo en
`src/i18n/index.ts` y en `astro.config.mjs` (`i18n.locales` y la opción
`i18n` del integration de sitemap).

## Tema (light / dark)

Tres niveles de prioridad:

1. `localStorage["eth-lima-theme"]` — el toggle persiste aquí
2. `prefers-color-scheme` del OS
3. Default light

CSS vars semánticos (`--color-bg`, `--color-surface`, `--color-fg`, etc.)
viven en `@theme` con valores light, sobreescritos por
`@media (prefers-color-scheme: dark)` y `[data-theme="dark"]`.

Marca multicolor (coral, cyan, teal, lime, royal blue) son colores fijos —
no flipean entre temas. Solo el `--color-accent` flipea (lime en dark, coral
en light) para que los eyebrows y emphasis sigan legibles.

FOUC prevention: script inline `is:inline` en `<head>` aplica el atributo
`data-theme` antes del primer paint.

## SEO

- `sitemap-index.xml` + `sitemap-0.xml` con hreflang generados por build
- `robots.txt` apuntando al sitemap
- `<link rel="canonical">` por página
- Open Graph + Twitter Card completos
- JSON-LD `Course` con `hasCourseInstance` (modo Online, fechas, virtualLocation,
  offers, topics)

## Animaciones

CSS-only + un `IntersectionObserver` vanilla (~25 líneas en `Layout.astro`):

- Hero entry sequence escalonado al cargar
- Reveal on scroll (sections + stagger en grids)
- Marquee infinito de tech stack (pausa al hover)
- Drift del glow del hero (60s loop)
- Float de la llama (7s loop)
- Pulse del cohort dot (2s loop)

Todas respetan `prefers-reduced-motion`.

## Deploy

Static output a `dist/`. Conectar el repo a:

- **Vercel**: auto-detecta Astro, zero-config
- **Cloudflare Pages**: build command `pnpm build`, output `dist/`
- **Netlify**: idem

Custom domain en el provider + actualizar `site` en `astro.config.mjs` si cambia.

## Pendientes conocidos

- Logos reales de Arbitrum / Quantum / Rust Perú en `public/assets/` (hoy son
  placeholders de texto en `Ecosystem.astro`)
- PDF del programa en `public/assets/ethlima-bootcamp-2026.pdf` (linkeado pero
  no existe)
- URLs reales de redes sociales en `content.{es,en}.ts` (placeholders)
- Traducciones inglesas son first-draft, revisar antes de publicar

## Créditos

Comunidad: [Ethereum Lima](https://ethlima.org)
Sponsor: [Arbitrum](https://arbitrum.io)
Aliados: Quantum, Rust Perú
Built by [Bogo](https://github.com/bogos) en Lima
