import React from "react";
import { Tooltip } from "antd";
import { 
  FaLinkedin as LinkedIn,
  FaGithubSquare as Github,
} from 'react-icons/fa';
import { AiFillProject as ProjectsIcon } from "react-icons/ai";
import { AiFillCode as ServicesIcon } from "react-icons/ai";
import { BiSolidUserRectangle as AboutIcon } from "react-icons/bi";
import { MdEmail as ContactIcon } from "react-icons/md";

const SocialIcons = (props) => {
  const { scrollToSection } = props;

  return (
    <div className="fixed bottom-0 left-8 flex flex-col items-center z-30">
      {/* Navigation Icons with Ant Design Tooltips */}
      <Tooltip title="Services" placement="right" color="#C71585">
        <div className="mb-2 animate-bounce delay-300 cursor-pointer" onClick={() => scrollToSection('services')}>
          <ServicesIcon size={25} color="#C71585" />
        </div>
      </Tooltip>
      
      <Tooltip title="About" placement="right" color="#C71585">
        <div className="mb-2 animate-bounce delay-400 cursor-pointer" onClick={() => scrollToSection('about')}>
          <AboutIcon size={25} color="#C71585" />
        </div>
      </Tooltip>
      
      <Tooltip title="Projects" placement="right" color="#C71585">
        <div className="mb-2 animate-bounce delay-500 cursor-pointer" onClick={() => scrollToSection('projects')}>
          <ProjectsIcon size={25} color="#C71585" />
        </div>
      </Tooltip>
      
      <Tooltip title="Contact" placement="right" color="#C71585">
        <div className="mb-2 animate-bounce delay-600 cursor-pointer" onClick={() => scrollToSection('contact')}>
          <ContactIcon size={25} color="#C71585" />
        </div>
      </Tooltip>
      
      <Tooltip title="LinkedIn" placement="right" color="#C71585">
        <div className="mb-2 animate-bounce delay-200 cursor-pointer">
          <a style={{ color: "inherit" }} target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/ishwarya-balaji-developer"}>
            <LinkedIn size={25} color="#C71585"/>
          </a>
        </div>
      </Tooltip>
      
      <Tooltip title="GitHub" placement="right" color="#C71585">
        <div className="mb-2 animate-bounce delay-200 cursor-pointer">
          <a style={{ color: "inherit" }} target="_blank" rel="noopener noreferrer" href={"https://github.com/IshwaryaBala"}>
            <Github size={25} color="#C71585" />
          </a>
        </div>
      </Tooltip>
      
      <div className="w-px h-32 bg-[#C71585]" />
    </div>
  );
};

export default SocialIcons;