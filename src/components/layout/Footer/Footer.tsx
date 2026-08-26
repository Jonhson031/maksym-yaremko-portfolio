import Container from '@/components/ui/Container/Container';
import { socials } from '@/data/site';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <span className={styles.copy}>© {year} MAKSYM YAREMKO</span>
        <div className={styles.links}>
          <a href={socials.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            LINKEDIN
          </a>
          <a href={socials.resume} target="_blank" rel="noopener noreferrer">
            RESUME
          </a>
        </div>
        <span className={styles.stamp}>BUILT WITH NEXT.JS + TYPESCRIPT</span>
      </Container>
    </footer>
  );
}
