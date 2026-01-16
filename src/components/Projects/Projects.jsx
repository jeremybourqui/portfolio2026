import React from 'react';
import ProjectCard from '../ProjectCard';
import MaxWidthWrapper from '../MaxWidthWrapper';
import BlobDivider from '../BlobDivider';

import styles from './Projects.module.css';

function Projects() {
  return (
    <>
      <BlobDivider color="var(--color-accent-weak)" orientation="top" />
      <section className={styles.projects}>
        <MaxWidthWrapper>
          <h2>Projets</h2>
          <div className={styles.projectsGrid}>
            <ProjectCard
              name="Photomaton AR"
              description="Réalisation d'un photomaton permettant l'incrustation en réalité augmentée d'un masque, à l'aide d'un loup portant un qr code simple,  puis de l'impression de la photo."
            />
            <ProjectCard name="Projet 2" description="Description du projet 2." />
            <ProjectCard name="Projet 3" description="Description du projet 3." />
          </div>
        </MaxWidthWrapper>
      </section>
      <BlobDivider color="var(--color-accent-weak)" orientation="bottom" />
    </>);
}

export default Projects;
