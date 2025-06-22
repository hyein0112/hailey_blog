"use client";

import React from "react";
import { Project } from "../types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  variant?: "company" | "personal";
}

export default function ProjectCard({ project, onClick, variant = "personal" }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-lg p-4 cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold group-hover:text-green-600 transition-colors duration-300">{project.title}</h3>
            <div className="flex gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-700 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${project.title} GitHub 저장소 열기`}>
                  <IoLogoGithub size={20} />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-green-700 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${project.title} 라이브 데모 열기`}>
                  <FaExternalLinkAlt size={18} />
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-700 mb-4 text-sm">{project.shortDescription}</p>

          {variant === "company" ? (
            <div className="space-y-2">
              <div>
                <span className="text-xs font-medium text-gray-500">Main Stack</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.mainTechStack.map((tech, index) => (
                    <span key={index} className="px-2 py-0.5 bg-background2 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.subTechStack.length > 0 && (
                <div>
                  <span className="text-xs font-medium text-gray-500">Sub Stack</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.subTechStack.map((tech, index) => (
                      <span key={index} className="px-2 py-0.5 bg-background2 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-wrap gap-1">
              {[...project.mainTechStack, ...project.subTechStack].map((tech, index) => (
                <span key={index} className="px-2 py-0.5 bg-background2 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
