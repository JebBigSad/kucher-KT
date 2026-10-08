import type { Feature } from '@/types';
import styles from './Features.module.css';

interface FeatureCardProps {
  feature: Feature;
  reversed?: boolean;
}

export default function FeatureCard({ feature, reversed = false }: FeatureCardProps) {
  return (
    <div className={`${styles.card} ${reversed ? styles.reversed : ''}`}>
      <div className={styles.textBlock}>
        <div className={styles.tags}>
          {feature.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p>{feature.description}</p>
      </div>
      <div className={styles.imageBlock}>
        <img src={feature.image} alt={feature.title} />
      </div>
    </div>
  );
}