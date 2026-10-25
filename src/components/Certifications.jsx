import Section from './Section.jsx'
import { certifications } from '../data.js'

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Certifications & continuous learning">
      {certifications.length === 0 ? (
        <p className="card max-w-xl text-mute">Certificates will appear here once verified documents or credential links are added.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <article key={c.title} className="card">
              {c.date && <p className="mb-1 font-mono text-xs text-accent">{c.date}</p>}
              <h3 className="text-lg font-semibold">{c.title}</h3>
              {c.issuer && <p className="mb-3 text-mute">{c.issuer}</p>}
              {c.category && <span className="tag">{c.category}</span>}
              {c.url && <div className="mt-4"><a className="btn" href={c.url} target="_blank" rel="noopener noreferrer">View Certificate</a></div>}
            </article>
          ))}
        </div>
      )}
    </Section>
  )
}
