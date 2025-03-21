// file path: src/pages/About.jsx`

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import styles from "/src/assets/About.module.css";

const About = () => {
  return (
    <div>
      <Navigation />
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
      <Footer />
    </div>
  );
};

export default About;