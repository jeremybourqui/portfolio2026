import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ name, description }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imgWrapper}>
        <img className={styles.img} src='https://placehold.co/450x240'/>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href="#">Voir le projet</a>
    </div>
  );
}

export default ProjectCard;