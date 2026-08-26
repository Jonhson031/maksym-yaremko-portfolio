'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import Reveal from '@/components/ui/Reveal/Reveal';
import { socials } from '@/data/site';
import ContactModal from './ContactModal';
import styles from './Contact.module.css';

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className={styles.contact} id="contact">
        <Container>
          <Reveal>
            <h2 className={styles.title}>
              Have an idea?
              <br />
              <span className={styles.accent}>Let&apos;s build it.</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className={styles.sub}>Currently open to full-stack development opportunities and interesting projects.</p>
          </Reveal>

          <Reveal>
            <div className={styles.ctas}>
              <Button arrow="up-right" onClick={() => setModalOpen(true)}>
                GET IN TOUCH
              </Button>
              <Button href={socials.linkedin} target="_blank" rel="noopener noreferrer" variant="ghost">
                LINKEDIN
              </Button>
              <Button href={socials.github} target="_blank" rel="noopener noreferrer" variant="ghost">
                GITHUB
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
