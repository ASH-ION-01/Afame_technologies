import React from 'react';

const ContactSection = () => {
  return (
    <div className="w-full text-black bg-green-100" id="contact">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl text-orange-600 pt-8">Contact me</h1>
        <h3 className="text-3xl text-gray-700 mt-4 capitalize">
          Questions, thoughts, or just want to say hello?
        </h3>
        <div className="mt-6 flex justify-center items-center">
          <form className="flex flex-col gap-8 w-3/5 mx-20">
            <div className="w-full">
              <input
                className="w-full h-10 px-8 text-lg font-medium rounded shadow-md border-none mt-7"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <input
                className="w-full h-10 px-8 text-lg font-medium rounded shadow-md border-none mt-7"
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
              <input
                className="w-full h-10 px-8 text-lg font-medium rounded shadow-md border-none mt-7"
                type="text"
                name="subject"
                placeholder="Enter your subject"
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="w-full  h-auto max-h-[4rem] px-8 py-4 text-lg font-medium rounded shadow-md border-none mt-7"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="border-none text-lg mt-4 mb-4 py-2 px-6 bg-pink-500 text-white rounded-full hover:scale-90 transition-transform duration-300"
              >
                Send Message<i className="submit-icon fa-solid fa-paper-plane ml-2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
