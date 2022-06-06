import React from "react";

function ContactForm() {
  // JSX
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <input name="message" rows="5" />
        </div>
        <button type="submit">Sumbit</button>
      </form>
    </section>
  );
}

export default ContactForm;
