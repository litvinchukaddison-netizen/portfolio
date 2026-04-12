import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import SectionHeader from '@/components/SectionHeader'

// Original position statement YouTube video
const POSITION_STATEMENT_VIDEO_ID = 'AEwp2lPyhC4'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="mb-24">
        <div className="flex items-start justify-between gap-10">
          {/* Left: existing content — untouched */}
          <div className="flex-1 min-w-0">
            <p
              className="text-xs font-mono tracking-widest uppercase mb-4"
              style={{ color: '#E9CE8A', opacity: 0.7 }}
            >
              Student Engineer Design Portfolio
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', color: '#FFEFD4' }}>
              Addison Litvinchuk
            </h1>
            <p className="mt-4 text-lg max-w-xl" style={{ color: '#ACACC4' }}>
              Hi, I&apos;m Addy! A first year engineering science student at UofT.
              This is my portfolio capturing my grounded approach to engineering design.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/handbook"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                style={{ backgroundColor: '#E9CE8A', color: '#0B1221' }}
              >
                View Handbook <ArrowRight size={15} />
              </Link>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors hover:border-wheat"
                style={{ borderColor: 'color-mix(in srgb, #E9CE8A 35%, transparent)', color: '#E9CE8A' }}
              >
                See Projects
              </a>
            </div>
          </div>

          {/* Right: featured image */}
          <figure className="hidden md:block shrink-0">
            <div
              className="w-96 h-64 rounded-2xl overflow-hidden border glow"
              style={{ borderColor: 'color-mix(in srgb, #E9CE8A 20%, transparent)' }}
            >
              <Image
                src="/images/wheat-field-night.jpg"
                alt="Wheat field at night, Stony Plain AB"
                width={800}
                height={530}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <figcaption
              className="mt-3 text-xs text-center italic max-w-96"
              style={{ color: '#ACACC4', opacity: 0.7 }}
            >
              Wheat Field at Night, Stony Plain AB. Taken by my biggest engineering
              inspiration who didn&apos;t get the opportunity to pursue his dreams,
              my father Troy Litvinchuk
            </figcaption>
          </figure>
        </div>
      </section>


      <hr className="wheat-divider" />

      {/* ── Position Statement ────────────────────────────────────────────── */}
      <section className="mb-24">
        <SectionHeader
          label="Who I am as a designer"
          title="Position Statement"
          subtitle="An evolving articulation of how I approach engineering design — originally written in January 2026, updated for this portfolio."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Original video */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: '#E9CE8A', opacity: 0.6 }}>
              Original Statement — January 2026
            </p>
            <YouTubeEmbed
              videoId={POSITION_STATEMENT_VIDEO_ID}
              title="Addison Litvinchuk — Original Position Statement"
            />
          </div>

          {/* Updated written statement */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: '#E9CE8A', opacity: 0.6 }}>
              Updated Statement — April 2026
            </p>
            <div className="card h-full">
              <p>
                My approach has only been enriched since this video was made. I still
                follow that structure and ideology, but have greater appreciation for
                specific aspects of engineering design:
              </p>
              <p>
                The biggest evolution has been a strong appreciation for simplicity.
                Evidently by the structure of the video, I have always been a
                &ldquo;more is more&rdquo; person. However, through various engineering
                experiences explored in this portfolio, I have a much stronger
                appreciation for things that take simpler approaches. There is a unique
                elegance to achieving the same result without overcomplication.
                Conciseness and simplicity are still skills I am developing, but want
                to prioritize throughout my engineering career.
              </p>
              <p>
                I also want to incorporate more structure in my process. Structure makes
                things easier and ensures you cover everything you need. I set a new
                year&apos;s resolution to be more intentional and am still working on it
                but see so much value in this. Structured work will help with that
                immensely. Also, DOCUMENT EVERYTHING!
              </p>
            </div>
          </div>
        </div>

        {/* ── Values ── */}
        <div className="mt-4">
          <p
            className="text-xs font-mono uppercase tracking-widest mb-4"
            style={{ color: '#E9CE8A', opacity: 0.6 }}
          >
            Values
          </p>
          <div className="flex flex-wrap gap-3">
            {['Community', 'Gratitude', 'Equity', 'Continuous Improvement'].map((value) => (
              <span
                key={value}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: 'color-mix(in srgb, #E9CE8A 12%, transparent)',
                  color: '#E9CE8A',
                  border: '1px solid color-mix(in srgb, #E9CE8A 25%, transparent)',
                }}
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        {/* ── Another Note ── */}
        <div className="mt-12">
          <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: '#E9CE8A', opacity: 0.6 }}>
            Another note I would like to make
          </p>
          <div className="card">
            <p>
              A realization I made in the latter half of this semester was how much
              where I come from impacts who I am. Many Engineering Science students
              went to academic high schools. They were around people with big goals and
              were pushed and challenged to curate the perfect combination of grades,
              extra-curriculars, side-projects and more to get into their dream schools.
              I didn&apos;t. I&apos;m from Stony Plain. A town in rural Alberta with
              one high school that sits on a gravel road. A culture that conditions
              youth to work on a farm, in the trades, on the oil rigs. People
              don&apos;t have academic aspirations. I didn&apos;t have anyone to guide
              me here. And yet, here I am.
            </p>
            <p>
              I take initiative to find opportunities that could provide me the skills
              and self-development to succeed. I do extra-curriculars I enjoy because I
              am passionate about it, not to look good on a resume. I go to events to
              meet interesting people, not gain 500 LinkedIn connections. I&apos;m not
              saying I&apos;m anything extraordinary or that no EngSci students do
              that. I&apos;m saying that I do that, and that has impacted who I am more
              than I thought.
            </p>
            <p>
              When I visit home, it feels like an entirely different world. I see how
              people are impacted by designs and decisions outside of this academic
              bubble. This makes me want to build things that enact sustainable
              improvements to people&apos;s lives. I see how there is so much more to
              life than good grades or promising careers. I try new things no matter
              what I expect from them. I am self driven, determined, and inspired — but
              my hometown amplifies that.
            </p>
            <p>
              I bring a unique perspective to engineering design and I want to keep
              integrating that in my future work. I am still working on developing
              confidence in that, but can&apos;t wait to see where the next engineering
              design project takes me.
            </p>
          </div>
        </div>
      </section>

      <hr className="wheat-divider" />

      {/* ── Projects ──────────────────────────────────────────────────────── */}
      <section id="projects" className="mb-24">
        <SectionHeader
          label="Design work"
          title="Projects"
          subtitle="Three design projects completed since September 2025, each documented through a one-pager, process analysis, and CTMF reflections."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <hr className="wheat-divider" />

      {/* ── Handbook teaser ───────────────────────────────────────────────── */}
      <section>
        <div className="card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: '#E9CE8A', opacity: 0.7 }}>
              Reference
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', color: '#E9CE8A' }}>
              Design Handbook
            </h3>
            <p className="mt-2 max-w-lg text-sm" style={{ color: '#ACACC4' }}>
              A curated record of the concepts, tools, models, and frameworks
              (CTMFs) used across all three projects — organized by design
              strand with assessments and usage notes for future reference.
            </p>
          </div>
          <Link
            href="/handbook"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
            style={{ backgroundColor: '#E9CE8A', color: '#0B1221' }}
          >
            Open Handbook <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </div>
  )
}
