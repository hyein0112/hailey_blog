import PostPage from "./Postpage";
import { getMetadata } from "@/lib/metaData";
import { getPostData, getAllPostIds } from "@/lib/posts";
import removeMd from "remove-markdown-and-html";

// ISR 설정 - 10분마다 재생성
export const revalidate = 600;

// 동적 라우트 생성 - 빌드 시 모든 포스트 페이지 생성
export async function generateStaticParams() {
  try {
    const postIds = await getAllPostIds();

    return postIds.map((id) => ({
      id: id,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const data = await getPostData(id);

    // 마크다운 제거 및 설명 길이 제한
    const cleanContent = removeMd(data.content).replace(/\s+/g, " ").trim();
    const description = cleanContent.length > 160 ? cleanContent.substring(0, 157) + "..." : cleanContent;

    return getMetadata({
      title: data.title,
      description: description,
      ogImage: data.thumbnail,
      asPath: `/posts/${id}`,
    });
  } catch (error) {
    console.error("Error generating metadata:", error);
    return getMetadata({
      title: "Post Not Found",
      description: "요청하신 포스트를 찾을 수 없습니다.",
    });
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const data = await getPostData(id);
    return <PostPage content={data} />;
  } catch (error) {
    console.error("Error loading post:", error);
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">포스트를 찾을 수 없습니다</h1>
          <p className="text-gray-600 mb-6">요청하신 포스트가 존재하지 않거나 삭제되었습니다.</p>
          <a href="/blog" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            블로그로 돌아가기
          </a>
        </div>
      </div>
    );
  }
}
