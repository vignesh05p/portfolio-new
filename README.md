# Portfolio — Vignesh Prabhu

Single-page personal site. React + Vite, no UI framework.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build
```

## Structure

```
index.html            document head: title, meta description, OG tags, Person JSON-LD
src/content.js        all page copy and data — edit here, not in components
src/styles.css        design tokens + layout (single stylesheet)
src/App.jsx           page composition / section order
src/useActiveSection  IntersectionObserver hook for the nav's current-section marker
src/components/       Nav, Hero, Section, Work, Project, Stack, Earlier, Education, Contact, Footer
```

`Section.jsx` is the shared editorial wrapper: a left rail holding the numbered
label, and the content column beside it. It collapses to a single column below
860px.

## Notes

- Colour is limited to the tokens in `:root`. All three text tones clear WCAG AA
  on both the white and tinted backgrounds; check any change before shipping it.
- Type is Inter Variable, self-hosted via `@fontsource-variable/inter`, so the
  page makes no external network requests at runtime.
- Motion is limited to hover/underline transitions and native smooth scrolling,
  both disabled under `prefers-reduced-motion`.
