import React, { useState } from 'react';
import { FiArrowRight, FiPlus, FiMinus } from 'react-icons/fi';
import { Sparkles, Zap } from 'lucide-react';

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [showAllServices, setShowAllServices] = useState(false);

  const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive and scalable web apps using React.js and Tailwind CSS.",
    count: "2+ years experience",
    color: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50 to-indigo-50",
    glowColor: "blue",
    badge: "Core Skill"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Crafting clean and intuitive user interfaces using Figma and Canva.",
    count: "30+ designs delivered",
    color: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    glowColor: "purple",
    badge: "Creative"
  },
  {
    id: 3,
    title: "Responsive Design",
    description: "Ensuring seamless experiences across all devices with pixel-perfect layouts.",
    count: "100% mobile-friendly",
    color: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    glowColor: "emerald",
    badge: "Essential"
  },
  {
    id: 4,
    title: "Component Architecture",
    description: "Developing reusable and maintainable components in React.",
    count: "50+ components built",
    color: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
    glowColor: "amber",
    badge: "Reusable"
  },
  {
    id: 5,
    title: "State Management",
    description: "Managing complex state using Redux, Context API, and custom hooks.",
    count: "Multiple scalable apps",
    color: "from-red-500 to-pink-600",
    bgGradient: "from-red-50 to-pink-50",
    glowColor: "red",
    badge: "Advanced"
  },
  {
    id: 6,
    title: "Performance Optimization",
    description: "Improving load times and app performance with best practices in React.",
    count: "Optimized builds",
    color: "from-violet-500 to-fuchsia-600",
    bgGradient: "from-violet-50 to-fuchsia-50",
    glowColor: "violet",
    badge: "Efficient"
  }
];

  const visibleServices = showAllServices ? services : services.slice(0, 3);

  return (
    <section id="services" className="min-h-fit py-20 px-6 md:px-12 lg:px-16 relative overflow-hidden bg-gradient-to-br from-[#faa1d4] via-[#f583c7] to-[#f36bba]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 blur-3xl opacity-20 -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-rose-200 to-pink-200 blur-3xl opacity-20 -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-6">
              <Sparkles className="text-white mr-2" size={24} />
              <span className="text-white font-semibold tracking-wide uppercase text-sm">What I Offer</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Professional services
              <span className="block bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
                tailored for you
              </span>
            </h1>
          </div>
          <button 
            onClick={() => setShowAllServices(!showAllServices)}
            className="bg-white hover:bg-gray-100 text-pink-600 px-5 py-2 rounded-full font-medium flex items-center gap-2 transition-colors shadow-lg self-start md:self-auto"
          >
            {showAllServices ? (
              <>
                <FiMinus className="w-5 h-5" />
                Show Less
              </>
            ) : (
              <>
                <FiPlus className="w-5 h-5" />
                View All Services
              </>
            )}
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleServices.map((service, i) => {
            const isHovered = hoveredService === i;
            
            return (
              <div 
                key={service.id}
                className="relative group cursor-pointer transition-all duration-500"
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500 scale-110`}></div>
                
                {/* Main card */}
                <div className={`relative bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-500 h-full ${
                  isHovered ? 'transform -translate-y-3 scale-105' : ''
                }`}>
                  
                  {/* Badge */}
                  <div className="absolute -top-3 -right-3">
                    <div className={`bg-gradient-to-r ${service.color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                      {service.badge}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="pt-4 border-t border-gray-200/50">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {service.count}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
                
                {/* Decorative elements */}
                <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 transform scale-0 group-hover:scale-100`}></div>
                <div className={`absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 transform scale-0 group-hover:scale-100`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {showAllServices && (
          <div className="text-center mt-20">
            <div className="inline-flex items-center justify-center space-x-4 bg-white/70 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20 shadow-lg">
              <span className="text-gray-700 font-medium">Need help choosing a service?</span>
              <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 flex items-center group">
                Contact Me
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button> 
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesPage;