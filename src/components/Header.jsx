import { Link } from 'react-router-dom'
import NavItem from './NavItem'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-paper">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 pt-6 pb-4 md:px-12 md:pt-8 lg:px-24 lg:pt-10">
        <Link to="/" className="font-display text-[24px] text-ink">
          Terra Designs
        </Link>
        <nav className="flex items-center gap-2 md:gap-8">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
        </nav>
      </div>
    </header>
  )
}
