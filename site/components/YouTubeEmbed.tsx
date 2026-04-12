export default function YouTubeEmbed({ videoId, title }: { videoId: string; title?: string }) {
  return (
    <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title ?? 'YouTube video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  )
}
