import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/data/types'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="card overflow-hidden p-0">
        {/* 2:1 banner */}
        <div className="relative w-full" style={{ aspectRatio: '2 / 1' }}>
          <Image
            src={project.banner}
            alt={`${project.title} banner`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, #0B1221 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Info */}
        <div className="p-6">
          <p className="text-xs text-wheat/70 font-mono mb-1">{project.course}</p>
          <h3
            className="text-xl mb-1 group-hover:text-cream transition-colors"
            style={{ fontFamily: 'var(--font-display)', color: '#E9CE8A' }}
          >
            {project.title}
          </h3>
          <p className="text-sm" style={{ color: '#ACACC4' }}>{project.timeline}</p>
        </div>
      </div>
    </Link>
  )
}
