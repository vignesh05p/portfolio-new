import { currentRole } from '../content.js'
import Section from './Section.jsx'

export default function Work() {
  return (
    <Section id="work" index="01" label="Selected Work">
      <article className="entry">
        <div className="entry__head">
          <h3 className="entry__role">
            {currentRole.role},{' '}
            <span className="entry__company">{currentRole.company}</span>
          </h3>
          <p className="entry__period">{currentRole.period}</p>
        </div>

        <p className="entry__summary">{currentRole.summary}</p>

        <ol className="notes">
          {currentRole.highlights.map((highlight, i) => (
            <li key={highlight}>
              <span className="notes__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="notes__text">{highlight}</p>
            </li>
          ))}
        </ol>

        <ul className="tags" aria-label="Focus areas">
          {currentRole.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </Section>
  )
}
