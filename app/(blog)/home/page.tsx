import { getMetadata } from "@/lib/metaData";
import HomePage from "./HomePage";

// ISR 설정 - 10분마다 재생성
export const revalidate = 600;

export async function generateMetadata() {
  return getMetadata({ title: "Home | Hailey's blog", description: "안녕하세요 프론트엔드 개발자 백혜인 입니다." });
}

export default function Page() {
  return <HomePage />;
}
