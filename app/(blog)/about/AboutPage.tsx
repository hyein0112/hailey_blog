import { Header } from "@/components/common";
import Image from "next/image";
import { IoLogoGithub, IoMdMail } from "react-icons/io";
export default function AboutPage() {
  return (
    <div className="flex h-full flex-col">
      <Header isDetail={false} />
      <main className="self-center p-4 md:p-6 w-full max-w-[1200px] flex flex-col gap-[5vh]">
        <section>
          <div className="flex flex-col md:flex-row items-center mt-3 gap-4">
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
        <section>
          <h1 className="text-3xl">Work</h1>
        </section>
        <section>
          <h1 className="text-3xl">Project</h1>
        </section>
      </main>
    </div>
  );
}
