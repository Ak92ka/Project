import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(''); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rpdgvlv', 'template_bsk2k8k', form.current, 'DWEyILDMuBUmpx6ia')
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true); 
          setError(''); 
          form.current.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError('Failed to send message. Please try again later.');
        },
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h2 className='contact-h2'>Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="user_name">Name</label>
        <input type="text" id="user_name" name="user_name" required placeholder="Votre Nom" />

        <label htmlFor="user_email">Email</label>
        <input type="email" id="user_email" name="user_email" required placeholder="john@doe.fr" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required placeholder="Votre message" rows="6" spellCheck="true" />

        <input type="submit" value="Envoyer" className='Contact-submission'/>
      </form>
      {submitted && <p>Merci pour votre message !</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
