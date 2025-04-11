// file path: /portfolio/client/src/pages/Portfolio.jsx

import React from 'react';
import StarryBackground from './client/src/components/StarryBackground';
import styles from "./client/src/assets/css/Portfolio.module.css";

const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1.',
    image: './client/public/assets/images/placeholder1.png',
    repoLink: 'https://github.com/yourgithub/project1',
    deployedLink: 'https://yourdeployedproject1.com',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2.',
    image: './client/public/assets/images/placeholder2.png',
    repoLink: 'https://github.com/yourgithub/project2',
    deployedLink: 'https://yourdeployedproject2.com',
  },
  {
    title: 'Project 3',
    description: 'Description for project 3.',
    image: './client/public/assets/images/placeholder3.png',
    repoLink: 'https://github.com/yourgithub/project3',
    deployedLink: 'https://yourdeployedproject3.com',
  },
  {
    title: 'Project 4',
    description: 'Description for project 4.',
    image: './client/public/assets/images/placeholder4.png',
    repoLink: 'https://github.com/yourgithub/project4',
    deployedLink: 'https://yourdeployedproject4.com',
  },
  {
    title: 'Project 5',
    description: 'Description for project 5.',
    image: './client/public/assets/images/placeholder5.png',
    repoLink: 'https://github.com/yourgithub/project5',
    deployedLink: 'https://yourdeployedproject5.com',
  },
  {
    title: 'Project 6',
    description: 'Description for project 6.',
    image: './client/public/assets/images/placeholder6.png',
    repoLink: 'https://github.com/yourgithub/project6',
    deployedLink: 'https://yourdeployedproject6.com',
  },
];

const Portfolio = () => {
  return (
    <StarryBackground>
      <div className={styles.portfolioContent}>
        <div className={styles.portfolioBox}>
          <h2>My Portfolio</h2>
          <div className={styles.portfolioGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.portfolioItem}>
                <img src={project.image} alt={project.title} />
                <h3>
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
                </h3>
                <p>{project.description}</p>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StarryBackground>
  );
};

export default Portfolio;
