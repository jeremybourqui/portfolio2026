import React from 'react';
import InfoList from '../InfoList';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './Skills.module.css';
import { FaReact, FaDocker, FaCss3Alt, FaHtml5, FaFigma, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTraefikproxy } from "react-icons/si";

function Skills() {

  const tech = [
    { icon: FaReact, name: 'React' },
    { icon: SiJavascript, name: 'JavaScript' },
    { icon: FaCss3Alt, name: 'CSS' },
    { icon: FaHtml5, name: 'HTML' },
  ];

  const tools = [
    { icon: FaGitAlt, name: 'Git & GitHub' },
    { icon: SiTraefikproxy, name: 'Traefik proxy' },
    { icon: FaFigma, name: 'Figma' },
    { icon: FaDocker, name: 'Docker' },
  ];

  return (
      <section>
        <MaxWidthWrapper>
          <h2>A propos</h2>
          <div className={styles.skills}>
            <div>
              <h3>Langages & Frameworks</h3>
              <InfoList items={tech} size='3em'/>
            </div>
            <div>
              <h3>Outils & Environnement</h3>
              <InfoList items={tools} size='3em'/>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
  );
}

export default Skills;