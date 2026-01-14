import React from 'react';
import InfoList from '../InfoList';
import MaxWidthWrapper from '../MaxWidthWrapper';
import styles from './About.module.css';
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaFigma, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTraefikproxy } from "react-icons/si";

function About() {

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
  ];


  return (
    <>
      <section>
        <MaxWidthWrapper>
          <h2>A propos</h2>
          <div className={styles.about}>
            <div>
              <h3>Langages & Frameworks</h3>
              <InfoList items={tech} />
            </div>
            <div>
              <h3>Outils & Environnement</h3>
              <InfoList items={tools} />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}

export default About;