import { FEATURES } from '@/data/features';
import FeatureCard from './FeatureCard';
import styles from './Features.module.css';

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      {FEATURES.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          feature={feature}
          reversed={index % 2 === 1}
        />
      ))}
    </section>
  );
}