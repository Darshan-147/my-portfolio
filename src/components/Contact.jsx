import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_oal8vrh", // ServiceID
        "template_obua41r", // TemplateID
        formRef.current,
        "0BDPM-bbM5R31OkEd" // Public Key
      )
      .then(
        () => {
          setDone(true);
          formRef.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Let's Discuss Ideas Together
      </motion.h2>

      {/* Contact Info */}
      <div className="flex flex-col gap-2 justify-center text-center tracking-tighter mb-10">
        <motion.p
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {CONTACT.phone_number}
        </motion.p>
        <motion.p
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            href={`mailto:${CONTACT.email_1}`}
            className="border-b hover:text-purple-300"
          >
            {CONTACT.email_1}
          </a>
        </motion.p>
      </div>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-lg mx-auto flex flex-col gap-4 p-6 rounded-xl bg-neutral-900 shadow-lg"
        autoComplete="off"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-4 py-2 rounded bg-neutral-800 text-white outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-4 py-2 rounded bg-neutral-800 text-white outline-none"
        />
        <input
          type="text"
          name="time"
          defaultValue={new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
          hidden
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="px-4 py-2 rounded bg-neutral-800 text-white outline-none"
        ></textarea>

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          type="submit"
          disabled={loading}
          className="py-2 rounded bg-[#5229CD] hover:bg-[#6b3af0] transition text-white font-semibold"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {done && (
          <p className="text-center text-green-400 mt-2">
            ✅ Message sent successfully!
          </p>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;
