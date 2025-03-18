// file path: module-12-crafted-by-alex/src/components/gradient-box.js

import React, { useEffect } from 'react';
import TopBanner from './src/components/top-banner.js';
import StarsContainer from './src/components/stars-container.js';
import Circle from './src/components/circle.js';
import ExtraFooter from './src/components/extra-footer.js';
import './src/assets/css/style.css';

const GradientBox = () => {
  return (
    <div id="gradient-box">
      <StarsContainer />
      <Circle />
      <img src="/assets/images/cloud1.png" className="cloud" id="cloud1" alt="Cloud 1" />
      <img src="/assets/images/cloud2.png" className="cloud" id="cloud2" alt="Cloud 2" />
      <img src="/assets/images/cloud3.png" className="cloud" id="cloud3" alt="Cloud 3" />
      <img src="/assets/images/cloud4.png" className="cloud" id="cloud4" alt="Cloud 4" />
      <img src="/assets/images/cloud5.png" className="cloud" id="cloud5" alt="Cloud 5" />
    </div>
  );
};

export default GradientBox;
