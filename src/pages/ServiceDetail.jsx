import { useParams, Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { getService, services } from '../data/services.js'
import NotFound from './NotFound.jsx'

export default function ServiceDetail() {
 const { slug } = useParams()
 const s = getService(slug)
 if (!s) return <NotFound />

 const idx = services.findIndex((x) => x.slug === slug)
 const next = services[(idx + 1) % services.length]

 return (
 <>
 <section className="phead phead--light wrap" data-theme="light">
 <div className="phead__meta">
 <Link to="/services" className="mono arrow-link">&larr; All Services</Link>
 <span className="mono" style={{ color: 'var(--bone-faint)' }}>Service {s.num} / 06</span>
 </div>
 <Reveal>
 <h1>{s.name}</h1>
 <p className="phead__lead">{s.tagline}</p>
 </Reveal>
 </section>

 {/* intro split */}
 <section className="section wrap" style={{ paddingTop: 40 }}>
 <div className="split">
 <Reveal>
 <p className="kicker"><span className="idx">[ 01 ]</span> Overview</p>
 <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', marginTop: 22 }}>{s.intro.title}</h2>
 </Reveal>
 <Reveal delay={100}>
 <p className="muted" style={{ fontSize: '1.12rem', lineHeight: 1.65 }}>{s.intro.body}</p>
 <div className="tagrow" style={{ marginTop: 30 }}>
 {s.capabilities.map((c) => <span className="chip" key={c}>{c}</span>)}
 </div>
 </Reveal>
 </div>
 </section>

 {/* section 2 with image */}
 <section className="section" style={{ background: 'var(--ink-1)', paddingBlock: 'clamp(50px, 8vw, 110px)' }}>
 <div className="wrap split">
 <Reveal>
 <div className="svc-shot"><img src={s.section2.image} alt={s.section2.title} loading="lazy" /></div>
 </Reveal>
 <Reveal delay={100}>
 <p className="kicker"><span className="idx">[ 02 ]</span> The Approach</p>
 <h2 className="display" style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)', marginTop: 20 }}>{s.section2.title}</h2>
 <p className="muted" style={{ fontSize: '1.08rem', marginTop: 22, lineHeight: 1.6 }}>{s.section2.body}</p>
 </Reveal>
 </div>
 </section>

 {/* features grid */}
 <section className="section wrap">
 <Reveal className="eyebrow-row">
 <p className="kicker"><span className="idx">[ 03 ]</span> What You Get</p>
 <span className="mono" style={{ color: 'var(--bone-faint)' }}>{String(s.features.length).padStart(2, '0')} Outcomes</span>
 </Reveal>
 <div className="vgrid">
 {s.features.map((f, i) => (
 <div className="vcard" key={f.t}>
 <span className="vc-num">{String(i + 1).padStart(2, '0')}</span>
 <div>
 <h3>{f.t}</h3>
 <p>{f.d}</p>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* outro CTA */}
 <section className="ctaband wrap" style={{ borderTop: '1px solid var(--line)' }}>
 <Reveal>
 <p className="kicker" style={{ justifyContent: 'center' }}><span className="idx">[ 04 ]</span> {s.outro.title}</p>
 <h2 style={{ marginTop: 22, fontSize: 'clamp(2.2rem, 7vw, 6rem)' }}>{s.outro.title}</h2>
 <p className="sub">{s.outro.body}</p>
 <Link to="/contact" className="btn btn--solid"><span className="dot" /> Schedule a Free Consultation</Link>
 </Reveal>
 </section>

 {/* next service */}
 <Link to={`/services/${next.slug}`} className="nextsol wrap" data-theme="dark">
 <span className="nextsol__lbl mono">Next Solution</span>
 <span className="nextsol__name">{next.name}</span>
 <span className="nextsol__arrow" aria-hidden="true">
 <span className="nextsol__line" />
 <span className="nextsol__head">&#8594;</span>
 </span>
 </Link>
 </>
 )
}
