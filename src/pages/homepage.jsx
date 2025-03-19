// file path: module-12-crafted-by-alex/src/pages/homepage.jsx

import React, { useEffect } from 'react';
import TopBanner from '../components/top-banner.js';
import GradientBox from '../components/gradient-box.js';
import StarsContainer from '../components/stars-container.js';
import Circle from '../components/circle.js';
import ExtraFooter from '../components/extra-footer.js';
import '../assets/css/style.css';


const HomePage = () => {
  return (
    <div>
      <TopBanner />
      <GradientBox />
      <ExtraFooter />
    </div>
  );
};

export default HomePage;
