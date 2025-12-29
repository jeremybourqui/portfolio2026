import React from 'react';
import InfoList from '../InfoList';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div>
      <h3>Contact</h3>
      <InfoList />
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </form>
    </div>
  );
}

export default Contact;
