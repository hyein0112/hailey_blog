"use client";

import { Pagination } from "@/components";
import BlogContent from "./blogContent";
import { PostList } from "@/types/post";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { postCache } from "@/lib/cache";

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
  const [tags] = useState<string[]>(initialTags);
  const [isLoading, setIsLoading] = useState(false);
  const [optimisticTag, setOptimisticTag] = useState<string | null>(null);

  const tag = searchParams.get("tag") || "all";
  const page = parseInt(searchParams.get("page") || "1");

  // 캐시 키 생성
  const getCacheKey = useCallback((searchTag: string, pageNum: number) => {
    return `${searchTag}:${pageNum}`;
  }, []);

  // 초기 데이터를 캐시에 저장
  useEffect(() => {
    const initialCacheKey = getCacheKey(initialData.searchTag, initialData.page);
    postCache.set(initialCacheKey, initialData);
  }, [initialData, getCacheKey]);

  // Optimistic UI를 위한 데이터 업데이트 (캐시 확인 포함)
  const handleTagChange = useCallback(
    (newTag: string) => {
      // 즉시 optimistic 태그 설정
      setOptimisticTag(newTag);

      const cacheKey = getCacheKey(newTag, 1); // 태그 변경 시 항상 1페이지
      const cachedData = postCache.get(cacheKey);

      if (cachedData) {
        // 캐시된 데이터가 있으면 즉시 표시
        setData(cachedData);
        setIsLoading(false);
      } else {
        // 캐시된 데이터가 없으면 로딩 상태 표시
        setIsLoading(true);
      }
    },
    [getCacheKey],
  );

  // 데이터 가져오기 함수 (캐싱 포함)
  const fetchDataWithCache = useCallback(
    async (searchTag: string, pageNum: number) => {
      const cacheKey = getCacheKey(searchTag, pageNum);

      // 캐시에서 먼저 확인
      const cachedData = postCache.get(cacheKey);
      if (cachedData) {
        return cachedData;
      }

      // 캐시에 없으면 API 호출
      const newData = await getPostListData(searchTag, pageNum);

      // 캐시에 저장
      postCache.set(cacheKey, newData);

      return newData;
    },
    [getCacheKey],
  );

  // 현재 URL과 초기 데이터가 다른 경우에만 데이터 가져오기
  const shouldFetchData = useMemo(() => {
    return tag !== initialData.searchTag || page !== initialData.page;
  }, [tag, page, initialData.searchTag, initialData.page]);

  useEffect(() => {
    if (shouldFetchData) {
      const fetchData = async () => {
        try {
          // 캐시 확인
          const cacheKey = getCacheKey(tag, page);
          const cachedData = postCache.get(cacheKey);

          if (cachedData) {
            // 캐시 히트 시 로딩 없이 즉시 데이터 설정
            setData(cachedData);
            setOptimisticTag(null);
            return;
          }

          // 캐시 미스 시에만 로딩 상태 설정
          setIsLoading(true);
          const newData = await fetchDataWithCache(tag, page);
          setData(newData);
          setOptimisticTag(null);
        } catch (error) {
          console.error("데이터 가져오기 실패:", error);
          setOptimisticTag(null);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    } else {
      // 초기 데이터와 같으면 캐시에서 가져오기 시도
      const currentCacheKey = getCacheKey(tag, page);
      const cachedData = postCache.get(currentCacheKey);
      if (cachedData) {
        setData(cachedData);
      }
      setOptimisticTag(null);
    }
  }, [tag, page, shouldFetchData, fetchDataWithCache, getCacheKey]);

  // 표시할 태그 결정 (optimistic 태그가 있으면 그것을 사용)
  const displayTag = optimisticTag || tag;

  return (
    <div className="flex flex-col h-full">
      <BlogContent blogList={data} tags={tags} isLoading={isLoading} onTagChange={handleTagChange} currentTag={displayTag} />
      {data?.totalElement && data?.totalElement > 0 ? (
        <div className="self-center mt-8 mb-8">
          <Pagination totalPages={data.totalPage} tag={tag} pageIndex={data.page - 1} currentPage={page} />
        </div>
      ) : null}
    </div>
  );
}
