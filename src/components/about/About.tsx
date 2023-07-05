"use client"

import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import Education from "../../assets/icons/education.svg";
import Drone from "../../assets/icons/drone.svg";
import Programming from "../../assets/icons/programming.svg";
import { Waypoint } from 'react-waypoint';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const handleEnterViewport = () => {
    setIsVisible(true);
  };

  return (
    <div className="about">
      <Waypoint onEnter={handleEnterViewport} bottomOffset={50}/>
      <hr />
      <div className="content">
        <div className={`box ${isVisible ? "fade-in" : ""}`}>
          <div className="info">
            <div className="item">
              <Image src={Education} alt="Education" width={45} height={45} />
              <p>I am a Junior at the University of Florida studying Computer Science</p>
            </div>
            <div className="item">
              <Image src={Drone} alt="Hobbies" width={40} height={40} />
              <p>I am interested in machine learning, software engineering, and music production</p>
            </div>
            <div className="item">
              <Image src={Programming} alt="Dream Job" width={40} height={40} />
              <p>I am currently working as an IT Intern at Harper College</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;