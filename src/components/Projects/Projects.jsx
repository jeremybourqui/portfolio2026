import React from 'react';
import ProjectCard from '../ProjectCard';
import MaxWidthWrapper from '../MaxWidthWrapper';
import BlobDivider from '../BlobDivider';
import projects from '../../data/projects';

import styles from './Projects.module.css';

function Projects() {
  return (
    <>
      <BlobDivider color="var(--color-accent-weak)" orientation="top" />
      <section id="projects" className={styles.projects}>
        <MaxWidthWrapper>
          <h2>Projets</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                name={project.name}
                slug={project.slug}
                description={project.shortDescription}
                image={project.image}
              />
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <BlobDivider color="var(--color-accent-weak)" orientation="bottom" />
    </>);
}

export default Projects;