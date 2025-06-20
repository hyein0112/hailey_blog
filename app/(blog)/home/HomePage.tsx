import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiNestjs, SiMysql } from "react-icons/si";
import { RecentPostCardBox } from "./components/RecentPostCard";
import { getRecentPosts } from "@/lib/posts";

export default async function HomePage() {
  // 서버에서 최근 포스트 데이터 가져오기
  const recentPosts = await getRecentPosts();

  type TechStackItem = {
    name: string;
    icon?: React.ElementType;
    customIcon?: React.ReactNode;
    color: string;
  };

  const frontendStack: TechStackItem[] = [
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
  ];

  const backendStack: TechStackItem[] = [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "Nest.js", icon: SiNestjs, color: "text-red-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, url: "https://github.com/hyein0112" },
    { name: "Email", icon: FaEnvelope, url: "mailto:dev.hyein@icloud.com" },
  ];

  return (
    <div className="flex h-full flex-col pb-10">
      <main className="self-center w-full flex flex-col items-center gap-[3vh]">
        {/* 프로필 섹션 */}
        <section className="w-full max-w-[1200px] p-4 md:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold">Hailey</h1>
              <span className="text-xl font-medium text-gray-700">FrontEnd Developer</span>
              <p className="mt-4 text-gray-600">
                안녕하세요, 백혜인입니다.
                <br />제 블로그에 방문해주셔서 감사합니다.
                <br />
                새로운 기술을 배우고 공유하는 것을 좋아합니다.
              </p>
              <div className="mt-4 flex gap-4 justify-center md:justify-start">
                <Link href="/about">
                  <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors">
                    Who is Hailey?!
                  </button>
                </Link>
                <Link href="/blog" prefetch={true}>
                  <button className="px-4 py-2 border border-green-600 text-green-600 text-sm rounded-lg hover:bg-green-100 transition-colors">
                    View Blog
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 기술 스택 섹션 */}
        <section className="w-full max-w-[1200px] p-4 md:p-6">
          <h2 className="text-2xl mb-6">Tech Stack</h2>

          {/* 프론트엔드 기술 스택 */}
          <div className="mb-8">
            <h3 className="text-lg mb-4 text-gray-700">Frontend</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {frontendStack.map((tech) => (
                <div key={tech.name} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    {tech.customIcon ? tech.customIcon : tech.icon ? <tech.icon className={`text-[28px] ${tech.color}`} /> : null}
                    <span className="font-medium">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 백엔드 기술 스택 */}
          <div>
            <h3 className="text-lg mb-4 text-gray-700">Backend</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {backendStack.map((tech) => (
                <div key={tech.name} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    {tech.customIcon ? tech.customIcon : tech.icon ? <tech.icon className={`text-[28px] ${tech.color}`} /> : null}
                    <span className="font-medium">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 최근 포스트 섹션 */}
        <section className="w-full flex flex-col items-center">
          <div className="w-full max-w-[1200px] p-4 md:p-6 pb-1 md:pb-1">
            <h2 className="text-3xl mb-2">Recent Posts</h2>
            <p className="text-gray-600">최근 작성된 포스트를 확인해보세요!</p>
          </div>
          <div className="w-full overflow-x-auto [scrollbar-width:none]">
            <RecentPostCardBox posts={recentPosts} />
          </div>
        </section>

        {/* 소셜 미디어 링크 섹션 */}
        <section className="w-full max-w-[1200px] p-4 md:p-6">
          <h2 className="text-2xl mb-6">Connect With Me</h2>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-green-600 transition-colors">
                <social.icon />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
