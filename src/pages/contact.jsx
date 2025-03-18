import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
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
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
