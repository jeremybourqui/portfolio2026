import React from 'react';
import ProjectCard from '../ProjectCard';
import MaxWidthWrapper from '../MaxWidthWrapper';

import styles from './Projects.module.css';

function Projects() {
  return (
    <>
      <svg className={styles.blobLine} width="1450" height="125" viewBox="0 0 1450 125" xmlns="http://www.w3.org/2000/svg">
        <path d="M 1015 37.5 L 1015 37.5 Q 1015 25 1027.5 25 L 1147.5 25 Q 1160 25 1160 37.5 L 1160 37.5 Q 1160 50 1160 62.5 L 1160 62.5 Q 1160 75 1172.5 75 L 1292.5 75 Q 1305 75 1305 62.5 L 1305 62.5 Q 1305 50 1305 37.5 L 1305 37.5 Q 1305 25 1317.5 25 L 1437.5 25 Q 1450 25 1450 37.5 L 1450 37.5 Q 1450 50 1450 62.5 L 1450 62.5 Q 1450 75 1450 87.5 L 1450 87.5 Q 1450 100 1450 112.5 L 1450 125 L 1325 125 Q 1305 125 1285 125 L 1180 125 Q 1160 125 1140 125 L 1035 125 Q 1015 125 995 125 L 890 125 Q 870 125 850 125 L 745 125 Q 725 125 705 125 L 600 125 Q 580 125 560 125 L 455 125 Q 435 125 415 125 L 310 125 Q 290 125 270 125 L 165 125 Q 145 125 125 125 L 0 125 L 0 112.5 Q 0 100 0 87.5 L 0 87.5 Q 0 75 0 62.5 L 0 62.5 Q 0 50 12.5 50 L 132.5 50 Q 145 50 145 62.5 L 145 62.5 Q 145 75 145 87.5 L 145 87.5 Q 145 100 157.5 100 L 277.5 100 Q 290 100 290 87.5 L 290 87.5 Q 290 75 290 62.5 L 290 62.5 Q 290 50 302.5 50 L 422.5 50 Q 435 50 435 62.5 L 435 62.5 Q 435 75 435 87.5 L 435 87.5 Q 435 100 447.5 100 L 560 100 Q 580 100 600 100 L 705 100 Q 725 100 745 100 L 857.5 100 Q 870 100 870 87.5 L 870 87.5 Q 870 75 870 62.5 L 870 62.5 Q 870 50 882.5 50 L 1002.5 50 Q 1015 50 1015 37.5 Z" fill="#90cee0" />
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
      <svg className={styles.blobLine} width="1450" height="125" viewBox="0 0 1450 125" xmlns="http://www.w3.org/2000/svg">
        <path d="M 1015 37.5 L 1015 37.5 Q 1015 25 1027.5 25 L 1147.5 25 Q 1160 25 1160 37.5 L 1160 37.5 Q 1160 50 1160 62.5 L 1160 62.5 Q 1160 75 1172.5 75 L 1292.5 75 Q 1305 75 1305 62.5 L 1305 62.5 Q 1305 50 1305 37.5 L 1305 37.5 Q 1305 25 1317.5 25 L 1437.5 25 Q 1450 25 1450 37.5 L 1450 37.5 Q 1450 50 1450 62.5 L 1450 62.5 Q 1450 75 1450 87.5 L 1450 87.5 Q 1450 100 1450 112.5 L 1450 125 L 1325 125 Q 1305 125 1285 125 L 1180 125 Q 1160 125 1140 125 L 1035 125 Q 1015 125 995 125 L 890 125 Q 870 125 850 125 L 745 125 Q 725 125 705 125 L 600 125 Q 580 125 560 125 L 455 125 Q 435 125 415 125 L 310 125 Q 290 125 270 125 L 165 125 Q 145 125 125 125 L 0 125 L 0 112.5 Q 0 100 0 87.5 L 0 87.5 Q 0 75 0 62.5 L 0 62.5 Q 0 50 12.5 50 L 132.5 50 Q 145 50 145 62.5 L 145 62.5 Q 145 75 145 87.5 L 145 87.5 Q 145 100 157.5 100 L 277.5 100 Q 290 100 290 87.5 L 290 87.5 Q 290 75 290 62.5 L 290 62.5 Q 290 50 302.5 50 L 422.5 50 Q 435 50 435 62.5 L 435 62.5 Q 435 75 435 87.5 L 435 87.5 Q 435 100 447.5 100 L 560 100 Q 580 100 600 100 L 705 100 Q 725 100 745 100 L 857.5 100 Q 870 100 870 87.5 L 870 87.5 Q 870 75 870 62.5 L 870 62.5 Q 870 50 882.5 50 L 1002.5 50 Q 1015 50 1015 37.5 Z" fill="#90cee0" />
      </svg>
    </>);
}

export default Projects;
