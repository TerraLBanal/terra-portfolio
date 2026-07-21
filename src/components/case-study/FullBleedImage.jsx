export default function FullBleedImage({ src, alt, aspect }) {
  return (
    <div className={`mx-auto w-full max-w-[1920px] overflow-hidden bg-border-soft ${aspect}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  )
}
