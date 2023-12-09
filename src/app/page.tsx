"use client";

import {
  motion,
  AnimatePresence,
  useInView,
  useAnimationControls,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";

import Thrivia from "../../public/thrivia.png";
import Meteorite from "../../public/meteorite.png";
import Glowbit from "../../public/glowbit.png";
import NestQuest from "../../public/nestquest.png";
import Alto from "../../public/alto.png";
import Skillbit from "../../public/skillbit.png";

import LinkedIn from "../../public/linkedin-161-svgrepo-com (3).svg";
import Github from "../../public/github-142-svgrepo-com (1).svg";
import Instagram from "../../public/instagram-167-svgrepo-com (1).svg";

export default function Home() {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const ref = useRef(null);
  const isInView = useInView(ref);
  const [currentAboutSection, setCurrentAboutSection] = useState("Education");

  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const skills = [
    "TypeScript",
    "Next.js",
    "React JS",
    "PostgreSQL",
    "C++",
    "Java",
    "Express.js",
    "Node.js",
    "JavaScript",
    "SQL",
    "MySQL",
    "Docker",
    "Azure",
    "Git/Github",
    "npm/yarn",
    "HTML/JSX",
    "CSS",
    "MATLAB",
  ];

  return (
    <>
      <Toaster></Toaster>
      <AnimatePresence>
        {scrollY > 0 && (
          <motion.div
            className="fixed top-6 right-6 p-6 bg-white z-50 flex gap-6 items-center justify-center shadow-xl"
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{}}
            exit={{ opacity: 0, x: 1000 }}
          >
            <div className="flex gap-6">
              <Image
                src={LinkedIn}
                alt="LinkedIn"
                className="lg:w-12 lg:h-12 w-8 h-8 hover:-translate-y-1 duration-100 cursor-pointer"
                onClick={() =>
                  openInNewTab("https://linkedin.com/in/tylerhaisman")
                }
              ></Image>
              <Image
                src={Github}
                alt="Github"
                className="lg:w-12 lg:h-12 w-8 h-8 hover:-translate-y-1 duration-100 cursor-pointer"
                onClick={() => openInNewTab("https://github.com/tylerhaisman")}
              ></Image>
              <Image
                src={Instagram}
                alt="Instagram"
                className="lg:w-12 lg:h-12 w-8 h-8 hover:-translate-y-1 duration-100 cursor-pointer"
                onClick={() =>
                  openInNewTab("https://instagram.com/tylercompsci")
                }
              ></Image>
            </div>
            <button
              className="bg-black p-6 gap-6 items-center justify-center xl:flex hidden hover:-translate-y-1 duration-100"
              onClick={() => openInNewTab("/TylerHaismanResume.pdf")}
            >
              <p className="xl:text-5xl text-[5vw] text-white">View Resume</p>
              <div className="flex justify-end items-center mr-6 ml-6">
                <div className="flex justify-center items-center -rotate-90">
                  <hr className="bg-white w-1 h-8 rotate-45 -mr-3" />
                  <hr className="bg-white w-1 h-8 -rotate-45 -ml-3" />
                </div>
                <div className="-ml-4">
                  <hr className="bg-white w-1 h-12 rotate-90" />
                </div>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* first section */}
      <div
        className="bg-blue-600 min-h-screen overflow-hidden relative"
        ref={ref}
      >
        <div
          className="absolute -right-[30vw] top-[10vh] w-[100vw] h-[50vh] bg-white rounded-full bg-gradient-to-br from-black to-blue-600"
          style={{ marginTop: scrollY / 3 }}
        ></div>
        <div className="p-6 relative z-10 flex flex-col justify-between min-h-screen">
          <div className="">
            {true && (
              <motion.h1
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 1,
                }}
                exit={{ opacity: 0, x: -200 }}
                className="text-[16vw]"
              >
                Tyler
              </motion.h1>
            )}
            {true && (
              <motion.h1
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 1,
                }}
                exit={{ opacity: 0, x: 200 }}
                className="text-[16vw] text-right"
              >
                Haisman
              </motion.h1>
            )}
          </div>
          <div className="mt-36 mb-36">
            {true && (
              <motion.p
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 1,
                  delay: 0.1,
                }}
                exit={{ opacity: 0, y: 200 }}
                className="xl:text-5xl text-[5vw] text-center"
              >
                is a computer science student and full stack software engineer.
              </motion.p>
            )}
          </div>
          <div className="flex justify-center items-center mt-10">
            <hr className="bg-white w-1 h-8 rotate-45 -mr-3" />
            <hr className="bg-white w-1 h-8 -rotate-45 -ml-3" />
          </div>
        </div>
      </div>
      {/* third section */}
      <div className="bg-blue-600 overflow-x-hidden relative">
        <div className="p-6 relative z-10 bg-black overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.2,
            }}
            exit={{ opacity: 0, x: -200 }}
            className="text-[16vw]"
          >
            About
          </motion.h1>
          <div className="flex gap-6 mb-6 lg:mb-20">
            <div
              className="flex flex-col justify-center items-center"
              onClick={() => setCurrentAboutSection("Education")}
            >
              <h1 className="xl:text-5xl text-[5vw] text-center cursor-pointer">
                Education
              </h1>
              {currentAboutSection === "Education" && (
                <motion.hr
                  className="bg-white w-full h-1"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  exit={{ width: 0 }}
                />
              )}
            </div>
            <div
              className="flex flex-col justify-center items-center"
              onClick={() => setCurrentAboutSection("Experience")}
            >
              <h1 className="xl:text-5xl text-[5vw] text-center cursor-pointer">
                Experience
              </h1>
              {currentAboutSection === "Experience" && (
                <motion.hr
                  className="bg-white w-full h-1"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  exit={{ width: 0 }}
                />
              )}
            </div>
            <div
              className="flex flex-col justify-center items-center"
              onClick={() => setCurrentAboutSection("Skills")}
            >
              <h1 className="xl:text-5xl text-[5vw] text-center cursor-pointer">
                Skills
              </h1>
              {currentAboutSection === "Skills" && (
                <motion.hr
                  className="bg-white w-full h-1"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  exit={{ width: 0 }}
                />
              )}
            </div>
          </div>
          <AnimatePresence>
            {currentAboutSection === "Experience" && (
              <div className="overflow-hidden">
                <div className="flex gap-6 xl:flex-row flex-col">
                  <motion.div
                    className="flex-[0.4] bg-white text-black p-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <h1 className="xl:text-5xl text-[5vw]">Thrivia LLC</h1>
                    <h1 className="xl:text-8xl text-[8vw] mt-6 font-bold">
                      Co-Founder & Software Engineer
                    </h1>
                    <ul className="flex gap-6 text-white flex-wrap mt-10">
                      <li className="bg-black p-3 xl:text-5xl text-[5vw]">
                        <p>Wheeling, IL</p>
                      </li>
                      <li className="bg-black p-3 xl:text-5xl text-[5vw]">
                        <p>May 2023 - Present</p>
                      </li>
                    </ul>
                    <p className="xl:text-5xl text-[5vw] mt-10">
                      Engineering a full-stack web application for a generative
                      artificial intelligence life coaching platform with a
                      mission to make life coaching more accessible to all.
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex-[0.6] bg-white text-black p-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <h1 className="xl:text-5xl text-[5vw]">
                      University of Florida CISE
                    </h1>
                    <h1 className="xl:text-8xl text-[8vw] mt-6 font-bold">
                      Engineering Undergraduate Researcher
                    </h1>
                    <ul className="flex gap-6 text-white flex-wrap mt-10">
                      <li className="bg-black p-3 xl:text-5xl text-[5vw]">
                        <p>Gainesville, FL</p>
                      </li>
                      <li className="bg-black p-3 xl:text-5xl text-[5vw]">
                        <p>August 2023 - Present</p>
                      </li>
                    </ul>
                    <p className="xl:text-5xl text-[5vw] mt-10">
                      Leading a team of five researchers as the project manager
                      in the development of an AI-driven platform aimed at
                      enhancing engineering technical interviews, overseeing
                      project timelines, tasks, and milestones.
                    </p>
                  </motion.div>
                </div>
                <div className="flex gap-6 xl:flex-row flex-col mt-6">
                  <motion.div
                    className="flex-[0.6] bg-white text-black p-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    {" "}
                    <h1 className="xl:text-5xl text-[5vw]">Harper College</h1>
                    <h1 className="xl:text-8xl text-[8vw] mt-6 font-bold">
                      Information Technology Intern
                    </h1>
                    <ul className="flex gap-6 text-white flex-wrap mt-10">
                      <li className="bg-black p-3 xl:text-5xl text-[5vw]">
                        <p>Palatine, IL</p>
                      </li>
                      <li className="bg-black p-3 xl:text-5xl text-[5vw]">
                        <p>June 2023 - August 2023</p>
                      </li>
                    </ul>
                    <p className="xl:text-5xl text-[5vw] mt-10">
                      Created an IT Service Catalog for Harper College employees
                      to reference.
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex-[0.4] bg-white text-black p-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    exit={{ opacity: 0, y: 50 }}
                  >
                    <h1 className="xl:text-5xl text-[5vw]">
                      SG Bike Repair | University of Florida
                    </h1>
                    <h1 className="xl:text-8xl text-[8vw] mt-6 font-bold">
                      Bike Mechanic
                    </h1>
                    <ul className="flex gap-6 text-white flex-wrap mt-10">
                      <li className="bg-black p-3 xl:text-5xl text-[5vw]">
                        <p>Gainesville, IL</p>
                      </li>
                      <li className="bg-black p-3 xl:text-5xl text-[5vw]">
                        <p>November 2022 - Present</p>
                      </li>
                    </ul>
                    <p className="xl:text-5xl text-[5vw] mt-10">
                      Troubleshooting, diagnosing, & repairing bicycles for UF
                      students.
                    </p>
                  </motion.div>
                </div>
              </div>
            )}
            {currentAboutSection === "Education" && (
              <motion.div
                className="flex-[0.4] bg-white text-black p-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                exit={{ opacity: 0, y: 50 }}
              >
                <h1 className="xl:text-5xl text-[5vw]">
                  B.S. Computer Science | Junior
                </h1>
                <h1 className="xl:text-8xl text-[8vw] mt-6 font-bold">
                  University of Florida
                </h1>
                <ul className="flex gap-6 text-white flex-wrap mt-10">
                  <li className="bg-black p-3 xl:text-5xl text-[5vw]">
                    <p>Data Structures and Algorithms</p>
                  </li>
                  <li className="bg-black p-3 xl:text-5xl text-[5vw]">
                    <p>Computer Organization</p>
                  </li>
                  <li className="bg-black p-3 xl:text-5xl text-[5vw]">
                    <p>Programming Language Concepts</p>
                  </li>
                  <li className="bg-black p-3 xl:text-5xl text-[5vw]">
                    <p>Physics I & II</p>
                  </li>
                  <li className="bg-black p-3 xl:text-5xl text-[5vw]">
                    <p>Calculus I, II, & III</p>
                  </li>
                </ul>
              </motion.div>
            )}
            {currentAboutSection === "Skills" && (
              <ul className="flex gap-6 text-black flex-wrap overflow-hidden">
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="bg-white p-3 xl:text-5xl text-[5vw]"
                  >
                    <p>{skill}</p>
                  </motion.li>
                ))}
              </ul>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* second section */}
      <div className="bg-black overflow-x-hidden relative">
        <div className="p-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1,
            }}
            exit={{ opacity: 0, x: -200 }}
            className="text-[16vw]"
          >
            Projects
          </motion.h1>
          <div className="flex lg:flex-row flex-col gap-6 mt-6">
            <div
              className="p-6 flex-[0.6] bg-[#497ABE] relative cursor-pointer hover:-translate-y-1 duration-100"
              onClick={() => openInNewTab("https://thrivia.ai")}
            >
              <h1 className="text-[8vw] font-bold">Thrivia</h1>
              <p className="xl:text-5xl text-[5vw]">
                AI-powered life coaching platform
              </p>
              <div className="flex justify-between items-center gap-6 mt-20">
                <div className="w-20 h-20 overflow-hidden border shadow-xl">
                  <Image
                    src={Thrivia}
                    alt="Thrivia"
                    className="w-full h-full"
                  ></Image>
                </div>
                <div className="flex mt-10 justify-end items-center mr-6">
                  <div className="flex justify-center items-center -rotate-90">
                    <hr className="bg-white w-1 h-8 rotate-45 -mr-3" />
                    <hr className="bg-white w-1 h-8 -rotate-45 -ml-3" />
                  </div>
                  <div className="-ml-4">
                    <hr className="bg-white w-1 h-12 rotate-90" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="p-6 flex-[0.4] bg-[#008CFF] relative cursor-pointer hover:-translate-y-1 duration-100"
              onClick={() => {
                toast.remove();
                toast.success("Coming soon!");
              }}
            >
              <h1 className="text-[8vw] font-bold">Skillbit</h1>
              <p className="xl:text-5xl text-[5vw]">
                AI-powered technical interviews
              </p>
              <div className="flex justify-between items-center gap-6 mt-20">
                <div className="w-20 h-20 overflow-hidden border shadow-xl">
                  <Image
                    src={Skillbit}
                    alt="Thrivia"
                    className="w-full h-full"
                  ></Image>
                </div>
                <div className="flex mt-10 justify-end items-center mr-6">
                  <div className="flex justify-center items-center -rotate-90">
                    <hr className="bg-white w-1 h-8 rotate-45 -mr-3" />
                    <hr className="bg-white w-1 h-8 -rotate-45 -ml-3" />
                  </div>
                  <div className="-ml-4">
                    <hr className="bg-white w-1 h-12 rotate-90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-6 mt-6">
            <div
              className="p-6 flex-[0.4] bg-[#4258B1] relative cursor-pointer hover:-translate-y-1 duration-100"
              onClick={() =>
                openInNewTab("https://github.com/tylerhaisman/Meteorite")
              }
            >
              <h1 className="text-[8vw] font-bold">Meteorite</h1>
              <p className="xl:text-5xl text-[5vw]">
                Instant messaging application
              </p>
              <div className="flex justify-between items-center gap-6 mt-20">
                <div className="w-20 h-20 overflow-hidden border shadow-xl">
                  <Image
                    src={Meteorite}
                    alt="Thrivia"
                    className="w-full h-full"
                  ></Image>
                </div>
                <div className="flex mt-10 justify-end items-center mr-6">
                  <div className="flex justify-center items-center -rotate-90">
                    <hr className="bg-white w-1 h-8 rotate-45 -mr-3" />
                    <hr className="bg-white w-1 h-8 -rotate-45 -ml-3" />
                  </div>
                  <div className="-ml-4">
                    <hr className="bg-white w-1 h-12 rotate-90" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="p-6 flex-[0.6] bg-[#2A2E6F] relative cursor-pointer hover:-translate-y-1 duration-100"
              onClick={() =>
                openInNewTab("https://tylerhaisman.github.io/Glowbit/")
              }
            >
              <h1 className="text-[8vw] font-bold">Glowbit</h1>
              <p className="xl:text-5xl text-[5vw]">A memoized logic game</p>
              <div className="flex justify-between items-center gap-6 mt-20">
                <div className="w-20 h-20 overflow-hidden border shadow-xl">
                  <Image
                    src={Glowbit}
                    alt="Thrivia"
                    className="w-full h-full"
                  ></Image>
                </div>
                <div className="flex mt-10 justify-end items-center mr-6">
                  <div className="flex justify-center items-center -rotate-90">
                    <hr className="bg-white w-1 h-8 rotate-45 -mr-3" />
                    <hr className="bg-white w-1 h-8 -rotate-45 -ml-3" />
                  </div>
                  <div className="-ml-4">
                    <hr className="bg-white w-1 h-12 rotate-90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-6 mt-6">
            <div
              className="p-6 flex-[0.6] bg-[#024FFE] relative cursor-pointer hover:-translate-y-1 duration-100"
              onClick={() =>
                openInNewTab("https://tylerhaisman.github.io/NestQuest/")
              }
            >
              <h1 className="text-[8vw] font-bold">NestQuest</h1>
              <p className="xl:text-5xl text-[5vw]">
                Enhanced housing search engine
              </p>
              <div className="flex justify-between items-center gap-6 mt-20">
                <div className="w-20 h-20 overflow-hidden border shadow-xl">
                  <Image
                    src={NestQuest}
                    alt="Thrivia"
                    className="w-full h-full"
                  ></Image>
                </div>
                <div className="flex mt-10 justify-end items-center mr-6">
                  <div className="flex justify-center items-center -rotate-90">
                    <hr className="bg-white w-1 h-8 rotate-45 -mr-3" />
                    <hr className="bg-white w-1 h-8 -rotate-45 -ml-3" />
                  </div>
                  <div className="-ml-4">
                    <hr className="bg-white w-1 h-12 rotate-90" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="p-6 flex-[0.4] bg-[#01B9AE] relative cursor-pointer hover:-translate-y-1 duration-100"
              onClick={() =>
                openInNewTab("https://tylerhaisman.github.io/AltoWeather/")
              }
            >
              <h1 className="text-[8vw] font-bold">Alto</h1>
              <p className="xl:text-5xl text-[5vw]">
                Simplified weather application
              </p>
              <div className="flex justify-between items-center gap-6 mt-20">
                <div className="w-20 h-20 overflow-hidden border shadow-xl">
                  <Image
                    src={Alto}
                    alt="Thrivia"
                    className="w-full h-full"
                  ></Image>
                </div>
                <div className="flex mt-10 justify-end items-center mr-6">
                  <div className="flex justify-center items-center -rotate-90">
                    <hr className="bg-white w-1 h-8 rotate-45 -mr-3" />
                    <hr className="bg-white w-1 h-8 -rotate-45 -ml-3" />
                  </div>
                  <div className="-ml-4">
                    <hr className="bg-white w-1 h-12 rotate-90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fourth section */}
      <div className="bg-white overflow-x-hidden relative text-black">
        <div className="p-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1,
            }}
            exit={{ opacity: 0, x: -200 }}
            className="text-[16vw]"
          >
            Contact
          </motion.h1>
          {/* <motion.p
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1,
              delay: 0.1,
            }}
            exit={{ opacity: 0, y: 200 }}
            className="xl:text-5xl text-[5vw]"
          >
            Let's connect.
          </motion.p> */}
          <div className="flex justify-between lg:items-center items-start gap-6 flex-col lg:flex-row mt-20">
            <div className="flex gap-6">
              <Image
                src={LinkedIn}
                alt="LinkedIn"
                className="lg:w-20 lg:h-20 w-12 h-12 hover:-translate-y-1 duration-100 cursor-pointer"
                onClick={() =>
                  openInNewTab("https://linkedin.com/in/tylerhaisman")
                }
              ></Image>
              <Image
                src={Github}
                alt="Github"
                className="lg:w-20 lg:h-20 w-12 h-12 hover:-translate-y-1 duration-100 cursor-pointer"
                onClick={() => openInNewTab("https://github.com/tylerhaisman")}
              ></Image>
              <Image
                src={Instagram}
                alt="Instagram"
                className="lg:w-20 lg:h-20 w-12 h-12 hover:-translate-y-1 duration-100 cursor-pointer"
                onClick={() =>
                  openInNewTab("https://instagram.com/tylercompsci")
                }
              ></Image>
            </div>
            <button
              className="bg-black p-6 flex gap-6 items-center justify-center lg:w-fit w-full hover:-translate-y-1 duration-100"
              onClick={() => openInNewTab("/TylerHaismanResume.pdf")}
            >
              <p className="xl:text-5xl text-[5vw] text-white">View Resume</p>
              <div className="flex justify-end items-center mr-6 ml-6">
                <div className="flex justify-center items-center -rotate-90">
                  <hr className="bg-white w-1 h-8 rotate-45 -mr-3" />
                  <hr className="bg-white w-1 h-8 -rotate-45 -ml-3" />
                </div>
                <div className="-ml-4">
                  <hr className="bg-white w-1 h-12 rotate-90" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
