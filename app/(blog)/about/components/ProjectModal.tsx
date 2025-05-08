'use client';

import { Project } from '../types';
import Image from 'next/image';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
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
              <h4 className="text-lg font-semibold mb-2">프로젝트 개요</h4>
              <p>{project.description}</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">주요 성과</h4>
              <ul className="list-disc list-inside space-y-2">
                {project.details.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            {project.details.screenshots && (
              <div>
                <h4 className="text-lg font-semibold mb-2">스크린샷</h4>
                <div className="grid grid-cols-2 gap-4">
                  {project.details.screenshots.map((screenshot, index) => (
                    <Image
                      key={index}
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="text-lg font-semibold mb-2">사용 기술</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-background2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 