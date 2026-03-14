import styles from './Ticker.module.css'

const items = [
  'TENS AGENCY', 'WORLD CLASS TALENT', 'TABLE TENNIS EXCELLENCE',
  'ELITE REPRESENTATION', 'CHAMPION MINDSET', 'PRECISION & POWER',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <div className={styles.item} key={i}>
            <span>{item}</span>
            <span className={styles.dot} />
          </div>
        ))}
      </div>
    </div>
  )
}
