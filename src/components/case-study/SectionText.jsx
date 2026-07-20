export default function SectionText({ heading, children, divider = false }) {
  return (
    <section className={`w-full ${divider ? 'border-t-2 border-border-soft' : ''}`}>
      <div className="mx-auto flex w-full max-w-[1440px] justify-end px-6 py-12 md:px-12 md:py-16 lg:p-24">
        <p className="w-full max-w-[608px] font-display text-[24px] font-light leading-[32px] text-ink">
          <span className="font-normal">{heading}</span>
          <br />
          {children}
        </p>
      </div>
    </section>
  )
}
