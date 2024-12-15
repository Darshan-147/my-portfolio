import logo from "../assets/images/darshanSoni_logo.png";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-16" src={logo} alt="logo"></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/darshan-soni-753bb1230/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaLinkedin size={30} /></a>
        <a href="https://github.com/Darshan-147" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
        <a href="https://www.instagram.com/oye_darshannn/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600"><FaInstagram size={30} /></a>
      </div>
    </nav>
  );
};

export default Navbar;
