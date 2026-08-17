import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>&copy; 2026 Axion Action &mdash; All rights reserved.</div>
      <div className={styles.arFooter} dir="rtl" lang="ar">
        جميع الحقوق محفوظة &copy; أكشن أكسيون 2026
      </div>
    </footer>
  )
}
