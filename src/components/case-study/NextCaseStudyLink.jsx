import { Link } from 'react-router-dom'

export default function NextCaseStudyLink({ to }) {
  return (
    <div className="mx-auto flex w-full max-w-[1440px] justify-end px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-24">
      <Link
        to={to}
        className="font-display text-[28px] font-light text-ink-soft transition-opacity hover:opacity-70 md:text-[40px]"
      >
        Next case study
      </Link>
    </div>
  )
}
