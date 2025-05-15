import { Header, ProgressBar, Giscus } from "@/components";
import { PostData } from "@/types/post";
import PostContent from "./components/PostContent";

export default async function PostDetailPage({ content }: { content: PostData }) {
  return (
    <div className="flex flex-col items-center bg-background2">
      <Header isDetail={true} />
      <ProgressBar />
      <main className="my-10 p-5 flex flex-col max-w-[1150px] w-11/12 bg-white rounded-lg shadow-lg">
        <PostContent content={content} />
        <Giscus />
      </main>
    </div>
  );
}
