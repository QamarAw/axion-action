import styles from './Contact.module.css'
import { WHATSAPP_NUMBER_DISPLAY, WHATSAPP_LINK, CONTACT_EMAIL } from '../../constants/contact'

export default function Contact() {
  return (
    <section className={styles.contactCard}>
      <h3>Get in Touch</h3>

      <div className={styles.contactRow}>
        <span className={styles.label}>WhatsApp</span>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          {WHATSAPP_NUMBER_DISPLAY}
        </a>
      </div>

      <div className={styles.contactRow}>
        <span className={styles.label}>Email</span>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>

      <a className={styles.whatsappBtn} href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        Message us on WhatsApp
      </a>
    </section>
  )
}
