import React, { useState } from 'react'

import { validateEmail } from '../../utils/helpers';
import '../../assets/style.css'
function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
if (!isValid) {
  setErrorMessage('Your email is invalid.');
} else {
  if (!e.target.value.length) {
    setErrorMessage(`${e.target.name} is required.`);
  } else {
    setErrorMessage('');
  }
  console.log('errorMessage', errorMessage);
}
    }  
    setFormState({...formState, [e.target.name]: e.target.value })
  }
  console.log(formState);
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h3>
        Contact Form
      </h3>
      <form id="contact-form" onSubmit={handleSubmit}>
      <div>
  <label htmlFor="name">Name:</label>
  <input type="text" defaultValue={name} onChange={handleChange} name="name" />
</div>
<div>
  <label htmlFor="email">Email address:</label>
  <input type="email" defaultValue={email} name="email" onChange={handleChange} />
</div>
<div>
  <label htmlFor="message">Message:</label>
  <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
</div>
<button type="submit">Submit</button>
      </form>
    </section>
  );
}
  export default Contact;