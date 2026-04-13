import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FaSun size={20} className="text-yellow-400" />
      ) : (
        <FaMoon size={20} className="text-neutral-700" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
