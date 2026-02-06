import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <input type="checkbox" id="burger-toggle" className={styles.burgerCheckbox} />
        <label htmlFor="burger-toggle" className={styles.burgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className={styles.menuList}>
          <li>
            <a href="/#home">Accueil</a>
          </li>
          <li>
            <a href="/#projects">Projets</a>
          </li>
          <li>
            <a href="/#about">À propos</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );

}

export default Header;
