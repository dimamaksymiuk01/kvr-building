'use client';

import React, { useState, useEffect } from 'react';
import styles from '../ClientPage.module.scss';
import img1 from '../../../common/assets/images/IMG_20250515_220254_533.jpg';
import img2 from '../../../common/assets/images/IMG-f57d1dc7218e49a3ac157da8a084c4bf-V.jpg';
import img3 from '../../../common/assets/images/IMG-befe7b5a59022422db077326e1ee4d13-V.jpg';
import img4 from '../../../common/assets/images/IMG-b6e408069442ade17438f9b17fcb83ab-V.jpg';
import img5 from '../../../common/assets/images/IMG-c628c160013321e28a84cfa98e818f4a-V.jpg';
import img6 from '../../../common/assets/images/IMG_20230322_130744_730.jpg';
import img7 from '../../../common/assets/images/IMG_20230324_122656_867.jpg';
import img8 from '../../../common/assets/images/IMG_20250515_220305_795.jpg';
import img9 from '../../../common/assets/images/IMG_20250515_220305_982.jpg';
import img10 from '../../../common/assets/images/IMG_20250515_220306_385.jpg';

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);

  const photos = [
    img1.src,
    img2.src,
    img3.src,
    img4.src,
    img5.src,
    img6.src,
    img7.src,
    img8.src,
    img9.src,
    img10.src,
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id='gallery' className={styles.gallery}>
      <div className={styles.sectionContainer}>
        <h2 className={`${styles.sectionTitle} ${isVisible ? styles.animateIn : ''}`}>
          Galeria naszych prac
        </h2>

        <div className={styles.tickerWrapper}>
          <div className={styles.tickerTrack}>
            {/* Перший набір зображень */}
            {photos.map((src, index) => (
              <div key={`first-${index}`} className={styles.tickerItem}>
                <img src={src} alt={`Projekt remontowy ${index + 1}`} loading='lazy' />
              </div>
            ))}
            {/* Дублікат для безперервної анімації */}
            {photos.map((src, index) => (
              <div key={`second-${index}`} className={styles.tickerItem}>
                <img src={src} alt={`Projekt remontowy ${index + 1}`} loading='lazy' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
