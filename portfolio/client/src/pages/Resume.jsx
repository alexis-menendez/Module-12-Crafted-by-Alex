// file path: /portfolio/client/src/pages/Resume.jsx

import React from 'react';
import StarryBackground from '../components/StarryBackground';
import styles from "../assets/css/Resume.module.css";

const Resume = () => {
  return (
    <StarryBackground>
      <div className={styles.resumeContent}>
        <a href="public/assets/pdf/TechResume2025.pdf" download="TechResume2025.pdf">
          Thanks for stopping by!
        </a>
        <a href="public/assets/pdf/TechResume2025.pdf" download="TechResume2025.pdf">
          Click here to download my resume as a PDF
        </a>
        <div className={styles.resumeImage}>
          <img src="/assets/images/TechResume2025.webp" alt="Resume" />
        </div>
      </div>
    </StarryBackground>
  );
};

export default Resume;
