"use client";

import React, { useEffect, useState } from "react";
import MyEditor from "./components/Editor";

import * as S from "./style";
import Link from "next/link";
import { useRouter } from "next/navigation";
import usePost from "@/stores/usePost";
import axios from "axios";
import dayjs from "@/lib/dayjs";

export default function WritePage() {
  const router = useRouter();
  const [isWriter, setIsWriter] = useState(false);
  const { postData } = usePost();

  const handleClickPost = async () => {
    try {
      const data = await axios.post("/api/write", {
        title: postData?.title,
        tag: postData?.tag,
        content: postData?.content,
        thumbnail: postData?.thumbnail,
        createdAt: dayjs.tz().format("YYYY-MM-DD HH:mm:ss"),
      });
      console.log(data);
      router.replace("/blog");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const writer = prompt("너 누구야");

    if (writer) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      writer === process.env.NEXT_PUBLIC_USER_KEY ? setIsWriter(true) : router.back();
    } else {
      alert("bye");
    }
  }, [router]);

  return (
    isWriter && (
      <S.Container>
        <MyEditor />
        <S.BottomButtonBox>
          <Link href={"/blog"}>
            <S.BottomButton isSubmit={false}>취소</S.BottomButton>
          </Link>
          <S.BottomButton onClick={handleClickPost} isSubmit={true}>
            등록
          </S.BottomButton>
        </S.BottomButtonBox>
      </S.Container>
    )
  );
}
