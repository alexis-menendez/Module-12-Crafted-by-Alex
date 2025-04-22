// file path: /portfolio/client/src/pages/About.jsx`

import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../assets/css/About.module.css";

const About = () => {
  return (
    <div>
      <div className={styles.aboutContent}>
       <div className={styles.aboutPhoto}>
        <img src="./dist/assets/images/portfolio-picture-bigfoot.webp" alt="Bigfoot" />
         </div>
           <div className={styles.aboutText}>
             <p>
              Hello! I’m Alex Menendez—a full-stack web developer, JavaScript wrangler, and part-time forest cryptid. When I’m not building sleek, responsive applications with React, you can find me roaming the woods, dodging blurry camera lenses, and contemplating the ineffable nature of Java.
             </p>
             <p>
              Some say I only emerge from the trees when there's a bug that refuses to be fixed. Others claim I was born in a code editor and raised by wild semicolons. All I know is: I love crafting intuitive user experiences and leaving just enough mystery in my commit messages to keep things interesting.
             </p>
             <p>
              Catch me if you can (or just <Link to="/contact">send me an email</Link>).
             </p>
          </div>
        </div>
     </div>
   );
};

export default About;