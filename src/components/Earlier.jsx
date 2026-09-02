import { earlier } from '../content.js'
import Section from './Section.jsx'

export default function Earlier() {
  return (
    <Section id="earlier" index="04" label="Earlier Experience">
      <article className="entry">
        <div className="entry__head">
          <h3 className="entry__role">
            {earlier.role},{' '}
            <span className="entry__company">{earlier.company}</span>
          </h3>
          <p className="entry__period">{earlier.period}</p>
        </div>
        <p className="entry__summary">{earlier.note}</p>
      </article>
    </Section>
  )
}
