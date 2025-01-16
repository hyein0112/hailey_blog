"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { Header, Giscus, ProgressBar } from "@/components/common";
import * as S from "./style";
import axios from "axios";
import { PostContent } from "@/components";
import { PostData } from "@/types/post";

export default function PostDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<PostData>();

  useEffect(() => {
    const getPostData = async () => {
      const data = await axios.get(`/api/posts/${id}`);
      setContent(data.data);
    };

    getPostData();
  }, [id]);

  return (
    content && (
      <S.Container>
        <Header isDetail={true} />
        <ProgressBar />
        <S.Main>
          <PostContent content={content} />
          <Giscus />
        </S.Main>
      </S.Container>
    )
  );
}
