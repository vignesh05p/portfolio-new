import { stack } from '../content.js'
import Section from './Section.jsx'

export default function Stack() {
  return (
    <Section id="stack" index="04" label="Technical Skills">
      <div className="stack">
        {stack.map((row) => (
          <div className="stack__row" key={row.group}>
            <h3 className="stack__group">{row.group}</h3>
            <ul className="stack__items">
              {row.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
