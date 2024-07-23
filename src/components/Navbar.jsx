import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Akash_Resume from "../assets/Akash_Resume.pdf";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      <a href={Akash_Resume} download>  <button 
          style={{
            backgroundColor: "purple",
            borderRadius: "10px",
            color: "white",
            padding: "4px",
            cursor: "pointer"
          }}
        >

          
          Download Resume
        </button></a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/akash-s-9a3376315/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/akashvishal2405/" target="_blank">
          <FaGithub />
        </a>
        <a href="" target="_blank">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
