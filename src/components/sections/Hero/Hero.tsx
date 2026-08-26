'use client';

import { useEffect, useState } from 'react';
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import { socials } from '@/data/site';
import StatusPanel from './StatusPanel';
import styles from './Hero.module.css';

export default function Hero() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={styles.hero} id="top">
      <Container className={styles.grid}>
        <div>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            FULL-STACK DEVELOPER · CHICAGO, IL
          </div>

          <h1 className={`${styles.headline} ${revealed ? styles.revealed : ''}`}>
            <span className={styles.line}>
              <span className={styles.lineInner}>I BUILD IDEAS</span>
            </span>
            <span className={styles.line}>
              <span className={styles.lineInner}>
                INTO <span className={styles.accent}>SOFTWARE.</span>
              </span>
            </span>
          </h1>

          <p className={styles.sub}>
            Full-stack developer focused on building modern web applications with React, Next.js, TypeScript, and Node.js.
          </p>

          <div className={styles.ctas}>
            <Button href="#work" arrow="down-right" className={styles.ctaBtn}>
              VIEW WORK
            </Button>
            <Button href={socials.github} target="_blank" rel="noopener noreferrer" variant="ghost" className={styles.ctaBtn}>
              GITHUB
            </Button>
          </div>

          <div className={styles.availability}>
            <span className={styles.dot} />
            AVAILABLE FOR FULL-STACK DEVELOPMENT OPPORTUNITIES
          </div>
        </div>

        <StatusPanel />
      </Container>
    </header>
  );
}
