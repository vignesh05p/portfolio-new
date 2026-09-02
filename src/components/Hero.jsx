import { links, profile } from '../content.js'

export default function Hero() {
  return (
    <section className="hero" id="about" aria-labelledby="hero-title">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          <div style={{ flex: '1 1 500px' }}>
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
                target="_blank"
                rel="noreferrer"
              >
                {links.github.label}
              </a>
              <a
                className="link"
                href={links.linkedin.href}
                target="_blank"
                rel="noreferrer"
              >
                {links.linkedin.label}
              </a>
              <a
                className="link"
                href={links.x.href}
                target="_blank"
                rel="noreferrer"
              >
                {links.x.label}
              </a>
              <a className="link" href={`mailto:${links.email}`}>
                Email
              </a>
            </p>
          </div>
          <div style={{ flexShrink: 0, display: 'flex', justifyContent: 'center', flex: '1 1 300px' }}>
            <img 
              src="/vignesh-pic.png" 
              alt={profile.name} 
              style={{ width: 'clamp(200px, 25vw, 300px)', height: 'clamp(200px, 25vw, 300px)', borderRadius: '50%', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </div>
    </section>
  )
}
