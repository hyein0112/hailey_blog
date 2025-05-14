'use client';

import { FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '../types';
import { IoLogoGithub } from 'react-icons/io';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  variant?: 'company' | 'personal';
}

export default function ProjectModal({ project, onClose, variant = 'personal' }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-gray-600">{project.period}</p>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {project.details && (
          <div className="space-y-6">
            <div>
              <div className='flex gap-2 items-center mb-2'>
                <h4 className="text-lg font-semibold">프로젝트 정보</h4>
                <div className='flex gap-1 h-full items-center'>
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
                      className="text-gray-600 hover:text-gray-900 transition-colors flex items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className='whitespace-pre-wrap'>{project.description}</p>
            </div>

            {project.details.screenshots && (
                <div className="w-full h-[400px] flex overflow-x-scroll gap-2">
                  {project.details.screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="object-contain"
                    />
                  ))}
                </div>
            )}

            <div>
              <h4 className="text-lg font-semibold mb-2">주요 작업</h4>
              <ul className="list-disc list-inside space-y-2">
                {project.details.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">사용 기술</h4>
              {variant === 'company' ? (
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-gray-600 mb-2">Main Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.mainTechStack.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-background2 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.subTechStack.length > 0 && (
                    <div>
                      <h5 className="text-sm font-medium text-gray-600 mb-2">Sub Stack</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.subTechStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-background2 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {[...project.mainTechStack, ...project.subTechStack].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-background2 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

         
          </div>
        )}
      </div>
    </div>
  );
} 