import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";

const CVDownload = () => {
  const handleDownload = () => {
    const cvLink = document.createElement("a");
    cvLink.href = "/Resume.pdf";
    cvLink.download = "Darshan-Soni_Resume.pdf";
    document.body.appendChild(cvLink);
    cvLink.click();
    document.body.removeChild(cvLink);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
      }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
      aria-label="Download CV"
    >
      <FaFileDownload size={18} />
      <span className="hidden sm:inline">Download CV</span>
      <span className="sm:hidden">CV</span>
    </motion.button>
  );
};

export default CVDownload;
