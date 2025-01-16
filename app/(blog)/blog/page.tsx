"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { PostList } from "@/types/post";
import { Header, Divider } from "@/components/common";
import { PostBox } from "@/components";
import * as S from "./style";
import tagConverter from "@/lib/tagConverter";

// 캐시 저장
const cache = new Map<string, PostList>();

export default function HomePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag") || "all";

  const [blogList, setBlogList] = useState<PostList>();

  const getPostList = useCallback(async () => {
    // 캐시에 데이터가 있는지 확인
    if (cache.has(tag)) {
      setBlogList(cache.get(tag));
      return;
    }

    try {
      const res = await axios.get("/api/posts", {
        params: {
          page: 1,
          searchTag: tag,
        },
      });
      // 캐시에 데이터 저장
      cache.set(tag, res.data);
      setBlogList(res.data);
    } catch (e) {
      console.log(e);
    }
  }, [tag]);

  useEffect(() => {
    getPostList();
  }, [getPostList]);

  const handleMove = (newTag: string) => {
    router.push(`/blog?tag=${newTag}`);
  };

  return (
    <S.Container>
      <Header isDetail={false} />
      <S.ContentBox>
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
          {blogList?.data.map((post) => (
            <PostBox key={post._id} post={post} />
          ))}
        </S.PostContainer>
      </S.ContentBox>
    </S.Container>
  );
}
