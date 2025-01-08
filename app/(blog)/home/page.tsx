"use client";

import { useEffect, useState } from "react";

import { Header, Divider } from "@/components/common";
import { PostBox } from "@/components";
import * as S from "./style";
import axios from "axios";
import { PostList } from "@/types/post";

export default function HomePage() {
  const [tapMenu, setTapMenu] = useState("all");
  const [blogList, setBlogList] = useState<PostList>();

  const getPostList = async () => {
    try {
      const postsList = await axios.get("api/posts");
      setBlogList(postsList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log("post 게시글 리스트", tapMenu);
    getPostList();
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
          {blogList?.data.map((post) => (
            <PostBox key={post._id} post={post} />
          ))}
        </S.PostContainer>
      </S.ContentBox>
    </S.Container>
  );
}
