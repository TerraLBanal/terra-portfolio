import { Link } from 'react-router-dom'

const linkClasses =
  'font-display text-[28px] font-light text-ink-soft transition-opacity hover:opacity-70 md:text-[40px]'

export default function CaseStudyNav({ previousTo, nextTo }) {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-24">
      {previousTo ? (
        <Link to={previousTo} className={linkClasses}>
          Last case study
        </Link>
      ) : (
        <span />
      )}
      {nextTo ? (
        <Link to={nextTo} className={linkClasses}>
          Next case study
        </Link>
      ) : (
        <span />
      )}
    </div>
  )
}
