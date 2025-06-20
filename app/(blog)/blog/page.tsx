import { getMetadata } from "@/lib/metaData";
import BlogPage from "./blogPage";

export async function generateMetadata() {
  return getMetadata({ title: "Blog | Hailey's blog", description: "공부한 개념을 온전히 이해하기 위해 기록합니다!" });
}

export default async function Page() {
  return <BlogPage />;
}
