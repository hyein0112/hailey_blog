"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import { PostList } from "@/types/post";
import { TagCountType } from "@/types/tagCount";

import { Header, Divider } from "@/components/common";
import { PostBox } from "@/components";

import * as S from "./style";

export default function HomePage() {
  const [tapMenu, setTapMenu] = useState("all");
  const [blogList, setBlogList] = useState<PostList>();
  const [postTagCount, setPostTagCound] = useState<TagCountType>();

  useEffect(() => {
    getTagCount();
  }, []);

  useEffect(() => {
    getPostList();
  }, [tapMenu]);

  const getTagCount = async () => {
    try {
      const res = await axios.get("/api/posts/tag");
      setPostTagCound(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const getPostList = async () => {
    try {
      const postsList = await axios.get("api/posts", {
        params: {
          page: 1,
          search: tapMenu,
        },
      });
      setBlogList(postsList.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Container>
      <Header isDetail={false} />
      <S.ContentBox>
        <S.MenuTapBox>
          <S.TapButton isTap={tapMenu === "all"} onClick={() => setTapMenu("all")}>
            All{postTagCount && ` (${postTagCount.all})`}
          </S.TapButton>
          <S.TapButton isTap={tapMenu === "front"} onClick={() => setTapMenu("front")}>
            FrontEnd{postTagCount && ` (${postTagCount.front})`}
          </S.TapButton>
          <S.TapButton isTap={tapMenu === "back"} onClick={() => setTapMenu("back")}>
            BackEnd{postTagCount && ` (${postTagCount.back})`}
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
