import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="wrap flex flex-wrap items-center justify-between gap-5 text-sm text-mute">
        <p>
          <b className="text-slate-100">Lavanya B.</b> · AI &amp; Data Science Undergraduate
          <br />© {new Date().getFullYear()} Lavanya B. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a className="text-slate-100" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-slate-100" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="btn" href="#home">↑ Back to top</a>
        </div>
      </div>
    </footer>
  )
}
