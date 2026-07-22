export default function CaseStudySummary({ blurb, role, team, domain, stats = [] }) {
  return (
    <section className="w-full border-t-2 border-border-soft bg-surface">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-12 md:flex-row md:px-12 md:py-16 lg:gap-8 lg:px-24 lg:py-24">
        <p className="font-display text-[24px] font-light leading-[32px] text-ink md:flex-[2_1_0]">
          {blurb}
        </p>

        <div className="flex flex-1 flex-col gap-4 text-[14px] leading-[20px] text-ink">
          <div>
            <p className="font-normal">Role &amp; team</p>
            <p className="font-light">{role}</p>
            <p className="font-light">{team}</p>
          </div>
          {domain && (
            <div>
              <p className="font-normal">Domain</p>
              <p className="font-light">{domain}</p>
            </div>
          )}
        </div>

        {stats.length > 0 && (
          <div className="flex flex-1 flex-col gap-3 text-[14px] font-light leading-[20px] text-ink">
            {stats.map((stat, i) => (
              <p key={i}>{stat}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
