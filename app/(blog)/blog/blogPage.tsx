"use client";

import { Pagination } from "@/components";
import BlogContent from "./blogContent";
import { PostList } from "@/types/post";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

async function getPostListData(searchTag: string, page: number = 1): Promise<PostList> {
  const response = await fetch(`/api/posts?page=${page}&searchTag=${searchTag}`);
  return await response.json();
}

export default function BlogPage() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<PostList | null>(null);
  const tag = searchParams.get("tag") || "all";
  const page = parseInt(searchParams.get("page") || "1");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostListData(tag, page);
      setData(data);
    };
    fetchData();
  }, [tag, page]);

  return (
    <div className="flex flex-col h-full">
      <BlogContent blogList={data} />
      {data?.totalElement && data?.totalElement > 0 ? (
        <div className="self-center mt-8 mb-8">
          <Pagination totalPages={data.totalPage} tag={tag} pageIndex={data.page - 1} currentPage={page} />
        </div>
      ) : null}
    </div>
  );
}
