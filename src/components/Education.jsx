import { achievements, education } from '../content.js'
import Section from './Section.jsx'

export default function Education() {
  return (
    <Section id="education" index="06" label="Education & Achievements">
      <div className="facts">
        <div>
          <h3 className="fact__title">{education.degree}</h3>
          <p className="fact__meta">{education.school}</p>
          <p className="fact__period">
            {education.period} · {education.detail}
          </p>
        </div>

        <ul className="awards">
          {achievements.map((item) => (
            <li key={item.detail}>
              <span className="awards__title">{item.title}</span>
              <span className="awards__detail">{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
