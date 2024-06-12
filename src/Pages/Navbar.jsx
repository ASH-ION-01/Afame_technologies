import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  return (

    

    <nav className="bg-green-600 p-4 w-full scroll-smooth ">
      <div className="container mx-auto flex justify-between items-center pl-24 pr-24">
        {/* heading */}
        <div className="text-white font text-lg font-bold">
          My Portfolio
        </div>
        {/* menu */}
        <div>
          <a href="#home" className="text-gray-300 hover:text-white mx-4">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white mx-4">About</a>
          <a href="#projects" className="text-gray-300 hover:text-white mx-4">Projects</a>
          <a href="#skills" className="text-gray-300 hover:text-white mx-4">Skills</a>
          <a href="#contact" className="text-gray-300 hover:text-white mx-4">Contact</a>
        </div>
        {/* social media */}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com" className="text-gray-300 animate-pulse hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com" className="text-gray-300 animate-pulse hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.linkedin.com" className="text-gray-300 animate-pulse hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <input type='search' name='search -form' id='search-form' className=' rounded-xl h-[2rem] text-green-700' placeholder='Search'/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
