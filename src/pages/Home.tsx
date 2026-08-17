import styles from './Home.module.css'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Cities from '../components/Cities/Cities'
import ComingSoon from '../components/ComingSoon/ComingSoon'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <div className={styles.divider} />
        <Cities />
        <ComingSoon />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
