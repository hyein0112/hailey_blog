"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { PostList } from "@/types/post";
import { Header, Divider, Pagination } from "@/components/common";
import { PostBox } from "@/components";
import * as S from "./style";
import tagConverter from "@/lib/tagConverter";

// 캐시 저장

function BlogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag") || "all";

  const [pageIndex, setPageIndex] = useState(0);

  const [blogList, setBlogList] = useState<PostList>();

  const getPostList = useCallback(async () => {
    try {
      const res = await axios.get("/api/posts", {
        params: {
          page: pageIndex + 1,
          searchTag: tag,
        },
      });
      setBlogList(res.data);
    } catch (e) {
      console.log(e);
    }
  }, [tag, pageIndex]);

  useEffect(() => {
    getPostList();
  }, [getPostList]);

  useEffect(() => {
    setPageIndex(0);
  }, [tag]);

  const handleMove = (newTag: string) => {
    router.push(`/blog?tag=${newTag}`);
  };

  return (
    <S.ContentBox>
      <section>
        <h1 className="text-3xl mb-1">Blog</h1>
        <span>공부한거 까먹지 않게 기록했어유</span>
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
        {blogList?.data.length || 0 > 0 ? blogList?.data.map((post) => <PostBox key={post._id} post={post} />) : <div>no data</div>}
      </S.PostContainer>
      {blogList?.totalElement && blogList?.totalElement > 0 ? (
        <div className="self-center mt-8 mb-8">
          <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} totalPages={blogList.totalPage} />
        </div>
      ) : (
        <></>
      )}
    </S.ContentBox>
  );
}

export default function HomePage() {
  return (
    <S.Container>
      <Header isDetail={false} />
      <Suspense fallback={<div>로딩 중...</div>}>
        <BlogContent />
      </Suspense>
    </S.Container>
  );
}
