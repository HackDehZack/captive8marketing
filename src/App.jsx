import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import LineBg from './components/LineBg.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import LocalInfluence from './pages/LocalInfluence.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
 const { pathname } = useLocation()
 useEffect(() => { window.scrollTo(0, 0) }, [pathname])
 return null
}

export default function App() {
 return (
 <>
 <LineBg />
 <div className="grain" aria-hidden="true" />
 <ScrollToTop />
 <Nav />
 <main>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/services" element={<Services />} />
 <Route path="/services/:slug" element={<ServiceDetail />} />
 <Route path="/local-influence" element={<LocalInfluence />} />
 <Route path="/blog" element={<Blog />} />
 <Route path="/blog/:slug" element={<BlogPost />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="*" element={<NotFound />} />
 </Routes>
 </main>
 <Footer />
 <CookieConsent />
 </>
 )
}
