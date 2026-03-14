import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Animated balls */}
      <div className={styles.ballTrack} aria-hidden="true">
        <div className={`${styles.ball} ${styles.ball1}`} />
        <div className={`${styles.ball} ${styles.ball2}`} />
        <div className={`${styles.ball} ${styles.ball3}`} />
        <div className={styles.tableLine} />
        <div className={styles.tableNet} />
      </div>

      {/* BG split */}
      <div className={styles.heroBg} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>Elite Table Tennis Agency</div>
        <h1 className={styles.title}>
          MASTER<br />
          <span className={styles.line2}>
            THE<span className={styles.accent}> GAME</span>
          </span>
        </h1>
        <p className={styles.sub}>
          Where precision meets performance. TENS represents the world's finest
          table tennis talent — building legacies, one rally at a time.
        </p>
        <div className={styles.actions}>
          <a href="#services" className={styles.btnPrimary}>Our Services</a>
          <a href="#team" className={styles.btnGhost}>Meet Athletes</a>
        </div>
      </div>

      <div className={styles.stats}>
        {[
          { num: '48', suffix: '+', label: 'World Rankings' },
          { num: '12', suffix: 'M', label: 'Prize Money' },
          { num: '9',  suffix: '+', label: 'Years Active'  },
        ].map(({ num, suffix, label }) => (
          <div className={styles.stat} key={label}>
            <div className={styles.statNum}>{num}<span>{suffix}</span></div>
            <div className={styles.statLabel}>{label}</div>
            <div className={styles.statDivider} />
          </div>
        ))}
      </div>
    </section>
  )
}
