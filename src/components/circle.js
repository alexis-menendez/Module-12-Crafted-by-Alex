// file path: module-12-crafted-by-alex/src/components/circle.js

import React, { useEffect } from 'react';
import TopBanner from './top-banner.js';
import GradientBox from './gradient-box.js';
import StarsContainer from './stars-container.js';
import ExtraFooter from './extra-footer.js';
import '../../assets/css/style.css';

const Circle = () => {
  useEffect(() => {
    const circle = document.getElementById('circle');
    const staticStarsContainer = document.getElementById('static-stars-container');
    const gradientBox = document.getElementById('gradient-box');
    const h1 = document.querySelector('#circle h1');

    if (!circle || !staticStarsContainer || !gradientBox || !h1) return;

    const moveStarsToCenter = () => {
      circle.classList.add('hover');
      staticStarsContainer.classList.add('transparent');
    };

    const resetStars = () => {
      circle.classList.remove('hover');
      staticStarsContainer.classList.remove('transparent');
    };

    const handleMouseEnter = () => {
      gradientBox.classList.add('hovered');
      circle.classList.add('hovered');
      staticStarsContainer.classList.add('faded');
    };

    const handleMouseLeave = () => {
      gradientBox.classList.remove('hovered');
      circle.classList.remove('hovered');
      staticStarsContainer.classList.remove('faded');
    };

    circle.addEventListener('mouseenter', moveStarsToCenter);
    circle.addEventListener('mouseleave', resetStars);
    h1.addEventListener('mouseenter', handleMouseEnter);
    h1.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      circle.removeEventListener('mouseenter', moveStarsToCenter);
      circle.removeEventListener('mouseleave', resetStars);
      h1.removeEventListener('mouseenter', handleMouseEnter);
      h1.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div id="circle"><h1>Hover Me</h1></div>;
};

export default Circle;
