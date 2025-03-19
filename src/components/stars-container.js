// file path: module-12-crafted-by-alex/src/components/StarsContainer.js

import React, { useEffect } from 'react';
import TopBanner from './top-banner.js';
import GradientBox from './gradient-box.js';
import Circle from './circle.js';
import ExtraFooter from './extra-footer.js';
import '../../assets/css/style.css';

const StarsContainer = () => {
  useEffect(() => {
    const starsContainer = document.getElementById('stars-container');
    const gradientBox = document.getElementById('gradient-box');
    const circle = document.getElementById('circle');

    if (!starsContainer || !gradientBox || !circle) return;

    const createStars = () => {
      starsContainer.innerHTML = ''; // Clear previous stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        starsContainer.appendChild(star);
      }
    };

    createStars();

    return () => {
      starsContainer.innerHTML = ''; // Cleanup stars when component unmounts
    };
  }, []);

  return <div id="stars-container"></div>;
};

export default StarsContainer;