import { getMetadata } from "@/lib/metaData";
import { getPostList } from "@/api/posts/getPostList";
import { PostList } from "@/types/post";
import { Header, Pagination } from "@/components/common";
import BlogContent from "./blogPage";

async function getPostListData(searchTag: string, page: number | undefined = 1): Promise<PostList> {
  const response = await getPostList(page, searchTag);
  return await response.json();
}

export async function generateMetadata() {
  return getMetadata({ title: "Blog", description: "공부한 개념을 온전히 이해하기 위해 기록합니다!" });
}

export default async function Page(props: { searchParams: { tag: string; page: number } }) {
  const { tag, page } = props.searchParams;
  console.log(tag);

  const data = await getPostListData(tag || "", page);
  return (
    <div className="flex flex-col h-full">
      <Header isDetail={false} />
      <BlogContent blogList={data} />
      {data?.totalElement && data?.totalElement > 0 ? (
        <div className="self-center mt-8 mb-8">
          <Pagination totalPages={data.totalPage} tag={tag} pageIndex={data.page - 1} currentPage={page} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
