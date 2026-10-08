import BookingForm from './BookingForm';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          БАЗА ОТДЫХА
          <br />В ЛЕСУ
        </h1>
        <p className={styles.subtitle}>
          Окунитесь в мир природы, где свежий воздух, тишина и уютные домики
          среди вековых деревьев помогут вам забыть о суете городской жизни.
        </p>
      </div>
      <BookingForm />
    </section>
  );
}