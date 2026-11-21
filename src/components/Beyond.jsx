import { beyond } from '../content.js'
import Section from './Section.jsx'

export default function Beyond() {
  return (
    <Section id="beyond" index="07" label="Off the Clock">
      <ul className="stack">
        {beyond.map((item) => {
          const external = item.link && item.link.href.startsWith('http')
          return (
            <li className="stack__row" key={item.title}>
              <h3 className="stack__group">{item.title}</h3>
              <p className="beyond__text">
                {item.text}
                {item.link && (
                  <a
                    className="link"
                    href={item.link.href}
                    {...(external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {item.link.label}
                  </a>
                )}
                {item.after}
              </p>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
