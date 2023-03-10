import React, { useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import "../styles/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/contact', {
      name: name,
      email: email,
      message: message
    })
    .then(response => {
      console.log(response.data);
      toast.success('Message sent successfully!');
    })
    .catch(error => {
      console.error(error);
      toast.error('Failed to send message');
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange} />
            </div>
            <button type="submit">Send Message</button>
            </form>
          </div>   
  )
}

export default Contact;
