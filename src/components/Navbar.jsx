import nameLogo from "../assets/images/darshanSoni_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { scrollToId, scrollToTop } from "../hooks/useScroll";
import CVDownload from "./CVDownload";
import ThemeToggle from "./ThemeToggle";

const navLinks = ["about", "tech", "experience", "projects", "contact"];

const Navbar = () => {
  const handleScrollToTop = () => {
    scrollToTop();
    window.history.pushState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollToId(id);
    window.history.pushState(null, "", `/#${id}`);
  };
  return (
    <nav className="flex items-center justify-between py-6 mx-3 md:mx-20 fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-neutral-500">
      {/* Logo (left side) */}
      <div
        className="w-10 md:w-16 cursor-pointer flex flex-shrink-0 items-center"
        onClick={handleScrollToTop}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && handleScrollToTop()}
      >
        <motion.img
          src={nameLogo}
          whileHover={{
            rotate: 360,
            scale: 0.2,
            filter: "drop-shadow(0 0 8px #fff)",
          }}
          transition={{ duration: 0.6 }}
          className="rounded-lg"
          alt="Darshan Soni Logo - Home"
          width="64"
          height="64"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Center Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            onClick={(e) => handleNavClick(e, link)}
            className="text-md text-neutral-900 dark:text-neutral-300 hover:text-purple-400 transition"
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>

      {/* Right side actions */}
      <div className="flex items-center justify-center gap-4">
        <CVDownload />
        <ThemeToggle />

        <a
          href="https://www.linkedin.com/in/darshansoni26/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-900 dark:text-neutral-300 hover:text-blue-500 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={24} aria-hidden="true" />
        </a>
        <a
          href="https://github.com/Darshan-147"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-900 dark:text-neutral-300 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
          aria-label="GitHub Profile"
        >
          <FaGithub size={24} aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
