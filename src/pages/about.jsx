// file path: module-12-crafted-by-alex/src/pages/about.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <section>
        <h2>About Me</h2>
        <p>
          I’m Alex—a developer with a passion for crafting intuitive, efficient, and visually engaging digital experiences.
          With a background in psychology and programming, I approach problem-solving with both analytical precision and human-centered design in mind.
        </p>
        <p>
          I thrive on turning ideas into functional, elegant solutions, whether it's building responsive web applications, optimizing user experiences,
          or experimenting with creative coding. My work is driven by curiosity, a love for learning, and a deep appreciation for the intersection of technology, accessibility, and design.
        </p>
        <p>
          When I’m not coding, I’m usually exploring art, dancing, or finding new ways to blend creativity with logic. If you’re looking for a developer
          who values collaboration, adaptability, and craftsmanship, let’s connect!
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default About;

