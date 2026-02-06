import React from 'react';
import styles from './Hero.module.css';
import MaxWidthWrapper from '../MaxWidthWrapper';

function Hero() {
  return (
    <section className={styles.heroSection}>
      <MaxWidthWrapper>
        <div className={styles.hero}>
          <div className={styles.blobContainer}>
            <svg className={styles.blob} viewBox="0 0 1190 540" xmlns="http://www.w3.org/2000/svg">
              <g className={styles.blobGrey} transform="translate(440, 270)">
<svg width="1050" height="450" viewBox="0 0 1050 450" xmlns="http://www.w3.org/2000/svg">
  <path d="M 0 135 L 0 110 Q 0 90 20 90 L 130 90 Q 150 90 170 90 L 280 90 Q 300 90 320 90 L 430 90 Q 450 90 450 110 L 450 160 Q 450 180 470 180 L 580 180 Q 600 180 620 180 L 730 180 Q 750 180 750 200 L 750 250 Q 750 270 730 270 L 620 270 Q 600 270 600 290 L 600 340 Q 600 360 620 360 L 730 360 Q 750 360 750 380 L 750 430 Q 750 450 730 450 L 620 450 Q 600 450 580 450 L 470 450 Q 450 450 430 450 L 320 450 Q 300 450 300 430 L 300 380 Q 300 360 280 360 L 170 360 Q 150 360 150 340 L 150 290 Q 150 270 130 270 L 20 270 Q 0 270 0 250 L 0 200 Q 0 180 0 160 Z" fill="#333745"/></svg></g>
<g className={styles.blobdk}>
                <path d="M0,0L130,0C150,0 150,0 170,0L280,0C300,0 300,0 320,0L430,0C450,0 450,0 470,0L580,0C600,0 600,0 620,0L730,0C750,0 750,20 750,20L750,70C750,90 730,90 730,90L620,90C600,90 600,110 600,110L600,160C600,180 580,180 580,180L470,180C450,180 450,200 450,200L450,250C450,270 430,270 430,270L320,270C300,270 300,250 300,250L300,200C300,180 280,180 280,180L170,180C150,180 150,160 150,160L150,110C150,90 130,90 130,90L20,90C0,90 0,70 0,70L0,20C0,0 20,0 20,0Z" fill="#156e89" />
              </g>
                <path d="M 150 45 L 150 20 Q 150 0 170 0 L 280 0 Q 300 0 320 0 L 430 0 Q 450 0 470 0 L 580 0 Q 600 0 600 20 L 600 70 Q 600 90 620 90 L 730 90 Q 750 90 750 110 L 750 160 Q 750 180 770 180 L 880 180 Q 900 180 900 200 L 900 250 Q 900 270 880 270 L 770 270 Q 750 270 750 290 L 750 340 Q 750 360 730 360 L 620 360 Q 600 360 580 360 L 470 360 Q 450 360 450 380 L 450 430 Q 450 450 430 450 L 320 450 Q 300 450 280 450 L 170 450 Q 150 450 150 430 L 150 380 Q 150 360 130 360 L 20 360 Q 0 360 0 340 L 0 290 Q 0 270 0 250 L 0 200 Q 0 180 0 160 L 0 110 Q 0 90 20 90 L 130 90 Q 150 90 150 70 Z" fill="#90cee0" />
            </svg>
            <div className={styles.textContent}>
              <h1 className={styles.title}>Jeremy Bourqui</h1>
              <h2 className={styles.subtitle}>Développeur Web</h2>
              <h2 className={styles.subtitle}>UX/UI Designer</h2>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section >
  );
}

export default Hero;