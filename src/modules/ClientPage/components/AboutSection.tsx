'use client';

import { motion } from 'framer-motion';
import styles from '../ClientPage.module.scss';
import img1 from '../../../common/assets/images/logo.jpg';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.sectionContainer}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          O nas
        </motion.h2>

        <div className={styles.aboutContent}>
          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3>m2.visual - Twój partner w remontach</h3>
            <p>
              Jesteśmy doświadczonym zespołem specjalistów zajmujących się kompleksowymi
              remontami mieszkań i domów w Krakowie. Nasze wieloletnie doświadczenie
              pozwala nam realizować projekty na najwyższym poziomie, od prostych
              wykończeń po skomplikowane przebudowy.
            </p>
            <p>
              Stawiamy na jakość wykonania, terminowość i indywidualne podejście do
              każdego klienta. Współpracujemy wyłącznie z sprawdzonymi dostawcami
              materiałów, co gwarantuje trwałość i estetykę wykonanych prac.
            </p>
            <ul>
              <li>Ponad 10 lat doświadczenia</li>
              <li>Profesjonalna ekipa</li>
              <li>Wysokiej jakości materiały</li>
              <li>Terminowość wykonania</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.aboutImage}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <Image src={img1} alt='Nasza ekipa' />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
