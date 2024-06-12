import React from 'react';

const FooterSection = () => {
  return (
    <footer className="relative mt-[-1px] bg-[#343d68] p-20">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 p-4 justify-between items-center">
          <div className="absolute left-0 bottom-0 text-[#535c87] select-none text-5xl">
            Ashish Kumar
          </div>
          <div className="flex gap-5">
            <div>
              <a href="#projects" className="text-white no-underline transition duration-600 hover:text-orange-500">
                Projects
              </a>
            </div>
            <div>
              <a href="#skills" className="text-white no-underline transition duration-600 hover:text-orange-500">
                Skills
              </a>
            </div>
            <div>
              <a href="#contact" className="text-white no-underline transition duration-600 hover:text-orange-500">
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <i className="fa-brands fa-linkedin text-white text-2xl"></i>
            <i className="fa-brands fa-github text-white text-2xl"></i>
            <i className="fa-brands fa-twitter text-white text-2xl"></i>
            <i className="fa-brands fa-instagram text-white text-2xl"></i>
            <i className="fa-regular fa-envelope text-white text-2xl"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;





