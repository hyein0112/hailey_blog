import { getMetadata } from "@/lib/metaData";
import { Suspense } from "react";
import BlogPage from "./blogPage";
import { getPostListData, getTagsData } from "@/lib/posts";

// ISR 설정 - 10분마다 재생성
export const revalidate = 600;

export async function generateMetadata() {
  return getMetadata({
    title: "Blog | Hailey's blog",
    description: "공부한 개념을 온전히 이해하기 위해 기록합니다!",
    asPath: "/blog",
  });
}

export default async function Page() {
  // 서버에서 초기 데이터를 미리 가져오기
  const initialData = await getPostListData(1, "all");
  const initialTags = await getTagsData();

  return (
    <Suspense>
      <BlogPage initialData={initialData} initialTags={initialTags} />
    </Suspense>
  );
}
