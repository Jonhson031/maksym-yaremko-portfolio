import Container from '@/components/ui/Container/Container';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import Reveal from '@/components/ui/Reveal/Reveal';
import { processSteps } from '@/data/process';
import styles from './Process.module.css';

export default function Process() {
  return (
    <section className={`section ${styles.dark}`} id="process">
      <Container>
        <Reveal>
          <SectionHeading
            index="02"
            label="APPROACH"
            title="From Idea to Production"
            note="The same five stages, every time — whether it's a weekend build or a platform with paying users."
          />
        </Reveal>

        <Reveal>
          <div className={styles.steps}>
            {processSteps.map((step) => (
              <div className={styles.step} key={step.number}>
                <div className={styles.num}>{step.number}</div>
                <div className={styles.title}>{step.title}</div>
                <p className={styles.desc}>{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className={styles.statement}>
            I enjoy taking an idea from a blank page to a working product. I focus on building the core functionality,
            shipping it, learning from real users, and improving from there.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
