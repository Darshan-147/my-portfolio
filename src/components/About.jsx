import aboutPic from "../assets/images/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="border-b-2 border-neutral-300 dark:border-neutral-900 pb-4"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative my-20 text-center"
      >
        <h2 className="text-4xl">About Me</h2>
        <motion.span
          className="absolute left-[42%] -bottom-2 h-0.5 w-[16%] bg-neutral-900 dark:bg-white rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "backIn" }}
          style={{ transformOrigin: "center" }}
          viewport={{ amount: 0.6 }}
        />
      </motion.div>

      <div className="flex flex-wrap justify-center items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-64 lg:w-1/3 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl"
              src={aboutPic}
              alt="about"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-around lg:justify-start">
            <p className="p-11">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
