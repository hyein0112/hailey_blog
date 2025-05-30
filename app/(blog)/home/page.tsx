import { getMetadata } from "@/lib/metaData";
import HomePage from "./HomePage";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return getMetadata({ title: "Home | Hailey's blog", description: "안녕하세요 프론트엔드 개발자 백혜인 입니다." });
}

export default function Page() {
  return <HomePage />;
}
