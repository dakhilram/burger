import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
