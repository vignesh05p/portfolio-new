import './styles.css'
import '@fontsource-variable/inter'
import { enhance } from './enhance.js'

// Production ships no React: the markup is prerendered at build time and this
// entry is only the enhancement layer. In dev there is nothing prerendered, so
// React renders the page as usual. The dev branch is statically dead in the
// production build and drops out of the bundle.
if (import.meta.env.DEV) {
  Promise.all([
    import('react'),
    import('react-dom/client'),
    import('./App.jsx'),
  ]).then(([React, { createRoot }, { default: App }]) => {
    createRoot(document.getElementById('root')).render(
      React.createElement(React.StrictMode, null, React.createElement(App))
    )
    enhance()
  })
} else {
  enhance()
}
