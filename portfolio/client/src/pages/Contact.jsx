// file path: /portfolio/client/src/pages/Contact.jsx

import React, { useState } from 'react';
import StarryBackground from '../components/StarryBackground';
import styles from '../assets/css/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmissionStatus(null);
      return;
    }

    // ✅ Detect local dev vs production
    const baseURL = window.location.hostname === 'localhost'
      ? 'http://localhost:5000'
      : '';

    try {
      const response = await fetch(`${baseURL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Message sent successfully! 🌟');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        const data = await response.json();
        setSubmissionStatus(`Error: ${data.error || 'Something went wrong.'}`);
      }
    } catch (err) {
      console.error(err);
      setSubmissionStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <StarryBackground>
      <div className={styles.contactContent}>
        <h2> Contact Me </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>

        {submissionStatus && (
          <p style={{ marginTop: '1rem', color: '#ffdd57' }}>{submissionStatus}</p>
        )}

        <p>
          You can also reach me on <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </div>
    </StarryBackground>
  );
};

export default Contact;
