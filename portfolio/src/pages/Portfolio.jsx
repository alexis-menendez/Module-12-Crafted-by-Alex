// file path: src/pages/Portfolio.jsx

import React from 'react';
import styles from "../assets/css/Portfolio.module.css";

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1.',
    image: 'path/to/project1.jpg',
    repoLink: 'https://github.com/yourgithub/project1',
    deployedLink: 'https://yourdeployedproject1.com',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2.',
    image: 'path/to/project2.jpg',
    repoLink: 'https://github.com/yourgithub/project2',
    deployedLink: 'https://yourdeployedproject2.com',
  },
  {
    title: 'Project 3',
    description: 'Description for project 3.',
    image: 'path/to/project3.jpg',
    repoLink: 'https://github.com/yourgithub/project3',
    deployedLink: 'https://yourdeployedproject3.com',
  },
  {
    title: 'Project 4',
    description: 'Description for project 4.',
    image: 'path/to/project4.jpg',
    repoLink: 'https://github.com/yourgithub/project4',
    deployedLink: 'https://yourdeployedproject4.com',
  },
  {
    title: 'Project 5',
    description: 'Description for project 5.',
    image: 'path/to/project5.jpg',
    repoLink: 'https://github.com/yourgithub/project5',
    deployedLink: 'https://yourdeployedproject5.com',
  },
  {
    title: 'Project 6',
    description: 'Description for project 6.',
    image: 'path/to/project6.jpg',
    repoLink: 'https://github.com/yourgithub/project6',
    deployedLink: 'https://yourdeployedproject6.com',
  },
];

const Portfolio = () => {
  return (
    <div>
      <div className={styles.portfolioContent}>
        <h2>My Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed Project</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;