import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import Accordion from '../components/Accordion.jsx'
import Swirl8 from '../components/Swirl8.jsx'
import Ticker from '../components/Ticker.jsx'
import { services } from '../data/services.js'

const GROW_KEY = 'c8-grow-word'

// Parallax: translate layered refs at different rates as the hero scrolls past.
function useParallax(refs) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY || 0
      for (const { ref, rate } of refs) {
        if (ref.current) ref.current.style.transform = `translate3d(0, ${(y * rate).toFixed(1)}px, 0)`
      }
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [])
}

const partner = [
  { t: 'Collaborative Expertise', d: 'A full marketing team in your corner. Strategy, content, and execution working together under one roof, so nothing falls through the cracks.' },
  { t: 'Proven Results', d: 'We engineer how customers find you instead of hoping they do, and we measure every step so you always know what is working.' },
  { t: 'Integrated Approach', d: 'Web, SEO, paid ads, email, and CRM working as one connected engine, not scattered tactics that pull in different directions.' },
  { t: 'Personalized Support', d: 'Local first and owner led. You keep doing what you love, and we handle the marketing that keeps the phone ringing.' },
]

const line = { hidden: { y: '115%' }, show: (i) => ({ y: 0, transition: { duration: 0.95, delay: 0.1 + i * 0.09, ease: [0.22, 1, 0.36, 1] } }) }

export default function Home() {
  const gradRef = useRef(null)
  const titleRef = useRef(null)
  useParallax([
    { ref: gradRef, rate: 0.35 },
    { ref: titleRef, rate: -0.14 },
  ])

  // uncontrolled: read the saved word once, only persist on input so the caret never jumps
  const [grow] = useState(() => {
    try { return localStorage.getItem(GROW_KEY) || 'GROW' } catch (e) { return 'GROW' }
  })
  const onGrowInput = (e) => {
    try { localStorage.setItem(GROW_KEY, e.currentTarget.textContent) } catch (err) { /* ignore */ }
  }

  return (
    <>
      {/* ===================== PREMIUM TYPOGRAPHIC HERO ===================== */}
      <header className="phero" data-theme="dark">
        <div className="phero__grad" aria-hidden="true" ref={gradRef} />

        <div className="phero__title wrap" ref={titleRef}>
          <h1 aria-label="Scale Revenue With Proven Systems">
            {['Scale', 'Revenue', 'With Proven', 'Systems'].map((w, i) => (
              <span className={`phero__ln ${w === 'With Proven' ? 'is-out' : ''}`} key={w}>
                <motion.span className="phero__lni" variants={line} custom={i} initial="hidden" animate="show">
                  {w === 'With Proven' ? <>With <span className="acc">Proven</span></> : w}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        <div className="phero__foot wrap">
          <div className="phero__lead">
            <p>Marketing is not just about getting attention. It is about building an engine for growth that turns local attention into real, paying customers.</p>
            <Link to="/contact" className="btn btn--solid btn--lg"><span className="btn__t">Schedule a Free Consultation</span></Link>
          </div>
          <span className="phero__scroll mono">Scroll</span>
        </div>
      </header>

      <Ticker words={['Web Design', 'SEO', 'PPC Advertising', 'Email Marketing', 'CRM Solutions', 'Local Influence', 'Business Coaching']} />

      {/* ===================== ENGAGE YOUR AUDIENCE (services) ===================== */}
      <section className="section engage" data-theme="light">
        <div className="wrap">
          <Reveal className="engage__head">
            <p className="kicker" style={{ justifyContent: 'center' }}><span className="idx">[ 01 ]</span> What We Do</p>
            <h2 className="display">Engage Your Audience Everywhere</h2>
            <p>
              Your customers are everywhere online, so your brand should be too. Replace fragmented tactics
              with a cohesive plan and build a 360 degree marketing strategy that reaches your customers on
              every digital channel.
            </p>
          </Reveal>

          <div className="scards">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link to={`/services/${s.slug}`} className="scard">
                  <span className="scard__no mono">{s.num}</span>
                  <span className="scard__icon"><img src={s.icon} alt="" loading="lazy" /></span>
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                  <span className="scard__cta">View Solution <span aria-hidden="true">&rarr;</span></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STATEMENT: WE HELP BUSINESSES GROW ===================== */}
      <section className="statement" data-theme="dark">
        <div className="wrap">
          <Reveal>
            <p className="statement__eyebrow mono"><span className="idx">[ The Mission ]</span></p>
            <p className="statement__lead">We help local businesses</p>
            <h2 className="statement__big">
              <span
                className="statement__edit"
                contentEditable
                suppressContentEditableWarning
                spellCheck={false}
                role="textbox"
                aria-label="Editable word, type your own goal"
                title="Type your own goal"
                onInput={onGrowInput}
              >{grow}</span>
              <span className="statement__dot acc">.</span>
            </h2>
            <span className="statement__edithint" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
              Type your own goal
            </span>
            <p className="statement__sub">Not with guesswork or vanity metrics. With proven systems, real local attention, and a team that treats your growth like its own.</p>
          </Reveal>
        </div>
      </section>

      {/* ===================== GROWTH PARTNER (accordion) ===================== */}
      <section className="section partner" data-theme="light">
        <div className="wrap partner__grid">
          <Reveal>
            <p className="kicker"><span className="idx">[ 02 ]</span> Why Captive8</p>
            <h2 className="display partner__title">Captive8 Is Your Growth Partner</h2>
            <p className="muted partner__copy">
              You do not need ten different vendors and a dozen logins. You need one team that owns the whole
              picture and treats your growth like it is their own.
            </p>
            <Link to="/services" className="arrow-link">Explore the system &rarr;</Link>
          </Reveal>
          <Reveal delay={120}>
            <Accordion items={partner} />
          </Reveal>
        </div>
      </section>

      {/* ===================== GROW YOUR BUSINESS (closing CTA) ===================== */}
      <section className="growband" data-theme="dark">
        <Swirl8 className="growband__swirl" />
        <div className="wrap growband__inner">
          <Reveal>
            <p className="kicker"><span className="idx">[ 03 ]</span> Let Us Handle It</p>
            <h2 className="display growband__title">Keep doing what you love.</h2>
            <p className="growband__copy">You run the business. We run the marketing that keeps the phone ringing.</p>
            <Link to="/contact" className="btn btn--solid btn--lg">Schedule a Free Consultation</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
