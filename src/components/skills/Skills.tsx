"use client"

import React, { useState, useEffect } from "react";
import "./style.css";
import { Waypoint } from "react-waypoint";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleEnterViewport = () => {
    setIsVisible(true);
  };

  return (
    <div className="skills">
      <Waypoint onEnter={handleEnterViewport} bottomOffset={50}/>
      <hr />
      <div className={`content ${isVisible ? "fade-in" : ""}`}>
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