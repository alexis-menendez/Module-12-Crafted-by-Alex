// File path: src/components/extra-footer.js

import React, { useEffect } from 'react';
import TopBanner from './top-banner.js';
import GradientBox from './gradient-box.js';
import StarsContainer from './stars-container.js';
import Circle from './circle.js';
import '../../assets/css/style.css';

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
