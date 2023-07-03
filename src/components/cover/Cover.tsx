import React from "react";
import "./style.css";
import Image from "next/image";
import LinkedIn from "../../assets/icons/linkedin.svg";
import GitHub from "../../assets/icons/github.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Scenic from "../../assets/images/scenic.png";
import Arrow from "../../assets/icons/arrow.svg";
import Link from "next/link";

const Cover = () => {
    return ( 
        <div className="cover">
            <hr />
            <div className="content">
            <div className="description">
                <div className="title">
                <h1>Hey, I'm Tyler.</h1>
                <p>Full Stack Software Engineer and Junior at University of Florida</p>
                </div>
                <div className="buttons">
                    <Link href="/tylerhaisman.pdf" target="_blank"><button>View Resume <Image className="arrow" src={Arrow} alt="Arrow pointing up-right"></Image></button></Link>
                    <Link href="#contact"><button className="contactbutton">Contact</button></Link>
                </div>
                <div className="socials">
                    <Link href="https://linkedin.com/in/tylerhaisman" target="_blank"><Image src={LinkedIn} alt="LinkedIn" width={20} height={20}></Image></Link>
                    <Link href="https://github.com/tylerhaisman" target="_blank"><Image src={GitHub} alt="GitHub" width={20} height={20}></Image></Link>
                    <Link href="https://instagram.com/tylercompsci" target="_blank"><Image src={Instagram} alt="Instagram" width={20} height={20}></Image></Link>
                </div>
            </div>
            <div className="image">
                <Image src={Scenic} alt="Tyler Haisman"></Image>
            </div>
            </div>
        </div>
     );
}
 
export default Cover;