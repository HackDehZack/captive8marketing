import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Swirl8 from '../components/Swirl8.jsx'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <>
      <section className="phead phead--light wrap" data-theme="light">
        <div className="phead__meta">
          <span className="mono">[ Index / Services ]</span>
          <span className="mono">06 Solutions &middot; Charlotte NC</span>
        </div>
        <Reveal>
          <h1>Our Services</h1>
          <p className="phead__lead">
            Replace fragmented tactics with a cohesive plan. Every solution below plugs into one
            360 degree engine built to reach your customers on every digital channel and turn them into revenue.
          </p>
        </Reveal>
      </section>

      <section className="section engage" data-theme="light">
        <div className="wrap">
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

      <section className="growband">
        <Swirl8 className="growband__swirl" />
        <div className="wrap growband__inner">
          <Reveal>
            <p className="kicker"><span className="idx">[ Free ]</span> No Cost, No Pressure</p>
            <h2 className="display growband__title">Not Sure Where to Start?</h2>
            <p className="growband__copy">We audit local business marketing every day. Let us take a look at yours.</p>
            <Link to="/contact" className="btn btn--solid btn--lg"><span className="dot" /> Get a Free Audit</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
