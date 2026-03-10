import React from 'react';
import ProjectCard from '../ProjectCard';
import MaxWidthWrapper from '../MaxWidthWrapper';
import BlobDivider from '../BlobDivider';
import projects from '../../data/projects';

import styles from './Projects.module.css';

function Projects() {
  return (
    <>
      <MaxWidthWrapper>
        <BlobDivider color="#90cee0" colorLight="#cfebf3" orientation="top" />
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
        <BlobDivider color="#90cee0" colorLight="#cfebf3" orientation="bottom" />
      </MaxWidthWrapper>
    </>);
}

export default Projects;