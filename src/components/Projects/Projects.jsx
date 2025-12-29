import React from 'react';
import ProjectCard from '../ProjectCard';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section>
      <h2>Projets</h2>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
}

export default Projects;
