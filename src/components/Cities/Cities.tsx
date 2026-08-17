import styles from './Cities.module.css'

const CITIES = [
  { en: 'Mecca', ar: 'مكة المكرمة' },
  { en: 'Medina', ar: 'المدينة المنورة' },
]

export default function Cities() {
  return (
    <section className={styles.cities}>
      {CITIES.map((city) => (
        <div className={styles.city} key={city.en}>
          <div className={styles.icon}>&#9670;</div>
          <div className={styles.en}>{city.en}</div>
          <div className={styles.ar} dir="rtl" lang="ar">
            {city.ar}
          </div>
        </div>
      ))}
    </section>
  )
}
