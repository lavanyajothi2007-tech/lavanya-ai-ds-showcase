import Section from './Section.jsx'
import { profile } from '../data.js'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s connect">
      <p className="max-w-[52ch] text-lg">Interested in connecting about internships, projects, technology, or career opportunities? Feel free to reach out.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a className="btn btn-p" href={`mailto:${profile.email}`}>Email Me</a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </Section>
  )
}
