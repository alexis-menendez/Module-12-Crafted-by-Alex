// file path: portfolio/src/components/Navigation.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from "/src/assets/Navigation.modules.css";

const Navigation = () => {
  return (
    <>
      <div className={styles.navigationContent}></div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;