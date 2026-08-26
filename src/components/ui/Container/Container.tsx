import type { ElementType, ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  return <Tag className={`${styles.container} ${className}`}>{children}</Tag>;
}
