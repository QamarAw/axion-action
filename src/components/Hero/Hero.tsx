import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.arabic} dir="rtl" lang="ar">
        شريكك الموثوق لحجز الفنادق في مكة المكرمة والمدينة المنورة
      </p>
      <p className={styles.english}>
        Your trusted partner for hotel bookings in Mecca &amp; Medina, Saudi Arabia
      </p>
    </section>
  )
}
