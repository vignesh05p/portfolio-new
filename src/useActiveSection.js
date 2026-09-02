import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in the reading band of the viewport,
 * so the navigation can mark it. Purely a wayfinding aid — no animation.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )

        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -55% 0px' }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [ids])

  return active
}
