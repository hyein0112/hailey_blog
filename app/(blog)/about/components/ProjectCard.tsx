'use client';

import React from 'react';
import { Project } from '../types';
import { IoLogoGithub } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiVuedotjs, 
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiStyledcomponents,
  SiVercel,
  SiReactquery,
  SiReacthookform,
  SiNestjs
} from "react-icons/si";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  variant?: 'company' | 'personal';
}

const getTechIcon = (tech: string) => {
  const techIcons: { [key: string]: React.ReactNode } = {
    // 프레임워크 & 라이브러리
    'React': <SiReact className="text-[#61DAFB]" size={16} />,
    'Next.js': <SiNextdotjs className="text-black" size={16} />,
    'Vue.js': <SiVuedotjs className="text-[#4FC08D]" size={16} />, 
    'React Query': <SiReactquery className="text-[#FF4154]" size={16} />,
    'React Hook Form': <SiReacthookform className="text-[#EC5990]" size={16} />,
    
    // 스타일링
    'Styled Components': <SiStyledcomponents className="text-[#DB7093]" size={16} />,
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" size={16} />,
    
    // 언어
    'TypeScript': <SiTypescript className="text-[#3178C6]" size={16} />,
    'JavaScript': <SiJavascript className="text-[#F7DF1E]" size={16} />,
    
    // 백엔드 & 데이터베이스
    'Node.js': <SiNodedotjs className="text-[#339933]" size={16} />,
    'Nest.js': <SiNestjs className="text-[#E0234E]" size={16} />,
    'MongoDB': <SiMongodb className="text-[#47A248]" size={16} />,
    'Firebase': <SiFirebase className="text-[#FFCA28]" size={16} />,
  
    // 배포
    'Vercel': <SiVercel className="text-black" size={16} />
  };

  return techIcons[tech] || <span className="text-xs">{tech}</span>;
};

export default function ProjectCard({ project, onClick, variant = 'personal' }: ProjectCardProps) {
  if (variant === 'company') {
    return (
      <div
        className="p-5 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => onClick(project)}
      >
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-lg font-semibold">{project.title}</h4>
          <span className="text-sm text-gray-500">{project.period}</span>
        </div>
        <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, techIndex) => (
            <div
              key={techIndex}
              className="flex items-center justify-center w-5 h-5 rounded-full border transition-colors duration-200"
              title={tech}
            >
              {getTechIcon(tech)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="p-5 rounded-lg border border-background4 bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col"
      onClick={() => onClick(project)}
    >
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-lg font-semibold">{project.title}</h4>
        <span className="text-sm text-gray-500">{project.period}</span>
      </div>
      <p className="text-gray-700 mb-4 flex-grow text-sm">{project.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, techIndex) => (
            <div
              key={techIndex}
              className="flex items-center justify-center w-5 h-5 rounded-full border transition-colors duration-200"
              title={tech}
            >
              {getTechIcon(tech)}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center w-6 h-6"
              onClick={(e) => e.stopPropagation()}
              title="GitHub Repository"
            >
              <IoLogoGithub size={20} />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center w-6 h-6"
              onClick={(e) => e.stopPropagation()}
              title="Live Demo"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 