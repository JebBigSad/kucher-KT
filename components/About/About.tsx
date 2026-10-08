import styles from './About.module.css';

const PARAGRAPHS = [
  'Наша база отдыха расположена в живописном уголке леса. Мы создали это место, чтобы вы могли сбежать от городской суеты, окунуться в спокойствие и насладиться настоящим отдыхом на лоне природы.',
  'Мы заботимся о том, чтобы каждый гость чувствовал себя комфортно и безопасно. Уютные домики оборудованы всем необходимым для проживания, а команда профессионалов всегда готова помочь вам в организации идеального отдыха.',
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.label}>О нас</div>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Отдыхайте
          <br />
          с комфортом
          <br />в сердце природы!
        </h2>
        <div className={styles.text}>
          {PARAGRAPHS.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}