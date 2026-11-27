import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Today', icon: '◉' },
  { to: '/timeline', label: 'Timeline', icon: '⇄' },
  { to: '/explore', label: 'Explore', icon: '◎' },
  { to: '/research', label: 'Research', icon: '▦' },
  { to: '/library', label: 'Library', icon: '☰' },
] as const

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Primary">
      <div className="bottom-nav-inner">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
          >
            <span className="icon" aria-hidden="true">
              {item.icon}
            </span>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
