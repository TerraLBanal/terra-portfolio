import { NavLink } from 'react-router-dom'

export default function NavItem({ to, children, footer = false }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `group flex flex-col items-center gap-2 px-4 transition-colors hover:bg-border-soft ${
          footer || !isActive ? 'py-2' : 'pt-2'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`text-[16px] transition-colors ${
              isActive ? 'font-medium text-ink' : 'font-light text-ink-soft group-hover:text-ink'
            }`}
          >
            {children}
          </span>
          {isActive && !footer && <span className="block h-0 w-full border-t-[1.5px] border-ink" />}
        </>
      )}
    </NavLink>
  )
}
