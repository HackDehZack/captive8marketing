// Puffy floating clouds (Maxima-flavoured). Parent must be position:relative; overflow:hidden.
// `items` = array of { top, left, right, w, dur, delay } (% / px-ish via CSS).
function Cloud({ style, dur = 22, delay = 0, w = 160 }) {
  return (
    <svg
      className="cloud"
      style={{ ...style, width: w, animationDuration: `${dur}s`, animationDelay: `${delay}s` }}
      viewBox="0 0 200 90" fill="var(--cloud)" aria-hidden="true"
    >
      <path d="M44 88c-21 0-38-15-38-34 0-18 14-32 33-34 4-12 16-20 30-20 11 0 21 5 27 13 4-2 9-3 14-3 16 0 29 12 30 27 16 1 28 13 28 28 0 15-13 27-29 27H44z" />
    </svg>
  )
}

export default function Clouds({ preset = 'band' }) {
  const sets = {
    hero: [
      { top: '14%', left: '6%', w: 150, dur: 26, delay: 0 },
      { top: '26%', right: '10%', w: 200, dur: 32, delay: 2 },
      { top: '60%', left: '14%', w: 120, dur: 24, delay: 1 },
      { top: '70%', right: '18%', w: 100, dur: 28, delay: 3 },
    ],
    band: [
      { top: '12%', left: '4%', w: 130, dur: 28, delay: 0 },
      { top: '30%', right: '6%', w: 170, dur: 34, delay: 2 },
      { top: '66%', left: '22%', w: 90, dur: 22, delay: 1 },
    ],
    sparse: [
      { top: '18%', right: '8%', w: 150, dur: 30, delay: 0 },
      { top: '64%', left: '8%', w: 110, dur: 26, delay: 1.5 },
    ],
  }
  const items = sets[preset] || sets.band
  return (
    <div className="clouds" aria-hidden="true">
      {items.map((it, i) => (
        <Cloud key={i} w={it.w} dur={it.dur} delay={it.delay}
          style={{ top: it.top, left: it.left, right: it.right }} />
      ))}
    </div>
  )
}
