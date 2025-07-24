'use client';

import { motion } from 'framer-motion';
import styles from '../ClientPage.module.scss';
import img1 from '../../../common/assets/images/IMG_20250515_220254_533.jpg';
import Image from 'next/image';

export default function RenovationSection() {
  return (
    <section id='renovation' className={styles.serviceSection}>
      <div className={styles.sectionContainer}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Generalne remonty
        </motion.h2>

        <div className={styles.serviceContent}>
          <motion.div
            className={styles.serviceImage}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <Image quality={100} src={img1} alt='Wykończenia wnętrz' />
          </motion.div>

          <motion.div
            className={styles.serviceText}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3>Kompleksowe remonty mieszkań i domów</h3>
            <p>
              Realizujemy generalne remonty od podstaw, zajmując się wszystkimi aspektami
              przebudowy i modernizacji wnętrz. Od planowania po finalne wykończenie -
              zapewniamy kompleksową obsługę każdego projektu remontowego.
            </p>
            <p>
              Nasze usługi obejmują pełen zakres prac remontowych, od rozbiórki starych
              elementów po montaż nowych instalacji i wykończenia. Gwarantujemy
              profesjonalne wykonanie i dotrzymanie ustalonych terminów.
            </p>
            <ul>
              <li>Rozbiórki i przebudowy</li>
              <li>Instalacje elektryczne i hydrauliczne</li>
              <li>Ocieplanie i izolacje</li>
              <li>Tynkowanie i wylewki</li>
              <li>Montaż okien i drzwi</li>
              <li>Kompleksowe wykończenia</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
