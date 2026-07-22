export default function IntroHeader({ eyebrow, title, image, imageAlt }) {
  return (
    <section className="w-full bg-paper">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 px-6 py-12 md:flex-row md:px-12 md:py-16 lg:p-24">
        <div className="flex w-full flex-col items-start gap-6 md:max-w-[608px]">
          <p className="font-display text-[40px] font-light leading-tight text-ink">
            <span className="font-normal">{eyebrow}</span>
            <br />
            {title}
          </p>
        </div>
        <div className="aspect-[608/400] w-full overflow-hidden bg-border-soft md:w-[608px] md:shrink-0">
          <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
