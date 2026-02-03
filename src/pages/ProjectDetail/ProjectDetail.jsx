import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import { getProjectBySlug } from '../../data/projects';
import InfoList from '../../components/InfoList';
import styles from './ProjectDetail.module.css';
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel'


function ProjectDetail() {
  const { projectId } = useParams();
  const project = getProjectBySlug(projectId);

  if (!project) {
    return (
      <>
        <Header />
        <main className={styles.projectDetail}>
          <MaxWidthWrapper>
            <h1>Projet non trouvé</h1>
            <p>Le projet que vous recherchez n'existe pas.</p>
            <Link to="/" className={styles.backLink}>
              ← Retour à l'accueil
            </Link>
          </MaxWidthWrapper>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.projectDetail}>
        <MaxWidthWrapper>
          <Link to="/#projects" className={styles.backLink}>
            ← Retour aux projets
          </Link>

          <h1>{project.name}</h1>
          <p className={styles.description}>{project.shortDescription}</p>

          <section className={styles.gallery}>

            {project.gallery.length > 0 && (
              <div className={styles.galleryWrapper}>
                <EmblaCarousel slides={project.gallery} />
              </div>
            )}
          </section>

          <section className={styles.content}>
            <h2>À propos du projet</h2>
            <p>{project.fullDescription}</p>
          </section>

          {project.features.length > 0 && (
            <section className={styles.features}>
              <h3>Fonctionnalités</h3>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          )}
          {project.technologies.length > 0 && (
            <section className={styles.technologies}>
              <h3>Technologies utilisées</h3>
              <InfoList items={project.technologies} />
            </section>
          )}

          {(project.links.live || project.links.github || project.links.demo) && (
            <section className={styles.links}>
              <h3>Liens</h3>
              <div className={styles.linksContainer}>
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    Voir le site
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    Code source
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    Démo
                  </a>
                )}
              </div>
            </section>
          )}
        </MaxWidthWrapper>
      </main>
      <Footer />
    </>
  );
}

export default ProjectDetail;