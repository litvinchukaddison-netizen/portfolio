import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProject, getCTMF, projects } from '@/data/projects'
import SectionHeader from '@/components/SectionHeader'
import StrandBadge from '@/components/StrandBadge'
import ImageGallery from '@/components/ImageGallery'
import EvidenceCarousel from '@/components/EvidenceCarousel'

export function generateStaticParams() {
  return projects.flatMap((p) =>
    p.process.ctmfs.map((c) => ({ slug: p.slug, ctmf: c.id }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; ctmf: string }>
}) {
  const { slug, ctmf: ctmfId } = await params
  const ctmf = getCTMF(slug, ctmfId)
  const project = getProject(slug)
  if (!ctmf || !project) return {}
  return { title: `${ctmf.name} — ${project.title} — Addison Litvinchuk` }
}

export default async function CTMFPage({
  params,
}: {
  params: Promise<{ slug: string; ctmf: string }>
}) {
  const { slug, ctmf: ctmfId } = await params
  const project = getProject(slug)
  const ctmf = getCTMF(slug, ctmfId)
  if (!project || !ctmf) notFound()

  const ctmfIndex = project.process.ctmfs.findIndex((c) => c.id === ctmfId)
  const prevCTMF = project.process.ctmfs[ctmfIndex - 1]
  const nextCTMF = project.process.ctmfs[ctmfIndex + 1]

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-10" style={{ color: 'color-mix(in srgb, #ACACC4 60%, transparent)' }}>
        <Link href="/" className="hover:text-wheat transition-colors">Home</Link>
        <span>/</span>
        <Link href={`/projects/${project.slug}`} className="hover:text-wheat transition-colors">
          {project.title}
        </Link>
        <span>/</span>
        <span style={{ color: '#E9CE8A' }}>Process</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <StrandBadge strand={ctmf.strand} />
          <span className="text-xs font-mono" style={{ color: 'color-mix(in srgb, #ACACC4 50%, transparent)' }}>
            CTMF {ctmfIndex + 1} of {project.process.ctmfs.length}
          </span>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', color: '#FFEFD4' }}>
          {ctmf.name}
        </h1>
        <p className="mt-2 text-sm" style={{ color: 'color-mix(in srgb, #ACACC4 70%, transparent)' }}>
          {project.title} — {project.course}
        </p>
      </div>

      <hr className="wheat-divider" />

      {/* ── What is it ────────────────────────────────────────────────────── */}
      <section className="mb-16">
        <SectionHeader label="Definition" title="What is this CTMF?" />
        <div className="card">
          {ctmf.description.startsWith('/*') ? (
            <p className="placeholder-content" style={{ color: '#ACACC4' }}>{ctmf.description}</p>
          ) : (
            ctmf.description.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-4' : ''} style={{ color: '#ACACC4' }}>{para}</p>
            ))
          )}
        </div>
      </section>

      <hr className="wheat-divider" />

      {/* ── How used ──────────────────────────────────────────────────────── */}
      <section className="mb-16">
        <SectionHeader
          label="Application"
          title="How We Used It"
          subtitle="Specifically how this CTMF was applied in this project — when, with what inputs, and what it produced."
        />
        <div className="card">
          {ctmf.howUsed.startsWith('/*') ? (
            <p className="placeholder-content" style={{ color: '#ACACC4' }}>{ctmf.howUsed}</p>
          ) : (
            ctmf.howUsed.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-4' : ''} style={{ color: '#ACACC4' }}>{para}</p>
            ))
          )}
        </div>
      </section>

      <hr className="wheat-divider" />

      {/* ── Evidence ──────────────────────────────────────────────────────── */}
      <section className="mb-16">
        <SectionHeader
          label="Evidence"
          title="Supporting Evidence"
          subtitle="Artefacts, outputs, or observations that demonstrate the use of this CTMF."
        />
        {/* Evidence carousel */}
        {ctmf.evidenceItems && ctmf.evidenceItems.length > 0 && (
          <EvidenceCarousel items={ctmf.evidenceItems} />
        )}
        {/* Legacy image gallery fallback */}
        {(!ctmf.evidenceItems || ctmf.evidenceItems.length === 0) && (
          <ImageGallery images={ctmf.images} />
        )}
      </section>

      <hr className="wheat-divider" />

      {/* ── Assessment ────────────────────────────────────────────────────── */}
      <section className="mb-16">
        <SectionHeader
          label="Reflection"
          title="Critical Assessment"
          subtitle="An honest evaluation of this CTMF — what it helped you do, when to use or avoid it, and what you would do differently."
        />
        <div
          className="card border-l-2"
          style={{ borderLeftColor: '#E9CE8A' }}
        >
          {ctmf.assessment.startsWith('/*') ? (
            <p className="placeholder-content" style={{ color: '#ACACC4' }}>{ctmf.assessment}</p>
          ) : (
            ctmf.assessment.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-4' : ''} style={{ color: '#ACACC4' }}>{para}</p>
            ))
          )}
        </div>
      </section>

      {/* ── Citations ───────────────────────────────────────────────────── */}
      {ctmf.citations && ctmf.citations.length > 0 && (
        <>
          <hr className="wheat-divider" />
          <section className="mb-16">
            <SectionHeader label="Sources" title="Citations" />
            <ol className="list-none space-y-2">
              {ctmf.citations.map((ref) => (
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

      {/* ── CTMF navigation ───────────────────────────────────────────────── */}
      <div className="flex justify-between gap-4 mt-16">
        {prevCTMF ? (
          <Link
            href={`/projects/${project.slug}/process/${prevCTMF.id}`}
            className="card flex-1 hover:border-wheat/40"
          >
            <p className="text-xs opacity-50 mb-1">← Previous CTMF</p>
            <p className="text-sm font-semibold" style={{ color: '#E9CE8A' }}>{prevCTMF.name}</p>
            <StrandBadge strand={prevCTMF.strand} />
          </Link>
        ) : (
          <Link
            href={`/projects/${project.slug}`}
            className="card flex-1 hover:border-wheat/40"
          >
            <p className="text-xs opacity-50 mb-1">← Back to Project</p>
            <p className="text-sm font-semibold" style={{ color: '#E9CE8A' }}>{project.title}</p>
          </Link>
        )}
        {nextCTMF ? (
          <Link
            href={`/projects/${project.slug}/process/${nextCTMF.id}`}
            className="card flex-1 text-right hover:border-wheat/40"
          >
            <p className="text-xs opacity-50 mb-1">Next CTMF →</p>
            <p className="text-sm font-semibold" style={{ color: '#E9CE8A' }}>{nextCTMF.name}</p>
            <div className="flex justify-end mt-1">
              <StrandBadge strand={nextCTMF.strand} />
            </div>
          </Link>
        ) : (
          <Link
            href={`/projects/${project.slug}`}
            className="card flex-1 text-right hover:border-wheat/40"
          >
            <p className="text-xs opacity-50 mb-1">Back to Project →</p>
            <p className="text-sm font-semibold" style={{ color: '#E9CE8A' }}>{project.title}</p>
          </Link>
        )}
      </div>

    </div>
  )
}
