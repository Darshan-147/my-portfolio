import { AnimatePresence } from "framer-motion";
import { ACHIEVEMENTS } from "../constants";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <section id="achievements" className="border-b-2 border-neutral-500 pb-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative my-20 text-center"
      >
        <h2 className="text-4xl">Achievements</h2>
        <motion.span
          className="absolute left-[40%] -bottom-2 h-0.5 w-[20%] bg-neutral-900 dark:bg-white rounded"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "backIn" }}
          style={{ transformOrigin: "center" }}
          viewport={{ amount: 0.6, once: true }}
        />
      </motion.div>

      {/* Achievements List */}
      <AnimatePresence>
        {ACHIEVEMENTS.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-8 flex-wrap flex gap-6 p-4 rounded-lg items-center lg:justify-center justify-between hover:shadow-lg dark:hover:shadow-cyan-800/30 transition-shadow duration-300"
          >
            {/* Image on left */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 w-64 h-64 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-full h-full object-contain bg-gray-100"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.target.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Crect fill='%23e5e7eb' width='128' height='128'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='12' fill='%236b7280'%3ENo Image%3C/text%3E%3C/svg%3E";
                }}
              />
            </motion.div>

            {/* Title and date on right */}
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
              className="flex-1"
            >
              <h3 className="text-2xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                {achievement.title}
              </h3>
              <p className="text-cyan-400 font-medium mb-3">
                {achievement.date}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify max-w-2xl">
                {achievement.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
