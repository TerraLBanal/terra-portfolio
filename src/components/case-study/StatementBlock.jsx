import FullBleedImage from './FullBleedImage'

export default function StatementBlock({ label, statement, image, imageAlt, imageAspect, children }) {
  return (
    <section className="w-full bg-paper">
      <div
        className={`mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 pt-6 md:gap-16 md:px-12 lg:gap-16 lg:px-24 lg:pt-24 ${
          image ? 'pb-4 lg:pb-10' : 'pb-6 lg:pb-24'
        }`}
      >
        <div className="flex w-full flex-col items-start gap-4">
          <p className="font-display text-[24px] font-normal leading-[32px] text-ink">{label}</p>
          <p className="font-display text-[32px] font-normal leading-tight text-ink md:text-[48px] lg:text-[64px] lg:leading-[80px]">
            {statement}
          </p>
        </div>
        {children}
      </div>
      {image && (
        <div className="mx-auto w-full max-w-[1440px] px-6 py-4 md:px-12 lg:px-24 lg:py-10">
          <FullBleedImage src={image} alt={imageAlt} aspect={imageAspect} />
        </div>
      )}
    </section>
  )
}
