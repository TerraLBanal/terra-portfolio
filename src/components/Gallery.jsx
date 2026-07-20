import { useState } from 'react'
import Lightbox from './Lightbox'

const images = [
  { src: '/images/gallery-coffeebags.png', alt: 'Talisman Coffee bags, three roast varieties' },
  { src: '/images/gallery-lotlizard-tin.png', alt: 'Lot Lizard Video branded tin packaging' },
  { src: '/images/gallery-lotlizard-tees.png', alt: 'Lot Lizard Video branded t-shirts' },
  { src: '/images/gallery-emotions-spread.png', alt: 'Emotions magazine spread, watercolor illustration' },
  { src: '/images/gallery-valines-sauce.png', alt: "Valine's Famous Cocktail Sauce jar" },
  { src: '/images/gallery-desert-tsunami.png', alt: 'Desert Tsunami magazine spread' },
]

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 pb-6 md:gap-8 md:px-12 md:pb-12 lg:px-24 lg:pb-24">
        <div className="flex w-full flex-col items-start gap-6 md:flex-row md:gap-8">
          {images.slice(0, 3).map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`View ${img.alt} larger`}
              className="aspect-[395/288] w-full cursor-zoom-in overflow-hidden md:flex-1"
            >
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
        <div className="flex w-full flex-col items-start gap-6 md:flex-row md:gap-8">
          <div className="flex w-full flex-col gap-6 md:flex-[395] md:gap-8">
            {images.slice(3, 5).map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setOpenIndex(3 + i)}
                aria-label={`View ${img.alt} larger`}
                className="aspect-[395/289] w-full cursor-zoom-in overflow-hidden"
              >
                <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpenIndex(5)}
            aria-label={`View ${images[5].alt} larger`}
            className="aspect-[821/609] w-full cursor-zoom-in overflow-hidden bg-border-soft md:flex-[821]"
          >
            <img src={images[5].src} alt={images[5].alt} className="h-full w-full object-cover" />
          </button>
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNext={() => setOpenIndex((i) => (i + 1) % images.length)}
          onPrev={() => setOpenIndex((i) => (i - 1 + images.length) % images.length)}
        />
      )}
    </section>
  )
}
