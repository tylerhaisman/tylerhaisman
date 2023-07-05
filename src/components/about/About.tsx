"use client"

import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Image from "next/image";
import Education from "../../assets/icons/education.svg";
import Drone from "../../assets/icons/drone.svg";
import Programming from "../../assets/icons/programming.svg";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-200px",
    root: null,
    threshold: 0.9
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div className="about">
      <hr />
      <div className="content">
        <div className={`box ${isVisible ? "fade-in" : ""}`} ref={ref}>
          <div className="info">
            <div className="item">
              <Image src={Education} alt="Education" width={45} height={45} />
              <p>I am a Junior at University of Florida studying Computer Science</p>
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




// import React from "react";
// import "./style.css";
// import Image from "next/image";
// import Education from "../../assets/icons/education.svg";
// import Drone from "../../assets/icons/drone.svg";
// import Programming from "../../assets/icons/programming.svg";

// const About = () => {
//     return ( 
//         <div className="about">
//             <hr />
//             {/* <hr className="horizontal"/> */}
//             <div className="content">
//                 <div className="box">
//                     <div className="info">
//                         <div className="item">
//                             <Image src={Education} alt="Education" width={45} height={45}></Image>
//                             <p>I am a Junior at University of Florida studying Computer Science</p>
//                         </div>
//                         <div className="item">
//                             <Image src={Drone} alt="Hobbies" width={40} height={40}></Image>
//                             <p>I am interested in machine learning, software engineering, and music production</p>
//                         </div>
//                         <div className="item">
//                             <Image src={Programming} alt="Dream Job" width={40} height={40}></Image>
//                             <p>I am currently working as an IT Intern at Harper College</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//      );
// }
 
// export default About;