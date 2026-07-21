export default function About() {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 px-6 pt-12 pb-12 md:flex-row md:gap-2 md:px-12 md:pt-16 md:pb-24 lg:px-24 lg:pt-24 lg:pb-50">
        <div className="flex w-full flex-col items-start gap-12 md:flex-1 lg:gap-24">
          <div className="w-full max-w-[608px] font-display text-[24px] font-light leading-[32px] text-ink">
            <p>
              My name is <span className="font-normal">Terra</span>. Like the Earth. Fitting,
              since I&apos;m a sucker for plants, animals, and living on one. These days
              that&apos;s Pittsburgh, PA (previously Austin, TX).
            </p>
            <p className="mt-8">
              I&apos;m a visual and product designer with a decade-plus of experience spanning
              in-house design teams, e-commerce, and enterprise software. For the last several
              years, my focus has been <span className="font-normal">design systems</span>,
              building the <span className="font-normal">visual language</span> and component
              infrastructure that let teams move fast without losing consistency. I&apos;m
              equally comfortable in the exploratory, ambiguous early stages of a project as I am
              in the disciplined, grid-based execution that follows.
            </p>
            <p className="mt-8">
              Outside of systems work, I keep a hand in brand and illustration projects: logos,
              packaging, the occasional mural.
              <br />
              I also enjoy a sticky note doodle.
            </p>
          </div>

          <div className="flex flex-col items-start gap-10 border-l-2 border-accent pl-8">
            <p className="text-[14px] leading-6 text-ink">
              <span className="font-normal">What I bring</span>
              <br />
              <span className="font-light">
                Design systems &amp; component architecture
                <br />
                Visual &amp; brand identity
                <br />
                Workshop facilitation &amp; design thinking
                <br />
                Cross-functional collaboration
                <br />
                Figma, prototyping, AI-assisted development
              </span>
            </p>
            <a
              href="/terra-banal-resume.pdf"
              download
              className="flex h-8 items-center justify-center gap-1 rounded-lg border border-border px-2 py-1"
            >
              <img src="/images/icon-download.svg" alt="" className="size-4" />
              <span className="text-[14px] leading-[18px] text-ink">Download my resume</span>
            </a>
          </div>
        </div>

        <div className="aspect-[519/453] w-full overflow-hidden md:w-[519px] md:shrink-0">
          <img
            src="/images/about-stickies.png"
            alt="Sticky note doodles: a whale tail, an orange slice, and a tree"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
