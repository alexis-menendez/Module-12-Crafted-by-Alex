// File path: src/components/extra-footer.js

import React, { useEffect } from 'react';
import TopBanner from './src/components/top-banner.js';
import GradientBox from './src/components/gradient-box.js';
import StarsContainer from './src/components/stars-container.js';
import Circle from './src/components/circle.js';
import './src/assets/css/style.css';

const ExtraFooter = () => {
  return (
    <footer id="extra-footer">
      <p>&copy; 2025 Alex Menendez</p>
      <a href="#">GitHub</a> | 
      <a href="#">LinkedIn</a>
    </footer>
  );
};

export default ExtraFooter;
