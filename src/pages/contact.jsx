// file path: module-12-crafted-by-alex/src/pages/Contact.jsx

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Function to update state when input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct the mailto link
    const mailtoLink = `mailto:your.email@example.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    
    // Open the default email client
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <Navbar />
      <section>
        <h2>Contact</h2>
        <p>You can reach me through the following platforms:</p>
        <ul>
          <li>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></li>
          <li>GitHub: <a href="#">GitHub</a></li>
          <li>LinkedIn: <a href="#">LinkedIn</a></li>
        </ul>

        {/* Contact Form */}
        <h3>Send Me a Message</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit">Send Email</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
