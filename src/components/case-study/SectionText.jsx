export default function SectionText({
  heading,
  children,
  divider = false,
  dividerClassName = 'border-t-2 border-border-soft',
  footnote,
}) {
  return (
    <section className={`w-full ${divider ? dividerClassName : ''}`}>
      <div className="mx-auto flex w-full max-w-[1440px] justify-end px-6 py-12 md:px-12 md:py-16 lg:p-24">
        <div className="w-full max-w-[608px]">
          <p className="font-display text-[24px] font-light leading-[32px] text-ink">
            <span className="font-normal">{heading}</span>
            <br />
            {children}
          </p>
          {footnote && (
            <p className="mt-8 font-display text-[24px] font-light leading-[32px] text-ink-soft">
              {footnote}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
