import { motion } from "framer-motion";
import { scrollToTop, useScrollPosition } from "../hooks/useScroll";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const scrollPosition = useScrollPosition();
  const isVisible = scrollPosition > 300;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-10 right-10 p-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg z-40 focus:outline-none focus:ring-2 focus:ring-purple-400"
      aria-label="Scroll to top"
      tabIndex={isVisible ? 0 : -1}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <FaArrowUp size={20} />
    </motion.button>
  );
};

export default BackToTop;
