import { useEffect, useRef, useState } from 'react'

// Lightweight scroll-reveal. Wraps children, fades + lifts on entry.
export default function Reveal({ children, className = '', as: Tag = 'div', delay = 0, style }) {
 const ref = useRef(null)
 const [shown, setShown] = useState(false)

 useEffect(() => {
 const el = ref.current
 if (!el) return
 const io = new IntersectionObserver(
 ([e]) => {
 if (e.isIntersecting) {
 setShown(true)
 io.unobserve(el)
 }
 },
 { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
 )
 io.observe(el)
 return () => io.disconnect()
 }, [])

 return (
 <Tag
 ref={ref}
 className={`reveal ${shown ? 'in' : ''} ${className}`}
 style={{ transitionDelay: `${delay}ms`, ...style }}
 >
 {children}
 </Tag>
 )
}
