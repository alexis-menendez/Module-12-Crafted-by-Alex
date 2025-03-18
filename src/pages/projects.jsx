// file path: module-12-crafted-by-alex/src/pages/about.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <section>
        <h2>Projects</h2>
        <p>Here are some of my projects:</p>
        <ul>
          <li>Meal Muse - A meal planning app</li>
          <li>RoleCall - Employee database manager</li>
          <li>SkyWatch - Weather forecasting tool</li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
