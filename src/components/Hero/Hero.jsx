import React from 'react';
import styles from './Hero.module.css';
import MaxWidthWrapper from '../MaxWidthWrapper';

function Hero() {
  return (
    <section className={styles.heroSection}>
      <MaxWidthWrapper>
        <div  className={styles.hero}>
          <h1 className={styles.title}>Jeremy Bourqui</h1>
          <h2 className={styles.subtitle}>Développeur Web</h2>
          <h2 className={styles.subtitle}>UX/UI Designer</h2>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Hero;