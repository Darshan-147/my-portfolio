import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div>
      <div className="border-b border-neutral-900 pb-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative my-20 text-center"
        >
          <h2 className="text-4xl">Projects</h2>
          <motion.span
            className="absolute left-[43%] -bottom-2 h-0.5 w-[14%] bg-white rounded"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "backIn" }}
            style={{ transformOrigin: "center" }}
            viewport={{ amount: 0.6 }}
          />
        </motion.div>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex justify-center w-full max-h-36 lg:w-1/4"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-6 rounded w-[150px] h-[120px]"
                  />
                </a>
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
                  className="mb-2 text-xl font-semibold block project-title"
                >
                  {project.title}
                </a>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div>
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
