import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Let's Discuss Ideas Together
      </motion.h2>
      <div className="flex flex-col gap-2 justify-center text-center tracking-tighter">
        <motion.p
          initial={{ x: -200, y: -200, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=darshaner2019@gmail.com&su=Hello&body=Dear%20Darshan,%0A%0AI%20would%20like%20to%20reach%20out%20to%20you%20regarding..."
            target="_blank"
            rel="noopener noreferrer"
            className="my-4 border-b"
          >
            {CONTACT.email1}
          </a>
        </motion.p>
        <motion.p
          initial={{ x: 200, y: -200, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=darshan.sce21@sot.pdpu.ac.in&su=Hello&body=Dear%20Darshan,%0A%0AI%20would%20like%20to%20reach%20out%20to%20you%20regarding..."
            target="_blank"
            rel="noopener noreferrer"
            className="my-4 border-b"
          >
            {CONTACT.email2}
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
