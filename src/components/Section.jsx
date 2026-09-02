export default function Section({ id, index, label, tint = false, children }) {
  return (
    <section
      id={id}
      className={tint ? 'section section--tint' : 'section'}
      aria-labelledby={`${id}-label`}
    >
      <div className="container">
        <div className="grid">
          <div className="rail">
            <h2 className="label" id={`${id}-label`}>
              <span aria-hidden="true">{index} / </span>
              {label}
            </h2>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  )
}
