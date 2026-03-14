import { services } from '../assets/data'
import styles from './Services.module.css'

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={`${styles.header} section-header reveal`}>
        <div>
          <div className="section-tag">What We Do</div>
          <h2 className="section-title">AGENCY<br />SERVICES</h2>
        </div>
        <p className="section-desc">
          From grassroots talent to world champions — TENS is the full service
          platform your career deserves.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <div
            className={`${styles.card} reveal stagger-${(i % 3) + 1}`}
            key={s.num}
          >
            <div className={styles.num}>{s.num}</div>
            <div
              className={styles.icon}
              dangerouslySetInnerHTML={{ __html: s.icon }}
            />
            <div className={styles.name}>{s.name}</div>
            <p className={styles.desc}>{s.desc}</p>
            <div className={styles.arrow}>→</div>
          </div>
        ))}
      </div>
    </section>
  )
}
