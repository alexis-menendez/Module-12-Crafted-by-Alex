// File path: module-12-crafted-by-alex/src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./src/pages/homepage"; 
import About from "./src/pages/about";
import Contact from "./src/pages/contact";
import Projects from "./src/pages/projects";
import Resume from "./src/pages/resume";
import "./src/assets/css/style.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
