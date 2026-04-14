import { useState, useMemo } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  // Get unique technologies from all projects
  const allTechs = useMemo(() => {
    const techs = new Set();
    PROJECTS.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (!selectedTech) return PROJECTS;
    return PROJECTS.filter((project) =>
      project.technologies.includes(selectedTech),
    );
  }, [selectedTech]);

  return (
    <section id="projects" className="border-b-2 border-neutral-500 pb-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative my-20 text-center"
      >
        <h2 className="text-4xl">Projects</h2>
        <motion.span
          className="absolute left-[43%] -bottom-2 h-0.5 w-[14%] bg-neutral-900 dark:bg-white rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "backIn" }}
          style={{ transformOrigin: "center" }}
          viewport={{ amount: 0.6 }}
        />
      </motion.div>

      {/* Tech Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-2 justify-center mb-10 px-4"
      >
        <button
          onClick={() => setSelectedTech(null)}
          className={`px-4 py-2 rounded-full transition-all ${
            selectedTech === null
              ? "bg-purple-600 text-white"
              : "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700"
          }`}
          aria-pressed={selectedTech === null}
        >
          All Projects
        </button>
        {allTechs.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedTech === tech
                ? "bg-purple-600 text-white"
                : "bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            }`}
            aria-pressed={selectedTech === tech}
          >
            {tech}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence>
        {filteredProjects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project, index) => (
              <article
                key={`${project.title}-${index}`}
                className="mb-8 flex flex-wrap lg:justify-center gap-4 p-4 rounded-lg transition"
              >
                <motion.div
                  initial={{ y: -100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="flex justify-center items-center w-full lg:w-1/4"
                >
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform"
                    aria-label={`Visit ${project.title} project`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="mb-6 rounded w-[150px] h-[120px] object-cover shadow-lg"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.a>
                </motion.div>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-xl lg:w-3/4"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 text-xl font-semibold block hover:text-purple-400 transition"
                  >
                    {project.title}
                  </a>
                  <p className="mb-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.button
                        key={techIndex}
                        onClick={() => setSelectedTech(tech)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mr-2 mt-4 rounded bg-neutral-800 dark:bg-neutral-900 px-3 py-1 text-sm font-medium text-yellow-200 hover:bg-neutral-700 dark:hover:bg-neutral-800 transition cursor-pointer"
                        aria-label={`Filter projects by ${tech}`}
                      >
                        {tech}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </article>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10 text-neutral-600 dark:text-neutral-400"
          >
            No projects found with {selectedTech}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
