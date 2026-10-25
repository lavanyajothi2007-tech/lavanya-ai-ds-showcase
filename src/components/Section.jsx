export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="py-20">
      <div className="wrap fade-up">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2">{title}</h2>
        {children}
      </div>
    </section>
  )
}
