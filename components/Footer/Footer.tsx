import styles from './Footer.module.css';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>IDYLL</div>

      <p className={styles.copy}>
        © {YEAR} База отдыха «IDYLL». Все права защищены.
      </p>

      <nav className={styles.links}>
        <a href="#">Политика конфиденциальности</a>
        <a href="#">Условия бронирования</a>
      </nav>
    </footer>
  );
}