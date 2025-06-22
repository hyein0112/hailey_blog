"use client";

import BlogContent from "./blogContent";
import { PostList } from "@/types/post";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { setCache, getCache } from "@/lib/cache";

async function getPostListData(searchTag: string, page: number = 1): Promise<PostList> {
  const response = await fetch(`/api/posts?page=${page}&searchTag=${searchTag}`);
  return await response.json();
}

interface BlogPageProps {
  initialData: PostList;
  initialTags: string[];
}

export default function BlogPage({ initialData, initialTags }: BlogPageProps) {
  const searchParams = useSearchParams();
  const [data, setData] = useState<PostList>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const currentTag = searchParams.get("searchTag") || "all";
  const currentPage = parseInt(searchParams.get("page") || "1");

  // 초기 데이터를 캐시에 저장
  useEffect(() => {
    const initialCacheKey = `all:1`;
    setCache(initialCacheKey, initialData);
  }, [initialData]);

  const handleTagChange = useCallback(async (tag: string) => {
    const cacheKey = `${tag}:1`;
    const cachedData = getCache(cacheKey);

    if (cachedData) {
      setData(cachedData);
      return;
    }

    setIsLoading(true);

    try {
      const newData = await getPostListData(tag, 1);
      setData(newData);
      setCache(cacheKey, newData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // URL 변경 감지 및 데이터 가져오기
  useEffect(() => {
    // 초기 데이터와 같으면 아무것도 하지 않음
    if (currentTag === "all" && currentPage === 1 && initialData) {
      return;
    }

    const cacheKey = `${currentTag}:${currentPage}`;
    const cachedData = getCache(cacheKey);

    if (cachedData) {
      setData(cachedData);
      return;
    }

    setIsLoading(true);

    getPostListData(currentTag, currentPage)
      .then((newData) => {
        setData(newData);
        setCache(cacheKey, newData);
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentTag, currentPage, initialData]);

  return (
    <div className="flex h-full flex-col pb-10">
      <main className="self-center w-full flex flex-col items-center gap-[3vh]">
        <BlogContent blogList={data} tags={initialTags} currentTag={currentTag} isLoading={isLoading} onTagChange={handleTagChange} />
      </main>
    </div>
  );
}
