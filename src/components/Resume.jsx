import Section from './Section.jsx'
import { profile } from '../data.js'

export default function Resume() {
  return (
    <Section id="resume" eyebrow="Resume" title="Resume">
      <div className="card max-w-2xl">
        <h3 className="mb-2 text-lg font-semibold">{profile.resumeName}</h3>
        <p className="mb-4 text-mute">One-page resume covering education, skills, projects, and internship experience.</p>
        <a className="btn btn-p" href={profile.resume} download={profile.resumeName}>Download Resume</a>
      </div>
    </Section>
  )
}
