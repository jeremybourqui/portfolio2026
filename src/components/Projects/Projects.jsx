import React from 'react';
import ProjectCard from '../ProjectCard';
import MaxWidthWrapper from '../MaxWidthWrapper';
import BlobContainer from '../BlobContainer';
import projects from '../../data/projects';

import styles from './Projects.module.css';

function Projects() {
  return (
    <>
      <MaxWidthWrapper>
        <BlobContainer middleHeight={900}>
        <section id="projects" className={styles.projects}>
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
        </section>
        </BlobContainer>
      </MaxWidthWrapper>
    </>);
}

export default Projects;