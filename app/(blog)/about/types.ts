export interface Project {
  id: string;
  title: string;
  period: string;
  shortDescription: string;
  description: string;
  mainTechStack: string[];
  subTechStack: string[];
  link?: string;
  demoUrl?: string;
  details?: {
    role: string;
    achievements: string[];
    challenges?: string[];
    screenshots?: string[];
  };
}

export interface Company {
  id: string;
  name: string;
  period: string;
  position: string;
  projects: Project[];
} 