import { projects } from '../content.js'
import Section from './Section.jsx'

export default function Project() {
  return (
    <Section id="projects" index="03" label="Projects" tint>
      {projects.map((project) => (
        <article
          key={project.id}
          id={project.id}
          className="project"
          aria-labelledby={`${project.id}-title`}
        >
          <h3 className="project__title" id={`${project.id}-title`}>
            {project.name}
          </h3>
          <p className="project__subtitle">{project.subtitle}</p>
          <p className="project__description">{project.description}</p>

          <ul className="stats">
            {project.stats.map((stat) => (
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
            {project.details.map((detail, i) => (
              <li key={detail}>
                <span className="notes__index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="notes__text">{detail}</p>
              </li>
            ))}
          </ol>

          {project.tags && (
            <ul className="tags" aria-label={`${project.name} tech stack`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}

          {project.source && (
            <p className="project__source">
              <a
                className="link"
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                View the source on GitHub
              </a>
            </p>
          )}
        </article>
      ))}
    </Section>
  )
}
