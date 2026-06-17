import { useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/services.js'

// Three-step process diagrams (technical line art, NVRMND-flavoured)
const steps = [
  {
    key: 'MAP',
    label: 'Strategy and Structure',
    copy: 'We map your market, your audience, and the channels where your customers already spend their time.',
    svg: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="60" cy="22" r="4" /><circle cx="24" cy="74" r="4" /><circle cx="96" cy="74" r="4" />
        <circle cx="60" cy="96" r="4" /><circle cx="60" cy="58" r="6" />
        <path d="M60 28v24M58 54 26 72M62 54 94 72M60 64v28M28 76l30 18M92 76 62 94" opacity="0.5" />
        <circle cx="60" cy="58" r="26" strokeDasharray="2 4" opacity="0.4" />
      </svg>
    ),
  },
  {
    key: 'MAKE',
    label: 'Build and Engage',
    copy: 'We build the site, the content, and the campaigns that turn local attention into real action.',
    svg: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1">
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i / 16) * Math.PI * 2
          return <line key={i} x1="60" y1="60" x2={60 + Math.cos(a) * 44} y2={60 + Math.sin(a) * 44} opacity="0.55" />
        })}
        <circle cx="60" cy="60" r="10" /><circle cx="60" cy="60" r="44" strokeDasharray="2 4" opacity="0.4" />
      </svg>
    ),
  },
  {
    key: 'MOVE',
    label: 'Convert and Grow',
    copy: 'We move every lead through the pipeline and scale the moves that bring in revenue.',
    svg: (
      <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse cx="60" cy="60" rx="46" ry="20" opacity="0.55" />
        <ellipse cx="60" cy="60" rx="46" ry="20" opacity="0.45" transform="rotate(60 60 60)" />
        <ellipse cx="60" cy="60" rx="46" ry="20" opacity="0.45" transform="rotate(120 60 60)" />
        <circle cx="60" cy="60" r="6" /><circle cx="104" cy="60" r="3.5" fill="currentColor" />
      </svg>
    ),
  },
]

function Wire() {
  // tiny wireframe glyph that sits on each row, like NVRMND's framed page marks
  return (
    <svg viewBox="0 0 34 26" fill="none" stroke="currentColor" strokeWidth="1.1" className="sc-wire">
      <rect x="0.6" y="0.6" width="32.8" height="24.8" />
      <line x1="0.6" y1="7" x2="33.4" y2="7" />
      <line x1="20" y1="7" x2="20" y2="25.4" />
    </svg>
  )
}

export default function ServicesShowcase() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section className="ssec paper-sec">
      <div className="ssec__grid" aria-hidden="true" />
      <div className="wrap">
        {/* header */}
        <div className="ssec__head">
          <p className="kicker"><span className="idx">[ 002 ]</span> What We Do</p>
          <span className="ssec__count">0 / 6 SOLUTIONS</span>
        </div>

        <h2 className="ssec__title">
          A complete marketing engine, <span className="serif-i">built to sell.</span>
        </h2>

        {/* how it works */}
        <div className="how">
          {steps.map((s, i) => (
            <div className="hownode" key={s.key}>
              <div className="hownode__top">
                <span className="hownode__idx">0{i + 1}</span>
                <div className="hownode__svg">{s.svg}</div>
              </div>
              <h3 className="hownode__name">{s.key}</h3>
              <p className="hownode__label">{s.label}</p>
              <p className="hownode__copy">{s.copy}</p>
            </div>
          ))}
        </div>

        {/* interactive showcase */}
        <div className="showcase">
          <div className="showcase__preview">
            <span className="sc-corner tl" /><span className="sc-corner tr" />
            <span className="sc-corner bl" /><span className="sc-corner br" />
            {services.map((s, i) => (
              <img
                key={s.slug}
                src={s.hero}
                alt={s.name}
                className={`sc-img ${i === active ? 'on' : ''}`}
                loading="lazy"
              />
            ))}
            <div className="sc-preview-meta">
              <span className="mono">PREVIEW / 0{active + 1}</span>
              <span className="sc-preview-name">{current.name}</span>
            </div>
          </div>

          <ul className="sc-list">
            {services.map((s, i) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className={`sc-row ${i === active ? 'active' : ''}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="sc-lead">
                    <span className="sc-icon"><img src={s.icon} alt="" loading="lazy" /></span>
                    <span className="sc-num">{s.num}</span>
                  </span>
                  <span className="sc-body">
                    <span className="sc-name">{s.name}</span>
                    <span className="sc-desc">{s.short}</span>
                  </span>
                  <span className="sc-thumb"><img src={s.hero} alt="" loading="lazy" /></span>
                  <Wire />
                  <span className="sc-arrow">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ssec__foot">
          <span className="mono">CAPTIVE8 / CHARLOTTE NC</span>
          <Link to="/services" className="arrow-link">View all solutions →</Link>
        </div>
      </div>
    </section>
  )
}
