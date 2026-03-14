import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section id="cta" className={styles.section}>
      <div className={`section-tag reveal ${styles.tag}`}>Let's Talk</div>
      <h2 className={`${styles.title} reveal`}>
        READY TO<br /><em>COMPETE</em><br />AT THE TOP?
      </h2>
      <p className={`${styles.sub} reveal`}>
        Whether you're a rising star or an established champion, TENS delivers
        the representation your talent demands.
      </p>
      <a href="mailto:hello@tensagency.com" className={`${styles.btn} reveal`}>
        <span>GET IN TOUCH</span>
      </a>
    </section>
  )
}
