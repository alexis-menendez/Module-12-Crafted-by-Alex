// file path: /portfolio/client/src/components/Footer.jsx

import React from 'react';
import styles from "../assets/css/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.navigationContent}></div>
      <footer>
        <p>&copy; 2025 Alex Menendez</p>
        <a href="https://github.com/yourgithub">GitHub</a> | 
        <a href="https://linkedin.com/in/yourlinkedin">LinkedIn</a>
      </footer>
    </>
  );
};

export default Footer;