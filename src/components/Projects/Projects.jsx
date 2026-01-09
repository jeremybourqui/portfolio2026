import React from 'react';
import ProjectCard from '../ProjectCard';
import MaxWidthWrapper from '../MaxWidthWrapper';

import styles from './Projects.module.css';

function Projects() {
  return (
    <>
      <svg className={styles.blobLine} width="1440" height="144" viewBox="0 0 1440 144" xmlns="http://www.w3.org/2000/svg">
        <path d="M 1008 0 L 1144 0 Q 1152 0 1152 8 L 1152 16 Q 1152 24 1152 32 L 1152 40 Q 1152 48 1152 56 L 1152 64 Q 1152 72 1160 72 L 1288 72 Q 1296 72 1296 64 L 1296 56 Q 1296 48 1296 40 L 1296 32 Q 1296 24 1304 24 L 1432 24 Q 1440 24 1440 32 L 1440 40 Q 1440 48 1440 56 L 1440 64 Q 1440 72 1440 80 L 1440 88 Q 1440 96 1440 104 L 1440 112 Q 1440 120 1440 128 L 1440 136 Q 1440 144 1432 144 L 1304 144 Q 1296 144 1288 144 L 1160 144 Q 1152 144 1144 144 L 1016 144 Q 1008 144 1000 144 L 872 144 Q 864 144 856 144 L 728 144 Q 720 144 712 144 L 584 144 Q 576 144 568 144 L 440 144 Q 432 144 424 144 L 296 144 Q 288 144 280 144 L 152 144 Q 144 144 136 144 L 8 144 Q 0 144 0 136 L 0 128 Q 0 120 0 112 L 0 104 Q 0 96 0 88 L 0 80 Q 0 72 0 64 L 0 56 Q 0 48 8 48 L 136 48 Q 144 48 144 56 L 144 64 Q 144 72 144 80 L 144 88 Q 144 96 152 96 L 280 96 Q 288 96 288 88 L 288 80 Q 288 72 288 64 L 288 56 Q 288 48 288 40 L 288 32 Q 288 24 296 24 L 424 24 Q 432 24 432 32 L 432 40 Q 432 48 432 56 L 432 64 Q 432 72 432 80 L 432 88 Q 432 96 440 96 L 568 96 Q 576 96 584 96 L 712 96 Q 720 96 728 96 L 856 96 Q 864 96 864 88 L 864 80 Q 864 72 864 64 L 864 56 Q 864 48 872 48 L 1000 48 Q 1008 48 1008 40 L 1008 32 Q 1008 24 1008 16 L 1008 8 Q 1008 0 1016 0 Z" fill="#90cee0" />
      </svg>
      <section className={styles.projects}>
        <MaxWidthWrapper>
          <h2>Projets</h2>
          <div className={styles.projectsGrid}>
            <ProjectCard
              name="Photomaton AR"
              description="Réalisation d'un photomaton permettant l'incrustation en réalité  augmentée d'un masque, à l'aide d'un loup portant un qr code simple,  puis de l'impression de la photo."
            />
            <ProjectCard name="Projet 2" description="Description du projet 2." />
            <ProjectCard name="Projet 3" description="Description du projet 3." />
          </div>
        </MaxWidthWrapper>
      </section>
    </>  );
}

export default Projects;
