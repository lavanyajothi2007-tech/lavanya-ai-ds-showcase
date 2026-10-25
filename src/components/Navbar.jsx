import { useEffect, useState } from 'react'
import { sections } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.toLowerCase())
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <nav aria-label="Primary" className="wrap relative flex h-16 items-center justify-between">
        <a href="#home" className="font-bold tracking-tight">Lavanya<span className="text-accent">.</span>B</a>
        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-line text-xl lg:hidden"
          aria-label="Toggle menu" aria-expanded={open} aria-controls="menu"
          onClick={() => setOpen(!open)}
        >{open ? '✕' : '☰'}</button>
        <div
          id="menu"
          className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col border-b border-line bg-ink px-5 pb-4 pt-2 lg:static lg:flex lg:flex-row lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0`}
        >
          {sections.map((s) => {
            const id = s.toLowerCase()
            return (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base transition lg:py-2 lg:text-sm ${active === id ? 'bg-ink2 text-white shadow-[inset_0_-2px_0_#6d8bff]' : 'text-mute hover:bg-ink2 hover:text-white'}`}
              >{s}</a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
