import { renderToStaticMarkup } from 'react-dom/server'
import App from './App.jsx'

// Rendered once at build time by scripts/prerender.mjs. The output is baked
// into dist/index.html so crawlers and no-JS visitors get the full page.
export function render() {
  return renderToStaticMarkup(<App />)
}
