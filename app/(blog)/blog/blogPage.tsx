"use client";

import { useEffect, useState } from "react";
import { PostList } from "@/types/post";
import { Divider } from "@/components";
import PostBox from "./components/PostBox";
import TagList from "./components/TagList";
import * as S from "./style";

export default function BlogContent({ blogList }: { blogList: PostList }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [blogList]);

  return (
    <S.ContentBox>
      <section className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <p className="text-gray-600 text-base md:text-lg">공부한 개념을 온전히 이해하기 위해 기록합니다!</p>
      </section>

      <TagList currentTag={blogList.searchTag} />

      <Divider margin="0 0 16px 0" />

      <S.TapTitle>
        📚 {blogList.searchTag === "all" ? "All" : blogList.searchTag} ({blogList?.totalElement})
      </S.TapTitle>

      <S.PostContainer>
        {isLoading ? (
          [1, 1, 1].map((_, i) => <PostBox key={i} />)
        ) : (blogList?.data.length || 0) > 0 ? (
          blogList?.data.map((post) => <PostBox key={post._id} post={post} />)
        ) : (
          <div className="text-center py-12 text-gray-500">{blogList.searchTag}에 해당하는 포스트가 없어요</div>
        )}
      </S.PostContainer>
    </S.ContentBox>
  );
}
