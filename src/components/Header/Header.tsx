import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div className={styles.brandMark} />
        <h1 className={styles.title}>AXION ACTION</h1>
        <p className={styles.tagline}>Hotel Booking</p>
      </div>
    </header>
  )
}
