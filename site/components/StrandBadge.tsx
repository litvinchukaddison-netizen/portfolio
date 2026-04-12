import type { CTMFStrand } from '@/data/types'

export default function StrandBadge({ strand }: { strand: CTMFStrand }) {
  return (
    <span
      className={`badge-${strand} inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full border`}
    >
      {strand}
    </span>
  )
}
