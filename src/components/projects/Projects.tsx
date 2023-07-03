import React, {useState, useEffect} from "react";
import "./style.css";
import Box from "../box/Box";
import Thrivia from "../../assets/images/thrivia.png";
import Meteorite from "../../assets/images/meteorite.png";
import Glowbit from "../../assets/images/glowbit.png";
import NestQuest from "../../assets/images/nestquest.png";
import Alto from "../../assets/images/alto.png";

const Projects = () => {
    return (
        <div className="projects">
            <div className="content">
                <h1 className="title">Projects</h1>
                <div className="container">
                    <Box title="Thrivia" description="AI Life Coaching Platform" image={Thrivia} background="#315A70" liveDemo="https://thrivia.ai" github=""></Box>
                    <Box title="Meteorite" description="Instant messaging application" image={Meteorite} background="#4258B1" liveDemo="https://meteorite-iota.vercel.app/" github="https://github.com/tylerhaisman/Meteorite"></Box>
                    <Box title="Glowbit" description="A memoized logic game" image={Glowbit} background="#2A2E6F" liveDemo="https://tylerhaisman.github.io/Glowbit" github="https://github.com/tylerhaisman/Glowbit"></Box>
                    <Box title="NestQuest" description="Enhanced housing search engine" image={NestQuest} background="#024FFE" liveDemo="https://tylerhaisman.github.io/NestQuest" github="https://github.com/tylerhaisman/NestQuest"></Box>
                    <Box title="Alto" description="Simplified weather app" image={Alto} background="#01B9AE" liveDemo="https://tylerhaisman.github.io/AltoWeather" github="https://github.com/tylerhaisman/AltoWeather"></Box>
                </div>
            </div>
        </div>
    );
}

export default Projects;