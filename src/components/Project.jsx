import { featured } from '../content.js'
import Section from './Section.jsx'

export default function Project() {
  return (
    <Section id="projects" index="03" label="Featured Project" tint>
      <article>
        <h3 className="project__title">{featured.name}</h3>
        <p className="project__subtitle">{featured.subtitle}</p>
        <p className="project__description">{featured.description}</p>

        <ul className="stats">
          {featured.stats.map((stat) => (
            <li key={stat.label}>
              <p className="stats__value">
                {stat.value}{' '}
                <span className="stats__unit">{stat.unit}</span>
              </p>
              <p className="stats__label">{stat.label}</p>
            </li>
          ))}
        </ul>

        <ol className="notes">
          {featured.details.map((detail, i) => (
            <li key={detail}>
              <span className="notes__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="notes__text">{detail}</p>
            </li>
          ))}
        </ol>
      </article>
    </Section>
  )
}
