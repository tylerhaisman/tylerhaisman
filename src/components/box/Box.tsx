"use client"

import React, {useState, useEffect} from "react";
import Image from "next/image";
import "./style.css";
import Arrow from "../../assets/icons/arrow.svg";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

type Props = {
    background: string;
    image: any;
    title: string;
    description: string;
    liveDemo: string;
    github: string;
}

const Box = (props: Props) => {

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
        <div className={`box ${isVisible ? "fade-in" : ""}`} ref={ref} style={{backgroundColor: props.background}}>
        <hr />
        <div className="left">
            {props.title == "NestQuest" && <div className="winner">
                <p>Nominated as a top class project</p>
            </div>}
            <h1>{props.title}</h1>
            <p className="description">{props.description}</p>
            <div className="checkitout">
                <Link href={props.liveDemo} target="_blank"><button>Live Demo<Image className="arrow" src={Arrow} alt="Arrow pointing up-right"></Image></button></Link>
                {props.title != "Thrivia" && <Link href={props.github} target="_blank"><button>GitHub<Image className="arrow" src={Arrow} alt="Arrow pointing up-right"></Image></button></Link>}
            </div>
        </div>
        <div className="right">
            <Image src={props.image} alt={props.title} width={0} height={0}></Image>
        </div>
    </div>
     );
}
 
export default Box;