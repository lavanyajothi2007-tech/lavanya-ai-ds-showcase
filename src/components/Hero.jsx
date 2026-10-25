import { profile } from '../data.js'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(#222c44_1px,transparent_1px),linear-gradient(90deg,#222c44_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_70%_40%,#000_10%,transparent_70%)]"
      />
      <div className="wrap relative grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <div className="fade-up order-2 lg:order-1">
          <p className="mb-4 font-mono text-[13px] font-semibold tracking-[0.14em] text-mute">HELLO, I’M LAVANYA B.</p>
          <h1 className="mb-3 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
            AI &amp; Data Science{' '}
            <span className="bg-gradient-to-br from-accent to-violet bg-clip-text text-transparent">Undergraduate</span>
          </h1>
          <p className="mb-5 font-mono text-sm font-medium text-accent">{profile.stack}</p>
          <p className="max-w-[52ch] text-lg text-slate-100">{profile.tagline}</p>
          <p className="mt-3 max-w-[52ch] text-mute">{profile.intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn btn-p" href="#projects">Explore Projects</a>
            <a className="btn" href={profile.resume} download={profile.resumeName}>Download Resume</a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">View GitHub</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
          </div>
        </div>
        <figure className="fade-up order-1 mx-auto w-[min(70%,300px)] rounded-[28px] bg-gradient-to-br from-accent to-violet p-2 shadow-[0_40px_80px_-30px_rgba(80,100,255,.55)] lg:order-2 lg:w-[min(100%,380px)]">
          <img
            src={profile.photo} alt="Portrait of Lavanya B in a navy blazer" width="800" height="1202"
            className="block aspect-[2/3] w-full rounded-[21px] object-cover object-[50%_20%]"
            fetchpriority="high"
          />
        </figure>
      </div>
    </section>
  )
}
