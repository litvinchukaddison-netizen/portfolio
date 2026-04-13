import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Users } from 'lucide-react'
import { getProject, projects } from '@/data/projects'
import SectionHeader from '@/components/SectionHeader'
import StrandBadge from '@/components/StrandBadge'


// Generate static params for all project slugs
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return { title: `${project.title} — Addison Litvinchuk` }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prev = projects[currentIndex - 1]
  const next = projects[currentIndex + 1]

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm mb-10 hover:text-wheat transition-colors"
        style={{ color: 'color-mix(in srgb, #ACACC4 70%, transparent)' }}
      >
        <ArrowLeft size={14} /> All Projects
      </Link>

      {/* ── Banner ──────────────────────────────────────────────────────── */}
      <div
        className="relative w-full rounded-2xl overflow-hidden mb-12 glow"
        style={{ aspectRatio: '2 / 1' }}
      >
        <Image
          src={project.banner}
          alt={`${project.title} banner`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 flex flex-col justify-end p-8"
          style={{ background: 'linear-gradient(to top, #0B1221 0%, rgba(11,18,33,0.4) 60%, transparent 100%)' }}
        >
          <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: '#E9CE8A', opacity: 0.8 }}>
            {project.course}
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', color: '#FFEFD4' }}>
            {project.title}
          </h1>
          <p className="mt-1 text-sm" style={{ color: '#ACACC4' }}>{project.timeline}</p>
        </div>
      </div>

      {/* ── Team credit ─────────────────────────────────────────────────── */}
      {project.teammates.length > 0 && (
        <div
          className="flex items-start gap-3 mb-12 p-4 rounded-xl"
          style={{ backgroundColor: 'color-mix(in srgb, #E9CE8A 6%, transparent)', border: '1px solid color-mix(in srgb, #E9CE8A 15%, transparent)' }}
        >
          <Users size={16} className="mt-0.5 shrink-0" style={{ color: '#E9CE8A' }} />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#E9CE8A' }}>
              Team
            </p>
            <p className="text-sm" style={{ color: '#ACACC4' }}>
              Addison Litvinchuk, {project.teammates.join(', ')}
            </p>
          </div>
        </div>
      )}

      {/* ── Assignment ──────────────────────────────────────────────────── */}
      <section className="mb-20">
        <SectionHeader label="Context" title="The Assignment" />
        <div className="card">
          {project.assignment.startsWith('/*') ? (
            <p className="placeholder-content" style={{ color: '#ACACC4' }}>{project.assignment}</p>
          ) : (
            project.assignment.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-4' : ''} style={{ color: '#ACACC4' }}>{para}</p>
            ))
          )}
        </div>
      </section>

      <hr className="wheat-divider" />

      {/* ── One-pager ───────────────────────────────────────────────────── */}
      <section className="mb-20">
        <SectionHeader label="Summary" title="One-Pager" />
        <div className="w-full rounded-xl overflow-hidden border" style={{ borderColor: 'color-mix(in srgb, #E9CE8A 15%, transparent)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.onePager}
            alt={`${project.title} one-pager`}
            className="w-full h-auto block"
          />
        </div>
      </section>

      <hr className="wheat-divider" />

      {/* ── Process ─────────────────────────────────────────────────────── */}
      <section className="mb-20">
        <SectionHeader
          label="Frame · Diverge · Converge · Represent"
          title="Design Process"
          subtitle="An account of the design process, structured around the three CTMFs applied in this project."
        />

        {/* Process overview */}
        <div className="card mb-10">
          <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: '#E9CE8A', opacity: 0.7 }}>
            Overview
          </p>
          {project.process.overview.startsWith('/*') ? (
            <p className="placeholder-content" style={{ color: '#ACACC4' }}>{project.process.overview}</p>
          ) : (
            project.process.overview.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-4' : ''} style={{ color: '#ACACC4' }}>{para}</p>
            ))
          )}
        </div>

        {/* CTMF cards — each links to its own subpage */}
        <div className="grid md:grid-cols-3 gap-5">
          {project.process.ctmfs.map((ctmf, i) => (
            <Link
              key={ctmf.id}
              href={`/projects/${project.slug}/process/${ctmf.id}`}
              className="card group block"
            >
              <div className="flex items-center justify-between mb-3">
                <StrandBadge strand={ctmf.strand} />
                <span className="text-xs font-mono" style={{ color: 'color-mix(in srgb, #ACACC4 50%, transparent)' }}>
                  CTMF {i + 1}
                </span>
              </div>
              <h3
                className="text-base mb-2 group-hover:text-cream transition-colors"
                style={{ fontFamily: 'var(--font-display)', color: '#E9CE8A' }}
              >
                {ctmf.name}
              </h3>
              <p className="text-xs line-clamp-3" style={{ color: '#ACACC4' }}>
                {ctmf.description.startsWith('/*') ? (
                  <span className="italic opacity-50">/*Click to add content*/</span>
                ) : ctmf.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs" style={{ color: '#E9CE8A', opacity: 0.7 }}>
                View analysis <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <hr className="wheat-divider" />

      {/* ── Design ──────────────────────────────────────────────────────── */}
      <section className="mb-20">
        <SectionHeader label="The solution" title="Design" />
        <div className="card mb-8">
          {project.design.overview.startsWith('/*') ? (
            <p className="placeholder-content" style={{ color: '#ACACC4' }}>{project.design.overview}</p>
          ) : (
            project.design.overview.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-4' : ''} style={{ color: '#ACACC4' }}>{para}</p>
            ))
          )}
        </div>
      </section>

      <hr className="wheat-divider" />

      {/* ── Teamwork ────────────────────────────────────────────────────── */}
      <section className="mb-20">
        <SectionHeader label="Collaboration" title="Teamwork" />
        <div className="card">
          {project.teamwork.startsWith('/*') ? (
            <p className="placeholder-content" style={{ color: '#ACACC4' }}>{project.teamwork}</p>
          ) : (
            project.teamwork.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-4' : ''} style={{ color: '#ACACC4' }}>{para}</p>
            ))
          )}
        </div>
      </section>

      <hr className="wheat-divider" />

      {/* ── Reflection ──────────────────────────────────────────────────── */}
      <section className="mb-20">
        <SectionHeader label="Looking back" title="My Position's Influence" />
        <div className="card">
          {project.reflection.startsWith('/*') ? (
            <p className="placeholder-content" style={{ color: '#ACACC4' }}>{project.reflection}</p>
          ) : (
            project.reflection.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-4' : ''} style={{ color: '#ACACC4' }}>{para}</p>
            ))
          )}
        </div>
      </section>

      {/* ── Citations ───────────────────────────────────────────────────── */}
      {project.references.length > 0 && (
        <>
          <hr className="wheat-divider" />
          <section className="mb-20">
            <SectionHeader label="Sources" title="Citations" />
            <ol className="list-none space-y-2">
              {project.references.map((ref) => (
                <li key={ref.label} className="flex gap-3 text-sm" style={{ color: '#ACACC4' }}>
                  <span className="shrink-0 font-mono" style={{ color: '#E9CE8A' }}>{ref.label}</span>
                  <span>
                    {ref.citation}
                    {ref.url && (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 inline-flex items-center gap-1 text-xs font-mono hover:opacity-100 transition-opacity"
                        style={{ color: '#E9CE8A', opacity: 0.7 }}
                      >
                        View ↗
                      </a>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </>
      )}
      {project.references.length === 0 && (
        <>
          <hr className="wheat-divider" />
          <section className="mb-20">
            <SectionHeader label="Sources" title="References" />
            <p className="placeholder-content text-sm">
              [Add your references to data/projects.ts using the format: {'{ label: "[1]", citation: "Author (Year). Title. Publisher." }'}]
            </p>
          </section>
        </>
      )}

      {/* ── Project navigation ──────────────────────────────────────────── */}
      <div className="flex justify-between gap-4 mt-16">
        {prev ? (
          <Link
            href={`/projects/${prev.slug}`}
            className="card flex-1 flex items-center gap-3 hover:border-wheat/40"
          >
            <ArrowLeft size={16} style={{ color: '#E9CE8A' }} />
            <div>
              <p className="text-xs opacity-50 mb-0.5">Previous</p>
              <p className="text-sm font-semibold" style={{ color: '#E9CE8A' }}>{prev.title}</p>
            </div>
          </Link>
        ) : <div className="flex-1" />}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="card flex-1 flex items-center justify-end gap-3 text-right hover:border-wheat/40"
          >
            <div>
              <p className="text-xs opacity-50 mb-0.5">Next</p>
              <p className="text-sm font-semibold" style={{ color: '#E9CE8A' }}>{next.title}</p>
            </div>
            <ArrowRight size={16} style={{ color: '#E9CE8A' }} />
          </Link>
        ) : <div className="flex-1" />}
      </div>

    </div>
  )
}
