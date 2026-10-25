import Section from './Section.jsx'
import { skills } from '../data.js'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technical skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="card">
            <h3 className="mb-3 text-lg font-semibold">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
