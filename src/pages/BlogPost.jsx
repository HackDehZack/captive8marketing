import { useParams, Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { getPost, posts } from '../data/blog.js'
import NotFound from './NotFound.jsx'

function Block({ b }) {
 if (b.type === 'h2') return <h2>{b.text}</h2>
 if (b.type === 'pull') return <p className="pull">{b.text}</p>
 if (b.type === 'ul') return <ul>{b.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
 return <p>{b.text}</p>
}

export default function BlogPost() {
 const { slug } = useParams()
 const post = getPost(slug)
 if (!post) return <NotFound />

 const more = posts.filter((p) => p.slug !== slug).slice(0, 2)

 return (
 <>
 <article className="article">
 <div className="article__hero">
 <Link to="/blog" className="mono arrow-link">← All Articles</Link>
 <div className="article__tags" style={{ marginTop: 28 }}>
 {post.tags.map((t) => <span key={t}>{t}</span>)}
 </div>
 <h1>{post.title}</h1>
 <div className="article__meta">
 <span>By Mike Burke</span>
 <span>Captive8 Marketing</span>
 <span>{post.date}</span>
 <span>{post.read}</span>
 </div>
 </div>

 <div className="article__cover">
 <img src={post.image} alt="" />
 </div>

 <div className="article__body">
 {post.body.map((b, i) => <Block key={i} b={b} />)}
 </div>

 <div style={{ marginTop: 60, paddingTop: 30, borderTop: '1px solid var(--line)', display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
 <span className="mono" style={{ color: 'var(--bone-faint)' }}>Written by Mike Burke · Founder, Captive8 Marketing</span>
 <Link to="/contact" className="btn btn--solid"><span className="dot" /> Get a Free Marketing Audit</Link>
 </div>
 </article>

 {/* you also may like */}
 <section className="section wrap">
 <Reveal className="eyebrow-row">
 <p className="kicker"><span className="idx">[ ++ ]</span> You also may like</p>
 <Link to="/blog" className="arrow-link">All Articles →</Link>
 </Reveal>
 <div className="blog-grid">
 {more.map((p) => (
 <Link to={`/blog/${p.slug}`} className="bcard" key={p.slug}>
 <div className="bcard__top">
 <div className="bcard__tags">{p.tags.slice(0, 2).map((t) => <span key={t}>{t}</span>)}</div>
 <span className="mono" style={{ color: 'var(--bone-faint)' }}>{p.read}</span>
 </div>
 <div className="bcard__img"><img src={p.image} alt="" loading="lazy" /></div>
 <h3>{p.title}</h3>
 <div className="bcard__foot">
 <span className="mono" style={{ color: 'var(--bone-faint)' }}>{p.date}</span>
 <span className="arrow-link">Read →</span>
 </div>
 </Link>
 ))}
 </div>
 </section>
 </>
 )
}
