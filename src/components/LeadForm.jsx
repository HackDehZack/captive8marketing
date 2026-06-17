import { useState } from 'react'

export default function LeadForm({ compact = false }) {
 const [sent, setSent] = useState(false)

 const onSubmit = (e) => {
 e.preventDefault()
 // No backend wired yet, capture intent locally so the form feels real.
 setSent(true)
 }

 if (sent) {
 return (
 <div className="form" style={{ minHeight: compact ? 220 : 340, justifyContent: 'center' }}>
 <p className="form__ok">✦ Message received</p>
 <h3 className="display" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Thanks, we’ll be in touch.</h3>
 <p className="muted">A real human (not a robot menu) will reach out shortly. In the meantime, keep doing what you love.</p>
 <button className="arrow-link" onClick={() => setSent(false)} style={{ alignSelf: 'flex-start' }}>← Send another</button>
 </div>
 )
 }

 return (
 <form className="form" onSubmit={onSubmit}>
 <div className="frow">
 <div className="field">
 <label>First Name <span className="req">*</span></label>
 <input type="text" placeholder="First" required />
 </div>
 <div className="field">
 <label>Last Name <span className="req">*</span></label>
 <input type="text" placeholder="Last" required />
 </div>
 </div>
 <div className="field">
 <label>Company</label>
 <input type="text" placeholder="Your business" />
 </div>
 <div className="frow">
 <div className="field">
 <label>Email <span className="req">*</span></label>
 <input type="email" placeholder="you@company.com" required />
 </div>
 <div className="field">
 <label>Phone <span className="req">*</span></label>
 <input type="tel" placeholder="(704) 000-0000" required />
 </div>
 </div>
 <div className="field">
 <label>Leave a message <span className="req">*</span></label>
 <textarea rows={compact ? 2 : 4} placeholder="Tell us what you’re trying to grow…" required />
 </div>
 <button type="submit" className="btn btn--solid" style={{ alignSelf: 'flex-start' }}>
 <span className="dot" /> Send Message
 </button>
 </form>
 )
}
