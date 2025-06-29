import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { Sparkles } from 'lucide-react';
import AboutMe from '../../../assets/AboutMe.png';
import ishupdf from "../../../assets/ISHWARYA BALAJI.pdf";

const AboutMePage = () => {
  return (
    <div id="about" className="w-full px-4 sm:px-6 py-12 bg-white flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 relative overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute -z-0 inset-0 overflow-hidden">
        <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#f36bba] opacity-20"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[#f36bba] opacity-15"></div>
      </div>

      {/* Left Section with Image - Hidden on mobile */}
      <div className="relative z-10 hidden lg:block">
        <img
          src={AboutMe}
          alt="Profile"
          className="w-[30rem] h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Enhanced Right Section - Full width on mobile */}
      <div className="relative text-center lg:text-left max-w-xl z-10 px-4 sm:px-0">
        {/* Section header */}
        <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-6">
          <Sparkles className="text-[#f36bba] mr-2" size={20} />
          <span className="text-[#f36bba] font-semibold tracking-wide uppercase text-xs sm:text-sm">About Me</span>
        </div>
        
        {/* Title with gradient matching the button */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-snug text-center lg:text-left">
          Who is <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Ishwarya Balaji?</span>
        </h2>
        
        {/* Description with bubble accent */}
        <div className="relative mb-4">
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg relative z-10">
            As a Frontend Developer, I contributed to building high-performance, scalable, and responsive web applications using React.js and Tailwind CSS. Worked closely with designers, backend developers, and QA teams to deliver production-ready UIs.
          </p>
          <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#f36bba] opacity-20"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#f36bba] opacity-15"></div>
        </div>

        {/* Stats cards */}
        <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 mb-6 lg:mb-8 justify-center lg:justify-start">
          <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden min-w-[120px]">
            <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#f36bba] opacity-10"></div>
            <p className="text-2xl sm:text-3xl font-bold text-[#f36bba]">7+</p>
            <p className="text-xs sm:text-sm text-gray-500">Projects Completed</p>
          </div>
          <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden min-w-[120px]">
            <div className="absolute -bottom-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#f36bba] opacity-10"></div>
            <p className="text-2xl sm:text-3xl font-bold text-[#f36bba]">100%</p>
            <p className="text-xs sm:text-sm text-gray-500">Client Satisfaction</p>
          </div>
        </div>

        {/* Download button with matching gradient */}
        <div className="relative flex justify-center lg:justify-start">
          <a
            href={ishupdf}
            download
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-5 py-2 sm:px-6 sm:py-2 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center group text-sm sm:text-base"
          >
            Download CV
            <FiDownload className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
          </a>
          <div className="absolute -bottom-3 -right-3 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#f36bba] opacity-20"></div>
          <div className="absolute -top-3 -left-3 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#f36bba] opacity-15"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;