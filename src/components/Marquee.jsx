import styles from './Marquee.module.css'

const row1 = ['PRECISION', 'TENS', 'VELOCITY', 'CHAMPION', 'ELITE', 'SPIN']
const row2 = ['POWER', 'SERVE', 'SMASH', 'RALLY', 'TENS', 'DOMINATE']

export default function Marquee() {
  const doubled1 = [...row1, ...row1]
  const doubled2 = [...row2, ...row2]

  return (
    <div className={styles.section} aria-hidden="true">
      <div className={styles.row}>
        <div className={styles.inner}>
          {doubled1.map((word, i) => (
            <span key={i} className={styles.wrap}>
              <span className={`${styles.word} ${word === 'TENS' || word === 'ELITE' ? styles.filled : ''}`}>
                {word}
              </span>
              <span className={styles.dot} />
            </span>
          ))}
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.inner} ${styles.reverse}`}>
          {doubled2.map((word, i) => (
            <span key={i} className={styles.wrap}>
              <span className={`${styles.word} ${word === 'TENS' || word === 'SERVE' ? styles.filled : ''}`}>
                {word}
              </span>
              <span className={styles.dot} />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
