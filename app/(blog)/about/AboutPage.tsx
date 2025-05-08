'use client'

import { Divider, Header } from "@/components/common";
import Image from "next/image";
import { IoLogoGithub, IoMdMail } from "react-icons/io";
import { FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';
import { useState, useEffect } from 'react';
import { companies } from './data/companies';
import { personalProjects } from './data/personalProjects';

export default function AboutPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header isDetail={false} />
      <main className="flex-1 self-center p-4 md:p-6 w-full max-w-[1200px] flex flex-col gap-12">
        <section className="mb-6">
          <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-6">
            <div className="flex flex-col items-center gap-4">
              <Image
                className="object-cover rounded-full border-[6px] border-solid border-green-500 min-w-[160px] h-[160px]"
                width={160}
                height={160}
                src={"https://pub-24c7455649c447158e9e42357ec70220.r2.dev/hailey-blog/17405849481947giqnk.jpg"}
                alt={"about 프로필"}
              />
            </div>
            <div className="flex flex-col-reverse md:flex-col gap-3 items-center md:items-start">
              <div className="flex flex-col gap-2 md:gap-1">
                <p>
                  안녕하세요 FrontEnd 개발자 <span className="font-semibold text-green-600">백혜인</span>입니다!
                </p>
                <p>
                  <span className="font-semibold text-green-600">실천력</span>과&nbsp;
                  <span className="font-semibold text-green-600">적응력</span>이 뛰어난 성격 덕분에 빠르게 변화하는 개발 시장에서 즐겁게
                  일하고 있습니다.
                </p>
                <p>
                  다양한 기술을 배우는데 열정이 있으며 늘 <span className="font-semibold text-green-600">성장하기 위해 노력</span>합니다.
                </p>
                <p>
                  <span className="font-semibold text-green-600">함께 성장하는 팀 문화</span>를 지향하며 지식을 나누는 것을 좋아합니다.
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  className="flex items-center gap-1 py-1 px-2 bg-background2 border border-solid border-background4 rounded-md button-hover"
                  href="https://github.com/hyein0112"
                  target="_blank">
                  <IoLogoGithub size={24} />
                  <span className="hidden md:inline-block text-sm">Github</span>
                </a>
                <a
                  className="flex items-center gap-1 py-1 px-2 bg-background2 border border-solid border-background4 rounded-md button-hover"
                  href="mailto:dev.hyein@icloud.com"
                  target="_blank">
                  <div className="flex justify-center items-center bg-black rounded-3xl w-[21px] h-[21px]">
                    <IoMdMail size={15} color="#f2f2f2" />
                  </div>
                  <span className="hidden md:inline-block text-sm">Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center">
          <Divider color="#eaeaed" />
        </div>

        {/* Work Experience */}
        <section className="mt-6 flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <FaBriefcase className="text-2xl text-green-600" />
            <h2 className="text-3xl font-bold">Work Experience</h2>
          </div>
          
          <div className="space-y-12">
            {companies.map((company, index) => (
              <div key={company.id} className="relative">
                {index !== companies.length - 1 && (
                  <div className="absolute left-16 top-16 bottom-0 w-0.5 bg-gray-300" />
                )}
                
                <div className="flex gap-10">
                  <div className="w-32 text-center flex-shrink-0">
                    <div className="sticky top-8">
                      <span className="text-sm text-gray-500">{company.period}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="rounded-2xl">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold">{company.name}</h3>
                        <p className="text-gray-600 mt-1">{company.position}</p>
                      </div>
                      
                      <div className="space-y-4">
                        {company.projects.map((project) => (
                          <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                            variant="company"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Projects */}
        <section className="flex flex-col gap-8 mb-8">
          <div className="flex items-center gap-3">
            <FaProjectDiagram className="text-2xl text-green-600" />
            <h2 className="text-3xl font-bold">Personal Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                variant="personal"
              />
            ))}
          </div>
        </section>
      </main>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
