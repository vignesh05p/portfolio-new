# Portfolio — Vignesh Prabhu

Single-page personal site. React + Vite, prerendered to static HTML at build
time. Production: https://vignesh-prabhu.vercel.app/

```bash
npm install
npm run dev      # http://localhost:5173 (React renders in the browser)
npm run build    # -> dist/  (prerendered, ships no React)
npm run preview  # serve the production build
```

## How the build works

`npm run build` runs three steps:

1. `vite build` — client assets. The only JavaScript entry is `src/client.js`.
2. `vite build --ssr src/entry-server.jsx` — renders the same components in Node.
3. `node scripts/prerender.mjs` — injects that markup into `dist/index.html`
   and adds a `<link rel="preload">` for the Inter latin subset.

The result is a static page: **every heading, paragraph and link is in the HTML**,
so crawlers and no-JS visitors get the full document. React is a build-time tool
here — `import.meta.env.DEV` makes the dev-only React branch in `src/client.js`
statically dead, so it is tree-shaken and the production bundle is ~1.7 kB of
`src/enhance.js` (scroll-spy + copy deterrence), not 200 kB of framework.

If you ever add real interactivity, switch `src/client.js` to `hydrateRoot`
instead and accept the React payload.

## Structure

```
index.html               <head>: title, description, canonical, OG/Twitter, JSON-LD
src/content.js           all page copy and data — edit here, not in components
src/styles.css           design tokens + layout (single stylesheet)
src/App.jsx              page composition / section order
src/client.js            the only client entry (enhancement; React only in dev)
src/enhance.js           scroll-spy + copy deterrence, no framework
src/entry-server.jsx     build-time render entry
src/components/          Nav, Hero, About, Section, Work, Project, Stack,
                         Earlier, Education, Contact, Footer
scripts/prerender.mjs    markup injection + font preload
scripts/generate-images.py  regenerates every image in public/ from assets-src/
public/                  robots.txt, sitemap.xml, favicons, og-image, portrait
assets-src/              original full-size portrait and icon (not served)
vercel.json              security headers + cache policy
```

`Section.jsx` is the shared editorial wrapper: a left rail holding the numbered
`<h2>`, content column beside it. Collapses to one column below 860px.

## SEO notes

- **Metadata lives in `index.html`**, not in components — it must be in the
  static HTML, so it is deliberately not rendered by React. Page copy lives in
  `src/content.js`. Those are the only two places to edit.
- **Every location claim is verified**: based in Udupi, onsite in the
  Udupi–Manipal area, open to roles in Bengaluru and Mangaluru and to remote
  work across India. Availability is phrased as availability, never as
  location. Do not add city names that are not true — there are no
  per-city landing pages by design.
- **JSON-LD** is one `@graph`: `ProfilePage` → `Person` (+ `WebSite`,
  `ImageObject`, and a `CreativeWork` for AstraTrade AI). Validate changes with
  the Rich Results Test; keep it valid JSON.
- `sitemap.xml` has a hand-written `<lastmod>`. Update it when you make
  substantive content changes.
- The three profile links (GitHub, LinkedIn, X) carry `rel="me"` and match
  `sameAs` exactly. Keep those URLs identical in both places.

## Other notes

- Colour is limited to the tokens in `:root`. All three text tones clear WCAG AA
  on both the white and tinted backgrounds; check any change before shipping it.
- Type is Inter Variable, self-hosted via `@fontsource-variable/inter`, so the
  page makes no external network requests at runtime.
- Motion is limited to hover/underline transitions and native smooth scrolling,
  both disabled under `prefers-reduced-motion`.
- Copy deterrence (`src/enhance.js`) blocks casual selection, copy and
  right-click, but exempts links so the email stays copyable, and never touches
  focus or keyboard navigation. It is friction, not protection — the page source
  is fully readable, as SEO requires.
- The footer year is baked at build time. Redeploy in January or it will lag.
