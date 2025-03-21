// file path: portfolio/src/pages/Home.jsx

import React from 'react';
import styles from "../assets/css/Home.module.css";


const Resume = () => {
  return (
    <div>
      <Navigation />
        <div className={styles.homeContent}>
        <div className="blue-rectangle">
          <div className="white-circle"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;