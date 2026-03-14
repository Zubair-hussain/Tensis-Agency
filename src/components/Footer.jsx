import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>TEN<span>S</span></div>
      <div className={styles.copy}>© 2025 TENS Agency. All rights reserved.</div>
      <div className={styles.links}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://linkedin.com"  target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:hello@tensagency.com">Contact</a>
      </div>
    </footer>
  )
}
