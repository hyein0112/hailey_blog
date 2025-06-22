import Link from "next/link";
import { RecentPostCardBox } from "./components/RecentPostCard";
import { getRecentPosts } from "@/lib/posts";
import { techStack, socialLinks } from "./data";

export default async function HomePage() {
  // 서버에서 최근 포스트 데이터 가져오기
  const recentPosts = await getRecentPosts();

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
          <div className="mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map((tech) => (
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
                className="text-3xl hover:text-green-600 transition-colors"
                title={social.name}>
                <social.icon />
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
