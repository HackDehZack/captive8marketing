import { Link } from 'react-router-dom'
import { services } from '../data/services.js'

export default function Footer() {
  const year = 2026
  return (
    <footer className="footer" data-theme="dark">
      <div className="footer__cols">
        <div className="footer__col">
          <h4><span className="sq" /> Captive8 / 01</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/local-influence">Local Influence</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4><span className="sq" /> Captive8 / 02</h4>
          {services.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`}>{s.name}</Link>
          ))}
        </div>

        <div className="footer__col footer__col--cta">
          <h4><span className="sq" /> Captive8 / 03</h4>
          <p className="footer__pitch">Ready to turn local attention into real, paying customers?</p>
          <Link to="/contact" className="footer__talk">
            Let&rsquo;s Talk <span className="footer__talk-arrow" aria-hidden="true">&#8599;</span>
          </Link>
          <a href="tel:+17048930097" className="footer__phone">704 893 0097</a>
        </div>
      </div>

      <a href="tel:+17048930097" className="footer__phoneline">
        <span className="footer__phoneline-lbl mono">78% buy from whoever responds first</span>
        <span className="footer__phoneline-big">Answer the damn phone.</span>
        <span className="footer__phoneline-num">704 893 0097 <span aria-hidden="true">&#8599;</span></span>
      </a>

      <div className="footer__word" aria-hidden="true">CAPTIVE<span className="eight">8</span></div>

      <div className="footer__bar">
        <span>&copy; {year} Captive8 Marketing</span>
        <span>Charlotte, NC</span>
        <span className="footer__credit">
          <a href="https://kofordmedia.com" target="_blank" rel="noopener noreferrer">Redesign by Koford Media</a>
          <a href="https://kofordmedia.com" target="_blank" rel="noopener noreferrer" className="footer__credit-sub">Helping brands fit The Koford Standard</a>
        </span>
      </div>
    </footer>
  )
}
