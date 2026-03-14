import styles from './Cursor.module.css'

export default function Cursor() {
  return (
    <>
      <div id="cursor" className={styles.cursor} />
      <div id="cursor-ring" className={styles.ring} />
    </>
  )
}
