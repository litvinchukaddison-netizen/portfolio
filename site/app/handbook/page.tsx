import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { handbook } from '@/data/handbook'
import { projects } from '@/data/projects'
import SectionHeader from '@/components/SectionHeader'
import StrandBadge from '@/components/StrandBadge'
import type { CTMFStrand, HandbookSection } from '@/data/types'

// Helper to check if a handbook entry belongs to a given strand
function hasStrand(entry: { strand: CTMFStrand | CTMFStrand[] }, strand: CTMFStrand) {
  return Array.isArray(entry.strand) ? entry.strand.includes(strand) : entry.strand === strand
}

const STRAND_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  Frame:     { bg: 'color-mix(in srgb, #7B9EBE 8%, transparent)', border: 'color-mix(in srgb, #7B9EBE 30%, transparent)', text: '#9ec5e8' },
  Diverge:   { bg: 'color-mix(in srgb, #9E7BBE 8%, transparent)', border: 'color-mix(in srgb, #9E7BBE 30%, transparent)', text: '#c5a0e8' },
  Converge:  { bg: 'color-mix(in srgb, #7BBE9E 8%, transparent)', border: 'color-mix(in srgb, #7BBE9E 30%, transparent)', text: '#a0e8c5' },
  Represent: { bg: 'color-mix(in srgb, #E9CE8A 8%, transparent)', border: 'color-mix(in srgb, #E9CE8A 30%, transparent)', text: '#E9CE8A' },
  General:   { bg: 'color-mix(in srgb, #ACACC4 8%, transparent)', border: 'color-mix(in srgb, #ACACC4 25%, transparent)', text: '#ACACC4' },
}

const STRANDS: CTMFStrand[] = ['Frame', 'Diverge', 'Converge', 'Represent']

