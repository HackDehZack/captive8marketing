import { useState } from 'react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="acc">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div className={`acc__item ${isOpen ? 'is-open' : ''}`} key={it.t}>
            <button className="acc__head" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
              <span className="acc__num mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="acc__title">{it.t}</span>
              <span className="acc__sign" aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            <div className="acc__panel" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
              <div className="acc__panel-inner"><p>{it.d}</p></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
