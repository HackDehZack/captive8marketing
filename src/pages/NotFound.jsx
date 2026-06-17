import { Link } from 'react-router-dom'

export default function NotFound() {
 return (
 <section className="wrap note-404">
 <p className="mono acid">[ ERROR / 404 ]</p>
 <h1 className="display" style={{ fontSize: 'clamp(4rem, 20vw, 14rem)', lineHeight: 0.85 }}>404</h1>
 <p className="muted" style={{ maxWidth: 420 }}>
 This page wandered off. Like a missed call, it’s a lost opportunity, but an easy one to recover.
 </p>
 <Link to="/" className="btn btn--solid"><span className="dot" /> Back Home</Link>
 </section>
 )
}
