import React, { useState } from 'react';
import { Eye, ExternalLink, Sparkles } from 'lucide-react';
import { FiArrowRight, FiPlus, FiMinus } from 'react-icons/fi';
import Insight from '../../../assets/Insight.png';
import Hammer from '../../../assets/Hammer.png';
import Pansophy from '../../../assets/Pansophy.png';
import Psb from '../../../assets/psb.png';

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Insight Health",
      description: "Played a key role in developing a comprehensive Medical Counseling Website with separate platforms for practitioners and patients.",
      tags: ["Web App", "React", "Tailwind CSS"],
      image: Insight,
      color: "from-emerald-500 to-teal-600",  
      bgGradient: "from-emerald-50 to-teal-50", 
      glowColor: "emerald",
      badge: "Health care",
      linkType: "details"
    },
    {
      id: 2,
      title: "Hammer Your Cart",
      description: "Developed a secure e-commerce platform similar to Amazon, featuring user-friendly shopping carts and robust payment processing.",
      tags: ["E-commerce", "React", "Payment"],
      image: Hammer,
      color: "from-blue-700 to-purple-600",  
      bgGradient: "from-blue-100 to-purple-50",  
      glowColor: "blue",
      badge: "Ecommerce",
      linkType: "demo"
    },
    {
      id: 3,
      title: "Pansophy",
      description: "Developed an e-commerce platform incorporating models, datasets, and connected websites with subscription management.",
      tags: ["E-commerce", "Subscription", "React"],
      image: Pansophy,
      color: "from-blue-500 to-indigo-600",  
      bgGradient: "from-blue-50 to-indigo-50",  
      glowColor: "blue",
      badge: "Innovative",
      linkType: "details"
    },
    {
      id: 4,
      title: "PSB Academy",
      description: "Comprehensive platform to manage and track attendance for local and international students.",
      tags: ["Education", "Management", "React"],
      image: Psb,
      color: "from-red-500 to-pink-600",  
      bgGradient: "from-red-50 to-pink-50",  
      glowColor: "red",
      badge: "Academy",
      linkType: "demo"
    }
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="min-h-fit py-20 px-6 md:px-12 lg:px-16 relative overflow-hidden bg-gradient-to-br from-[#faa1d4] via-[#f583c7] to-[#f36bba]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 blur-3xl opacity-20 -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-rose-200 to-pink-200 blur-3xl opacity-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <Sparkles className="text-white mr-2" size={20} />
              <span className="text-white font-semibold tracking-wide uppercase text-xs">My Work</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Recent projects
              <span className="block bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                that deliver results
              </span>
            </h1>
          </div>
          <button 
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="bg-white hover:bg-gray-100 text-pink-600 px-5 py-2 rounded-full font-medium flex items-center gap-2 transition-colors shadow-lg self-start md:self-auto"
          >
            {showAllProjects ? (
              <>
                <FiMinus className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <FiPlus className="w-4 h-4" />
                View All
              </>
            )}
          </button>
        </div>

        {/* Projects Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {visibleProjects.map((project, i) => {
            const isHovered = hoveredProject === i;
            const isEven = i % 2 === 0;
            
            return (
              <div 
                key={project.id}
                className="relative group cursor-pointer transition-all duration-300 h-full"
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-300 scale-105`}></div>
                
                {/* Main card - more compact */}
                <div className={`relative bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-md group-hover:shadow-lg transition-all duration-300 h-full ${
                  isHovered ? 'transform -translate-y-2 scale-[1.02]' : ''
                } flex flex-col lg:flex-row ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image section - smaller */}
                  <div className={`lg:w-2/5 ${isEven ? 'lg:pl-4' : 'lg:pr-4'} mb-4 lg:mb-0`}>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 lg:h-full object-cover rounded-xl shadow-md group-hover:shadow-lg transition-all"
                    />
                  </div>
                  
                  {/* Content section - more compact */}
                  <div className="lg:w-3/5">
                    {/* Badge - smaller */}
                    <div className="absolute -top-2 -right-2">
                      <div className={`bg-gradient-to-r ${project.color} text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0`}>
                        {project.badge}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {/* Tags - smaller */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="bg-white/80 text-gray-800 px-2 py-0.5 rounded-full text-xs font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* Title - smaller */}
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                        {project.title}
                      </h3>
                      
                      {/* Description - shorter */}
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors text-sm leading-snug line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Button - smaller */}
                      <div className="pt-3">
                        <button className={`bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-all duration-200 flex items-center gap-1.5 group text-sm`}>
                          {project.linkType === 'demo' ? (
                            <>
                              <ExternalLink size={14} />
                              Live Demo
                            </>
                          ) : (
                            <>
                              <Eye size={14} />
                              Details
                            </>
                          )}
                          <FiArrowRight className={`w-3 h-3 transform transition-all duration-200 ${
                            isHovered ? 'translate-x-1' : ''
                          }`} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProjectsPage;