import Section from './Section.jsx'
import { about, interests } from '../data.js'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr]">
        <div className="space-y-4 text-mute">
          {about.map((p) => <p key={p}>{p}</p>)}
          <a className="btn" href="#resume">View Resume</a>
        </div>
        <div className="card">
          <h3 className="mb-3 text-lg font-semibold">Interests</h3>
          <ul className="divide-y divide-line text-mute">
            {interests.map((i) => <li key={i} className="py-2.5">{i}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  )
}
