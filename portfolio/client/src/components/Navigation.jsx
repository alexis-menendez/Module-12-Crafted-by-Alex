// file path: /portfolio/client/src/components/Navigation.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "./client/src/assets/css/Navigation.module.css";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftNav}>
        <Link to="/" className={styles.homeLink}>Alex Menendez</Link>
      </div>
      <ul className={styles.rightNav}>
        <li className={isActive('/about') ? styles.active : ''}>
          <Link to="/about">
            {isActive('/about') && '✦ '}About
          </Link>
        </li>
        <li className={isActive('/contact') ? styles.active : ''}>
          <Link to="/contact">
            {isActive('/contact') && '✦ '}Contact
          </Link>
        </li>
        <li className={isActive('/portfolio') ? styles.active : ''}>
          <Link to="/portfolio">
            {isActive('/portfolio') && '✦ '}Portfolio
          </Link>
        </li>
        <li className={isActive('/resume') ? styles.active : ''}>
          <Link to="/resume">
            {isActive('/resume') && '✦ '}Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;