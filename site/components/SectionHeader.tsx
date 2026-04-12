export default function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-8">
      {label && (
        <p className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: '#E9CE8A', opacity: 0.7 }}>
          {label}
        </p>
      )}
      <h2 style={{ fontFamily: 'var(--font-display)', color: '#E9CE8A' }}>{title}</h2>
      {subtitle && (
        <p className="mt-2 text-base max-w-2xl" style={{ color: '#ACACC4' }}>
          {subtitle}
        </p>
      )}
      <hr className="wheat-divider" />
    </div>
  )
}
