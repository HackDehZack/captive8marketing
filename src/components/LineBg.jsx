import { useEffect, useRef } from 'react'

// Fine-line "bubble path" SVG art that parallaxes on scroll across all viewports.
// Sits at z-index -1 behind transparent sections; covered where sections are opaque.
export default function LineBg() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const layers = Array.from(el.querySelectorAll('[data-speed]'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let raf = 0
    const update = () => {
      const y = window.scrollY || window.pageYOffset
      for (const layer of layers) {
        const s = parseFloat(layer.dataset.speed)
        layer.style.transform = `translate3d(0, ${(y * s).toFixed(2)}px, 0)`
      }
      raf = 0
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [])

  // organic blob path generator (closed bezier-ish ring)
  const blob = (cx, cy, r, wobble) =>
    `M ${cx} ${cy - r}
     C ${cx + r * 0.9} ${cy - r} ${cx + r} ${cy - r * 0.5} ${cx + r} ${cy + wobble}
     C ${cx + r} ${cy + r * 0.9} ${cx + r * 0.4} ${cy + r} ${cx} ${cy + r}
     C ${cx - r * 0.9} ${cy + r} ${cx - r} ${cy + r * 0.4} ${cx - r} ${cy - wobble}
     C ${cx - r} ${cy - r * 0.8} ${cx - r * 0.5} ${cy - r} ${cx} ${cy - r} Z`

  const rings = (cx, cy, base, count, color) =>
    Array.from({ length: count }).map((_, i) => (
      <path key={i} d={blob(cx, cy, base + i * (base * 0.18), base * 0.12)} stroke={color} fill="none" />
    ))

  return (
    <div className="linebg" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 1440 2200" preserveAspectRatio="xMidYMin slice">
        <g className="linebg__layer" data-speed="0.12" strokeWidth="1" opacity="0.5">
          <g className="linebg__float">{rings(220, 320, 90, 6, 'var(--cobalt)')}</g>
        </g>
        <g className="linebg__layer" data-speed="0.26" strokeWidth="1" opacity="0.42">
          <g className="linebg__float linebg__float--rev">{rings(1230, 760, 120, 7, 'var(--acid)')}</g>
        </g>
        <g className="linebg__layer" data-speed="0.08" strokeWidth="1" opacity="0.4">
          <g className="linebg__float">{rings(980, 1500, 80, 5, 'var(--cobalt)')}</g>
        </g>
        <g className="linebg__layer" data-speed="0.2" strokeWidth="1" opacity="0.35">
          <g className="linebg__float linebg__float--rev">{rings(300, 1850, 110, 6, 'var(--acid)')}</g>
        </g>
      </svg>
    </div>
  )
}
