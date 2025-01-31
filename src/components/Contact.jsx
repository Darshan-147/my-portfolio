import React, { useRef } from "react";
import { CONTACT } from "../constants";
import { motion, useScroll, useTransform } from "framer-motion";

const Contact = () => {
  const email1Ref = useRef(null);
  const email2Ref = useRef(null);

  // Scroll progress for email 1
  const { scrollYProgress: email1Progress } = useScroll({
    target: email1Ref,
    offset: ["end end", "end start"], // Trigger for email1
  });

  // Scroll progress for email 2
  const { scrollYProgress: email2Progress } = useScroll({
    target: email2Ref,
    offset: ["end end", "end start"], // Trigger for email2
  });

  // Animations for email 1 (left diagonal)
  const opacity1 = useTransform(email1Progress, [0, 1], [0, 1]);
  const x1 = useTransform(email1Progress, [0, 1], [-200, 200]);
  const y1 = useTransform(email1Progress, [0, 1], [-200, 200]);

  // Animations for email 2 (right diagonal)
  const opacity2 = useTransform(email2Progress, [0, 1], [0, 1]);
  const x2 = useTransform(email2Progress, [0, 1], [200, 0]);
  const y2 = useTransform(email2Progress, [0, 1], [-200, 0]);

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
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        >
          {CONTACT.phone_number}
        </motion.p>
        <motion.p
          ref={email1Ref}
          style={{ opacity: opacity1, x: x1, y: y1 }}
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
          ref={email2Ref}
          style={{ opacity: opacity2, x: x2, y: y2 }}
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
