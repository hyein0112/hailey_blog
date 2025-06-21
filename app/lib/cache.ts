import { PostList } from "@/types/post";

interface CacheItem {
  data: PostList;
  timestamp: number;
}

class PostCache {
  private cache = new Map<string, CacheItem>();
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5분

  set(key: string, data: PostList): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  get(key: string): PostList | null {
    const item = this.cache.get(key);
    if (!item) {
      return null;
    }

    // 캐시 만료 확인
    if (Date.now() - item.timestamp > this.CACHE_DURATION) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  clear(): void {
    this.cache.clear();
  }

  // 특정 태그의 캐시만 삭제
  clearTag(tag: string): void {
    const keysToDelete: string[] = [];
    for (const key of this.cache.keys()) {
      if (key.startsWith(`${tag}:`)) {
        keysToDelete.push(key);
      }
    }
    keysToDelete.forEach((key) => this.cache.delete(key));
  }
}

export const postCache = new PostCache();

// 새 포스트 작성 후 캐시 무효화
export function invalidatePostCache() {
  postCache.clear();
}

// 특정 태그의 캐시만 무효화
export function invalidateTagCache(tag: string) {
  postCache.clearTag(tag);
}
