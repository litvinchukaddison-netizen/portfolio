'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import type { EvidenceItem } from '@/data/types'

function EvidenceSlide({ item }: { item: EvidenceItem }) {
  if (item.type === 'image') {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={item.src}
        alt={item.caption}
        className="max-h-[480px] w-auto mx-auto object-contain rounded-lg"
      />
    )
  }

  if (item.type === 'video') {
    return (
      <video
        src={item.src}
        controls
        className="max-h-[480px] w-full rounded-lg bg-black"
        playsInline
      />
    )
  }

  // link — if PDF, show inline preview; otherwise show a link card
  const isPdf = item.src.toLowerCase().endsWith('.pdf')

  if (isPdf) {
    return (
      <div className="flex flex-col items-center w-full">
        <iframe
          src={item.src}
          title={item.caption}
          className="w-full rounded-lg border-0"
          style={{ height: '480px', backgroundColor: '#1A1A2E' }}
        />
        <a
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono transition-opacity hover:opacity-100"
          style={{ color: '#E9CE8A', opacity: 0.7 }}
        >
          <ExternalLink size={12} /> Open in new tab
        </a>
      </div>
    )
  }

  return (
    <a
      href={item.src}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center gap-4 h-48 w-full rounded-xl border transition-colors group"
      style={{
        borderColor: 'color-mix(in srgb, #E9CE8A 20%, transparent)',
        backgroundColor: 'color-mix(in srgb, #E9CE8A 4%, transparent)',
      }}
    >
      <ExternalLink
        size={32}
        className="group-hover:scale-110 transition-transform"
        style={{ color: '#E9CE8A' }}
      />
      <span
        className="text-sm font-mono text-center px-6 break-all group-hover:underline"
        style={{ color: '#E9CE8A' }}
      >
        Open file
      </span>
    </a>
  )
}

export default function EvidenceCarousel({ items }: { items: EvidenceItem[] }) {
  const [index, setIndex] = useState(0)

  if (items.length === 0) return null

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)
  const current = items[index]

  return (
    <div className="mt-6">
      {/* Slide area */}
      <div
        className="relative rounded-xl overflow-hidden flex items-center justify-center p-4"
        style={{ backgroundColor: 'color-mix(in srgb, #ACACC4 4%, transparent)', minHeight: '200px' }}
      >
        {/* Prev button */}
        {items.length > 1 && (
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full p-1.5 transition-colors hover:bg-white/10"
            style={{ color: '#E9CE8A' }}
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        <div className="w-full px-8">
          <EvidenceSlide item={current} />
        </div>

        {/* Next button */}
        {items.length > 1 && (
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full p-1.5 transition-colors hover:bg-white/10"
            style={{ color: '#E9CE8A' }}
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>

      {/* Caption */}
      <p className="mt-3 text-sm text-center" style={{ color: '#ACACC4' }}>
        {current.caption}
      </p>

      {/* Dots */}
      {items.length > 1 && (
        <div className="flex justify-center gap-2 mt-3">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="rounded-full transition-all"
              style={{
                width: i === index ? '20px' : '8px',
                height: '8px',
                backgroundColor: i === index
                  ? '#E9CE8A'
                  : 'color-mix(in srgb, #E9CE8A 30%, transparent)',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {items.length > 1 && (
        <p className="text-center text-xs font-mono mt-2" style={{ color: 'color-mix(in srgb, #ACACC4 40%, transparent)' }}>
          {index + 1} / {items.length}
        </p>
      )}
    </div>
  )
}
