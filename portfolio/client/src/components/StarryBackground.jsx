// file: /portfolio/client/src/components/StarryBackground.jsx

import React, { useEffect, useRef, useState } from 'react';
import styles from '../assets/css/StarryBackground.module.css';

const StarryBackground = ({ children }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const boxWidth = containerRef.current.offsetWidth;
    const boxHeight = containerRef.current.offsetHeight;

    const starSizes = [
      { size: 3, quantity: 40 },
      { size: 2, quantity: 100 },
      { size: 1, quantity: 300 },
    ];

    function createStars(sizes) {
      const newStars = [];

      sizes.forEach(({ size, quantity }) => {
        for (let i = 0; i < quantity; i++) {
          const x = Math.random() * boxWidth;
          const y = Math.random() * boxHeight;
          const twinkleClass = `twinkle${Math.floor(Math.random() * 17) + 1}`;
          newStars.push({ x, y, size, twinkleClass });
        }
      });

      setStars(newStars);
    }

    createStars(starSizes);
  }, []);

  return (
    <div className={styles.skyBackground} ref={containerRef}>
      {canvasRef && <canvas ref={canvasRef} className={styles.connectionCanvas} />}

      {/* Render stars */}
      {stars.map((star, index) => (
        <div
          key={index}
          className={`${styles.star} ${styles[star.twinkleClass]}`}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}px`,
            top: `${star.y}px`,
          }}
        />
      ))}

      {/* Render page content */}
      <div className={styles.pageContent}>{children}</div>
    </div>
  );
};

export default StarryBackground;
