import { SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

type TechStackItem = {
  name: string;
  icon?: React.ElementType;
  customIcon?: React.ReactNode;
  color: string;
};

export const techStack: TechStackItem[] = [
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  {
    name: "React Native",
    customIcon: <Image src="/tech-logos/react-native.svg" alt="React Native" width={28} height={28} className="object-contain" />,
    color: "text-blue-500",
  },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  {
    name: "Emotion CSS",
    customIcon: <Image src="/tech-logos/emotion.png" alt="Emotion CSS" width={28} height={28} className="object-contain" />,
    color: "text-pink-500",
  },
  {
    name: "Zustand",
    customIcon: <Image src="/tech-logos/zustand.svg" alt="Zustand" width={28} height={28} className="object-contain" />,
    color: "text-purple-500",
  },
  {
    name: "TanStack Query",
    customIcon: <Image src="/tech-logos/tanstack-query.svg" alt="TanStack Query" width={28} height={28} className="object-contain" />,
    color: "text-cyan-500",
  },
];

export const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/hyein0112" },
  { name: "Email", icon: FaEnvelope, url: "mailto:dev.hyein@icloud.com" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/hyein-baek-75497a32b" },
];
