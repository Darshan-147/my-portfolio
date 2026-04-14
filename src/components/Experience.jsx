import { calculateDuration, EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="border-b-2 border-neutral-500 pb-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative my-20 text-center"
      >
        <h2 className="text-4xl">Experience</h2>
        <motion.span
          className="absolute left-[41%] -bottom-2 h-0.5 w-[18%] bg-neutral-900 dark:bg-white rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "backIn" }}
          style={{ transformOrigin: "center" }}
          viewport={{ amount: 0.6 }}
        />
      </motion.div>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <article
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-md text-neutral-600 dark:text-neutral-400">
                {experience.year}
              </p>
              <p className="mb-2 text-md text-neutral-500 dark:text-neutral-500">
                ({calculateDuration(experience.year)})
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <a
                  href={experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-600 dark:text-purple-100 hover:underline"
                >
                  {experience.company}
                </a>
              </h6>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mt-4 rounded bg-neutral-800 dark:bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
