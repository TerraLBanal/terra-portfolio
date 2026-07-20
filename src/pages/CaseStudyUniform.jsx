import IntroHeader from '../components/case-study/IntroHeader'
import SectionText from '../components/case-study/SectionText'
import SideNote from '../components/case-study/SideNote'
import TextImageRow from '../components/case-study/TextImageRow'
import FullBleedImage from '../components/case-study/FullBleedImage'
import HoverCrossfadeImage from '../components/case-study/HoverCrossfadeImage'
import NextCaseStudyLink from '../components/case-study/NextCaseStudyLink'

export default function CaseStudyUniform() {
  return (
    <div className="w-full">
      <IntroHeader
        eyebrow="Case study 1"
        title="Uniform Design Language and Design System"
        role="Senior Visual Designer, Design Systems Team"
        team="2 designers, 3 UI engineers, 1 director"
        image="/images/case-study-uniform-intro.png"
        imageAlt="Uniform design system overview: typography specimen, alert component, and UDS logo"
      />

      <SectionText heading="The challenge" divider>
        Intapp&apos;s product suite had grown through years of acquisition, and each product
        carried its own visual style with little shared structure between them. Designers had a
        Figma UI kit to reference, but no real design system: no coded components, so developers
        were building everything from scratch on every product. The result was a mix of outdated
        UI, no accessibility standards, and growing friction across teams trying to ship
        consistent, quality experiences.
      </SectionText>

      <FullBleedImage
        src="/images/case-study-uniform-audit.png"
        alt="Audit of existing Intapp product screens showing inconsistent UI patterns"
        aspect="aspect-[1440/640]"
      />

      <SideNote heading="Auditing what was there" align="left">
        Before defining a new direction, we took a look at Intapp&apos;s existing products to
        understand exactly where the inconsistencies lived: colors, type, spacing, and patterns
        that had drifted apart from product to product, along with the accessibility gaps that
        came with them. That became the baseline for the work ahead, giving us a clear,
        evidence-based case for what needed to change and why.
      </SideNote>

      <SectionText heading="Defining the visual language">
        Before any components could be built, we needed a shared visual language: a foundation of
        typography, color, grid, and iconography that the rest of the system could build on. I
        partnered with another visual designer to define it from the ground up.
      </SectionText>

      <FullBleedImage
        src="/images/case-study-uniform-moods.png"
        alt="Mood exploration for the Uniform visual language"
        aspect="aspect-[1440/411]"
      />
      <FullBleedImage
        src="/images/case-study-uniform-components-sketch.png"
        alt="Early component sketches for the Uniform design system"
        aspect="aspect-[1440/556]"
      />

      <SideNote heading="Moodboards and component sketches" align="left">
        We explored multiple rounds of moodboards and early component sketches. We tested
        different typefaces, color palettes, and light and dark treatments before settling on a
        direction worth building out further.
      </SideNote>

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
        <FullBleedImage
          src="/images/case-study-uniform-midfi.png"
          alt="Mid-fidelity test screens applying the early Uniform direction"
          aspect="aspect-[1250/760]"
        />
      </div>

      <SideNote heading="Test screens, mid fidelity" align="right">
        We applied our early direction to mid fidelity test screens and shared the concepts for
        feedback. Around the same time, one of our products began adopting our emerging styles in
        parallel, giving us a real environment to validate the language as it took shape.
      </SideNote>

      <TextImageRow
        heading="The shift with brand"
        image="/images/case-study-uniform-brand-logo.png"
        imageAlt="Updated Intapp brand identity: logo lockup and color palette"
        imageAspect="aspect-[608/447]"
      >
        Midway through the project, our brand team launched an updated brand identity. We pivoted
        quickly to align our design language with the new direction while continuing system
        development in parallel, a constraint that ultimately sharpened the final result.
      </TextImageRow>

      <section className="w-full bg-paper py-12 md:py-16 lg:py-24">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 pt-6 pb-4 md:gap-16 md:px-12 lg:gap-16 lg:px-24 lg:pt-24 lg:pb-10">
          <div className="flex w-full flex-col items-start gap-4">
            <p className="font-display text-[24px] font-normal leading-[32px] text-ink">
              The Design Language
            </p>
            <p className="font-display text-[32px] font-normal leading-tight text-ink md:text-[48px] lg:text-[64px] lg:leading-[80px]">
              Uniform is precise and frill-free, built for spaces already rich with unstructured
              information and handwritten notes.
            </p>
          </div>
          <div className="w-full max-w-[501px] text-[14px] leading-[20px] text-ink">
            <p className="mb-3 font-normal">What makes Uniform, Uniform</p>
            <p className="mb-3 font-light">
              A clean, workhorse sans serif: Manrope, set in Regular, SemiBold, and Bold.
            </p>
            <p className="mb-3 font-light">
              Blue as the action and selection color, with clear status colors for error, warning,
              success, active, and neutral states.
            </p>
            <p className="mb-3 font-light">
              A warm background tone, a quiet nod to the paper and folders our users, mostly
              lawyers and finance professionals, have worked with throughout their careers.
            </p>
            <p className="mb-3 font-light">
              Rounded corners, perfectly nested at every layer, aligned to brand.
            </p>
            <p className="mb-3 font-light">
              An 8px spacing system and a defined layering structure.
            </p>
            <p className="font-light">
              Color and component states designed to meet accessibility contrast standards by
              default, not added after the fact.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1440px] px-6 py-4 md:px-12 lg:px-24 lg:py-10">
          <FullBleedImage
            src="/images/case-study-uniform-design-language-v2.png"
            alt="Uniform design language sheet: colors, type, icons, and component states"
            aspect="aspect-[1248/815]"
          />
        </div>
      </section>

      <SectionText heading="The system">
        With the language in place, the next step was turning it into a real system: components
        engineers could build with, documentation that holds up, and a foundation our product
        teams could actually adopt.
      </SectionText>

      <FullBleedImage
        src="/images/case-study-uniform-components.png"
        alt="Uniform component library overview"
        aspect="aspect-[1440/645]"
      />

      <SideNote heading="Building the components" align="right">
        I focused on creating around 35 foundational components in Figma, making sure each one was
        scalable, accessible and easy for other designers to use and adapt.
      </SideNote>

      <TextImageRow
        heading="Coding and documentation"
        image="/images/case-study-uniform-storybook.png"
        imageAlt="Uniform components documented in Storybook"
        imageAspect="aspect-[608/357]"
      >
        Working with three UI engineers, we brought roughly 30 of those components to life as
        coded web components and a React library, documented in Storybook. As a small team still
        establishing our documentation practice, I worked on the structure and standard we were
        striving for across both component and pattern documentation in Zeroheight.
      </TextImageRow>

      <FullBleedImage
        src="/images/case-study-uniform-documentation.png"
        alt="Uniform component and pattern documentation in Zeroheight"
        aspect="aspect-[1440/650]"
      />

      <TextImageRow
        heading="Supporting adoption"
        image="/images/case-study-uniform-slack.png"
        imageAlt="Slack channel supporting product teams adopting Uniform"
        imageAspect="aspect-[608/400]"
      >
        As three product teams began implementing the system, we had a slack channel and held
        regular office hours with engineering and design to answer questions, give feedback, and
        support the rollout directly.
      </TextImageRow>

      <SectionText heading="Extending it further">
        The work continued well after the system was in active use. I stepped in to help shape
        Celeste&apos;s visual brand as a new AI assistant took shape, and led a separate effort to
        update dark mode and revisit one of our first adopter products.
      </SectionText>

      <HoverCrossfadeImage
        lightSrc="/images/case-study-uniform-celeste-light.png"
        darkSrc="/images/case-study-uniform-celeste-dark.png"
        alt="Celeste AI assistant interface and brand exploration, light to dark mode"
        aspect="aspect-[1440/1175]"
      />

      <SideNote heading="Celeste" align="left">
        I stepped in as the visual designer to start defining Celeste&apos;s brand, an AI
        assistant tool at Intapp, applying our design language to a new product. The work included
        a light and dark mode treatment, along with a moon concept and icon I created. It was
        shared at Amplify, one of Intapp&apos;s larger company events. The branding is still
        evolving, but the core concept has held up well.
      </SideNote>

      <FullBleedImage
        src="/images/case-study-uniform-layout-1.png"
        alt="Dark mode component layouts for Uniform"
        aspect="aspect-[1440/801]"
      />
      <FullBleedImage
        src="/images/case-study-uniform-layout-2.png"
        alt="DealCloud interface updated with Uniform and Celeste"
        aspect="aspect-[1440/822]"
      />

      <SideNote heading="Dark mode and DealCloud" align="right">
        I led an effort to map every component and token to dark mode in Figma, establishing the
        layering system and color logic from scratch. From there, I partnered with one of our UI
        engineers, who updated the tokens on the code side and built the official dark theme. When
        Celeste needed to be incorporated into DealCloud, I returned to revisit its visual language
        and UX, adapting it to support Celeste&apos;s new AI-driven interactions.
      </SideNote>

      <NextCaseStudyLink to="/work/network-diagram" />
    </div>
  )
}
