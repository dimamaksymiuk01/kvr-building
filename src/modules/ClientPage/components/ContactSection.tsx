'use client';
import { motion } from 'framer-motion';
import styles from '../ClientPage.module.scss';

export default function ContactSection() {
  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.sectionContainer}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Kontakt
        </motion.h2>

        <div className={styles.contactContent}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className={styles.contactItem}>
              <h4>Telefon</h4>
              <p>
                <a href='tel:+48123456789'>+48 123 456 789</a>
              </p>
            </div>
            <div className={styles.contactItem}>
              <h4>Email</h4>
              <p>
                <a href='mailto:kontakt@m2visual.pl'>kontakt@m2visual.pl</a>
              </p>
            </div>
            <div className={styles.contactItem}>
              <h4>Adres</h4>
              <p>
                ul. Przykładowa 123
                <br />
                31-000 Kraków
              </p>
            </div>
            <div className={styles.contactItem}>
              <h4>Godziny pracy</h4>
              <p>
                Pon-Pt: 8:00 - 18:00
                <br />
                Sob: 9:00 - 15:00
              </p>
            </div>
          </motion.div>

          <motion.div
            className={styles.contactMap}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className={styles.mapPlaceholder}>
              <h4>Nasza lokalizacja</h4>
              <p>Znajdziesz nas w centrum Krakowa</p>
              <img
                src='/placeholder.svg?height=300&width=400'
                alt='Mapa lokalizacji'
                loading='lazy'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
