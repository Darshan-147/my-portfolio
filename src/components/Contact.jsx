import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setDone(false);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setDone(true);
          formRef.current.reset();
          // Hide success message after 5 seconds
          setTimeout(() => setDone(false), 5000);
        },
        (error) => {
          console.error("Email send failed:", error);
          setError(true);
          setTimeout(() => setError(false), 5000);
        },
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="border-b-2 border-neutral-500 pb-16">
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
          className="text-neutral-600 dark:text-neutral-300"
        >
          {CONTACT.phone_number}
        </motion.p>
        <motion.p
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
          >
            {CONTACT.email}
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
        className="max-w-lg mx-auto flex flex-col gap-4 p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 dark:bg-opacity-50 shadow-lg border border-neutral-500"
        autoComplete="off"
        aria-label="Contact form"
      >
        <div>
          <label
            htmlFor="name"
            className="text-sm text-neutral-700 dark:text-neutral-400 mb-1 block font-medium"
          >
            Name <span aria-label="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            aria-required="true"
            className="w-full px-4 py-2 rounded bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm text-neutral-700 dark:text-neutral-400 mb-1 block font-medium"
          >
            Email <span aria-label="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            aria-required="true"
            className="w-full px-4 py-2 rounded bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        <input
          type="text"
          name="time"
          defaultValue={new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
          hidden
          aria-hidden="true"
        />

        <div>
          <label
            htmlFor="message"
            className="text-sm text-neutral-700 dark:text-neutral-400 mb-1 block font-medium"
          >
            Message <span aria-label="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            aria-required="true"
            className="w-full px-4 py-2 rounded bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.02 }}
          type="submit"
          disabled={loading}
          className="py-3 rounded bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 transition text-white font-semibold"
          aria-busy={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin" aria-hidden="true">
                ⏳
              </span>{" "}
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </motion.button>

        {done && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-green-400 font-semibold"
            role="status"
            aria-live="polite"
          >
            ✅ Message sent successfully! I'll reply soon.
          </motion.p>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-red-400 font-semibold"
            role="alert"
            aria-live="assertive"
          >
            ❌ Failed to send message. Please try again.
          </motion.p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
