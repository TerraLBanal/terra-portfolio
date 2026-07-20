import CaseStudyCard from './CaseStudyCard'

export default function Work() {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 px-6 pb-6 md:px-12 md:pb-12 lg:px-24 lg:pb-24">
      <CaseStudyCard
        href="/work/uniform"
        image="/images/case-study-uniform-cover.png"
        mobileImage="/images/case-study-uniform-cover-mobile.png"
        imageAlt="Uniform Design Language & Design System cover"
        index={1}
        title="Uniform Design Language & Design System"
        featured
      />
      <div className="flex w-full flex-col items-start gap-8 md:flex-row">
        <CaseStudyCard
          href="/work/network-diagram"
          image="/images/case-study-network-cover.png"
          imageAlt="Network Diagram Redesign, IBM Security cover"
          index={2}
          title="Network Diagram Redesign, IBM Security"
        />
        <CaseStudyCard
          href="/work/steamies"
          image="/images/case-study-steamies-cover.png"
          imageAlt="Steamies Dumplings, brand & identity cover"
          index={3}
          title="Steamies Dumplings, brand & identify"
        />
      </div>
    </section>
  )
}
