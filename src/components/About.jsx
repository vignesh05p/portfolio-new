import { about } from '../content.js'
import Section from './Section.jsx'

export default function About() {
  return (
    <Section id="about" index="01" label="About">
      <div className="about">
        <p className="about__lead">{about[0]}</p>
        <p>
          {about[1]}{' '}
          <a className="link" href="#work">
            More on my AI engineering work at Manipal Dot Net
          </a>
          .
        </p>
        <p>
          {about[2]}{' '}
          <a className="link" href="#projects">
            See AstraTrade AI, my quantitative research platform
          </a>
          .
        </p>
      </div>
    </Section>
  )
}
