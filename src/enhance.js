// Progressive enhancement for the prerendered page. No framework, no state:
// the markup is already complete, this only layers on the behaviours that
// genuinely need script.

export function enhance() {
  markActiveSection()
  deterCasualCopying()
  clickToPlayVideos()
}

/**
 * Swaps a video thumbnail link for the YouTube player on click, so nothing
 * from YouTube runs until a visitor asks for it. Modified clicks (new tab,
 * etc.) fall through to the plain link.
 */
function clickToPlayVideos() {
  for (const link of document.querySelectorAll('a[data-video-id]')) {
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      event.preventDefault()

      const id = encodeURIComponent(link.dataset.videoId)
      const iframe = document.createElement('iframe')
      iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`
      iframe.title = link.dataset.videoTitle || 'YouTube video'
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen'
      iframe.allowFullscreen = true
      iframe.referrerPolicy = 'strict-origin-when-cross-origin'
      iframe.className = 'video__frame'

      link.replaceWith(iframe)
      iframe.focus()
    })
  }
}

/** Marks the nav link for whichever section is in the reading band. */
function markActiveSection() {
  const links = Array.from(document.querySelectorAll('.nav__link'))
  if (!links.length || typeof IntersectionObserver === 'undefined') return

  const linkFor = new Map()
  for (const link of links) {
    const id = (link.getAttribute('href') || '').slice(1)
    const section = id && document.getElementById(id)
    if (section) linkFor.set(section, link)
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (!visible.length) return

      const current = linkFor.get(visible[0].target)
      for (const link of linkFor.values()) {
        if (link === current) link.setAttribute('aria-current', 'true')
        else link.removeAttribute('aria-current')
      }
    },
    { rootMargin: '-30% 0px -55% 0px' }
  )

  for (const section of linkFor.keys()) observer.observe(section)
}

/**
 * Friction against casual copying. Deliberately narrow: it never touches
 * keyboard navigation, focus, or links, and anything a visitor actually needs
 * to copy — the email address, profile URLs — stays selectable. This is not
 * content security; the page source remains fully readable.
 */
function deterCasualCopying() {
  document.addEventListener('contextmenu', (event) => {
    // Links keep their menu so "open in new tab" and "copy link" still work.
    if (event.target.closest && event.target.closest('a')) return
    event.preventDefault()
  })

  document.addEventListener('copy', (event) => {
    if (!selectionIsExempt()) event.preventDefault()
  })
}

function selectionIsExempt() {
  const selection = document.getSelection()
  if (!selection || selection.rangeCount === 0) return false
  const node = selection.getRangeAt(0).commonAncestorContainer
  const element = node.nodeType === 1 ? node : node.parentElement
  return Boolean(element && element.closest('a, [data-selectable]'))
}
