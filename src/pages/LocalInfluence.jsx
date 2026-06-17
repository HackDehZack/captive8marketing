import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Ticker from '../components/Ticker.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { groups, tiers, addons } from '../data/local.js'

export default function LocalInfluence() {
 return (
 <>
 <section className="phead phead--skyline wrap" data-theme="dark">
 <div className="phead__meta">
 <span className="mono">[ Signature / Local Market Influence ]</span>
 <span className="mono" style={{ color: 'var(--bone-faint)' }}>265K+ Members · 12 Groups</span>
 </div>
 <Reveal>
 <h1>Get Seen By<br /><span className="acid">Thousands</span> Locally</h1>
 <p className="phead__lead">
 Stop posting and hoping. We place your business directly inside the most active local
 communities across Charlotte, Waxhaw, Matthews, Mint Hill, Gastonia, Concord, Huntersville, and beyond.
 </p>
 </Reveal>
 </section>

 {/* problem band */}
 <section className="section wrap" style={{ paddingTop: 30 }}>
 <div className="split">
 <Reveal>
 <p className="kicker"><span className="idx">[ 01 ]</span> The Problem</p>
 <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', marginTop: 20 }}>Most businesses<br />struggle with three things</h2>
 </Reveal>
 <Reveal delay={100}>
 <div className="statband" style={{ gridTemplateColumns: '1fr' }}>
 {[['Low visibility', 'Nobody local actually sees you.'], ['Inconsistent leads', 'Feast or famine, month to month.'], ['Wasted ad spend', 'Dollars into platforms that don’t convert.']].map(([t, d], i) => (
 <div className="item" key={t} style={{ borderTop: '1px solid var(--line)', paddingTop: 22, marginTop: i ? 8 : 0 }}>
 <div className="display" style={{ fontSize: '1.7rem' }}>{t}</div>
 <div className="l">{d}</div>
 </div>
 ))}
 </div>
 <p className="muted serif-i" style={{ fontSize: '1.3rem', marginTop: 30, color: 'var(--acid)' }}>
 We fix that by turning local attention into real customers.
 </p>
 </Reveal>
 </div>
 </section>

 <Ticker words={['Real People', 'Real Engagement', 'Real Leads', 'Get Seen', 'Get Recognized', 'Build Trust']} />

 {/* the network */}
 <section className="section wrap">
 <Reveal className="sec-head">
 <h2 className="display">Built on real local engagement</h2>
 <p>Currently over 265k members total. These aren’t just groups, they’re communities of local residents who trust recommendations and actively support local businesses.</p>
 </Reveal>
 <div className="gnet">
 {groups.map((g, i) => (
 <a className="gcard" key={g.name} href={g.url} target="_blank" rel="noopener noreferrer">
 <div className="gcard__img">
 <img src={g.img} alt={g.name} loading="lazy" />
 <span className="gcard__fb" aria-hidden="true">
 <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.78v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z"/></svg>
 </span>
 </div>
 <div className="gcard__body">
 <div className="gcard__top">
 <span className="vc-num">{String(i + 1).padStart(2, '0')}</span>
 <span className="gcard__members">{g.members} members</span>
 </div>
 <h3>{g.name}</h3>
 <span className="gcard__go">Visit group &rarr;</span>
 </div>
 </a>
 ))}
 </div>
 </section>

 {/* pricing */}
 <section className="section wrap" style={{ paddingTop: 0 }}>
 <Reveal className="eyebrow-row">
 <p className="kicker"><span className="idx">[ 02 ]</span> Choose Your Spotlight</p>
 <span className="mono" style={{ color: 'var(--bone-faint)' }}>Monthly · Cancel Anytime</span>
 </Reveal>
 <div className="pricing">
 {tiers.map((t) => (
 <Reveal key={t.name}>
 <div className={`ptier ${t.popular ? 'ptier--pop' : ''}`}>
 <div className="ptier__tag"><span>{t.tag}</span></div>
 <div className="ptier__name">{t.name}</div>
 <div className="ptier__price"><span className="cur">$</span><span className="amt">{t.price}</span></div>
 <div className="pt-label">{t.label}</div>
 <ul>{t.features.map((f) => <li key={f}>{f}</li>)}</ul>
 <p className="pt-foot">{t.foot}</p>
 <Link to="/contact" className={`btn ${t.popular ? '' : 'btn--ghost'}`} style={{ marginTop: 24, justifyContent: 'center', ...(t.popular ? { background: 'var(--ink)', color: 'var(--acid)', borderColor: 'var(--ink)' } : {}) }}>
 <span className="dot" /> Reserve Your Spot
 </Link>
 </div>
 </Reveal>
 ))}
 </div>
 </section>

 {/* add-ons */}
 <section className="section wrap" style={{ paddingTop: 0 }}>
 <Reveal className="eyebrow-row">
 <p className="kicker"><span className="idx">[ 03 ]</span> Add-Ons</p>
 <span className="mono" style={{ color: 'var(--bone-faint)' }}>Boost Any Tier</span>
 </Reveal>
 <div className="addons">
 {addons.map((a) => (
 <div className="addon" key={a.name}>
 <h4>{a.name}</h4>
 <div className="pr">{a.price}</div>
 <p>{a.desc}</p>
 </div>
 ))}
 </div>
 <p className="muted serif-i" style={{ fontSize: '1.2rem', marginTop: 40, maxWidth: 600 }}>
 We limit the number of businesses per category to avoid oversaturation and keep results strong.
 Once your category is full, we close it.
 </p>
 </section>

 {/* reserve form */}
 <section className="section" style={{ background: 'var(--ink-1)' }}>
 <div className="wrap contact-grid">
 <Reveal>
 <p className="kicker"><span className="idx">[ 04 ]</span> Reserve Your Spot</p>
 <h2 className="display" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', marginTop: 20 }}>Ready to get more local customers?</h2>
 <p className="muted" style={{ marginTop: 22, fontSize: '1.05rem' }}>
 Message us now to reserve your category before it fills. Real people, real engagement, real leads.
 </p>
 </Reveal>
 <Reveal delay={120}><LeadForm /></Reveal>
 </div>
 </section>
 </>
 )
}
