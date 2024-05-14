"use client";

import Image from "next/image";
import Arrow from "../../public/icons/arrow-up-340-svgrepo-com.svg";
import markdownContent from "../../public/markdown/pneumonia_prediction_utility";
import "../markdown.css";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Markdown from "react-markdown";

export default function Home() {
  useEffect(() => {
    console.log(markdownContent);
  }, []);
  return (
    <div className="bg-zinc-950 text-white scrollbar">
      <div className="max-w-7xl mx-auto md:px-12 py-12 px-8 relative">
        <div className="relative z-10">
          <div className="">
            <motion.div
              className="flex justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link className="text-xl font-semibold" href={"/"}>
                TYLER_HAISMAN
              </Link>
              <button className="border border-gray-50 rounded-full px-4 py-2 duration-200">
                <p className="text-lg">
                  <Link href={"/#contact"}>CONTACT</Link>
                </p>
              </button>
            </motion.div>
            <motion.hr
              className="w-full mt-12 border-dashed border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            />
            <div className="flex relative">
              <div className="flex-1 relative z-20">
                <div className="pr-8 pt-60 pb-20">
                  <motion.div
                    className="flex items-center justify-normal relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <p className="text-7xl">
                      Pneumonia Prediction Utility Documentation
                    </p>
                  </motion.div>
                  <motion.p
                    className="text-lg mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Read more about how my Pneumonia Prediction Utility and what
                    inspired its creation.
                  </motion.p>
                  <motion.button
                    className="mt-8 flex items-start duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      href={"#documentation"}
                      className="hover:translate-y-[-4px] duration-200"
                    >
                      <div className="flex flex-col justify-center items-center border border-white rounded-full w-20 h-20 cursor-pointer">
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
              <div className="bg-gradient-to-tr to-blue-700 from-transparent flex-1 blur-3xl lg:relative lg:left-0 lg:right-0 absolute top-0 bottom-0 left-1/2 right-0"></div>
            </div>
            <div className="markdown" id="documentation">
              <Markdown>{markdownContent}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
