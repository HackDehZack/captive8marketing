import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', num: '01' },
  { to: '/services', label: 'Services', num: '02' },
  { to: '/local-influence', label: 'Local Influence', num: '03' },
  { to: '/blog', label: 'Blog', num: '04' },
  { to: '/contact', label: 'Contact', num: '05' },
]

// scroll-aware: read the data-theme of whichever band sits under the nav line
function useNavTheme() {
  const [theme, setTheme] = useState('dark')
  const { pathname } = useLocation()
  useEffect(() => {
    const navY = 34
    let raf = 0
    const measure = () => {
      raf = 0
      const bands = document.querySelectorAll('[data-theme]')
      let found = 'dark'
      for (const b of bands) {
        const r = b.getBoundingClientRect()
        if (r.top <= navY && r.bottom > navY) found = b.getAttribute('data-theme') || 'dark'
      }
      setTheme(found)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(measure) }
    window.addEventListener('scroll', onScroll, { passive: true })
    const t = setTimeout(measure, 60)
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); clearTimeout(t) }
  }, [pathname])
  return theme
}

// text-swap label: the word slides up, a clone slides in from below
function Swap({ children }) {
  return (
    <span className="swap">
      <span className="swap__a">{children}</span>
      <span className="swap__b" aria-hidden="true">{children}</span>
    </span>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const theme = useNavTheme()

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`nav nav--${theme} ${open ? 'nav--open' : ''}`} data-open={open}>
      <Link to="/" className="nav__logo" aria-label="Captive8 Marketing home">
        <span className="mark">CAPTIVE<span className="mark-8">8</span></span>
      </Link>

      <div className="nav__links">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'}>
            <Swap>{l.label}</Swap>
          </NavLink>
        ))}
      </div>

      <Link to="/contact" className="nav__cta">
        <span className="nav__cta-star" aria-hidden="true">&#10038;</span>
        <Swap>Let&rsquo;s Talk</Swap>
      </Link>

      <button
        className={`nav__burger ${open ? 'is-open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span /><span />
      </button>

      <div className="navmenu" aria-hidden={!open}>
        <div className="navmenu__head">
          <span className="mark">CAPTIVE<span className="mark-8">8</span></span>
          <button className="navmenu__x" onClick={() => setOpen(false)} aria-label="Close menu">&#10005;</button>
        </div>
        <div className="navmenu__list">
          {links.map((l, i) => (
            <Link key={l.to} to={l.to} style={{ transitionDelay: `${0.06 * i + 0.12}s` }}>
              {l.label}<span className="navmenu__go" aria-hidden="true">&#8599;</span>
            </Link>
          ))}
        </div>
        <div className="navmenu__foot">
          <div>
            <span className="navmenu__lbl">Get in touch</span>
            <a href="tel:+17048930097">704 893 0097</a>
            <a href="mailto:hello@captive8marketing.com">hello@captive8marketing.com</a>
          </div>
          <div>
            <span className="navmenu__lbl">Where</span>
            <span>Charlotte, NC</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
