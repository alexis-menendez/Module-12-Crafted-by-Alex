import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Resume = () => {
  return (
    <div>
      <Navbar />
      <section>
        <h2>Resume</h2>
        <p>Download my resume below:</p>
        <a href="/resume.pdf" download>Download Resume</a>
      </section>
      <Footer />
    </div>
  );
};

export default Resume;
