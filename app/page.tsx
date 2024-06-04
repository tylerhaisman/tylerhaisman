"use client";

import Image from "next/image";
import Arrow from "../public/icons/arrow-up-340-svgrepo-com.svg";
import Pneumonia from "../public/images/Screenshot 2024-05-07 at 10.39.19 PM.png";
import GitHub from "../public/icons/github-142-svgrepo-com (3).svg";
import Live from "../public/icons/live-photo-svgrepo-com (1).svg";
import Documentation from "../public/icons/doc-paper-svgrepo-com.svg";
import LinkedIn from "../public/icons/linkedin-161-svgrepo-com (4).svg";
import Instagram from "../public/icons/instagram-svgrepo-com (3).svg";
import SkillbitScreenshot from "../public/images/skillbit.png";
import MeteoriteScreenshot from "../public/images/meteoriteScreenshot.png";
import DICOMScreenshot from "../public/images/dicomScreenshot.png";
import GlowbitScreenshot from "../public/images/glowbit.png";
import ThriviaScreenshot from "../public/images/thriviaScreenshot.png";
import NestQuestScreenshot from "../public/images/nestquestScreenshot.png";
import Link from "next/link";
import Professional from "../public/images/professional.jpeg";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Images in about me section
import About1 from "../public/images/about/IMG_3570.jpeg";
import About2 from "../public/images/about/IMG_5486.jpeg";
import About3 from "../public/images/about/IMG_6511.jpeg";
import About4 from "../public/images/about/IMG_6583.jpeg";
import About7 from "../public/images/about/IMG_6869.jpeg";
import About8 from "../public/images/about/IMG_6876.jpeg";
import About9 from "../public/images/about/IMG_6932.jpeg";

