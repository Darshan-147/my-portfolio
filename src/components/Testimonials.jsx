import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiAward,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiUser,
} from "react-icons/fi";
import { TESTIMONIALS } from "../constants";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const activeTestimonial = TESTIMONIALS[activeIndex];

  useEffect(() => {
    if (isHovered || isFocused || TESTIMONIALS.length < 2) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex(
        (currentIndex) => (currentIndex + 1) % TESTIMONIALS.length,
      );
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [isHovered, isFocused]);

  const showPrevious = () => {
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="border-b-2 border-neutral-500 pb-4">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative my-20 text-center"
      >
        <h2 className="text-4xl">Testimonial(s)</h2>
        <motion.span
          className="absolute left-[30%] -bottom-2 h-0.5 w-[40%] rounded bg-neutral-900 dark:bg-white"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: "backIn" }}
          style={{ transformOrigin: "center" }}
          viewport={{ once: true }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative mx-auto mb-12 max-w-4xl overflow-hidden rounded-2xl border border-cyan-200 bg-white/70 p-6 shadow-xl shadow-cyan-900/10 dark:border-cyan-900/70 dark:bg-neutral-900/60 sm:p-10"
        role="region"
        aria-label="Testimonials carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsFocused(false);
          }
        }}
      >
        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[18px] border-cyan-100/80 dark:border-cyan-950/70" />
        <AnimatePresence mode="wait">
          <motion.a
            key={activeIndex}
            href="https://www.linkedin.com/in/darshansoni26/details/recommendations/"
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${activeTestimonial.name}'s LinkedIn recommendation`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="relative grid gap-8 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 md:grid-cols-[auto_1fr] md:items-center"
          >
            <div className="mx-auto text-center md:mx-0">
              <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-cyan-200 bg-cyan-50 shadow-lg shadow-cyan-900/10 dark:border-cyan-800 dark:bg-cyan-950">
                <img
                  src={activeTestimonial.image}
                  alt={`${activeTestimonial.name}, ${activeTestimonial.designation}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <FiUser
                  className="h-14 w-14 text-cyan-600 dark:text-cyan-300"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {activeTestimonial.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {activeTestimonial.designation}
              </p>
            </div>

            <div className="relative">
              <div className="mb-4 flex items-center gap-3 text-cyan-600 dark:text-cyan-400">
                <FiAward className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Professional Recognition
                </span>
              </div>
              <div className="space-y-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                {activeTestimonial.quote.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                <FiCheckCircle
                  className="h-5 w-5 text-cyan-500"
                  aria-hidden="true"
                />
                A meaningful milestone in my professional journey
              </div>
            </div>
          </motion.a>
        </AnimatePresence>

        <div className="relative mt-8 flex items-center justify-between border-t border-cyan-100 pt-5 dark:border-cyan-900/70">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Show previous testimonial"
            className="rounded-full border border-cyan-200 p-2 text-cyan-700 transition hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-cyan-800 dark:text-cyan-300 dark:hover:bg-cyan-950"
          >
            <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div
            className="flex items-center gap-2"
            aria-label="Select testimonial"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={`${testimonial.id}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                  index === activeIndex
                    ? "w-8 bg-cyan-500"
                    : "w-2 bg-cyan-200 dark:bg-cyan-800"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={showNext}
            aria-label="Show next testimonial"
            className="rounded-full border border-cyan-200 p-2 text-cyan-700 transition hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:border-cyan-800 dark:text-cyan-300 dark:hover:bg-cyan-950"
          >
            <FiChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
