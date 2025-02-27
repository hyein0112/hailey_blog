"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PostList } from "@/types/post";
import { Divider } from "@/components/common";
import { PostBox } from "@/components";
import * as S from "./style";
import tagConverter from "@/lib/tagConverter";

export default function BlogContent({ blogList }: { blogList: PostList }) {
  const router = useRouter();
  const [tag, setTag] = useState(blogList.searchTag);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTag(blogList.searchTag);
    console.log(blogList.searchTag);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [blogList]);

  const handleMove = (newTag: string) => {
    router.push(`/blog?tag=${newTag}`);
    setIsLoading(true);
  };

  return (
    <S.ContentBox>
      <section>
        <h1 className="text-3xl mb-1">Blog</h1>
        <span>공부한 개념을 온전히 이해하기 위해 기록합니다!</span>
      </section>

      <S.MenuTapBox>
        <S.TapButton isTap={tag === "all"} onClick={() => handleMove("all")}>
          All
        </S.TapButton>
        <S.TapButton isTap={tag === "front"} onClick={() => handleMove("front")}>
          FrontEnd
        </S.TapButton>
        <S.TapButton isTap={tag === "back"} onClick={() => handleMove("back")}>
          BackEnd
        </S.TapButton>
        <S.TapButton isTap={tag === "etc"} onClick={() => handleMove("etc")}>
          Etc
        </S.TapButton>
      </S.MenuTapBox>

      <Divider margin="0 0 8px 0" />
      <S.TapTitle>
        📚 {tagConverter(tag)} ({blogList?.totalElement})
      </S.TapTitle>
      <S.PostContainer>
        {isLoading ? (
          [1, 1, 1].map((_, i) => <PostBox key={i} />)
        ) : (blogList?.data.length || 0) > 0 ? (
          blogList?.data.map((post) => <PostBox key={post._id} post={post} />)
        ) : (
          <div>{tag}에 해당하는 포스트가 없어요</div>
        )}
      </S.PostContainer>
    </S.ContentBox>
  );
}
