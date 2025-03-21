// file path: portfolio/src/components/Sky.jsx

// file path: portfolio/src/components/Sky.jsx

import React, { useEffect, useState, useRef } from 'react';
import styles from "../assets/css/Home.module.css";

const Sky = () => {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const canvasRef = useRef(null);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const boxWidth = containerRef.current.offsetWidth;
    const boxHeight = containerRef.current.offsetHeight;

    const circle = circleRef.current;
    const circleX = boxWidth / 2;
    const circleY = boxHeight / 2;

    const starSizes = [
      { size: 8, quantity: 1 },
      { size: 7, quantity: 2 },
      { size: 6, quantity: 2 },
      { size: 5, quantity: 10 },
      { size: 4, quantity: 25 },
      { size: 3, quantity: 50 },
      { size: 2, quantity: 150 },
      { size: 1, quantity: 250 },
    ];

    function doesOverlap(x, y, starSize) {
      const distFromMoon = Math.sqrt((x - circleX) ** 2 + (y - circleY) ** 2);
      return distFromMoon < circle.offsetWidth / 2 + starSize;
    }

    function createStars(sizes) {
      const newStars = [];

      sizes.forEach(({ size, quantity }) => {
        for (let i = 0; i < quantity; i++) {
          let x, y, tries = 0;
          do {
            x = Math.random() * boxWidth;
            y = Math.random() * boxHeight;
            tries++;
          } while (doesOverlap(x, y, size) && tries < 100);
          // attempting to add twinkle effect without losing star movement
          const twinkleClass = `twinkle${Math.floor(Math.random() * 3) + 1}`;
          newStars.push({ x, y, size, offsetX: 0, offsetY: 0, twinkleClass });
          // old code: newStars.push({ x, y, size, offsetX: 0, offsetY: 0 });
        }
      });

      setStars(newStars);
    }

    createStars(starSizes);
  }, []);

  const handleMouseMove = (event) => {
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Update star positions with spring effect
    setStars((prevStars) =>
      prevStars.map((star) => {
        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const effectStrength = 1 - distance / maxDistance;
          const offsetX = (dx * 1.5) * effectStrength;
          const offsetY = (dy * 1.5) * effectStrength;
          return { ...star, offsetX, offsetY };
        }

        return { ...star, offsetX: 0, offsetY: 0 };
      })
    );

    // Draw connection lines
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = containerRef.current.offsetWidth;
    canvas.height = containerRef.current.offsetHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.lineWidth = 0.5;

    stars.forEach((starA, i) => {
      stars.forEach((starB, j) => {
        if (i >= j) return;

        const dx = starA.x - starB.x;
        const dy = starA.y - starB.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const mouseDistA = Math.sqrt((mouseX - starA.x) ** 2 + (mouseY - starA.y) ** 2);
        const mouseDistB = Math.sqrt((mouseX - starB.x) ** 2 + (mouseY - starB.y) ** 2);

        if (distance < 80 && mouseDistA < 150 && mouseDistB < 150) {
          ctx.beginPath();
          ctx.moveTo(starA.x, starA.y);
          ctx.lineTo(starB.x, starB.y);
          ctx.stroke();
        }
      });
    });
  };

  return (
    <div
      className={styles.blueRectangle}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <canvas ref={canvasRef} className={styles.connectionCanvas} />
      {stars.map((star, index) => (
        <div
          key={index}
          // attempting to add star twinkle without losing star movement
          className={`${styles.star} ${styles[star.twinkleClass]}`}
          // old code: className={styles.star}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}px`,
            top: `${star.y}px`,
            transform: `translate(${star.offsetX}px, ${star.offsetY}px) scale(${1 + star.offsetX * 0.002})`,
            transition: 'transform 0.9s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        ></div>
      ))}
      <div className={styles.moon} ref={circleRef}></div>
    </div>
  );
};

export default Sky;