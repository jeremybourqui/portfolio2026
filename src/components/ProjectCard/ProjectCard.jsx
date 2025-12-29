import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard() {
  return (
    <div className="project-card">
      <h3>Nom du projet</h3>
      <div className="imageWrapper">
        <img />
      </div>
      <p>Description du projet.</p>
      <a href="#">Voir le projet</a>
    </div>
  );
}

export default ProjectCard;
