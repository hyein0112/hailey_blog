import { getMetadata } from "@/lib/metaData";
import AboutPage from "./AboutPage";

export async function generateMetadata() {
  return getMetadata({
    title: "About | Hailey's blog",
    description:
      "안녕하세요 FrontEnd 개발자 백혜인입니다! 실천력과 적응력이 뛰어난 성격 덕분에 빠르게 변화하는 개발 시장에서 즐겁게 일하고 있습니다. 다양한 기술을 배우는데 열정이 있으며 늘 성장하기 위해 노력합니다. 함께 성장하는 팀 문화를 지향하고 지식을 나누는 것을 좋아합니다.",
  });
}

export default function Page() {
  return <AboutPage />;
}
