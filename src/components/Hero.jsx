import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/images/profile-pic.jpg";
import { motion } from "framer-motion";

const animation1 = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={animation1(0)}
              initial="hidden"
              whileInView="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Darshan Soni
            </motion.h1>

            <motion.span
              variants={animation1(0.5)}
              initial="hidden"
              whileInView="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={animation1(1)}
              initial="hidden"
              whileInView="visible"
              className="my-2 max-w-xl py-6 font-light"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-64 lg:w-1/3 lg:ml-40 lg:p-8">
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: 1.2 },
              }}
              src={profilePic}
              alt="Darshan Soni"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
