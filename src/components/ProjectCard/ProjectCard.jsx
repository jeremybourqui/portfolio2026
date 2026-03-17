import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

const PLACEHOLDER_IMAGE = 'https://placehold.co/450x240';

function ProjectCard({ name, description, slug, image }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.cardContent}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src={image || PLACEHOLDER_IMAGE}
            alt={name}
          />
        </div>
        <h3>{name}</h3>
        <p>{description}</p>
        <Link to={`/project/${slug}`} className={styles.link}>
          Voir le projet
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;