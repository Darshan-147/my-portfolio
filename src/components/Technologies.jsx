import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiMongodb,
  SiGit,
  SiPython,
} from "react-icons/si";
import { TECHNOLOGIES } from "../constants";
import PythonLogo from "./PythonLogo";
import '../index.css';

const iconComponents = {
  html: <SiHtml5 />,
  css: <SiCss3 />,
  mongodb: <SiMongodb />,
  express: <SiExpress />,
  react: <RiReactjsLine />,
  node: <FaNodeJs />,
  git: <SiGit />,
  python: <PythonLogo />,
};

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Heading */}
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Technologies */}
        {TECHNOLOGIES.map((tech, index) => (
          <motion.div
            key={tech.id}
            variants={iconVariants(1.5 + index * 0.5)}
            initial="initial"
            animate="animate"
            className={`relative rounded-2xl border-4 border-neutral-800 ${
              tech.id === 'python' 
                ? 'python-border' // Custom class for Python
                : `hover:border-${tech.hoverColor}`
            } p-4`}
            onMouseEnter={() => setHoveredTech(tech.id)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <div
              className={`text-7xl ${
                tech.id === "python" ? "" : `text-${tech.color}`
              }`}
            >
              {iconComponents[tech.id]}
            </div>
            {hoveredTech === tech.id && (
              <span
                className={`absolute top-full mt-2 pe-6 w-full text-center text-lg text-${tech.color}`}
              >
                {tech.id === "python" ? (
                  <>
                    <span className="text-[#306998]">Py</span>
                    <span className="text-[#FFD43B]">thon</span>
                  </>
                ) : (
                  tech.name
                )}
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
