// file path: portfolio/src/components/Navigation.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../assets/css/Navigation.module.css";


const Navigation = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftNav}>
          <Link to="/" className={styles.homeLink}>Alex Menendez</Link>
        </div>
        <ul className={styles.rightNav}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;