import Container from '@/components/ui/Container/Container';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import Reveal from '@/components/ui/Reveal/Reveal';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import styles from './SelectedWork.module.css';

export default function SelectedWork() {
  return (
    <section className="section" id="work">
      <Container>
        <Reveal>
          <SectionHeading
            index="01"
            label="PORTFOLIO"
            title="Selected Work"
            note="Four products, end to end — from architecture and data model to interface and deployment."
          />
        </Reveal>

        <div className={styles.workList}>
          {projects.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
