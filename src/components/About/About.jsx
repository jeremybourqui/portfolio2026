import React from 'react';
import InfoList from '../InfoList';
import styles from './About.module.css';

function About() {
  return (
    <section>
      <h2>Specs</h2>
      <InfoList />
      <InfoList/>
    </section>
  );
}

export default About;