import Container from '@/components/ui/Container/Container';
import Reveal from '@/components/ui/Reveal/Reveal';
import Tag from '@/components/ui/Tag/Tag';
import { currentlyBuilding } from '@/data/site';
import styles from './CurrentlyBuilding.module.css';

export default function CurrentlyBuilding() {
  return (
    <section className="section" id="building">
      <Container>
        <Reveal>
          <div className={styles.eyebrow}>
            <span className={styles.index}>[ 04 ]</span>
            NOW
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.card}>
            <div>
              <div className={styles.status}>
                <span className={styles.dot} />
                {currentlyBuilding.status}
              </div>
              <h3 className={styles.title}>{currentlyBuilding.title}</h3>
              <p className={styles.desc}>{currentlyBuilding.description}</p>
              <div className={styles.tech}>
                {currentlyBuilding.tech.map((tech) => (
                  <Tag key={tech} variant="filled">
                    {tech.toUpperCase()}
                  </Tag>
                ))}
              </div>
            </div>

            <div className={styles.visual}>
              <div>
                <div className={styles.row}>
                  <span>Build Progress</span>
                  <span>{currentlyBuilding.buildProgress}%</span>
                </div>
                <div className={styles.bar}>
                  <div className={styles.barFill} style={{ width: `${currentlyBuilding.buildProgress}%` }} />
                </div>
              </div>
              <div className={styles.row}>
                <span>Next Milestone</span>
                <span>{currentlyBuilding.nextMilestone}</span>
              </div>
              <div className={styles.stats}>
                {currentlyBuilding.stats.map((stat) => (
                  <div className={styles.stat} key={stat.label}>
                    <div className={styles.n}>{stat.value}</div>
                    <div className={styles.l}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
