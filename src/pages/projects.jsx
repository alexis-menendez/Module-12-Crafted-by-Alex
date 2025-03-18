// file path: module-12-crafted-by-alex/src/pages/about.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <section>
      <h2>Portfolio</h2><p>Here are my projects.</p>
        <div class="portfolio-grid">
            <div class="portfolio-item">
                <img src="project1.jpg" alt="Project 1">
                <h2>Meal Muse</h2>
                <p>Meal Muse is a meal planning companion, designed to ease the stress of meal planning fatigue. </p>
            </div>
            <div class="portfolio-item">
                <img src="challenge10.jpg" alt="Challenge 10">
                <h2>RoleCall</h2>
                <p>RoleCall is a command-line application designed to help business owners manage their company's employee database efficiently.</p>
            </div>
            <div class="portfolio-item">
                <img src="challenge9.jpg" alt="Challenge 9">
                <h2>SkyWatch</h2>
                <p>SkyWatch is a weather dashboard application that allows users to retrieve current and 5-day weather forecasts for multiple cities using the OpenWeather API.</p>
            </div>
            <div class="portfolio-item">
                <img src="challenge8.jpg" alt="Challenge 8">
                <h2>Vehicle Builder</h2>
                <p>Vehicle Builder is a TypeScript-based command-line application that allows users to create and interact with different types of vehicles.</p>
            </div>
            <div class="portfolio-item">
                <img src="challenge7.jpg" alt="Challenge 7">
                <h2>README Generator</h2>
                <p>An application that dynamically generates a professional README.md file from a user's input</p>
            </div>
            <div class="portfolio-item">
                <img src="challenge3.jpg" alt="Challenge 3">
                <h2>Employee Payroll Tracker</h2>
                <p>An application that enables a payroll manager to view and manage employee payroll data.</p>
            </div>
        </div>
        `;
  );
};

export default Projects;
