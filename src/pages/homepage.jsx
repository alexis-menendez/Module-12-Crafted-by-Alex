// file path: module-12-crafted-by-alex/src/pages/homepage.jsx

import React, { useEffect } from 'react';
import TopBanner from './src/components/top-banner.js';
import GradientBox from './src/components/gradient-box.js';
import StarsContainer from './src/components/stars-container.js';
import Circle from './src/components/circle.js';
import ExtraFooter from './src/components/extra-footer.js';
import './src/assets/css/style.css';


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
