import { useEffect, useState } from 'react'

const KEY = 'c8-cookie-consent'

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) {
        const t = setTimeout(() => setShow(true), 900)
        return () => clearTimeout(t)
      }
    } catch (e) { /* storage blocked, skip */ }
  }, [])

  const decide = (choice) => {
    try { localStorage.setItem(KEY, choice) } catch (e) { /* ignore */ }
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="cookie" role="dialog" aria-label="Cookie notice">
      <div className="cookie__mark" aria-hidden="true">C<span>8</span></div>
      <p className="cookie__text">
        We use a few cookies to see what is working and keep the site fast. No spam, no selling your data.
        Read it in our approach to <span className="cookie__hl">honest, local marketing</span>.
      </p>
      <div className="cookie__actions">
        <button className="cookie__btn cookie__btn--ghost" onClick={() => decide('declined')}>Decline</button>
        <button className="cookie__btn cookie__btn--accept" onClick={() => decide('accepted')}>
          Accept <span className="cookie__arrow" aria-hidden="true">&#8599;</span>
        </button>
      </div>
    </div>
  )
}
