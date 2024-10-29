import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef(); // Create a reference for the form
  const [submitted, setSubmitted] = useState(false); // State to track submission status
  const [error, setError] = useState(''); // State for error handling

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rpdgvlv', 'template_bsk2k8k', form.current, 'DWEyILDMuBUmpx6ia') // Use your actual service ID and template ID
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true); // Mark the form as submitted
          setError(''); // Clear any previous errors
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError('Failed to send message. Please try again later.'); // Set error message
        },
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="user_name">Name</label>
        <input type="text" name="user_name" required placeholder="Votre Nom" />

        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" required placeholder="john@doe.fr" />

        <label htmlFor="message">Message</label>
        <textarea name="message" required placeholder="Votre message" rows="6" spellCheck="true" />

        <input type="submit" value="Envoyer" className='Contact-submission'/>
      </form>
      {submitted && <p>Merci pour votre message !</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
