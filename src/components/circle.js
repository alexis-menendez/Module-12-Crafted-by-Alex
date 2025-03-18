// file path: module-12-crafted-by-alex/src/components/circle.js

import React, { useEffect } from 'react';
import TopBanner from './src/components/top-banner.js';
import GradientBox from './src/components/gradient-box.js';
import StarsContainer from './src/components/stars-container.js';
import ExtraFooter from './src/components/extra-footer.js';
import './src/assets/css/style.css';

// Wait for the entire document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

// Set poistion for the moon
const circleRect = circle.getBoundingClientRect();
const circleX = circleRect.left + circleRect.width / 2;
const circleY = circleRect.top + circleRect.height / 2;

circle.addEventListener('mouseenter', () => {
  moveStarsToCenter();
  circle.classList.add('hover');
  staticStarsContainer.classList.add('transparent'); // Add this line
});

circle.addEventListener('mouseleave', () => {
  resetStars();
  circle.classList.remove('hover');
  staticStarsContainer.classList.remove('transparent'); // Add this line
});


// change color of gradiet box when hovering over header 1
h1.addEventListener('mouseenter', () => {
gradientBox.classList.add('hovered');
circle.classList.add('hovered');
staticStarsContainer.classList.add('faded');
});

h1.addEventListener('mouseleave', () => {
gradientBox.classList.remove('hovered');
circle.classList.remove('hovered');
staticStarsContainer.classList.remove('faded');
});

// change opacity of clouds when hovering over header 1
h1.addEventListener('mouseenter', () => {
const clouds = [
  document.getElementById('cloud1'),
  document.getElementById('cloud2'),
  document.getElementById('cloud3'),
  document.getElementById('cloud4'),
  document.getElementById('cloud5')
];

clouds.forEach((cloud) => {
  cloud.classList.add('animate');
});
});

h1.addEventListener('mouseleave', () => {
const clouds = [
  document.getElementById('cloud1'),
  document.getElementById('cloud2'),
  document.getElementById('cloud3'),
  document.getElementById('cloud4'),
  document.getElementById('cloud5')
];

clouds.forEach((cloud) => {
  cloud.classList.remove('animate');
});
});

});


export default Circle;
