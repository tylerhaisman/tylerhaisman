"use client";

import Image from "next/image";
import Arrow from "../public/icons/arrow-up-340-svgrepo-com.svg";
import Pneumonia from "../public/images/Screenshot 2024-05-07 at 10.39.19 PM.png";
import GitHub from "../public/icons/github-142-svgrepo-com (3).svg";
import Live from "../public/icons/live-photo-svgrepo-com (1).svg";
import Documentation from "../public/icons/doc-paper-svgrepo-com.svg";
import LinkedIn from "../public/icons/linkedin-161-svgrepo-com (4).svg";
import Instagram from "../public/icons/instagram-svgrepo-com (3).svg";
import Lungs from "../public/icons/lungs-lung-svgrepo-com (1).svg";
import SkillbitScreenshot from "../public/images/skillbit.png";
import MeteoriteScreenshot from "../public/images/meteoriteScreenshot.png";
import DICOMScreenshot from "../public/images/dicomScreenshot.png";
import SkillbitLogo from "../public/images/logo_mini_transparent_white.png";
import GlowbitScreenshot from "../public/images/glowbit.png";
import GlowbitLogo from "../public/icons/puzzle-toy-svgrepo-com.svg";
import MessagingLogo from "../public/icons/message-square-lines-svgrepo-com.svg";
import ThriviaScreenshot from "../public/images/thriviaScreenshot.png";
import NestQuestScreenshot from "../public/images/nestquestScreenshot.png";
import UFLogo from "../public/images/uf_logo.jpg";
import SWALogo from "../public/images/swa_logo.jpg";
import ThriviaLogo from "../public/images/thrivia.png";
import Portrait from "../public/images/TSJEUE34M-U02QCLP04Q0-c7e769cd5507-512.jpeg";
import HarperLogo from "../public/images/harper_logo.png";
import RetroGator from "../public/images/retro_gator.png";
import SGLogo from "../public/images/SG-Logo-Color-Vector-EPS_RGB-300x300.png";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function Home() {
  const [pneumoniaGitHubMenu, setPneumoniaGitHubMenu] = useState(false);
  const [viewMoreExperiences, setViewMoreExperiences] = useState(false);
  const text = "Hi, I'm Tyler.";
  const [typedText, setTypedText] = useState("H");
  // const projectsRef = useRef(null);
  // const projectsInView = useInView(projectsRef);
  // const educationRef = useRef(null);
  // const educationInView = useInView(educationRef);
  // const experienceRef = useRef(null);
  // const experienceInView = useInView(experienceRef);
  // const contactRef = useRef(null);
  // const contactInView = useInView(contactRef);
  const projectsRef = useRef(null);
  const projectsInView = true;
  const educationRef = useRef(null);
  const educationInView = true;
  const experienceRef = useRef(null);
  const experienceInView = true;
  const contactRef = useRef(null);
  const contactInView = true;

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      charIndex++;
      setTypedText((prevText) => prevText + text.charAt(charIndex));
      if (charIndex === text.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="bg-zinc-950 text-white scrollbar">
      <div className="max-w-7xl mx-auto md:px-12 py-12 px-8 relative">
        <div className="relative z-10">
          <div className="min-h-screen flex flex-col gap-12">
            <motion.div
              className="flex justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link className="text-lg" href={"/"}>
                TYLER_HAISMAN
              </Link>
              <button className="border border-gray-50 rounded-full px-4 py-2 duration-200">
                <p className="text-lg">
                  <Link href={"#contact"}>CONTACT</Link>
                </p>
              </button>
            </motion.div>
            {/* <motion.hr
              className="w-full mt-12 border-dashed border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            /> */}
            <div className="flex relative flex-grow items-end">
              <div className="flex-1 relative z-20">
                <div className="pb-24">
                  <motion.div
                    className="flex items-center justify-normal relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <p className="maxHero">{typedText}</p>
                  </motion.div>
                  <motion.p
                    className="text-lg mt-8 md:w-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    I am a Computer science student and full stack software
                    engineer with a passion for software development and
                    problem-solving.
                  </motion.p>
                  <motion.button
                    className="mt-8 flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      href={"#projects"}
                      className="hover:translate-y-[-4px] duration-200"
                    >
                      <div className="flex flex-col justify-center items-center border border-white rounded-full w-20 h-20">
                        <div className="h-10 w-1 bg-white border-none mt-2"></div>
                        <Image
                          src={Arrow}
                          alt="Arrow"
                          className="w-10 h-10 rotate-180 -mt-7"
                        ></Image>
                      </div>
                    </Link>
                  </motion.button>
                </div>
              </div>
              <div className="bg-gradient-to-tr to-blue-700 from-transparent flex-1 blur-3xl absolute top-0 bottom-1/4 left-0 right-0"></div>
            </div>
          </div>
          {/* <hr className="w-full h-1 mb-20 border-dashed border-white/20" /> */}
          <div className="mt-40" id="projects" ref={projectsRef}>
            <motion.h1
              className="text-lg max-w-4xl border-b pb-2 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0 }}
            >
              PROJECTS
            </motion.h1>
            <motion.div
              className=""
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              {/* <div className="mt-8 flex flex-col md:flex-row border-t border-white/20 border-dashed gap-16"> */}
              <div className="mt-8 flex flex-col md:grid grid-cols-2 border-white/20 border-dashed gap-x-8 gap-y-16 pt-8">
                <div className="flex flex-col justify-between gap-8">
                  <div className="previewImage">
                    <div className="flex gap-4 flex-col">
                      <div className="bg-cyan-700 px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={Pneumonia}
                          alt="Lungs"
                          className="mx-auto rounded-t-md duration-200 shadow-2xl"
                        ></Image>
                      </div>
                      <h2 className="text-3xl">Pneumonia Prediction Utility</h2>
                    </div>
                    <p className="text-lg">
                      Uses a custom neural network to determine whether a chest
                      X-ray depicts pneumonia
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono">
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        PYTHON
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        DJANGO
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        TENSORFLOW
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        REACT
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        TYPESCRIPT
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        TAILWINDCSS
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-gray-50 rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
                      onClick={() =>
                        window.open("/pneumonia_prediction_utility", "_blank")
                      }
                    >
                      <Image
                        src={Documentation}
                        alt="Documentation"
                        className="w-4 h-4"
                      ></Image>
                      <p className="text-lg">READ MORE</p>
                    </button>
                    <button
                      className="border border-gray-50 rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center relative"
                      onClick={() =>
                        setPneumoniaGitHubMenu(!pneumoniaGitHubMenu)
                      }
                    >
                      <Image
                        src={GitHub}
                        alt="GitHub"
                        className="w-4 h-4"
                      ></Image>
                      <AnimatePresence>
                        {pneumoniaGitHubMenu && (
                          <motion.div
                            className="absolute bottom-full mb-2 border border-white/10 rounded-md text-left w-max bg-white/10 backdrop-blur-3xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                          >
                            <p
                              className="p-4 hover:bg-white/10 duration-200"
                              onClick={() =>
                                window.open(
                                  "https://github.com/tylerhaisman/pneumonia_prediction_frontend",
                                  "_blank"
                                )
                              }
                            >
                              Front-end
                            </p>
                            <p
                              className="p-4 hover:bg-white/10 duration-200"
                              onClick={() =>
                                window.open(
                                  "https://github.com/tylerhaisman/pneumonia_prediction_backend",
                                  "_blank"
                                )
                              }
                            >
                              Back-end
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <p className="text-lg">GITHUB</p>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-8">
                  <div className="previewImage">
                    <div className="flex gap-4 flex-col">
                      <div className="bg-[#608BC6] px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={ThriviaScreenshot}
                          alt="Lungs"
                          className="mx-auto rounded-t-md duration-200 shadow-2xl"
                        ></Image>
                      </div>
                      <h2 className="text-3xl">Thrivia</h2>
                    </div>
                    <p className="text-lg">AI-powered life coaching platform</p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono">
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        REACT
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        JAVASCRIPT
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        EXPRESS.JS
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        AZURE
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        POSTGRESQL
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        PRISMA
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        STRIPE
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-gray-50 rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
                      onClick={() =>
                        window.open("https://thrivia.ai", "_blank")
                      }
                    >
                      <Image src={Live} alt="Live" className="w-4 h-4"></Image>
                      <p className="text-lg">LIVE DEMO</p>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-8">
                  <div className="previewImage">
                    <div className="flex gap-4 flex-col">
                      <div className="bg-[#555555]/30 px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={DICOMScreenshot}
                          alt="DICOMScreenshot"
                          className="mx-auto rounded-t-md duration-200 shadow-2xl"
                        ></Image>
                      </div>
                      <h2 className="text-3xl">DICOM Image Viewer</h2>
                    </div>
                    <p className="text-lg">
                      Simple, online medical image viewer
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono">
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        CORNERSTONE.JS
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        REACT
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        TYPESCRIPT
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        TAILWINDCSS
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-gray-50 rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
                      onClick={() =>
                        window.open(
                          "https://online-dicom-viewer.vercel.app/",
                          "_blank"
                        )
                      }
                    >
                      <Image src={Live} alt="Live" className="w-4 h-4"></Image>
                      <p className="text-lg">LIVE DEMO</p>
                    </button>
                    <button
                      className="border border-gray-50 rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
                      onClick={() =>
                        window.open("/online_dicom_viewer", "_blank")
                      }
                    >
                      <Image
                        src={Documentation}
                        alt="Documentation"
                        className="w-4 h-4"
                      ></Image>
                      <p className="text-lg">READ MORE</p>
                    </button>
                    <button
                      className="border border-gray-50 rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
                      onClick={() =>
                        window.open(
                          "https://github.com/tylerhaisman/online_dicom_viewer",
                          "_blank"
                        )
                      }
                    >
                      <Image
                        src={GitHub}
                        alt="GitHub"
                        className="w-4 h-4"
                      ></Image>
                      <p className="text-lg">GITHUB</p>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-8">
                  <div className="previewImage">
                    <div className="flex gap-4 flex-col">
                      <div className="bg-[#4E46DD]/90 px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={SkillbitScreenshot}
                          alt="Lungs"
                          className="mx-auto rounded-t-md duration-200 shadow-2xl"
                        ></Image>
                      </div>
                      <h2 className="text-3xl">Skillbit</h2>
                    </div>
                    <p className="text-lg">AI-powered technical interviews</p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono">
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        REACT
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        TYPESCRIPT
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        TAILWINDCSS
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        DOCKER
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        AWS
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        POSTGRESQL
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        PRISMA
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-gray-50 rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
                      onClick={() =>
                        window.open("https://github.com/SkillbitAI", "_blank")
                      }
                    >
                      <Image
                        src={GitHub}
                        alt="GitHub"
                        className="w-4 h-4"
                      ></Image>
                      <p className="text-lg">GITHUB</p>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-8">
                  <div className="previewImage">
                    <div className="flex gap-4 flex-col">
                      <div className="bg-[#3C4A8F] px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={MeteoriteScreenshot}
                          alt="Lungs"
                          className="mx-auto rounded-t-md duration-200 shadow-2xl"
                        ></Image>
                      </div>
                      <h2 className="text-3xl">Meteorite Messaging</h2>
                    </div>
                    <p className="text-lg">Instant messaging application</p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono">
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        REACT
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        TYPESCRIPT
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        POSTGRESQL
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-gray-50 rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
                      onClick={() =>
                        window.open(
                          "https://github.com/tylerhaisman/Meteorite",
                          "_blank"
                        )
                      }
                    >
                      <Image
                        src={GitHub}
                        alt="GitHub"
                        className="w-4 h-4"
                      ></Image>
                      <p className="text-lg">GITHUB</p>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-8">
                  <div className="previewImage">
                    <div className="flex gap-4 flex-col">
                      <div className="bg-[#22223F] px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={GlowbitScreenshot}
                          alt="Lungs"
                          className="mx-auto rounded-t-md duration-200 shadow-2xl"
                        ></Image>
                      </div>
                      <h2 className="text-3xl">Glowbit</h2>
                    </div>
                    <p className="text-lg">A memoized logic game</p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono">
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        REACT
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        JAVASCRIPT
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-gray-50 rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
                      onClick={() =>
                        window.open(
                          "https://tylerhaisman.github.io/Glowbit/",
                          "_blank"
                        )
                      }
                    >
                      <Image src={Live} alt="Live" className="w-4 h-4"></Image>
                      <p className="text-lg">LIVE DEMO</p>
                    </button>
                    <button
                      className="border border-gray-50 rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
                      onClick={() =>
                        window.open(
                          "https://github.com/tylerhaisman/Glowbit",
                          "_blank"
                        )
                      }
                    >
                      <Image
                        src={GitHub}
                        alt="GitHub"
                        className="w-4 h-4"
                      ></Image>
                      <p className="text-lg">GITHUB</p>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-8">
                  <div className="previewImage">
                    <div className="flex gap-4 flex-col">
                      <div className="bg-[#024FFE]/90 px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={NestQuestScreenshot}
                          alt="Lungs"
                          className="mx-auto rounded-t-md duration-200 shadow-2xl"
                        ></Image>
                      </div>
                      <h2 className="text-3xl">NestQuest</h2>
                    </div>
                    <p className="text-lg">Enhanced housing search engine</p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono">
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        HTML
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        CSS
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        JAVASCRIPT
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        JQUERY
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-gray-50 rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
                      onClick={() =>
                        window.open(
                          "https://tylerhaisman.github.io/NestQuest/",
                          "_blank"
                        )
                      }
                    >
                      <Image src={Live} alt="Live" className="w-4 h-4"></Image>
                      <p className="text-lg">LIVE DEMO</p>
                    </button>
                    <button
                      className="border border-gray-50 rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
                      onClick={() =>
                        window.open(
                          "https://github.com/tylerhaisman/NestQuest",
                          "_blank"
                        )
                      }
                    >
                      <Image
                        src={GitHub}
                        alt="GitHub"
                        className="w-4 h-4"
                      ></Image>
                      <p className="text-lg">GITHUB</p>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-40" ref={educationRef}>
            <motion.h1
              className="text-lg max-w-4xl border-b pb-2 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={educationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0 }}
            >
              EDUCATION
            </motion.h1>
            <motion.div
              className="mt-8 border-white/20 border-dashed py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={educationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="flex gap-16 md:flex-row flex-col">
                <div className="flex-1 flex flex-col gap-4">
                  <Image
                    src={UFLogo}
                    alt="UF Logo"
                    className="w-20 h-20 rounded-full border"
                  ></Image>
                  <div className="">
                    <h2 className="text-3xl">University of Florida</h2>
                    <p className="text-lg">
                      B.S. Computer Science | 3.9 GPA | May 2025 Expected
                      Graduation
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono">
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        DATA STRUCTURES & ALROGITHMS
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        OPERATING SYSTEMS
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        ENGINEERING STATISTICS
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        COMPUTER ORGANIZATION
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        PROGRAMMING LANGUAGE CONCEPTS
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        PHYSICS I & II
                      </div>
                      <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                        CALCULUS I, II, & III
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative flex justify-center items-center">
                  <div className="flex-1 bg-gradient-to-tr from-transparent to-blue-700 blur-3xl flex justify-center items-center absolute left-0 right-0 top-0 bottom-0"></div>
                  {/* <Image
                    src={RetroGator}
                    alt="Retro Gator"
                    className="my-12 max-w-80 rotate-6 absolute z-20"
                  ></Image>
                  <Image
                    src={RetroGator}
                    alt="Retro Gator"
                    className="my-12 max-w-96 rotate-3 opacity-60 blur-md absolute ml-20"
                  ></Image> */}
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-40 relative" ref={experienceRef}>
            <motion.h1
              className="text-lg max-w-4xl border-b pb-2 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={experienceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0 }}
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              className="py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={experienceInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="flex md:flex-row-reverse flex-col justify-between gap-4 border-dashed border-white/20 py-8 backdrop-blur-3xl">
                <Image
                  src={SWALogo}
                  alt="UF Logo"
                  className="w-20 h-20 rounded-full border"
                ></Image>
                <div className="">
                  <h2 className="text-3xl">Southwest Airlines</h2>
                  <p className="text-lg">
                    Software Engineer Intern | May 2024 - August 2024
                  </p>
                  {/* <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono">
                    <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                      JAVASCRIPT
                    </div>
                    <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                      AWS
                    </div>
                    <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                      AGILE METHODOLOGIES
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="flex md:flex-row-reverse flex-col justify-between gap-4 border-dashed border-white/20 py-8 backdrop-blur-3xl">
                <Image
                  src={HarperLogo}
                  alt="UF Logo"
                  className="w-20 h-20 rounded-full border"
                ></Image>
                <div className="">
                  <h2 className="text-3xl">Harper College</h2>
                  <p className="text-lg">
                    Information Technology Intern | June 2023 - August 2023
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono">
                    <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                      REACT
                    </div>
                    <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                      TYPESCRIPT
                    </div>
                    <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                      JAVASCRIPT
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row-reverse flex-col justify-between gap-4 border-dashed border-white/20 py-8 backdrop-blur-3xl">
                <Image
                  src={ThriviaLogo}
                  alt="UF Logo"
                  className="w-20 h-20 rounded-full border"
                ></Image>
                <div className="">
                  <h2 className="text-3xl">Thrivia</h2>
                  <p className="text-lg">
                    Co-Founder and Software Engineer | May 2023 - Present
                  </p>
                  <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono">
                    <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                      REACT
                    </div>
                    <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                      JAVASCRIPT
                    </div>
                    <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                      EXPRESS.JS
                    </div>
                    <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                      AZURE
                    </div>
                    <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                      POSTGRESQL
                    </div>
                    <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                      PRISMA
                    </div>
                    <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                      STRIPE
                    </div>
                  </div>
                </div>
              </div>
              {viewMoreExperiences && (
                <div className="">
                  <div className="flex md:flex-row-reverse flex-col justify-between gap-4 border-dashed border-white/20 py-8 backdrop-blur-3xl">
                    <Image
                      src={UFLogo}
                      alt="UF Logo"
                      className="w-20 h-20 rounded-full border"
                    ></Image>
                    <div className="">
                      <h2 className="text-3xl">
                        UF Computer & Information Science & Engineering
                      </h2>
                      <p className="text-lg">
                        Engineering Undergraduate Researcher | August 2023 -
                        Present
                      </p>
                      <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono">
                        <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                          REACT
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                          TYPESCRIPT
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                          TAILWINDCSS
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                          DOCKER
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                          AWS
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                          POSTGRESQL
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                          PRISMA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-row-reverse flex-col justify-between gap-4 border-dashed border-white/20 py-8 backdrop-blur-3xl">
                    <Image
                      src={SGLogo}
                      alt="UF Logo"
                      className="w-20 h-20 rounded-full border"
                    ></Image>
                    <div className="">
                      <h2 className="text-3xl">SG Bike Repair</h2>
                      <p className="text-lg">
                        Bike Mechanic | November 2022 - Present
                      </p>
                      <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono">
                        <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                          BIKE REPAIR
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                          TROUBLESHOOTING
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                          TEAM COLLABORATION
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                          INVENTORY MANAGEMENT
                        </div>
                        <div className="px-2 py-1 bg-white/10 rounded-md border border-white/10 backdrop-blur-3xl">
                          CUSTOMER SERVICE
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
            <AnimatePresence>
              {!viewMoreExperiences && (
                <motion.div
                  className="bg-gradient-to-t from-zinc-950 to-transparent absolute left-0 right-0 bottom-0 h-96"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <button
                    className="border border-gray-50 rounded-full px-4 py-2 duration-200 absolute bottom-0 left-0 right-0 w-fit mx-auto"
                    onClick={() => setViewMoreExperiences(true)}
                  >
                    <p className="text-lg">VIEW MORE</p>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="mt-40" id="contact" ref={contactRef}>
            <motion.h1
              className="text-lg max-w-4xl border-b pb-2 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0 }}
            >
              CONTACT
            </motion.h1>
            <motion.div
              className="mt-8 border-white/20 border-dashed py-16 relative backdrop-blur-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute blur-3xl bg-gradient-to-tl from-transparent to-blue-700 left-0 right-1/2 top-0 bottom-0"></div>
              <div className="flex-1 flex flex-col gap-4 justify-center items-center relative">
                <Image
                  src={Portrait}
                  alt="UF Logo"
                  className="w-36 h-36 rounded-full border"
                ></Image>
                <div className="text-center">
                  <h2 className="text-3xl">Tyler Haisman</h2>
                  <p className="text-lg">
                    Computer Science student at University of Florida
                  </p>
                </div>
                <motion.div
                  className="flex gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={contactInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    className="p-4 border border-white rounded-full w-fit duration-200"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/tylerhaisman/",
                        "_blank"
                      )
                    }
                  >
                    <Image
                      src={LinkedIn}
                      alt="LinkedIn"
                      className="w-4 h-4"
                    ></Image>
                  </button>
                  <button
                    className="p-4 border border-white rounded-full w-fit duration-200"
                    onClick={() =>
                      window.open("https://github.com/tylerhaisman", "_blank")
                    }
                  >
                    <Image
                      src={GitHub}
                      alt="GitHub"
                      className="w-4 h-4"
                    ></Image>
                  </button>
                  <button
                    className="p-4 border border-white rounded-full w-fit duration-200"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/tylercompsci/",
                        "_blank"
                      )
                    }
                  >
                    <Image
                      src={Instagram}
                      alt="Instagram"
                      className="w-4 h-4"
                    ></Image>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
