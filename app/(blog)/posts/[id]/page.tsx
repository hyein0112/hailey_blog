import { getPostOne } from "@/api/posts/getPostList";
import PostPage from "./Postpage";
import { PostData } from "@/types/post";
import { getMetadata } from "@/lib/metaData";
import removeMd from "remove-markdown-and-html";

export const dynamic = "force-dynamic";

async function getPostData(id: string): Promise<PostData> {
  const response = await getPostOne(id);
  return await response.json();
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
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
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getPostData(id);

  return <PostPage content={data} />;
}
