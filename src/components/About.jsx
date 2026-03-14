import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      {/* Left — visual */}
      <div className={styles.visual}>
        <div className={`${styles.ring} ${styles.ring1}`} />
        <div className={`${styles.ring} ${styles.ring2}`} />
        <div className={`${styles.ring} ${styles.ring3}`} />
        <div className={styles.paddleWrap}>
          <svg className={styles.paddle} viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="110" rx="75" ry="85" fill="#1a0a0a" stroke="#c8372d" strokeWidth="1.5"/>
            <ellipse cx="100" cy="110" rx="60" ry="70" fill="none" stroke="rgba(200,55,45,0.3)" strokeWidth="1"/>
            <rect x="86" y="190" width="28" height="70" rx="8" fill="#0f0a0a" stroke="#c8372d" strokeWidth="1.5"/>
            <circle cx="148" cy="55" r="18" fill="none" stroke="#c9a84c" strokeWidth="1.5"/>
            <circle cx="148" cy="55" r="12" fill="none" stroke="rgba(201,168,76,0.4)" strokeWidth="1"/>
            <line x1="120" y1="38" x2="85" y2="28" stroke="#c9a84c" strokeWidth="1" opacity="0.3" strokeDasharray="3 3"/>
            <line x1="125" y1="48" x2="95" y2="42" stroke="#c9a84c" strokeWidth="1" opacity="0.2" strokeDasharray="3 3"/>
            <line x1="100" y1="42" x2="100" y2="178" stroke="#c8372d" strokeWidth="1" opacity="0.2"/>
            <text x="100" y="118" textAnchor="middle" fontFamily="'Bebas Neue', sans-serif" fontSize="22" fill="rgba(200,55,45,0.5)" letterSpacing="4">TENS</text>
          </svg>
        </div>
      </div>

      {/* Right — content */}
      <div className={styles.content}>
        <div className="section-tag reveal">Our Story</div>
        <h2 className={`section-title reveal ${styles.title}`}>
          THE AGENCY<br />BEHIND<br />CHAMPIONS
        </h2>
        <blockquote className={`${styles.quote} reveal`}>
          "Every point is a decision. Every rally, a statement. We help athletes make the right ones."
        </blockquote>
        <p className={`${styles.body} reveal`}>
          Founded in 2015 by former world-ranked player Marcus Voigt, TENS was built
          on a single conviction: elite table tennis talent deserves elite representation.
          We combine deep sport knowledge with sharp business acumen to create careers
          that extend far beyond the table.
        </p>
        <div className={`${styles.signature} reveal`}>
          <div className={styles.avatar}>MV</div>
          <div>
            <div className={styles.sigName}>Marcus Voigt</div>
            <div className={styles.sigRole}>Founder & Director — TENS Agency</div>
          </div>
        </div>
      </div>
    </section>
  )
}
