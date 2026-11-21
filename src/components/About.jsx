import { about } from '../content.js'
import IntroVideo from './IntroVideo.jsx'
import Section from './Section.jsx'

export default function About() {
  return (
    <Section id="about" index="01" label="About">
      <div className="about">
        <p className="about__lead">{about.lead}</p>
        <p>
          {about.work}{' '}
          <a className="link" href="#work">
            More on my work at Manipal Dot Net
          </a>
          .
        </p>
        <p>
          {about.life}{' '}
          <a className="link" href="#beyond">
            Life off the clock
          </a>
          .
        </p>
        <p>
          {about.education}{' '}
          <a className="link" href="#projects">
            See my projects
          </a>
          .
        </p>
      </div>

      <IntroVideo />
    </Section>
  )
}
