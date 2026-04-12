'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { projects } from '@/data/projects'

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const linkClass = (href: string) =>
    `text-sm transition-colors duration-200 ${
      isActive(href)
        ? 'text-cream font-semibold'
        : 'text-muted hover:text-wheat'
    }`

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'color-mix(in srgb, #0B1221 90%, transparent)',
        backdropFilter: 'blur(12px)',
        borderColor: 'color-mix(in srgb, #E9CE8A 12%, transparent)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-wheat text-lg tracking-wide hover:text-cream transition-colors"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Addison Litvinchuk
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={linkClass('/')}>Home</Link>
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={linkClass(`/projects/${p.slug}`)}
            >
              {p.course.split('—')[0].trim()}
            </Link>
          ))}
          <Link href="/handbook" className={linkClass('/handbook')}>
            Handbook
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-wheat"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
          style={{ borderColor: 'color-mix(in srgb, #E9CE8A 12%, transparent)' }}
        >
          <Link href="/" className={linkClass('/')} onClick={() => setOpen(false)}>Home</Link>
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={linkClass(`/projects/${p.slug}`)}
              onClick={() => setOpen(false)}
            >
              {p.title}
            </Link>
          ))}
          <Link href="/handbook" className={linkClass('/handbook')} onClick={() => setOpen(false)}>
            Handbook
          </Link>
        </div>
      )}
    </nav>
  )
}
