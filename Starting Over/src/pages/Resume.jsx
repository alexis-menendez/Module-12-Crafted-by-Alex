// file path: src/pages/Resume.jsx

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './Resume.css';

const Resume = () => {
  return (
    <div>
      <Navigation />
      <div className="resume-content">
        <h2>My Resume</h2>
        <a href="path/to/your/resume.pdf" download="Alex_Menendez_Resume.pdf">Download Resume</a>
        <div className="resume-image">
          <img src="path/to/your/resume.jpg" alt="Resume" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;