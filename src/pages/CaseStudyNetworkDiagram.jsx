import IntroHeader from '../components/case-study/IntroHeader'
import SectionText from '../components/case-study/SectionText'
import SideNote from '../components/case-study/SideNote'
import TextImageRow from '../components/case-study/TextImageRow'
import FullBleedImage from '../components/case-study/FullBleedImage'
import StatementBlock from '../components/case-study/StatementBlock'
import CaseStudyNav from '../components/case-study/CaseStudyNav'

export default function CaseStudyNetworkDiagram() {
  return (
    <div className="w-full">
      <IntroHeader
        eyebrow="Case study 2"
        title={
          <>
            Network Diagram Redesign
            <br />
            IBM Security
          </>
        }
        role="UX/Visual Designer"
        team="Visual designer, UX designer, researcher, engineering team"
        image="/images/case-study-network-intro.png"
        imageAlt="Network diagram illustration showing connected host cards"
      />

      <SectionText heading="The challenge" divider dividerClassName="border-t border-border">
        On one of my first projects at IBM, I joined a small team working to improve how security
        analysts investigated potential incidents in their network. The tool they already had
        access to wasn&apos;t cutting it.
      </SectionText>

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
        <FullBleedImage
          src="/images/case-study-network-spider.png"
          alt="Existing spider-web style knowledge graph used by security analysts"
          aspect="aspect-[1248/589]"
        />
      </div>

      <SideNote heading="Where analysts started" align="left">
        CISOs and security leaders found the existing knowledge graph impressive, it matched their
        mental model of how a network looked. But the analysts actually using it day to day
        described it differently: a big spider web that displayed too much data in a format that
        wasn&apos;t clear. For them, it was an intimidating artifact, not a helpful one.
      </SideNote>

      <FullBleedImage
        src="/images/case-study-network-userneeds.png"
        alt="User needs mapped against a shared analyst persona"
        aspect="aspect-[1440/554]"
      />

      <SectionText heading="Understanding the need">
        Before we could define a goal, we needed to understand what security analysts actually
        needed day to day. I helped facilitate a workshop where our team mapped user needs against
        a shared persona, then ran a quick exercise voting on metaphors, a home alarm system, a
        personal yoga instructor, a wearable MRI, to find language that made an unfamiliar,
        technical problem feel relatable. We landed on the idea of a completed puzzle: giving
        analysts every piece they needed to see the full picture of an attack.
      </SectionText>

      <StatementBlock
        label="The goal"
        statement="Let them see what actually happened in their network during a potential incident, and complete triage five times more efficiently."
      >
        <p className="w-full max-w-[288px] text-[14px] leading-[20px] font-light text-ink">
          I broke that down into specific needs: surfacing tactic and technique patterns for the
          hosts involved, showing activity details so analysts could decide what needed
          remediation, and providing supporting evidence and source references for every finding.
        </p>
      </StatementBlock>

      <FullBleedImage
        src="/images/case-study-network-sketches.png"
        alt="Early sketches exploring host activity and relationship visualizations"
        aspect="aspect-[1440/365]"
      />

      <SideNote heading="Sketching and exploration" align="right">
        I started with broad sketching and exploration, working through a wide range of directions
        for how analysts might see host activity and relationships during an incident. I was
        inspired by music composition software and how their timelines work. Working alongside a
        UX designer and the engineering team, we narrowed that exploration down to two distinct
        concepts worth testing further.
      </SideNote>

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
        <FullBleedImage
          src="/images/case-study-network-midfi.png"
          alt="Mid-fidelity concepts for host activity visualization"
          aspect="aspect-[1248/401]"
        />
      </div>

      <SideNote heading="Test screens, mid fidelity" align="left">
        We built out both concepts in mid fidelity and tested them across two rounds of research
        with security analysts from 10 different organizations, 19 analysts in total, to see which
        approach actually helped them triage incidents faster.
      </SideNote>

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-24">
        <FullBleedImage
          src="/images/case-study-network-timelines.png"
          alt="Timeline concept for visualizing network incident activity"
          aspect="aspect-[1248/373]"
        />
      </div>

      <SideNote heading="More exploration and investigation" align="right">
        The timeline performed better, so we built that out, as well as an aggregate concept, but
        after more investigation, the timeline was not feasible.
      </SideNote>

      <TextImageRow
        heading="High fidelity refinement"
        image="/images/case-study-network-swimlane.png"
        imageAlt="High fidelity swimlane concept for network incident triage"
        imageAspect="aspect-[608/426]"
      >
        The aggregate concept moved into a higher fidelity, where we refined the interaction
        details and visual hierarchy needed to support fast, confident triage decisions.
      </TextImageRow>

      <StatementBlock
        label="User quote"
        statement="&#8220;This is exactly the workflow I would like to see. It very clearly indicates what went on, how that flowed&#8221;"
      />

      <FullBleedImage
        src="/images/case-study-network-desktop-sl.png"
        alt="Swimlane network diagram shown in the full product interface"
        aspect="aspect-[1440/779]"
      />

      <SectionText
        heading="The solution"
        footnote="Patent: P201910089US01 - Method for visualizing cybersecurity incidents using knowledge graph data"
      >
        We landed on a swimlane network diagram that mapped host activity, relationships between
        assets and external connections, and potential threats together in one view. It held up
        across multiple use cases because of three principles: correlated data that surfaced
        relationships analysts didn&apos;t know existed, progressive disclosure that revealed only
        what they needed at each step, and enrichment that brought threat intelligence directly
        into context. The design was strong enough to be patented through IBM.
      </SectionText>

      <FullBleedImage
        src="/images/case-study-network-states.png"
        alt="Component states for the network diagram pattern"
        aspect="aspect-[1440/423]"
      />

      <SideNote heading="Where it&apos;s headed" align="left">
        About a year after launch, I contributed the network diagram pattern to IBM&apos;s Carbon
        Design System, and then continued working with a small guild of 3 other designers and
        carbon developers to expand it for other product teams to use.
      </SideNote>

      <FullBleedImage
        src="/images/case-study-network-products.png"
        alt="Products adopting the network diagram pattern"
        aspect="aspect-[1440/236]"
      />

      <SideNote heading="Adoption" align="right">
        The network diagram components became widely used and 5+ other products were implementing
        a version of them that following year. Myself and the guild continued to support teams and
        build out additional interactions and guidance.
      </SideNote>

      <CaseStudyNav previousTo="/work/uniform" nextTo="/work/steamies" />
    </div>
  )
}
