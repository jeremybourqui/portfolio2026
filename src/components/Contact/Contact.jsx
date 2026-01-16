import React from 'react';
import InfoList from '../InfoList';
import ContactForm from '../ContactForm';
import styles from './Contact.module.css';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { VscAccount } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoIosMail } from "react-icons/io";

function Contact() {
  const info = [
    { icon: VscAccount, name: 'Jeremy Bourqui' },
    { icon: GoHomeFill, name: 'Lausanne' },
    { icon: IoIosMail, name: 'jeremy@jeremybourqui.ch', href: 'mailto:jeremy@jeremybourqui.ch' },
    { icon: FaLinkedin, name: 'Linkedin', href: 'https://www.linkedin.com/in/yourprofile' },
  ];

  return (
    <section className={styles.contactSection}>
      <MaxWidthWrapper>
        <h2>Contact</h2>
        <div className={styles.contact}>
          <InfoList items={info} size='2rem' variant="vertical" />  
          <ContactForm />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default Contact;
