import IntroHeader from '../components/case-study/IntroHeader'
import SectionText from '../components/case-study/SectionText'
import SideNote from '../components/case-study/SideNote'
import TextImageRow from '../components/case-study/TextImageRow'
import FullBleedImage from '../components/case-study/FullBleedImage'
import CaseStudyNav from '../components/case-study/CaseStudyNav'

export default function CaseStudySteamies() {
  return (
    <div className="w-full">
      <IntroHeader
        eyebrow="Case study 3"
        title={
          <>
            Steamies Dumplings
            <br />
            brand and identity
          </>
        }
        role="Brand Identity Designer"
        team="Visual designer & Illustrator collaboration on the mural"
        image="/images/case-study-steamies-intro.png"
        imageAlt="Steamies brand mark on illustrated packaging pattern"
      />

      <SectionText heading="The challenge" divider>
        Steamies, a dumpling shop in Austin, needed a full brand identity: a logo that could work
        across packaging, signage, and a mural in their physical space, plus labels for their
        sauce and chili oil products.
      </SectionText>

      <FullBleedImage
        src="/images/case-study-steamies-sketches.png"
        alt="Early logo sketches exploring a range of directions"
        aspect="aspect-[1440/640]"
      />

      <SideNote heading="Logo: sketches to final" align="left">
        I started with broad sketching, exploring a wide range of directions for a mark that could
        feel playful while still working at small sizes.
      </SideNote>

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
        <FullBleedImage
          src="/images/case-study-steamies-midfi.png"
          alt="Mid fidelity logo explorations refining shape, weight, and color"
          aspect="aspect-[1248/792]"
        />
      </div>

      <SideNote heading="Logo: mid fidelity" align="right">
        From there, I narrowed into a handful of mid fidelity directions, refining shape, weight,
        layout, and color.
      </SideNote>

      <section className="w-full">
        <div className="mx-auto flex w-full max-w-[1440px] justify-center px-6 py-12 md:px-12 md:py-16 lg:p-24">
          <div className="aspect-square w-full max-w-[300px]">
            <img
              src="/images/case-study-steamies-logo-final.png"
              alt="Final Steamies logo mark"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      <SideNote heading="Logo: final" align="left">
        The final logo balanced playfulness with legibility, designed to scale cleanly from a tiny
        label up to signage. I created a vertical and horizontal variation, as well as color
        options to use for the different types of dumplings.
      </SideNote>

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
        <FullBleedImage
          src="/images/case-study-steamies-dumplings.png"
          alt="Steamies dumpling flavor variations"
          aspect="aspect-[1248/640]"
        />
      </div>

      <SideNote heading="The dumplings" align="right" fitContent>
        Are delicious.
      </SideNote>

      <FullBleedImage
        src="/images/case-study-steamies-package-mid.png"
        alt="Mid fidelity Steamies packaging design"
        aspect="aspect-[1440/658]"
      />

      <TextImageRow
        heading="Packaging"
        image="/images/case-study-steamies-package-final.png"
        imageAlt="Final Steamies dumpling packaging"
        imageAspect="aspect-[608/479]"
      >
        From there, I moved into packaging design for Steamies&apos; core dumplings, carrying the
        logo and brand feel across each piece.
      </TextImageRow>

      <FullBleedImage
        src="/images/case-study-steamies-illo.png"
        alt="Illustration work developed for the Steamies brand"
        aspect="aspect-[1440/649]"
      />

      <TextImageRow
        heading="The mural"
        image="/images/case-study-steamies-mural.png"
        imageAlt="Mural painted inside the Steamies shop featuring ingredient illustrations and handprints"
        imageAspect="aspect-[608/820]"
        reverse
      >
        I partnered with a local illustrator to paint a mural inside the shop, bringing the brand
        into the physical space itself. The food illustrations represent all of the fresh, locally
        sourced ingredients they use and as a family-owned business, I had the idea to have them
        sign it with their handprints.
      </TextImageRow>

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
        <FullBleedImage
          src="/images/case-study-steamies-sauce.png"
          alt="Steamies dumpling sauce label design"
          aspect="aspect-[1248/640]"
        />
        <FullBleedImage
          src="/images/case-study-steamies-chili.png"
          alt="Steamies chili oil label design"
          aspect="aspect-[1248/331]"
        />
      </div>

      <SideNote heading="Sauce and chili oil labels" align="left">
        I later returned to design labels for Steamies&apos; dumpling sauce and chili oil,
        extending the identity to their newest products.
      </SideNote>

      <FullBleedImage
        src="/images/case-study-steamies-doordash.png"
        alt="Steamies product line shown on DoorDash"
        aspect="aspect-[1440/1081]"
      />

      <SideNote heading="Where it lives now" align="right">
        Today, the full Steamies line, dumplings, sauces, and more, is live on DoorDash, each
        flavor carrying its own color treatment within the same packaging system. They also have
        their storefront open, where you can dine or buy frozen dumplings to make at home.
      </SideNote>

      <CaseStudyNav previousTo="/work/network-diagram" nextTo="/about" nextLabel="About me" />
    </div>
  )
}
