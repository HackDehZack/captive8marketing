// Infinite marquee. Pass words array; duplicated for seamless loop.
export default function Ticker({ words, reverse = false }) {
 const run = [...words, ...words]
 return (
 <div className="ticker" aria-hidden="true">
 <div className={`ticker__track ${reverse ? 'rev' : ''}`}>
 {run.map((w, i) => (
 <span key={i}>{w}</span>
 ))}
 </div>
 </div>
 )
}
