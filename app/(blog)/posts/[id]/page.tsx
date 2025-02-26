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
  return getMetadata({ title: data.title, description: removeMd(data.content), ogImage: data.thumbnail });
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getPostData(id);

  return <PostPage content={data} />;
}
