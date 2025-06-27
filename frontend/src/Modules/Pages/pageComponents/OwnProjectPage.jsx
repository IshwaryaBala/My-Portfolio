import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import { Sparkles } from 'lucide-react';
import online from '../../../assets/online.png';
import chat from '../../../assets/chat.png';
import quiz from '../../../assets/quiz.png';
import mode from '../../../assets/mode.png';
import food from '../../../assets/food.png';

const projects = [
  {
    id: 1,
    title: "Food Ordering Website",
    description: "A responsive food ordering platform with menu browsing and cart functionality. Built with React and integrated with Firebase for backend services.",
    image: food,
    link: "https://my-food-website-3c5c1.web.app/"
  },
  {
    id: 2,
    title: "Chat Application with Single Sign-On",
    description: "Real-time chat application with Google OAuth authentication. Features responsive design and message history using Firebase.",
    image: chat,
    link: "https://my-react-chat-app-4b7b9.web.app/"
  },
  {
    id: 3,
    title: "React Quiz App",
    description: "Interactive quiz application with timer, score tracking, and multiple question types. Demonstrates state management and conditional rendering.",
    image: quiz,
    link: "https://my-react-quiz-app-16191.web.app/"
  },
  {
    id: 4,
    title: "Light/Dark Mode Toggle",
    description: "Theme switcher with persistent preferences using localStorage. Showcases context API and styled-components theming capabilities.",
    image: mode,
    link: "https://my-light-dark-mode.web.app/"
  },
  {
    id: 5,
    title: "E-commerce Website",
    description: "Online shopping platform with product listings, search, and cart functionality. Built with React and styled with Tailwind CSS.",
    image: online,
    link: "https://my-online-shopping-website.web.app/"
  }
];

const OwnProjectPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToProject = (index) => {
    if (isAnimating || currentIndex === index) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const openProject = () => {
    window.open(projects[currentIndex].link, '_blank');
  };

  return (
    <div className="w-full px-6 py-12 bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute -z-0 inset-0 overflow-hidden">
        <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#f36bba] opacity-20"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[#f36bba] opacity-15"></div>
      </div>

      {/* Header section */}
      <div className="text-center mb-12 relative z-10">
        <div className="flex items-center justify-center mb-2">
          <Sparkles className="text-[#f36bba] mr-2" size={24} />
          <span className="text-[#f36bba] font-semibold tracking-wide uppercase text-sm">My Projects</span>
        </div>
        
        <h2 className="text-4xl font-bold mb-2 leading-snug">
          Project <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Showcase</span>
        </h2>
        
        <h3 className="text-xl text-gray-600">
          Works that <span className="font-semibold">Demonstrate My Skills</span>
        </h3>
      </div>

      {/* Project carousel */}
      <div className="w-full max-w-4xl relative">
        {/* Main project card */}
        <div className={`bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col md:flex-row items-center relative overflow-hidden transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
          {/* Decorative bubbles */}
          <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#f36bba] opacity-20"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[#f36bba] opacity-15"></div>
          
          {/* Image section */}
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <img 
              src={projects[currentIndex].image} 
              alt={`Project ${projects[currentIndex].title}`}
              className="w-64 h-64 object-contain rounded-lg border border-gray-200 shadow-sm"
            />
          </div>
          
          {/* Text content */}
          <div className="md:w-2/3 md:pl-8">
            <h3 className="text-2xl font-bold mb-4 text-[#f36bba]">
              {projects[currentIndex].title}
            </h3>
            <div className="text-gray-600 mb-6 text-lg leading-relaxed relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#f36bba] opacity-10"></div>
              <p>{projects[currentIndex].description}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium text-gray-500">
                Project {projects[currentIndex].id} of {projects.length}
              </div>
              <button 
                onClick={openProject}
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center group"
              >
                View Project
                <FaExternalLinkAlt className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevProject}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg border border-gray-100 hover:bg-[#f36bba] hover:bg-opacity-10 transition-all duration-300"
          aria-label="Previous project"
        >
          <FaChevronLeft className="text-[#f36bba]" size={20} />
        </button>
        
        <button 
          onClick={nextProject}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg border border-gray-100 hover:bg-[#f36bba] hover:bg-opacity-10 transition-all duration-300"
          aria-label="Next project"
        >
          <FaChevronRight className="text-[#f36bba]" size={20} />
        </button>
        
        {/* Indicator dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-[#f36bba] w-6' : 'bg-gray-300'}`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OwnProjectPage;