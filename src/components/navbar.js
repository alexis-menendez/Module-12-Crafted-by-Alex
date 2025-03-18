// file path: module-12-crafted-by-alex/src/components/navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Alex Menendez</h1>
      <ul>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/resume">RESUME</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
