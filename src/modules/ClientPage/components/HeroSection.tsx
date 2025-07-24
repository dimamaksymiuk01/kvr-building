'use client';

import { motion } from 'framer-motion';
import styles from '../ClientPage.module.scss';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='hero' className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Profesjonalne remonty w Krakowie
        </motion.h1>
        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: 'easeOut' }}
        >
          Kompleksowe wykończenia wnętrz i generalne remonty mieszkań. Doświadczony
          zespół, wysokiej jakości materiały, terminowość wykonania.
        </motion.p>

        <motion.div
          className={styles.heroButtons}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6, ease: 'easeOut' }}
        >
          <button
            className={styles.serviceButton}
            onClick={() => scrollToSection('interior')}
          >
            <span>Wykończenia wnętrz</span>
          </button>
          <button
            className={styles.serviceButton}
            onClick={() => scrollToSection('renovation')}
          >
            <span>Generalne remonty</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
