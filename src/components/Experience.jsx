import Section from './Section.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Experience & industry exposure">
      <div className="grid gap-4 border-l-2 border-line pl-6">
        {experience.map((e) => (
          <article key={e.role + e.org} className="card relative before:absolute before:-left-[35px] before:top-7 before:h-3 before:w-3 before:rounded-full before:bg-accent before:shadow-[0_0_0_4px_#0b0f1a]">
            <p className="mb-1 font-mono text-xs uppercase tracking-wider text-accent">{e.mode}</p>
            <h3 className="text-lg font-semibold">{e.role}</h3>
            <p className="font-medium">{e.org}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-mute">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
