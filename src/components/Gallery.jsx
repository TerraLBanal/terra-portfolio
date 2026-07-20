export default function Gallery() {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 pb-6 md:gap-8 md:px-12 md:pb-12 lg:px-24 lg:pb-24">
        <div className="flex w-full flex-col items-start gap-6 md:flex-row md:gap-8">
          <div className="aspect-[395/288] w-full overflow-hidden md:flex-1">
            <img
              src="/images/gallery-coffeebags.png"
              alt="Talisman Coffee bags, three roast varieties"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[395/288] w-full overflow-hidden md:flex-1">
            <img
              src="/images/gallery-lotlizard-tin.png"
              alt="Lot Lizard Video branded tin packaging"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[395/288] w-full overflow-hidden md:flex-1">
            <img
              src="/images/gallery-lotlizard-tees.png"
              alt="Lot Lizard Video branded t-shirts"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6 md:flex-row md:gap-8">
          <div className="flex w-full flex-col gap-6 md:flex-[395] md:gap-8">
            <div className="aspect-[395/289] w-full overflow-hidden">
              <img
                src="/images/gallery-emotions-spread.png"
                alt="Emotions magazine spread, watercolor illustration"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[395/289] w-full overflow-hidden">
              <img
                src="/images/gallery-valines-sauce.png"
                alt="Valine's Famous Cocktail Sauce jar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="aspect-[821/609] w-full overflow-hidden bg-border-soft md:flex-[821]">
            <img
              src="/images/gallery-desert-tsunami.png"
              alt="Desert Tsunami magazine spread"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
