export default function HoverCrossfadeImage({ lightSrc, darkSrc, alt, aspect }) {
  return (
    <div
      className={`group relative mx-auto w-full max-w-[1920px] overflow-hidden bg-border-soft ${aspect}`}
    >
      <img src={lightSrc} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      <img
        src={darkSrc}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[1600ms] ease-out group-hover:opacity-100"
      />
    </div>
  )
}
