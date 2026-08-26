'use client';

import { useEffect, useState } from 'react';
import Reveal from '@/components/ui/Reveal/Reveal';
import { heroStatus } from '@/data/site';
import styles from './StatusPanel.module.css';

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}

export default function StatusPanel() {
  const [time, setTime] = useState('— : — : —');
  const [uptime, setUptime] = useState('00:00:00');

  useEffect(() => {
    const start = Date.now();

    const tick = () => {
      try {
        const formatted = new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: 'America/Chicago',
        });
        setTime(`${formatted} CT`);
      } catch {
        setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
      }

      const elapsed = Math.floor((Date.now() - start) / 1000);
      const h = Math.floor(elapsed / 3600);
      const m = Math.floor((elapsed % 3600) / 60);
      const s = elapsed % 60;
      setUptime(`${pad(h)}:${pad(m)}:${pad(s)}`);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Reveal>
      <div className={styles.panel}>
        <div className={styles.row}>
          <div className={styles.mark}>MY</div>
          <div>
            <div className={styles.name}>{heroStatus.name.toUpperCase()}</div>
            <div className={styles.role}>{heroStatus.role.toUpperCase()}</div>
          </div>
          <div className={styles.time}>{time}</div>
        </div>

        <div className={styles.divider} />
        <div>
          <span className={styles.label}>CURRENTLY BUILDING</span>
          <span className={styles.value}>{heroStatus.currentlyBuilding}</span>
        </div>

        <div className={styles.divider} />
        <div>
          <span className={styles.label}>STACK</span>
          <div className={styles.stack}>
            {heroStatus.stack.map((tech) => (
              <span key={tech}>{tech.toUpperCase()}</span>
            ))}
          </div>
        </div>

        <div className={styles.divider} />
        <div className={styles.blockRow}>
          <span className={styles.label}>STATUS</span>
          <span className={styles.status}>
            <i className={styles.dot} />
            {heroStatus.status.toUpperCase()}
          </span>
        </div>

        <div className={styles.divider} />
        <div className={styles.blockRow}>
          <span className={styles.label}>SESSION UPTIME</span>
          <span className={styles.mono}>{uptime}</span>
        </div>
      </div>
    </Reveal>
  );
}
