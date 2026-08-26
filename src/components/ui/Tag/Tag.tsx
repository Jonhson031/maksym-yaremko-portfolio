import type { ReactNode } from 'react';
import styles from './Tag.module.css';

type TagProps = {
  children: ReactNode;
  variant?: 'outline' | 'filled';
  className?: string;
}

export default function Tag({ children, variant = 'outline', className = '' }: TagProps) {
  return <span className={`${styles.tag} ${variant === 'filled' ? styles.filled : ''} ${className}`}>{children}</span>;
}
