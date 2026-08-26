import type { ReactNode } from 'react';
import styles from './SectionHeading.module.css';

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  note?: ReactNode;
  className?: string;
}

export default function SectionHeading({ index, label, title, note, className = '' }: SectionHeadingProps) {
  return (
    <div className={`${styles.head} ${className}`}>
      <div>
        <div className={styles.eyebrow}>
          <span className={styles.index}>[ {index} ]</span>
          {label}
        </div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
}
