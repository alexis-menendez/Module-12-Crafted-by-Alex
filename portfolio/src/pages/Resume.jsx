// file path: src/pages/Resume.jsx

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from "/src/assets/Resume.module.css";

const Resume = () => {
  return (
    <div>
      <Navigation />
      <div className={styles.resumeContent}>
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