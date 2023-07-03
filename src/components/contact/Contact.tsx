"use client"

import React, {useState, useEffect} from "react";
import "./style.css";
import Image from "next/image";
import Bitmoji from "../../assets/images/profile.jpg";
import Arrow from "../../assets/icons/arrow.svg";
import Link from "next/link";
import LinkedIn from "../../assets/icons/linkedin.svg";
import GitHub from "../../assets/icons/github.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Footer from "../footer/Footer";
import { useInView } from "react-intersection-observer";

const Contact = () => {

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
        <div className="contact">
            {/* {windowSize.width > 700 && <hr />} */}
            <div className={`content ${isVisible ? "fade-in" : ""}`} ref={ref}>
                <div className="contactcontent">
                <div className="experience">
                    <h1>Relevant Experience</h1>
                    <div className="items">
                    <div className="item">
                        <h2>Information Technology Intern</h2>
                        <ul>
                            <li>
                                Harper College
                            </li>
                            <li>
                                Palatine, IL
                            </li>
                            <li>
                                June 2023 - August 2023
                            </li>
                            <li>
                                Full Time
                            </li>
                        </ul>
                        <p>
                        Creating an IT Service Catalog for Harper College employees to reference.
                        </p>
                    </div>
                    <div className="item">
                        <h2>Bike Mechanic</h2>
                        <ul>
                            <li>
                                SG Bike Repair
                            </li>
                            <li>
                                University of Florida
                            </li>
                            <li>
                                November 2022 - Present
                            </li>
                            <li>
                                Part Time
                            </li>
                        </ul>
                        <p>
                        Troubleshooting, diagnosing, & repairing bicycles for UF students.
                        </p>
                    </div>
                    </div>
                </div>
                <h1 className="letsconnect">Let's Connect!</h1>
                    <div id="contact" className="contactinfo">
                        <div className="item">
                        <Image className="bitmoji" src={Bitmoji} alt="Tyler Haisman as a Bitmoji" width={200} height={200}></Image>
                        <h2>Tyler Haisman</h2>
                        <p>Junior computer science major at University of Florida</p>
                        <div className="socials">
                    <Link href="https://linkedin.com/in/tylerhaisman" target="_blank"><Image src={LinkedIn} alt="LinkedIn" width={20} height={20}></Image></Link>
                    <Link href="https://github.com/tylerhaisman" target="_blank"><Image src={GitHub} alt="GitHub" width={20} height={20}></Image></Link>
                    <Link href="https://instagram.com/tylercompsci" target="_blank"><Image src={Instagram} alt="Instagram" width={20} height={20}></Image></Link>
                </div>
                        <Link href="/tylerhaisman.pdf" target="_blank"><button>View Resume <Image className="arrow" src={Arrow} alt="Arrow pointing up-right"></Image></button></Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
     );
}
 
export default Contact;