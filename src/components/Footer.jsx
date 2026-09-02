import { links, profile } from '../content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <ul className="footer__links">
          {[links.github, links.linkedin, links.x].map((item) => (
            <li key={item.href}>
              <a
                className="link"
                href={item.href}
                rel="me noreferrer"
                target="_blank"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
