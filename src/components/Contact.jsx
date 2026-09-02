import { links, profile } from '../content.js'
import Section from './Section.jsx'

export default function Contact() {
  return (
    <Section id="contact" index="07" label="Contact">
      <h3 className="contact__statement">
        Interested in building serious AI systems?
      </h3>

      <p className="contact__body">
        I am based in {profile.location}, and open to conversations about
        production GenAI, agentic systems and LLM infrastructure.
      </p>

      <a className="contact__email" href={`mailto:${links.email}`}>
        {links.email}
      </a>

      <ul className="contact__links">
        <li>
          <a
            className="link"
            href={links.github.href}
            rel="me noreferrer"
            target="_blank"
          >
            {links.github.label}
          </a>
        </li>
        <li>
          <a
            className="link"
            href={links.linkedin.href}
            rel="me noreferrer"
            target="_blank"
          >
            {links.linkedin.label}
          </a>
        </li>
        <li>
          <a
            className="link"
            href={links.x.href}
            rel="me noreferrer"
            target="_blank"
          >
            {links.x.label}
          </a>
        </li>
      </ul>
    </Section>
  )
}
