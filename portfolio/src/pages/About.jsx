// file path: src/pages/About.jsx`

import React from 'react';
import styles from "../assets/css/About.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.aboutContent}>
        <div className="about-photo">
          <img src="path/to/your/photo.jpg" alt="Your Name" />
        </div>
        <div className="about-text">
          <p>
            Hi, I'm Alex Menendez, a passionate web developer with experience in building single-page applications using React. I love creating beautiful and functional web applications that provide great user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;