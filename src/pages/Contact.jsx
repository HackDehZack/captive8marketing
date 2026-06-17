import Reveal from '../components/Reveal.jsx'
import LeadForm from '../components/LeadForm.jsx'

export default function Contact() {
 return (
 <>
 <section className="phead phead--light wrap" data-theme="light">
 <div className="phead__meta">
 <span className="mono">[ Contact / Let’s Talk ]</span>
 <span className="mono" style={{ color: 'var(--bone-faint)' }}>Charlotte, NC · Mon-Fri</span>
 </div>
 <Reveal>
 <h1>Get in<br />Touch</h1>
 <p className="phead__lead">
 Ready to turn big ideas into measurable growth? Whether you have a quick question or a full
 brief, we’re here to help you move from concept to conversion, without the jargon.
 </p>
 </Reveal>
 </section>

 <section className="section wrap" style={{ paddingTop: 30 }}>
 <div className="contact-grid">
 <Reveal>
 <LeadForm />
 </Reveal>

 <Reveal delay={120} className="contact-aside">
 <p className="kicker"><span className="idx">[ 01 ]</span> Prefer to talk?</p>
 <h3>Call us</h3>
 <a href="tel:+17048930097" className="big">704-893-0097</a>

 <h3>Email</h3>
 <a href="mailto:hello@captive8marketing.com" className="big" style={{ fontSize: 'clamp(1.1rem, 2.6vw, 1.6rem)' }}>hello@captive8marketing.com</a>

 <h3>Studio</h3>
 <p className="display" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)' }}>Charlotte, North Carolina</p>

 <h3>What happens next</h3>
 <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, marginTop: 4 }}>
 {['A real human responds, no robot menu.', 'We audit where you’re losing customers.', 'You get a clear, no-pressure plan.'].map((t, i) => (
 <li key={i} style={{ display: 'flex', gap: 14, color: 'var(--bone-dim)' }}>
 <span className="mono acid">0{i + 1}</span>{t}
 </li>
 ))}
 </ul>
 </Reveal>
 </div>
 </section>

 <section className="ctaband wrap" style={{ borderTop: '1px solid var(--line)' }}>
 <Reveal>
 <h2>Answer the<br />damn phone.</h2>
 <p className="sub">78% of customers buy from whoever responds first. Let’s make sure that’s you.</p>
 <a href="tel:+17048930097" className="btn btn--solid"><span className="dot" /> 704-893-0097</a>
 </Reveal>
 </section>
 </>
 )
}
