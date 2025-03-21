// file path: portfolio/src/components/Sky.jsx

import React, { useEffect, useState, useRef } from 'react';
import styles from "../assets/css/Home.module.css";

const Sky = () => {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const canvasRef = useRef(null);
  const [stars, setStars] = useState([]);
  const [moonHovered, setMoonHovered] = useState(false);
  const [twinkleDisabled, setTwinkleDisabled] = useState(false);
  const [eclipseState, setEclipseState] = useState("idle");
  const [dimmingActive, setDimmingActive] = useState(false);

  useEffect(() => {
    if (eclipseState === "hovered") {
      const timeout = setTimeout(() => {
        setDimmingActive(true);
      }, 500);
  
      return () => clearTimeout(timeout);
    } else {
      setDimmingActive(false); 
    }
  }, [eclipseState]);

  useEffect(() => {
    if (!containerRef.current) return;

    const boxWidth = containerRef.current.offsetWidth;
    const boxHeight = containerRef.current.offsetHeight;

    const circle = circleRef.current;
    const circleX = boxWidth / 2;
    const circleY = boxHeight / 2;

    const starSizes = [
      { size: 5, quantity: 10 },
      { size: 4, quantity: 50 },
      { size: 3, quantity: 150 },
      { size: 2, quantity: 350 },
      { size: 1, quantity: 550 },
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
          const twinkleClass = `twinkle${Math.floor(Math.random() * 17) + 1}`;
          newStars.push({ x, y, size, offsetX: 0, offsetY: 0, twinkleClass });
        }
      });

      setStars(newStars);
    }

    createStars(starSizes);
  }, []);

  const handleMouseMove = (event) => {
    if (moonHovered) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    setStars((prevStars) =>
      prevStars.map((star) => {
        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const effectStrength = 1 - distance / maxDistance;
          const offsetX = dx * 1.5 * effectStrength;
          const offsetY = dy * 1.5 * effectStrength;
          return { ...star, offsetX, offsetY };
        }

        return { ...star, offsetX: 0, offsetY: 0 };
      })
    );

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = containerRef.current.offsetWidth;
    canvas.height = containerRef.current.offsetHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.lineWidth = 0.5;

    stars.forEach((starA, i) => {
        if (starA.size < 3) return;
      
        stars.forEach((starB, j) => {
          if (j <= i || starB.size < 3) return;

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

  const handleMouseLeave = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    setStars((prevStars) =>
      prevStars.map((star) => ({
        ...star,
        offsetX: 0,
        offsetY: 0,
      }))
    );
  };

  return (
    <div
        className={`${styles.blueRectangle} ${moonHovered ? styles.moonHovered : ''}`}
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        >
      {/* Smooth gradient overlay */}
      <div
        className={styles.gradientOverlay}
        style={{ opacity: moonHovered ? 1 : 0 }}
      />
      <div
        className={`${styles.eclipseDimOverlay} ${
        dimmingActive ? styles.eclipseDimOverlayActive : ""
      }`}
      />


      <canvas ref={canvasRef} className={styles.connectionCanvas} />

      {stars.map((star, index) => (
        <div
        key={index}
        className={`
            ${styles.star}
            ${styles[star.twinkleClass]}
            ${moonHovered ? styles.starFadeOut : ''}
            ${twinkleDisabled ? styles.noTwinkle : ''}
          `}
        style={{
          width: `${star.size}px`,
          height: `${star.size}px`,
          left: `${star.x}px`,
          top: `${star.y}px`,
          transform: moonHovered
            ? `translate(calc(50vw - ${star.x}px), calc(50vh - ${star.y}px)) scale(0.2)`
            : `translate(${star.offsetX}px, ${star.offsetY}px) scale(${1 + star.offsetX * 0.002})`,
          transition: moonHovered
            ? `transform 1.2s ease-in-out ${index * 10}ms`
            : 'transform 0.9s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      ></div>
      ))}

      <div
        className={`${styles.moon} ${dimmingActive ? styles.moonGlowEclipse : ''}`}
        ref={circleRef}
        onMouseEnter={() => {
            setMoonHovered(true);
            setTwinkleDisabled(true);
            setEclipseState("entering");
          
            setTimeout(() => {
            setEclipseState("entering");

            setTimeout(() => {
            setEclipseState("hovered");
            }, 9000);
            }, 9000);

            setTimeout(() => {
            setDimmingActive(true);
            }, 5000);
            }}
          
          onMouseLeave={() => {
            setMoonHovered(false);
            setTwinkleDisabled(false);
            setEclipseState("exiting");
          
            setTimeout(() => {
              setEclipseState("idle");
            }, 5000); 
          }}
          
        >
          {moonHovered && (
            <div
            className={[
            styles.eclipseDisc,
            eclipseState === "entering" && styles.eclipseSlideIn,
            eclipseState === "hovered" && styles.eclipseHold,
            eclipseState === "exiting" && styles.eclipseFadeOut,
        ]
        .filter(Boolean)
        .join(" ")}
        />
        )}
        </div>
      </div>
  );
};

export default Sky;
