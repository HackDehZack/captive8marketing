import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { posts } from '../data/blog.js'

export default function Blog() {
  return (
    <>
      <section className="phead phead--skyline wrap" data-theme="dark">
        <div className="phead__meta">
          <span className="mono">[ Journal / The Captive8 Blog ]</span>
          <span className="mono">{posts.length} Articles &middot; Mike Burke</span>
        </div>
        <Reveal>
          <h1>Captive8 Marketing Blog</h1>
          <p className="phead__lead">
            The Captive8 Marketing Blog with Mike Burke helps local businesses in the Charlotte area
            understand modern marketing in simple, practical terms. Real world insights on branding, SEO,
            social media, paid ads, AI search, content, and business growth.
          </p>
        </Reveal>
      </section>

      <section className="section blog-sec" data-theme="light">
        <div className="wrap">
          <div className="blog-grid">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 70}>
                <Link to={`/blog/${p.slug}`} className="bcard" style={{ height: '100%' }}>
                  <div className="bcard__img"><img src={p.image} alt="" loading="lazy" /></div>
                  <div className="bcard__top">
                    <div className="bcard__tags">{p.tags.slice(0, 2).map((t) => <span key={t}>{t}</span>)}</div>
                    <span className="mono">{p.read}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <div className="bcard__foot">
                    <span className="mono">{p.date}</span>
                    <span className="arrow-link">Read More &raquo;</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
