import { MetadataRoute } from "next";
import { getPostAll } from "./api/posts/getPostList";
import { WithId, Document } from "mongodb";

interface Post extends WithId<Document> {
  createdAt: string;
}
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://devhailey.com";

  // 모든 포스트 데이터 가져오기
  const response = await getPostAll();
  const posts = (await response.json()) as Post[];

  // 블로그 포스트 URL 생성
  const postsUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post._id}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 정적 페이지 URL
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/home`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
  ];

  return [...staticUrls, ...postsUrls];
}
