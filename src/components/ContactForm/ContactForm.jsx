import React, { useState } from 'react';
import styles from './ContactForm.module.css';
const formUrl = import.meta.env.VITE_FORM_KEY;

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch(formUrl, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required />
      </div>
      <button type="submit" disabled={status === 'sending'} className={styles.submitBtn}>
        {status === 'sending' ? 'Envoi...' : 'Envoyer'}
      </button>
      {status === 'success' && <p className={styles.success}>Message envoyé avec succès!</p>}
      {status === 'error' && <p className={styles.error}>Erreur, veuillez réessayer.</p>}
    </form>
  );
}

export default ContactForm;
