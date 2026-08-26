'use client';

import { useEffect, useState } from 'react';
import { ArrowIcon } from '@/components/ui/Icons';
import Container from '@/components/ui/Container/Container';
import { navLinks, socials } from '@/data/site';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <Container className={styles.inner}>
          <a href="#top" className={styles.logo}>
            MAKSYM YAREMKO
          </a>

          <div className={styles.links}>
            {navLinks.map((link) => (
              <a key={link.href} className={styles.link} href={link.href}>
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>

          <a className={styles.resume} href={socials.resume} target="_blank" rel="noopener noreferrer">
            RESUME <ArrowIcon direction="up-right" />
          </a>

          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </Container>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} className={styles.mobileLink} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className={styles.mobileResume} href={socials.resume} target="_blank" rel="noopener noreferrer">
          RESUME ↗
        </a>
      </div>
    </>
  );
}
