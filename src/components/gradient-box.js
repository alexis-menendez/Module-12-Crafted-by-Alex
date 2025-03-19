// file path: module-12-crafted-by-alex/src/components/gradient-box.js

import React, { useEffect } from 'react';
import TopBanner from './top-banner.js';
import StarsContainer from './stars-container.js';
import Circle from './circle.js';
import ExtraFooter from './extra-footer.js';
import '../../assets/css/style.css';


const GradientBox = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      id="gradient-box"
      className={isHovered ? 'hovered' : ''}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StarsContainer />
      <Circle />
      const publicPath = process.env.PUBLIC_URL; // Get the public folder path
        <img src={`${publicPath}/assets/images/cloud1.png`} className="cloud" id="cloud1" alt="Cloud 1" />
        <img src={`${publicPath}/assets/images/cloud2.png`} className="cloud" id="cloud2" alt="Cloud 2" />
        <img src={`${publicPath}/assets/images/cloud3.png`} className="cloud" id="cloud3" alt="Cloud 3" />
        <img src={`${publicPath}/assets/images/cloud4.png`} className="cloud" id="cloud4" alt="Cloud 4" />
        <img src={`${publicPath}/assets/images/cloud5.png`} className="cloud" id="cloud5" alt="Cloud 5" />

    </div>
  );
};

export default GradientBox;
