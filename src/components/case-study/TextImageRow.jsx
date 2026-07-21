export default function TextImageRow({
  heading,
  children,
  image,
  imageAlt,
  imageAspect = 'aspect-[608/438]',
  reverse = false,
}) {
  return (
    <section className="w-full">
      <div
        className={`mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 px-6 py-12 md:justify-between md:px-12 md:py-16 lg:p-24 ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        <p className="w-full max-w-[288px] text-[14px] leading-[20px] text-ink">
          <span className="font-normal">{heading}</span>
          <br />
          <span className="font-light">{children}</span>
        </p>
        <div className={`w-full overflow-hidden bg-border-soft md:w-[608px] md:shrink-0 ${imageAspect}`}>
          <img src={image} alt={imageAlt} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