function FlatBulletList({ text, placeholder, color = '#ACACC4' }: { text: string; placeholder: string; color?: string }) {
  if (text.startsWith('/*')) {
    return <p className="text-sm italic opacity-40" style={{ color }}>{placeholder}</p>
  }
  const items = text.split('\n').filter(Boolean)
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm" style={{ color }}>
          <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color, opacity: 0.5 }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function SectionedList({ sections, placeholder, bulletColor = '#ACACC4' }: { sections: string | HandbookSection; placeholder: string; bulletColor?: string }) {
  if (typeof sections === 'string') {
    return <p className="text-sm italic opacity-40" style={{ color: bulletColor }}>{placeholder}</p>
  }
  return (
    <div className="space-y-3">
      {sections.map((section, i) => (
        <div key={i}>
          <p className="text-sm font-semibold mb-1" style={{ color: '#FFEFD4' }}>{section.heading}</p>
          {section.items.length > 0 && (
            <ul className="space-y-1 pl-1">
              {section.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm" style={{ color: bulletColor }}>
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: bulletColor, opacity: 0.4 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export const metadata = {
  title: 'Design Handbook — Addison Litvinchuk',
}

export default function HandbookPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Header */}
      <section className="mb-16">
        <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: '#E9CE8A', opacity: 0.7 }}>
          Reference
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', color: '#FFEFD4' }}>Design Handbook</h1>
        <p className="mt-4 max-w-2xl" style={{ color: '#ACACC4' }}>
          A personal reference of the concepts, tools, models, and frameworks (CTMFs) used
          across my three design projects. Organized by design strand — Frame, Diverge,
          Converge, Represent — with notes on when to use each and when to avoid them.
        </p>

        {/* Stats row */}
        <div className="mt-8 flex flex-wrap gap-3">
          {STRANDS.map((strand) => {
            const count = handbook.filter((e) => hasStrand(e, strand)).length
            return (
              <div
                key={strand}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ backgroundColor: 'color-mix(in srgb, #1A1A2E 100%, transparent)', border: '1px solid color-mix(in srgb, #E9CE8A 15%, transparent)' }}
              >
                <StrandBadge strand={strand} />
                <span className="text-sm" style={{ color: '#ACACC4' }}>{count} entries</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Quick-reference table */}
      <section className="mb-20">
        <SectionHeader label="Overview" title="All CTMFs at a Glance" />
        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: 'color-mix(in srgb, #E9CE8A 12%, transparent)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: '#1A1A2E', borderBottom: '1px solid color-mix(in srgb, #E9CE8A 15%, transparent)' }}>
                <th className="text-left px-5 py-4 font-semibold" style={{ color: '#E9CE8A' }}>CTMF</th>
                <th className="text-left px-5 py-4 font-semibold" style={{ color: '#E9CE8A' }}>Strand</th>
                <th className="text-left px-5 py-4 font-semibold hidden md:table-cell" style={{ color: '#E9CE8A' }}>Used In</th>
                <th className="text-left px-5 py-4 font-semibold hidden lg:table-cell" style={{ color: '#E9CE8A' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {handbook.map((entry, i) => {
                const linkedProjects = projects.filter((p) =>
                  entry.projectSlugs.includes(p.slug)
                )
                return (
                  <tr
                    key={entry.id}
                    style={{
                      backgroundColor: i % 2 === 0 ? 'transparent' : 'color-mix(in srgb, #1A1A2E 50%, transparent)',
                      borderBottom: '1px solid color-mix(in srgb, #E9CE8A 8%, transparent)',
                    }}
                  >
                    <td className="px-5 py-4 font-medium" style={{ color: '#FFEFD4' }}>
                      <a href={`#${entry.id}`} className="hover:text-wheat transition-colors">
                        {entry.name}
                      </a>
                    </td>
                    <td className="px-5 py-4">
                      {Array.isArray(entry.strand)
                        ? entry.strand.map((s) => <StrandBadge key={s} strand={s} />)
                        : <StrandBadge strand={entry.strand} />}
                    </td>
                    <td className="px-5 py-4 hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {linkedProjects.map((p) => (
                          <Link
                            key={p.slug}
                            href={`/projects/${p.slug}`}
                            className="text-xs px-2 py-0.5 rounded hover:opacity-80 transition-opacity"
                            style={{ backgroundColor: 'color-mix(in srgb, #E9CE8A 15%, transparent)', color: '#E9CE8A' }}
                          >
                            {p.course.split('—')[0].trim()}
                          </Link>
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-4 hidden lg:table-cell max-w-xs">
                      {entry.notes.startsWith('/*') ? (
                        <span className="text-xs italic opacity-40" style={{ color: '#ACACC4' }}>/*Add notes*/</span>
                      ) : (
                        <p className="truncate text-xs" style={{ color: '#ACACC4' }}>
                          {entry.notes.split('\n')[0]}
                        </p>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Full entries by strand */}
      {STRANDS.map((strand) => {
        const entries = handbook.filter((e) => hasStrand(e, strand))
        if (entries.length === 0) return null
        return (
          <section key={strand} className="mb-20">
            <SectionHeader
              label={`Strand`}
              title={strand}
              subtitle={
                strand === 'Frame'
                  ? 'Tools and methods for understanding the design space and defining the opportunity.'
                  : strand === 'Diverge'
                  ? 'Tools and methods for generating a wide space of possible solutions.'
                  : strand === 'Converge'
                  ? 'Tools and methods for evaluating, selecting, and refining solutions.'
                  : 'Tools and methods for communicating, prototyping, and testing design ideas.'
              }
            />

            <div className="space-y-6">
              {entries.map((entry) => {
                const linkedProjects = projects.filter((p) =>
                  entry.projectSlugs.includes(p.slug)
                )
                return (
                  <div key={entry.id} id={entry.id} className="card">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-display)', color: '#E9CE8A' }}>
                          {entry.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          {Array.isArray(entry.strand)
                            ? entry.strand.map((s) => <StrandBadge key={s} strand={s} />)
                            : <StrandBadge strand={entry.strand} />}
                          {linkedProjects.map((p) => (
                            <Link
                              key={p.slug}
                              href={`/projects/${p.slug}`}
                              className="text-xs px-2.5 py-0.5 rounded-full border hover:opacity-80 transition-opacity"
                              style={{ borderColor: 'color-mix(in srgb, #ACACC4 25%, transparent)', color: '#ACACC4' }}
                            >
                              {p.course.split('—')[0].trim()}
                            </Link>
                          ))}
                        </div>
                      </div>
                      {/* Direct links to the CTMF analysis pages */}
                      {entry.ctmfLinks.length > 0 && (
                        <div className="flex flex-wrap gap-2 shrink-0">
                          {entry.ctmfLinks.map((link) => {
                            const proj = projects.find((p) => p.slug === link.projectSlug)
                            if (!proj) return null
                            return (
                              <Link
                                key={link.ctmfId}
                                href={`/projects/${link.projectSlug}/process/${link.ctmfId}`}
                                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium transition-opacity hover:opacity-80"
                                style={{ backgroundColor: 'color-mix(in srgb, #E9CE8A 15%, transparent)', color: '#E9CE8A', border: '1px solid color-mix(in srgb, #E9CE8A 25%, transparent)' }}
                              >
                                <ExternalLink size={11} />
                                Analysis — {proj.course.split('—')[0].trim()}
                              </Link>
                            )
                          })}
                        </div>
                      )}
                    </div>

                    <hr className="wheat-divider" style={{ marginTop: '0.75rem', marginBottom: '1rem' }} />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: '#E9CE8A', opacity: 0.6 }}>Definition</p>
                        <p
                          className={`text-sm ${entry.definition.startsWith('/*') ? 'placeholder-content' : ''}`}
                          style={{ color: '#ACACC4' }}
                        >
                          {entry.definition}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: '#E9CE8A', opacity: 0.6 }}>Personal Notes</p>
                        <FlatBulletList text={entry.notes} placeholder="/*Add notes*/" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      <div
                        className="p-4 rounded-lg"
                        style={{ backgroundColor: 'color-mix(in srgb, #7BBE9E 6%, transparent)', border: '1px solid color-mix(in srgb, #7BBE9E 20%, transparent)' }}
                      >
                        <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: '#a0e8c5' }}>
                          When to Use
                        </p>
                        <SectionedList sections={entry.whenToUse} placeholder="/*When to use*/" />
                      </div>
                      <div
                        className="p-4 rounded-lg"
                        style={{ backgroundColor: 'color-mix(in srgb, #BE7B7B 6%, transparent)', border: '1px solid color-mix(in srgb, #BE7B7B 20%, transparent)' }}
                      >
                        <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: '#e8a0a0' }}>
                          When to Avoid
                        </p>
                        <SectionedList sections={entry.whenToAvoid} placeholder="/*When to avoid*/" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}



    </div>
  )
}
