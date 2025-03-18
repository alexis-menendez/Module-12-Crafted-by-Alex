import React from 'react';
import starryskies from '.src/assets/js/starryskies';
import transition from './transition.js';

function GradientBox() {
  return (
    <div id="gradient-box">
      <div id="stars-container"></div>
      <div id="circle">
        <h1 style={{ color: 'black' }}>Alex Menendez</h1>
      </div>
      <img src="/assets/images/cloud1.png" className="cloud" id="cloud1" alt="Cloud 1" />
      <img src="/assets/images/cloud2.png" className="cloud" id="cloud2" alt="Cloud 2" />
      <img src="/assets/images/cloud3.png" className="cloud" id="cloud3" alt="Cloud 3" />
      <img src="/assets/images/cloud4.png" className="cloud" id="cloud4" alt="Cloud 4" />
      <img src="/assets/images/cloud5.png" className="cloud" id="cloud5" alt="Cloud 5" />
    </div>
  );
}

export default GradientBox;
