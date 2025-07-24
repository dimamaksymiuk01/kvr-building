'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../ClientPage.module.scss';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('pl');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Główna', id: 'hero' },
    { name: 'Wykończenia wnętrz', id: 'interior' },
    { name: 'Generalne remonty', id: 'renovation' },
    { name: 'Galeria', id: 'gallery' },
    { name: 'O nas', id: 'about' },
    { name: 'Kontakt', id: 'contact' },
  ];

  return (
    <>
      {/* Mobile Navigation */}
      <nav className={styles.mobileNav}>
        <div className={styles.navHeader}>
          <h1 className={styles.logo}>m2.visual</h1>
          <button
            className={styles.burgerButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label='Toggle menu'
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {/*TODO зробити світчер мови як на теслі*/}
          {/*<select*/}
          {/*  className={styles.languageSelect}*/}
          {/*  value={selectedLanguage}*/}
          {/*  onChange={(e) => setSelectedLanguage(e.target.value)}*/}
          {/*  aria-label='Select language'*/}
          {/*>*/}
          {/*  <option value='pl'>PL</option>*/}
          {/*  <option value='en'>EN</option>*/}
          {/*  <option value='ua'>UA</option>*/}
          {/*</select>*/}
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  className={styles.menuItem}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        <h1 className={styles.logo}>m2.visual</h1>
        <div className={styles.navLinks}>
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={styles.navLink}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <select
          className={styles.languageSelect}
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          aria-label='Select language'
        >
          <option value='pl'>PL</option>
          <option value='en'>EN</option>
          <option value='ua'>UA</option>
        </select>
      </nav>
    </>
  );
}
