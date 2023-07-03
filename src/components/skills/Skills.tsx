"use client"

import React, {useState, useEffect} from "react";
import "./style.css";
import { useInView } from "react-intersection-observer";

const Skills = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

    return ( 
        <div className="skills">
            <hr />
            <div className={`content ${isVisible ? "fade-in" : ""}`} ref={ref}>
                <div className="skillscontent">
                <h1>Skills</h1>
            <ul>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>React JS</li>
                <li>PostgreSQL</li>
                <li>C++</li>
                <li>Java</li>
                <li>Express.js</li>
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>MySQL</li>
                <li>Docker</li>
                <li>Azure</li>
                <li>Git/GitHub</li>
                <li>npm/yarn</li>
                <li>HTML/JSX</li>
                <li>CSS</li>
                <li>MATLAB</li>
            </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Skills;