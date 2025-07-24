import styles from '../ClientPage.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.sectionContainer}>
        <p>&copy; 2024 m2.visual. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
