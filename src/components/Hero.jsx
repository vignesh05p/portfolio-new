import { links, profile } from '../content.js'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="container hero__layout">
        <div className="hero__text">
          <p className="hero__eyebrow">{profile.headline}</p>

          <h1 className="hero__title" id="hero-title">
            {profile.hero}
          </h1>

          <p className="hero__intro">{profile.intro}</p>

          <p className="hero__meta">
            <span>{profile.location}</span>
            <span className="sep" aria-hidden="true">
              /
            </span>
            <a
              className="link"
              href={links.github.href}
              rel="me noreferrer"
              target="_blank"
            >
              {links.github.label}
            </a>
            <a
              className="link"
              href={links.linkedin.href}
              rel="me noreferrer"
              target="_blank"
            >
              {links.linkedin.label}
            </a>
            <a
              className="link"
              href={links.x.href}
              rel="me noreferrer"
              target="_blank"
            >
              {links.x.label}
            </a>
            <a className="link" href={`mailto:${links.email}`}>
              Email
            </a>
          </p>
        </div>

        <picture className="hero__portrait">
          <source srcSet="/vignesh-prabhu.webp" type="image/webp" />
          <img
            src="/vignesh-prabhu.jpg"
            alt={profile.portraitAlt}
            width="600"
            height="600"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  )
}
