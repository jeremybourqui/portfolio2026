import React from 'react';
import styles from './Header.module.css';

function Header() {
  return ( 
    <header>
      <nav>
        <ul>
          <li>
            <a href="#home">Accueil</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );

}

export default Header;
