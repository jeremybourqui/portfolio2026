import React from 'react';
import styles from './MaxWidthWrapper.module.css';

function MaxWidthWrapper({ children }) {
  return <div className={styles.maxWidthWrapper}>{children}</div>;
}

export default MaxWidthWrapper;