# OASIS Restaurant

Modern dining website for OASIS Restaurant, Tanjungpinang.

## Stack

- **Astro 7.3** — static-first, minimal JS
- **Tailwind CSS 4.3** — CSS-first config
- **GSAP** — scroll-driven horizontal storytelling (Experience section)
- **TypeScript** — type-safe data
- **Cloudflare Pages** — recommended deploy target

## Develop

```bash
npm install
npm run dev
```

Background mode:

```bash
astro dev --background
astro dev stop
astro dev status
astro dev logs
```

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/`. Deploy `dist/` to Cloudflare Pages, Netlify, or any static host.

## Structure

```
src/
├── components/       # Astro sections (Hero, MenuPreview, Experience, …)
├── data/             # Single source of truth (menu, gallery, reviews, restaurant)
├── layouts/          # Layout.astro — SEO meta, JSON-LD, global styles
├── pages/            # /, /menu, /gallery, /reviews, /location, /reserve
├── styles/global.css # Design tokens, fonts, animations
└── utils/            # formatCurrency, reservation helper
public/
├── favicon.svg
├── og-default.svg
└── robots.txt
```

## Data

All content lives in `src/data/`. Edit those files to update menu, gallery, reviews, hours, social, etc. No CMS, no DB.

### `restaurant.ts` — change this to flip features on/off

```ts
reservationEnabled: false,  // turn on to show WhatsApp reservation
whatsapp: null,             // "6281234567890" to enable
```

When `whatsapp` is `null`, the Reserve and Events CTAs switch to "Coming soon".

## Adding real assets

1. Drop photos into `public/images/`
2. Update `src/data/menu.ts` `image` fields
3. Update `src/data/gallery.ts` items
4. Replace `public/og-default.svg` with a real 1200×630 PNG/JPG

## Deployment — Cloudflare Pages

1. Push to GitHub
2. Cloudflare dashboard → Pages → Connect to Git
3. Build command: `npm run build`
4. Output directory: `dist`
5. Node version: 22

## SEO

- Per-page `<title>` and `<meta description>`
- OpenGraph + Twitter cards
- `Restaurant` + `LocalBusiness` JSON-LD
- Sitemap at `/sitemap-index.xml`
- `robots.txt` allows all

## Performance budget

- Lighthouse mobile: 95+ across all categories
- Hero image preloaded, rest lazy
- GSAP loaded only on sections that use it
- Fonts loaded via Google Fonts CSS with preconnect
