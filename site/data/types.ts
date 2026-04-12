export type CTMFStrand = 'Frame' | 'Diverge' | 'Converge' | 'Represent'

export type EvidenceItem = {
  type: 'image' | 'video' | 'link'
  src: string
  caption: string
}

export type CTMF = {
  id: string
  name: string
  strand: CTMFStrand
  // What this tool/model/framework is
  description: string
  // How you used it in this project
  howUsed: string
  // Evidence — what you produced or observed
  evidence: string
  // Your critical assessment of it
  assessment: string
  // Optional images showing your use
  images: { src: string; caption: string }[]
  // Carousel items for the supporting evidence section
  evidenceItems?: EvidenceItem[]
  // Citations for this CTMF
  citations?: { label: string; citation: string; url?: string }[]
}

export type Project = {
  slug: string
  title: string
  course: string
  timeline: string
  // Path to 2:1 banner image (place files in public/images/projects/<slug>/)
  banner: string
  // Path to one-pager image
  onePager: string
  teammates: string[]
  // Assignment context — what was asked of you
  assignment: string
  process: {
    overview: string
    ctmfs: CTMF[]
  }
  design: {
    overview: string
    images: { src: string; caption: string }[]
  }
  teamwork: string
  reflection: string
  references: { label: string; citation: string; url?: string }[]
}

// A structured section with a bold heading and indented sub-bullets
export type HandbookSection = { heading: string; items: string[] }[]

export type HandbookEntry = {
  id: string
  name: string
  strand: CTMFStrand | CTMFStrand[]
  // Brief definition
  definition: string
  // When to use it — plain string for placeholders, HandbookSection for real content
  whenToUse: string | HandbookSection
  // When NOT to use it
  whenToAvoid: string | HandbookSection
  // Projects where you used it
  projectSlugs: string[]
  // Direct links to the CTMF analysis subpage for each project
  // Format: { projectSlug: 'praxis1', ctmfId: 'praxis1-ctmf1' }
  ctmfLinks: { projectSlug: string; ctmfId: string }[]
  // Your personal assessment/notes (flat \n-separated bullets)
  notes: string
}

