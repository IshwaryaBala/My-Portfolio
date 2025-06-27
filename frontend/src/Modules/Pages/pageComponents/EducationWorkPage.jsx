import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { Sparkles } from 'lucide-react';

const EducationWorkPage = () => {
  return (
    <div className="w-full px-6 pb-12 bg-white flex flex-col items-center relative overflow-hidden">
      {/* Background bubbles */}
      <div className="absolute -z-0 inset-0 overflow-hidden">
        <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#f36bba] opacity-20"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[#f36bba] opacity-15"></div>
      </div>

      {/* Content Section - Cards side by side */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Education Card */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden
          transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#f36bba]/20 group">
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#f36bba] opacity-10 
            group-hover:opacity-30 transition-opacity duration-300"></div>
          <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-[#f36bba] transition-colors duration-300">Education</h3>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Bachelor of Commerce</h4>
              <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">2019 - 2022</span>
            </div>
            <p className="text-gray-600 mb-2 group-hover:text-gray-700 transition-colors duration-300">VELS Institute Of Science, Technology And Advance Studies</p>
            <p className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors duration-300">CGPA - 8.45%</p>
            <p className="text-gray-600 mt-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Even though my academic background lies in commerce, I've ventured into the world of software development as a frontend developer. My journey showcases my ability to swiftly learn and adapt, proving that dedication and hard work know no boundaries.
            </p>
          </div>
        </div>

        {/* Work Experience Card */}
        <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden
          transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[#f36bba]/20 group">
          <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-[#f36bba] opacity-10 
            group-hover:opacity-30 transition-opacity duration-300"></div>
          <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-[#f36bba] transition-colors duration-300">Work Experience</h3>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-semibold text-gray-700 group-hover:text-gray-800 transition-colors duration-300">Corvanta Analytics</h4>
              <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">Sep 2022 - Present</span>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li className="group-hover:text-gray-700 transition-colors duration-300">Built dynamic and interactive web applications with a focus on React.js</li>
              <li className="group-hover:text-gray-700 transition-colors duration-300">Utilized Git for version control and collaborated effectively within development teams</li>
              <li className="group-hover:text-gray-700 transition-colors duration-300">Contributed to five successful projects, demonstrating adaptability and problem-solving skills in fast-paced environments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationWorkPage;