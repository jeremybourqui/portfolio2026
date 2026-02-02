import React from 'react';
import styles from './Footer.module.css';
import MaxWidthWrapper from '../MaxWidthWrapper';
import BlobDivider from '../BlobDivider';

function Footer() {
  return (
    <>
      <BlobDivider color="var(--color-background-strong)" orientation="top" />
      <footer className={styles.footer}>
        <MaxWidthWrapper>
        <p>© 2026 Jeremy Bourqui. Tous droits réservés.</p>
        </MaxWidthWrapper>
      </footer>
    </>
  );
}

export default Footer;