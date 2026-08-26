import Container from '@/components/ui/Container/Container';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import Reveal from '@/components/ui/Reveal/Reveal';
import { stackCategories } from '@/data/stack';
import styles from './Stack.module.css';

export default function Stack() {
  return (
    <section className={`section ${styles.dark}`} id="stack">
      <Container>
        <Reveal>
          <SectionHeading
            index="03"
            label="TECHNOLOGY"
            title="Stack"
            note="Tools I reach for by default — not an exhaustive list, just what ships the most."
          />
        </Reveal>

        <Reveal>
          <div className={styles.grid}>
            {stackCategories.map((category) => (
              <div className={styles.col} key={category.label}>
                <div className={styles.label}>
                  <span>{category.label}</span>
                  <span>{String(category.items.length).padStart(2, '0')}</span>
                </div>
                <ul className={styles.items}>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
