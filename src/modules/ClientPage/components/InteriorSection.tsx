'use client';

import { motion } from 'framer-motion';
import styles from '../ClientPage.module.scss';
import Image from 'next/image';
import img1 from '../../../common/assets/images/IMG-170aca8b6519e47c803d3030e95b616a-V.jpg';

export default function InteriorSection() {
  return (
    <section id='interior' className={styles.serviceSection}>
      <div className={styles.sectionContainer}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-100px' }}
        >
          Wykończenia wnętrz
        </motion.h2>

        <div className={styles.serviceContent}>
          <motion.div
            className={styles.serviceText}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3>Kompleksowe wykończenia wnętrz</h3>
            <p>
              Oferujemy pełen zakres usług wykończeniowych dla mieszkań i domów w
              Krakowie. Nasze doświadczenie pozwala nam realizować projekty o różnym
              stopniu skomplikowania, od prostych odświeżeń po kompleksowe metamorfozy
              wnętrz.
            </p>
            <p>
              Współpracujemy z najlepszymi dostawcami materiałów budowlanych, co
              gwarantuje wysoką jakość wykonanych prac. Każdy projekt traktujemy
              indywidualnie, dostosowując się do potrzeb i budżetu klienta.
            </p>
            <ul>
              <li>Malowanie ścian i sufitów</li>
              <li>Układanie płytek ceramicznych</li>
              <li>Montaż podłóg laminowanych i paneli</li>
              <li>Szpachlowanie i gładzie</li>
              <li>Montaż oświetlenia</li>
              <li>Wykończenia łazienek</li>
            </ul>
          </motion.div>

          <motion.div
            className={styles.serviceImage}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <Image quality={100} src={img1} alt='Wykończenia wnętrz' />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
