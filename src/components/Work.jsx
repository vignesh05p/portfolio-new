import { currentRole } from '../content.js'
import Section from './Section.jsx'

export default function Work() {
  const { learning } = currentRole
  const highlightCount = currentRole.highlights.length

  return (
    <Section id="work" index="02" label="Experience">
      <article className="entry">
        <div className="entry__head">
          <h3 className="entry__role">
            {currentRole.role},{' '}
            <a
              className="entry__company entry__company--link"
              href={currentRole.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentRole.company}
            </a>
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
          <li>
            <span className="notes__index" aria-hidden="true">
              {String(highlightCount + 1).padStart(2, '0')}
            </span>
            <p className="notes__text">
              {learning.before}
              <a
                className="link"
                href={learning.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {learning.linkText}
              </a>
              {learning.after}
            </p>
          </li>
        </ol>

        <ul className="tags" aria-label="Focus areas">
          {currentRole.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="lessons">
          <h4 className="lessons__title">
            What MDN taught me <span>(the fun part)</span>
          </h4>
          <ul className="lessons__list">
            {currentRole.lessons.map((lesson) => (
              <li key={lesson}>
                <span className="lessons__arrow" aria-hidden="true">
                  →
                </span>
                <p>{lesson}</p>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  )
}
