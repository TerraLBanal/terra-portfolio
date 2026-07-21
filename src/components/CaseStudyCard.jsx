import { Link } from 'react-router-dom'

export default function CaseStudyCard({
  href,
  image,
  mobileImage,
  imageAlt,
  index,
  title,
  featured = false,
}) {
  return (
    <Link to={href} className="group flex w-full flex-1 flex-col items-start gap-4">
      <div
        className={`w-full overflow-hidden border-2 border-transparent bg-border-soft transition-[border-color,box-shadow] group-hover:border-ink-soft group-hover:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.24)] ${
          featured ? 'aspect-[608/438] md:aspect-[1248/483]' : 'aspect-[608/438]'
        }`}
      >
        {mobileImage ? (
          <>
            <img
              src={mobileImage}
              alt={imageAlt}
              loading="lazy"
              className="h-full w-full object-cover md:hidden"
            />
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              className="hidden h-full w-full object-cover md:block"
            />
          </>
        ) : (
          <img src={image} alt={imageAlt} loading="lazy" className="h-full w-full object-cover" />
        )}
      </div>
      <p className="text-[14px] leading-[20px] text-ink">
        <span className="font-normal">Case study {index}: </span>
        <span className="font-light">{title}</span>
      </p>
    </Link>
  )
}
