// The Captive8 "swirl 8" ribbon: silver flowing lines that loop like an infinity / 8.
// Faithful nod to the original brand graphic. Decorative only.
export default function Swirl8({ className = '' }) {
  const lines = [0, 7, 14, 21, 28, 35, 42]
  return (
    <svg className={`swirl8 ${className}`} viewBox="0 0 600 520" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="sw-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fefefe" />
          <stop offset="45%" stopColor="#b8b4ac" />
          <stop offset="100%" stopColor="#3a3733" />
        </linearGradient>
      </defs>
      {lines.map((o, i) => (
        <path
          key={i}
          d={`M ${120 + o} 120
              C ${120 + o} ${40 + o * 0.4} ${230 + o} ${40 + o * 0.3} ${300 + o * 0.5} ${130 + o * 0.6}
              C ${370 - o * 0.3} ${230 + o} ${470 + o} ${250 + o} ${470 + o} ${330 - o * 0.3}
              C ${470 + o} ${430 - o * 0.4} ${360 - o} ${430 - o * 0.4} ${300 - o * 0.5} ${340 - o * 0.5}
              C ${235 - o * 0.4} ${240 - o} ${130 - o} ${230 - o} ${130 - o} ${150 + o * 0.3}`}
          stroke="url(#sw-grad)"
          strokeWidth={1.4}
          opacity={0.85 - i * 0.07}
        />
      ))}
    </svg>
  )
}
