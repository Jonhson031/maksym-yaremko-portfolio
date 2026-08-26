import Container from '@/components/ui/Container/Container';
import Reveal from '@/components/ui/Reveal/Reveal';
import { aboutFacts } from '@/data/site';
import styles from './About.module.css';

export default function About() {
  return (
    <section className="section" id="about">
      <Container className={styles.grid}>
        <Reveal>
          <h2 className={styles.statement}>
            More than
            <br />
            just code.
          </h2>
        </Reveal>

        <Reveal>
          <p className={styles.text}>
            I&apos;m a full-stack developer who enjoys turning ideas into working products. My focus is building modern
            web applications with <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>,{' '}
            <strong>TypeScript</strong>, and databases. I co-founded <strong>UACA</strong> and independently developed
            its tournament platform — from data model to payments to the interface players use on tournament day.
          </p>
          <div className={styles.facts}>
            {aboutFacts.map((fact) => (
              <div className={styles.fact} key={fact.label}>
                <span className={styles.factLabel}>{fact.label}</span>
                <span className={styles.factValue}>{fact.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
