import React from 'react';
import { useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';

function HeroSection() {
  
  const typeRef = useRef(null);

  useEffect(() => {
    const typeData = typeRef.current;

    return () => {
      typeData && typeData.destroy(); // Cleanup on component unmount
    };
  }, []);
  
  return (
    <section id="about" className="bg-green-100 py-16 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="w-3/4  mb-8 md:mb-0 flex justify-center">
          <div className="bg-black rounded-full p-4">
            <img src="/himmn.jpg" alt="About Me" className="rounded-full shadow-lg w-3/4 "/>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold text-green-900 mb-4">About Me</h2>
          <p className="text-lg text-green-700 mb-4">
            Hello! I'm Ashish Kumar
            <br/>
            <ReactTyped
        typedRef={(typedInstance) => {
          if (typedInstance) {
            typedInstance.reset();
          }
          typeRef.current = typedInstance;
        }}
        strings={[
          "Full Stack Developer",
          "Web Developer",
          "UI-UX Designer",
          "Backend Developer",
          "Coder",
        ]}
        loop
        typeSpeed={100}
        backSpeed={80}
        backDelay={1000}
      />
          </p>
          <p className="text-lg text-green-700 mb-4">
            I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring the latest technology trends, or spending time with my family and friends.
          </p>
          <a href="#contact" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-green-600 transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
