import { Header, ProgressBar, Giscus } from "@/components/common";
import { PostContent } from "@/components";
import { PostData } from "@/types/post";

export default async function PostDetailPage({ content }: { content: PostData }) {
  return (
    <div className="flex flex-col h-screen items-center bg-background2">
      <Header isDetail={true} />
      <ProgressBar />
      <main className="py-10 px-4 flex flex-col max-w-[1000px] w-full">
        <PostContent content={content} />
        <Giscus />
      </main>
    </div>
  );
}
