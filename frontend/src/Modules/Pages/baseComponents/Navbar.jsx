import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex justify-center mt-3">
        {/* Updated with transparent background */}
        <div className="px-4 sm:px-10 bg-black/20 backdrop-blur-sm border border-white/10 rounded-[20px] py-4 mx-4 sm:mx-0">
          <div className="container mx-auto flex justify-between items-center px-2 sm:px-5">
            {/* Toggle button for mobile menu */}
            <button
              onClick={toggleMobileMenu}
              className="block lg:hidden text-white focus:outline-none z-20"
            >
              <div className="w-6 h-6 flex flex-col justify-center">
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-white mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-white mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>

            {/* Navigation links */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-12 cursor-pointer">
              <Link
                to="about"
                spy={true}
                smooth={true}
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm lg:text-base"
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm lg:text-base"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              <Link
                to="service"
                spy={true}
                smooth={true}
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm lg:text-base"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm lg:text-base"
                onClick={closeMobileMenu}
              >
                Contact Me
              </Link>
            </nav>

            {/* Download CV Button */}
            <a
              download="IshwaryaBalaji.pdf"
              className="py-2 px-3 sm:py-3 sm:px-4 lg:py-4 lg:px-6 font-medium text-xs sm:text-sm lg:text-base text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg outline-none transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              DOWNLOAD CV
            </a>
          </div>

          {/* Mobile popover menu */}
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <div 
                className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-10"
                onClick={closeMobileMenu}
              ></div>
              
              {/* Mobile Menu */}
              <div className="lg:hidden absolute top-20 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-3xl p-6 z-20 shadow-2xl">
                <div className="flex flex-col space-y-6">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    className="text-white hover:text-gray-300 transition-colors duration-300 py-2 text-base"
                    onClick={closeMobileMenu}
                  >
                    About Me
                  </Link>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    className="text-white hover:text-gray-300 transition-colors duration-300 py-2 text-base"
                    onClick={closeMobileMenu}
                  >
                    Projects
                  </Link>
                  <Link
                    to="service"
                    spy={true}
                    smooth={true}
                    className="text-white hover:text-gray-300 transition-colors duration-300 py-2 text-base"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    className="text-white hover:text-gray-300 transition-colors duration-300 py-2 text-base"
                    onClick={closeMobileMenu}
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};