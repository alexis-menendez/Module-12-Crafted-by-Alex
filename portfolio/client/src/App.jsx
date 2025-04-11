// file path: /portfolio/client/src/app.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './client/components/Navigation';
import Footer from './client/components/Footer';
import Home from './client/pages/Home';
import About from './client/pages/About';
import Contact from './client/pages/Contact';
import Portfolio from './client/pages/Portfolio';
import Resume from './client/pages/Resume';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;