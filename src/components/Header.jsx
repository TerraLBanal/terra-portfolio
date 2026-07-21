import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import NavItem from './NavItem'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    function updateScrolled() {
      setScrolled(window.scrollY > 4)
      ticking.current = false
    }

    function onScroll() {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(updateScrolled)
      }
    }

    updateScrolled()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-10 w-full bg-paper transition-shadow duration-200 ${
        scrolled ? 'shadow-[0px_2px_8px_0px_rgba(41,34,33,0.08)]' : 'shadow-none'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-24">
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
