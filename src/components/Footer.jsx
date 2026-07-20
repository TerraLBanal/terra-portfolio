import NavItem from './NavItem'

export default function Footer() {
  return (
    <footer className="w-full border-t border-border">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-y-4 px-6 py-4 md:px-12 lg:px-24">
        <div className="flex h-full flex-wrap items-center gap-4 md:gap-10">
          <p className="font-display text-[24px] text-ink">Let’s connect. </p>
          <a
            href="https://www.linkedin.com/in/terradesigns/"
            target="_blank"
            rel="noreferrer"
            className="flex h-8 items-center justify-center gap-1 rounded-lg border border-border px-2 py-1"
          >
            <img src="/images/icon-linkedin.svg" alt="" className="size-4" />
            <span className="text-[14px] leading-[18px] text-ink">linkedin.com/in/terradesigns</span>
          </a>
        </div>
        <nav className="flex items-center gap-2 md:gap-8">
          <NavItem to="/" footer>
            Home
          </NavItem>
          <NavItem to="/about" footer>
            About
          </NavItem>
        </nav>
      </div>
    </footer>
  )
}
