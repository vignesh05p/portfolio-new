import { readdir, readFile, writeFile } from 'node:fs/promises'
import { render } from '../dist-ssr/entry-server.js'

const PAGE = 'dist/index.html'
let html = await readFile(PAGE, 'utf8')

const markup = render()
if (!html.includes('<div id="root"></div>')) {
  throw new Error('prerender: mount point not found in dist/index.html')
}
html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)

// Preload the latin subset the page actually renders with. It is requested from
// inside the stylesheet, so without this the browser only discovers it after
// CSS parsing — which is what causes the visible font swap.
const assets = await readdir('dist/assets')
const latin = assets.find((f) => /^inter-latin-wght-normal-.*\.woff2$/.test(f))
if (latin) {
  html = html.replace(
    '</head>',
    `  <link rel="preload" href="/assets/${latin}" as="font" type="font/woff2" crossorigin />\n  </head>`
  )
}

await writeFile(PAGE, html)
console.log(
  `prerender: injected ${markup.length.toLocaleString()} bytes of markup` +
    (latin ? ` + font preload (${latin})` : '')
)
