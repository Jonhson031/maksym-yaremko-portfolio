'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { ArrowIcon } from '@/components/ui/Icons';
import Tag from '@/components/ui/Tag/Tag';
import type { Project } from '@/types/project';
import styles from './ProjectCard.module.css';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    const img = imageRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setImageFailed(true);
    }
  }, []);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const badge = badgeRef.current;
    if (!badge) return;
    const rect = event.currentTarget.getBoundingClientRect();
    badge.style.left = `${event.clientX - rect.left}px`;
    badge.style.top = `${event.clientY - rect.top}px`;
  };

  const visual = (
    <div className={styles.visual}>
      <div className={styles.chrome}>
        <div className={styles.chromeDots}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.chromeUrl}>{project.url}</div>
      </div>
      <div className={styles.visualInner}>
        {!imageFailed ? (
          <Image
            ref={imageRef}
            fill={true}
            src={project.image}
            alt={`${project.name} preview`}
            className={styles.image}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className={styles.placeholder}>Image will be added later</div>
        )}
      </div>
    </div>
  );

  const meta = (
    <div>
      <span className={styles.kicker}>{project.kicker.toUpperCase()}</span>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.desc}>{project.description}</p>
      <div className={styles.tech}>
        {project.tech.map((tech) => (
          <Tag key={tech}>{tech.toUpperCase()}</Tag>
        ))}
      </div>
      <div className={styles.meta}>
        <div>
          <span className={styles.metaLabel}>ROLE</span>
          <span className={styles.metaValue}>{project.role}</span>
        </div>
        <div>
          <span className={styles.metaLabel}>YEAR</span>
          <span className={styles.metaValue}>{project.year}</span>
        </div>
      </div>
      <span className={styles.cta}>
        VISIT PROJECT
        <ArrowIcon direction="up-right" />
      </span>
    </div>
  );

  return (
    <article
      className={`${styles.project} ${project.featured ? styles.featured : ''}`}
      onMouseMove={handleMouseMove}
    >
      <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <span className={styles.id}>{project.index}</span>
            {project.featured && <span className={styles.tag}>★ FEATURED PROJECT</span>}
          </div>
          <span className={styles.year}>{project.year.toUpperCase()}</span>
        </div>

        <div className={styles.body}>
          {visual}
          {meta}
        </div>
      </a>

      <div className={styles.badge} ref={badgeRef}>
        VIEW ↗
      </div>
    </article>
  );
}
