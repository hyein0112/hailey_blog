"use client";

import React from "react";
import { useParams } from "next/navigation";

import { Header } from "@/components/common";
import * as S from "./style";

export default function PostDetail() {
  const { id } = useParams<{ id: string }>();
  return (
    <S.Container>
      <Header isDetail={true} />
      <div> {id}: 안녕??</div>
    </S.Container>
  );
}
