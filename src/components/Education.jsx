import Section from './Section.jsx'
import { education as e } from '../data.js'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education">
      <div className="card max-w-2xl">
        <p className="mb-1 font-mono text-xs uppercase tracking-wider text-accent">{e.graduation}</p>
        <h3 className="text-xl font-semibold">{e.degree}</h3>
        <p className="my-1 text-mute">{e.field}</p>
        <p className="mb-3 text-mute">{e.college}</p>
        <span className="tag">{e.cgpa}</span>
        <p className="mb-2 mt-5 text-sm font-semibold">Relevant coursework</p>
        <div className="flex flex-wrap gap-2">{e.coursework.map((c) => <span key={c} className="tag">{c}</span>)}</div>
      </div>
    </Section>
  )
}
