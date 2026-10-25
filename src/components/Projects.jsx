import Section from './Section.jsx'
import { projects } from '../data.js'

function Body({ p }) {
  return (
    <div className="p-6">
      <p className="mb-1 text-[13px] font-semibold text-accent">{p.category}</p>
      <h3 className="mb-2 text-2xl font-bold tracking-tight">{p.name}</h3>
      <p className="mb-3 text-mute">{p.description}</p>
      <p className="mb-2 text-sm text-mute"><b className="text-slate-100">Problem:</b> {p.problem}</p>
      <p className="mb-2 text-sm text-mute"><b className="text-slate-100">Solution:</b> {p.solution}</p>
      {p.users && <p className="mb-2 text-sm text-mute"><b className="text-slate-100">Intended users:</b> {p.users}</p>}
      <div className="my-4 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="tag">{t}</span>)}</div>
      {(p.live || p.repo) && (
        <div className="flex flex-wrap gap-3">
          {p.live && <a className="btn btn-p" href={p.live} target="_blank" rel="noopener noreferrer">Live Application</a>}
          {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">GitHub</a>}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Projects that turn ideas into reality">
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className={`group overflow-hidden rounded-2xl border border-line bg-panel transition hover:-translate-y-1 hover:border-accent ${p.featured ? 'md:col-span-2' : ''}`}>
            <div className={p.featured ? 'grid md:grid-cols-2' : ''}>
              <div className="overflow-hidden">
                <div className={`flex items-center justify-center bg-gradient-to-br from-accent/40 to-violet/30 font-mono text-[13px] font-semibold tracking-[0.12em] transition duration-500 group-hover:scale-105 ${p.featured ? 'min-h-[200px] h-full' : 'aspect-[16/7]'}`}>
                  {p.visual}
                </div>
              </div>
              <Body p={p} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
