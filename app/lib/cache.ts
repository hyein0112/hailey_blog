import { PostList } from "@/types/post";

interface CacheItem {
  data: PostList;
  timestamp: number;
}

// 캐시 저장소
const cache = new Map<string, CacheItem>();
const CACHE_DURATION = 10 * 60 * 1000; // 10분

// 캐시 설정
export function setCache(key: string, data: PostList): void {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
}

// 캐시 가져오기
export function getCache(key: string): PostList | null {
  const item = cache.get(key);
  if (!item) {
    return null;
  }

  // 캐시 만료 확인
  if (Date.now() - item.timestamp > CACHE_DURATION) {
    cache.delete(key);
    return null;
  }

  return item.data;
}

// 전체 캐시 삭제
export function clearCache(): void {
  cache.clear();
}

// 특정 태그의 캐시만 삭제
export function clearTagCache(tag: string): void {
  const keysToDelete: string[] = [];
  for (const key of cache.keys()) {
    if (key.startsWith(`${tag}:`)) {
      keysToDelete.push(key);
    }
  }
  keysToDelete.forEach((key) => cache.delete(key));
}

// 새 포스트 작성 후 캐시 무효화
export function invalidatePostCache(): void {
  clearCache();
}

// 특정 태그의 캐시만 무효화
export function invalidateTagCache(tag: string): void {
  clearTagCache(tag);
}

// 캐시 상태 확인 (디버깅용)
export function getCacheInfo() {
  return {
    size: cache.size,
    keys: Array.from(cache.keys()),
  };
}
