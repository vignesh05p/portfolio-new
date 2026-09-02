import { nav, profile } from '../content.js'
import useActiveSection from '../useActiveSection.js'

const IDS = nav.map((item) => item.id)

export default function Nav() {
  const active = useActiveSection(IDS)

  return (
    <header className="nav">
      <nav className="container nav__inner" aria-label="Primary">
        <a className="nav__name" href="#about">
          {profile.name}
        </a>
        <ul className="nav__links">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                className="nav__link"
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
