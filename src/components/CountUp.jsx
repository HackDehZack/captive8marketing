import { useEffect, useRef, useState } from 'react'

// Counts from 0 to `to` when scrolled into view (once).
export default function CountUp({ to, suffix = '', prefix = '', duration = 1600 }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const run = () => {
      if (done.current) return
      done.current = true
      if (reduce) { setVal(to); return }
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
        setVal(Math.round(eased * to))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
      // Safety net: if rAF is throttled (hidden/offscreen tab), still land on the final value.
      setTimeout(() => setVal(to), duration + 120)
    }

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { io.disconnect(); run() }
    }, { threshold: 0.25 })
    io.observe(el)

    // Fallback: if the element is already within the first viewport at mount
    // (or the env reports an odd viewport), kick it off so it never sticks at 0.
    const vh = window.innerHeight || document.documentElement.clientHeight || 900
    const fallback = setTimeout(() => {
      const r = el.getBoundingClientRect()
      if (!done.current && r.top < vh * 1.1) run()
    }, 700)

    return () => { io.disconnect(); clearTimeout(fallback) }
  }, [to, duration])

  return <span ref={ref}>{prefix}{val}{suffix}</span>
}
