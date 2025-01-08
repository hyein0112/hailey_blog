"use client";

import MyEditor from "@/components/Editor";
import React, { useEffect, useState } from "react";

import * as S from "./style";
import Link from "next/link";
import usePost from "@/stores/usePost";

export default function WritePage() {
  const [isWriter, setIsWriter] = useState(false);
  const { postData } = usePost();

  const handleClickPost = () => {
    console.log(postData);
  };

  useEffect(() => {
    const writer = prompt("너 누구야");

    if (writer) {
      setIsWriter(true);
    } else {
      alert("bye");
    }
  }, []);

  return (
    isWriter && (
      <S.Container>
        <MyEditor />
        <S.BottomButtonBox>
          <Link href={"/"}>
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
