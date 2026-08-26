import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowIcon } from '../Icons';
import styles from './Button.module.css';

type Variant = 'primary' | 'ghost';
type ArrowDirection = 'down-right' | 'up-right' | 'none';

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  arrow?: ArrowDirection;
  block?: boolean;
  className?: string;
}

type LinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { href: string };

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { href?: undefined };

export default function Button(props: LinkProps | ButtonProps) {
  const { children, variant = 'primary', arrow = 'up-right', block, className = '', ...rest } = props;
  const classes = `${styles.btn} ${styles[variant]} ${block ? styles.block : ''} ${className}`;

  const content = (
    <>
      {children}
      {arrow !== 'none' && <ArrowIcon direction={arrow} />}
    </>
  );

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonRest.type ?? 'button'} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
