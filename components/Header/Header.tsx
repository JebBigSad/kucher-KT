import { NAV_LINKS, PHONE, PHONE_HREF } from '@/data/navigation';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>IDYLL</div>

      <nav className={styles.nav}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <a href={PHONE_HREF} className={styles.phone}>
        {PHONE}
      </a>
    </header>
  );
}