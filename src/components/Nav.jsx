import { nav, profile } from '../content.js'

export default function Nav() {
  return (
    <header className="nav">
      <nav className="container nav__inner" aria-label="Primary">
        <a className="nav__name" href="#top">
          {profile.name}
        </a>
        <ul className="nav__links">
          {nav.map((item) => (
            <li key={item.id}>
              <a className="nav__link" href={`#${item.id}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
