import nameLogo from "../assets/images/darshanSoni_logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <motion.img
          src={nameLogo}
          whileTap={{
            rotate: 360,
            scale: 0.2,
            filter: "drop-shadow(0 0 8px #fff)",
          }}
          transition={{ duration: 0.6 }}
          className="w-16 cursor-pointer"
          alt="logo"
        ></motion.img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/darshansoni26/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/Darshan-147"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.instagram.com/darshan.kiddo.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-600"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
