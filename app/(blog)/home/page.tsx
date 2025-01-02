"use client";

import { useEffect, useState } from "react";

import { BlogList } from "@/public/dummy/blogList";

import { Header, Divider } from "@/components/common";
import { PostBox } from "@/components";
import * as S from "./style";

export default function HomePage() {
  const [tapMenu, setTapMenu] = useState("all");

  useEffect(() => {
    console.log("post 게시글 리스트", tapMenu);
  }, [tapMenu]);
  return (
    <S.Container>
      <Header isDetail={false} />
      <S.ContentBox>
        <S.MenuTapBox>
          <S.TapButton isTap={tapMenu === "all"} onClick={() => setTapMenu("all")}>
            All (199)
          </S.TapButton>
          <S.TapButton isTap={tapMenu === "front"} onClick={() => setTapMenu("front")}>
            FrontEnd (120)
          </S.TapButton>
          <S.TapButton isTap={tapMenu === "back"} onClick={() => setTapMenu("back")}>
            BackEnd (79)
          </S.TapButton>
        </S.MenuTapBox>
        <Divider margin="0 0 8px 0" />
        <S.PostContainer>
          {BlogList.data.map((post) => (
            <PostBox key={post.seq} post={post} />
          ))}
        </S.PostContainer>
      </S.ContentBox>
    </S.Container>
  );
}
