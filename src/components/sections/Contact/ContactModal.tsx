'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { CheckIcon, CloseIcon } from '@/components/ui/Icons';
import Button from '@/components/ui/Button/Button';
import { socials } from '@/data/site';
import styles from './ContactModal.module.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => nameInputRef.current?.focus(), 300);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 300);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    const subject = `Project inquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) handleClose();
      }}
    >
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <button type="button" className={styles.close} aria-label="Close" onClick={handleClose}>
          <CloseIcon />
        </button>

        {!submitted ? (
          <>
            <div className={styles.eyebrow}>SEND A MESSAGE</div>
            <h3 className={styles.title} id="contact-modal-title">
              Let&apos;s talk about it.
            </h3>
            <p className={styles.sub}>
              Fill this in and it&apos;ll open your email client with the message pre-filled, addressed to me directly.
            </p>

            <form onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="cf-name">Name</label>
                <input ref={nameInputRef} type="text" id="cf-name" name="name" placeholder="Your name" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="cf-email">Email</label>
                <input type="email" id="cf-email" name="email" placeholder="you@example.com" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="cf-message">Message</label>
                <textarea id="cf-message" name="message" placeholder="What are you building?" required />
              </div>
              <Button type="submit" arrow="down-right" block>
                SEND MESSAGE
              </Button>
              <p className={styles.note}>Opens your email app with these details filled in — nothing is sent from here.</p>
            </form>
          </>
        ) : (
          <div className={styles.success}>
            <div className={styles.successIcon}>
              <CheckIcon />
            </div>
            <h3 className={styles.title} style={{ textAlign: 'center' }}>
              Almost there.
            </h3>
            <p className={styles.sub} style={{ marginInline: 'auto', textAlign: 'center' }}>
              Your email client should be opening now, pre-addressed to me with your message. If nothing happened, email
              me directly instead.
            </p>
            <Button href={`mailto:${socials.email}`} variant="ghost" arrow="none" block>
              {socials.email}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