export default function Home() {
  const [pneumoniaGitHubMenu, setPneumoniaGitHubMenu] = useState(false);
  const text = "Hi, I'm Tyler";
  const [typedText, setTypedText] = useState("H");

  // Example for ref implementation
  // const exampleRef = useRef(null);
  // const exampleRefInView = useInView(exampleRef);

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

  function renderFooter() {
    const names = [];
    for (let i = 0; i < 1000; i++) {
      names.push(
        <p key={i} className="text-sm font-mono text-white whitespace-nowrap">
          TYLER HAISMAN |
        </p>
      );
    }
    return (
      <div className="absolute left-0 right-0 bottom-0 p-2 bg-black flex gap-2 justify-center items-center">
        {names}
      </div>
    );
  }

  return (
    <div className="relative overflow-x-hidden">
      <div className="relative">
        <div className="bg-blue-700 text-white md:px-12 px-8">
          <div className="max-w-7xl m-auto min-h-screen flex flex-col gap-12">
            <motion.div
              className="flex justify-between items-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {/* <Link className="text-lg" href={"/"}>
                TYLER_HAISMAN
              </Link> */}
              <motion.h1
                className="font-mono uppercase font-semibold text-lg"
                onClick={() => (window.location.href = "/")}
              >
                TYLER HAISMAN
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                  }}
                  className=""
                >
                  _
                </motion.span>
              </motion.h1>
              <button className="border border-white rounded-full px-4 py-2 duration-200">
                <p className="text-lg">
                  <Link href={"#contact"}>CONTACT</Link>
                </p>
              </button>
            </motion.div>
            <div className="flex relative flex-grow items-end">
              <div className="flex-1 relative z-20">
                <div className="pb-12">
                  <motion.div
                    className="flex relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <h1 className="maxHero font-mono uppercase font-semibold">
                      {typedText}
                      {typedText == "Hi, I'm Tyler" && (
                        <motion.span
                          initial={{ opacity: 1 }}
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                          }}
                          className=""
                        >
                          _
                        </motion.span>
                      )}
                      {typedText != "Hi, I'm Tyler" && (
                        <motion.span initial={{ opacity: 1 }} className="">
                          _
                        </motion.span>
                      )}
                    </h1>
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
              <div className="bg-gradient-to-tr to-blue-700 from-transparent flex-1 blur-3xl absolute top-0 bottom-1/4 left-0 right-0 rounded-3xl"></div>
            </div>
          </div>
        </div>
        <div className="md:px-12 px-8 py-48" id="projects">
          <div className="max-w-7xl m-auto">
            <motion.h1 className="maxHero font-mono uppercase font-semibold">
              PROJECTS
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
                className=""
              >
                _
              </motion.span>
            </motion.h1>
            <motion.div
              className=""
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mt-8 flex flex-col md:grid grid-cols-2 border-white/20 border-dashed gap-x-8 gap-y-16 pt-8">
                <div className="flex flex-col justify-between gap-8">
                  <div className="previewImage">
                    <div className="flex gap-4 flex-col">
                      <div className="border border-black px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={Pneumonia}
                          alt="Lungs"
                          className="mx-auto rounded-t-md duration-200 shadow-lg border border-black-10"
                        ></Image>
                      </div>
                      <h2 className="text-3xl font-bold">
                        Pneumonia Prediction Utility
                      </h2>
                    </div>
                    <p className="text-lg">
                      Uses a custom neural network to determine whether a chest
                      X-ray depicts pneumonia
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono text-white">
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        PYTHON
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        DJANGO
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        TENSORFLOW
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        REACT
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        TYPESCRIPT
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        TAILWINDCSS
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-black rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
                      onClick={() =>
                        window.open(
                          "documents/pneumonia_prediction_utility/pneumonia_prediction_utility.pdf",
                          "_blank"
                        )
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
                      className="border border-black rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center relative"
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
                      <div className="border border-black px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={ThriviaScreenshot}
                          alt="Lungs"
                          className="mx-auto rounded-t-md duration-200 shadow-lg"
                        ></Image>
                      </div>
                      <h2 className="text-3xl font-bold">Thrivia</h2>
                    </div>
                    <p className="text-lg">AI-powered life coaching platform</p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono text-white">
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        REACT
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        JAVASCRIPT
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        EXPRESS.JS
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        AZURE
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        POSTGRESQL
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        PRISMA
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        STRIPE
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-black rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
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
                      <div className="border border-black px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={DICOMScreenshot}
                          alt="DICOMScreenshot"
                          className="mx-auto rounded-t-md duration-200 shadow-lg"
                        ></Image>
                      </div>
                      <h2 className="text-3xl font-bold">DICOM Image Viewer</h2>
                    </div>
                    <p className="text-lg">
                      Simple, online medical image viewer
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono text-white">
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        CORNERSTONE.JS
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        REACT
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        TYPESCRIPT
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        TAILWINDCSS
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-black rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
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
                      className="border border-black rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
                      onClick={() =>
                        window.open(
                          "documents/online_dicom_viewer/online_dicom_viewer.pdf",
                          "_blank"
                        )
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
                      className="border border-black rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
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
                      <div className="border border-black px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={SkillbitScreenshot}
                          alt="Lungs"
                          className="mx-auto rounded-t-md duration-200 shadow-lg"
                        ></Image>
                      </div>
                      <h2 className="text-3xl font-bold">Skillbit</h2>
                    </div>
                    <p className="text-lg">AI-powered technical interviews</p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono text-white">
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        REACT
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        TYPESCRIPT
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        TAILWINDCSS
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        DOCKER
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        AWS
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        POSTGRESQL
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        PRISMA
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-black rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
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
                      <div className="border border-black px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={MeteoriteScreenshot}
                          alt="Lungs"
                          className="mx-auto rounded-t-md duration-200 shadow-lg"
                        ></Image>
                      </div>
                      <h2 className="text-3xl font-bold">
                        Meteorite Messaging
                      </h2>
                    </div>
                    <p className="text-lg">Instant messaging application</p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono text-white">
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        REACT
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        TYPESCRIPT
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        POSTGRESQL
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-black rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
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
                      <div className="border border-black px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={GlowbitScreenshot}
                          alt="Lungs"
                          className="mx-auto rounded-t-md duration-200 shadow-lg"
                        ></Image>
                      </div>
                      <h2 className="text-3xl font-bold">Glowbit</h2>
                    </div>
                    <p className="text-lg">A memoized logic game</p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono text-white">
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        REACT
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        JAVASCRIPT
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-black rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
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
                      className="border border-black rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
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
                      <div className="border border-black px-12 pt-8 rounded-md overflow-hidden xl:h-56">
                        <Image
                          src={NestQuestScreenshot}
                          alt="Lungs"
                          className="mx-auto rounded-t-md duration-200 shadow-lg"
                        ></Image>
                      </div>
                      <h2 className="text-3xl font-bold">NestQuest</h2>
                    </div>
                    <p className="text-lg">Enhanced housing search engine</p>
                    <div className="flex gap-2 mt-4 flex-wrap text-sm font-mono text-white">
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        HTML
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        CSS
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        JAVASCRIPT
                      </div>
                      <div className="px-2 py-1 bg-black rounded-md border border-white/10 backdrop-blur-3xl">
                        JQUERY
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      className="border border-black rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
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
                      className="border border-black rounded-full px-4 py-2 duration-200 flex gap-2 justify-center items-center"
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
        </div>
      </div>
      <div
        className="bg-gray-100 md:px-12 px-8 py-48 border-t border-black text-black"
        id="about"
      >
        <div className="max-w-7xl m-auto relative">
          <motion.h1 className="maxHero font-mono uppercase font-semibold">
            ABOUT ME
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
              className=""
            >
              _
            </motion.span>
          </motion.h1>
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute right-0 -top-72 border border-black w-[20vw] min-w-60 max-w-sm rounded-md overflow-hidden rotate-6">
              <Image src={About8} alt="Image of Tyler"></Image>
            </div>
            <div className="flex justify-center items-center mt-12">
              <div className="border border-black w-[20vw] min-w-60 max-w-sm rounded-md overflow-hidden -rotate-6">
                <Image src={About4} alt="Image of Tyler"></Image>
              </div>
              <div className="border border-black w-[20vw] min-w-60 max-w-sm rounded-md overflow-hidden rotate-6">
                <Image src={About7} alt="Image of Tyler"></Image>
              </div>
              <div className="border border-black w-[20vw] min-w-60 max-w-sm rounded-md overflow-hidden -rotate-3">
                <Image src={About9} alt="Image of Tyler"></Image>
              </div>
            </div>
            <div className="mt-48 flex flex-col gap-24">
              <div className="flex justify-between items-center gap-12 md:flex-row flex-col-reverse">
                <div className="flex-1 text-center relative">
                  <h2 className="text-3xl">
                    I am a senior at the{" "}
                    <span className="font-bold">University of Florida.</span>
                  </h2>
                </div>
                <div className="border border-black rounded-md rotate-3 flex-1 relative">
                  <Image
                    src={About1}
                    alt="Image of Tyler"
                    className="rounded-md"
                  ></Image>
                  <p className="absolute -left-8 -top-4 text-3xl bg-blue-700 px-2 py-1 rounded-md text-white uppercase font-mono -rotate-12 w-fit m-auto border border-black">
                    Go Gators!
                    <motion.span
                      initial={{ opacity: 1 }}
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                      }}
                      className=""
                    >
                      _
                    </motion.span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center gap-12 md:flex-row flex-col-reverse">
                <div className="flex-1 text-center">
                  <h2 className="text-3xl">
                    I am a Software Engineer Intern at{" "}
                    <span className="font-bold">Southwest Airlines.</span>
                  </h2>
                </div>
                <div className="border border-black rounded-md overflow-hidden -rotate-3 flex-1">
                  <Image src={About3} alt="Image of Tyler"></Image>
                </div>
              </div>
              <div className="flex justify-between items-center gap-12 md:flex-row flex-col-reverse">
                <div className="flex-1 text-center">
                  <h2 className="text-3xl">I love to travel.</h2>
                </div>
                <div className="border border-black rounded-md overflow-hidden rotate-6 flex-1">
                  <Image src={About2} alt="Image of Tyler"></Image>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        className="bg-white md:px-12 px-8 py-48 border-t border-black text-black"
        id="contact"
      >
        <div className="max-w-7xl m-auto relative">
          <motion.h1 className="maxHero font-mono uppercase font-semibold">
            {"LET'S CONNECT"}
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
              className=""
            >
              _
            </motion.span>
          </motion.h1>
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="border border-black rounded-md mt-48 p-12 shadow-xl rotate-2">
              <div className="flex justify-center items-center gap-24 md:flex-row flex-col">
                <div className="border border-black rounded-full overflow-hidden">
                  <Image
                    src={Professional}
                    alt="Professional image of Tyler"
                  ></Image>
                </div>
                <div className="text-center flex flex-col justify-center items-center gap-6">
                  <div className="">
                    <h2 className="text-3xl font-bold">Tyler Haisman</h2>
                    <p className="text-lg">
                      Computer Science student at University of Florida
                    </p>
                  </div>
                  <hr className="w-12 border-t border-black" />
                  <div className="flex flex-col justify-center items-center gap-2">
                    <motion.div
                      className="flex gap-4 mt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <button
                        className="border-white rounded-full w-fit duration-200"
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
                        className="border-white rounded-full w-fit duration-200"
                        onClick={() =>
                          window.open(
                            "https://github.com/tylerhaisman",
                            "_blank"
                          )
                        }
                      >
                        <Image
                          src={GitHub}
                          alt="GitHub"
                          className="w-4 h-4"
                        ></Image>
                      </button>
                      <button
                        className="border-white rounded-full w-fit duration-200"
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
                    <button
                      className="border border-black rounded-full px-4 py-2 duration-200 flex items-center justify-center gap-2 mt-2"
                      onClick={() =>
                        window.open(
                          "documents/TylerHaismanResume_2.pdf",
                          "_blank"
                        )
                      }
                    >
                      <Image
                        src={Documentation}
                        alt="Documentation"
                        className="w-4 h-4"
                      ></Image>
                      <p className="text-lg">VIEW RESUME</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {renderFooter()}
      </div>
    </div>
  );
}
