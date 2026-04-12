'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

type GalleryImage = { src: string; caption: string }

export default function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  if (images.length === 0) {
    return (
      <p className="placeholder-content text-sm py-4">
        /*No images added yet — add image paths and captions in data/projects.ts*/
      </p>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img) => (
          <button
            key={img.src}
            onClick={() => setLightbox(img)}
            className="group relative rounded-lg overflow-hidden text-left w-full"
            style={{ aspectRatio: '4 / 3' }}
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3"
              style={{ background: 'linear-gradient(to top, rgba(11,18,33,0.85) 0%, transparent 60%)' }}
            >
              <p className="text-xs text-cream">{img.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(11,18,33,0.95)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-wheat hover:text-cream"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full rounded-xl overflow-hidden" style={{ maxHeight: '80vh' }}>
              <Image
                src={lightbox.src}
                alt={lightbox.caption}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="mt-3 text-sm text-center text-cream/80">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </>
  )
}
