// file path: module-12-crafted-by-alex/src/pages/about.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const publicPath = process.env.PUBLIC_URL; // Get public folder path dynamically

const Projects = () => {
  return (
    <div>
      <Navbar />
      <section>
        <h2>Portfolio</h2>
        <p>Here are my projects.</p>
        <div className="portfolio-grid">
            <div className="portfolio-item">
                <img src={`${publicPath}/assets/images/project1.jpg`} alt="Project 1" />
                <h2>Meal Muse</h2>
                <p>Meal Muse is a meal planning companion, designed to ease the stress of meal planning fatigue.</p>
                <a href="https://github.com/alexis-menendez/project-1-meal-muse" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
            <div className="portfolio-item">
                <img src={`${publicPath}/assets/images/challenge10.jpg`} alt="Challenge 10" />
                <h2>RoleCall</h2>
                <p>RoleCall is a command-line application designed to help business owners manage their company's employee database efficiently.</p>
                <a href="https://github.com/alexis-menendez/module-10-rolecall" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
            <div className="portfolio-item">
                <img src={`${publicPath}/assets/images/challenge9.jpg`} alt="Challenge 9" />
                <h2>SkyWatch</h2>
                <p>SkyWatch is a weather dashboard application that allows users to retrieve current and 5-day weather forecasts for multiple cities using the OpenWeather API.</p>
                <a href="https://github.com/alexis-menendez/module-9-skywatch" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
            <div className="portfolio-item">
                <img src={`${publicPath}/assets/images/challenge8.jpg`} alt="Challenge 8" />
                <h2>Vehicle Builder</h2>
                <p>Vehicle Builder is a TypeScript-based command-line application that allows users to create and interact with different types of vehicles.</p>
                <a href="https://github.com/alexis-menendez/module-8-vehicle-builder" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
            <div className="portfolio-item">
                <img src={`${publicPath}/assets/images/challenge7.jpg`} alt="Challenge 7" />
                <h2>README Generator</h2>
                <p>An application that dynamically generates a professional README.md file from a user's input.</p>
                <a href="https://github.com/alexis-menendez/module-7-readme-generator" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
            <div className="portfolio-item">
                <img src={`${publicPath}/assets/images/challenge3`} alt="Challenge 3" />
                <h2>Employee Payroll Tracker</h2>
                <p>An application that enables a payroll manager to view and manage employee payroll data.</p>
                <a href="https://github.com/alexis-menendez/module-3-employee-payroll-tracker" target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;