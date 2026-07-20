export default function CaseStudyPlaceholder({ index, title }) {
  return (
    <section className="w-full flex-1">
      <div className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-24">
        <p className="text-[14px] text-ink-soft">Case study {index}</p>
        <h1 className="mt-2 w-full max-w-[608px] font-display text-[40px] font-light text-ink">{title}</h1>
        <p className="mt-8 text-[16px] text-ink-soft">Full case study coming soon.</p>
      </div>
    </section>
  )
}
