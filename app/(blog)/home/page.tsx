"use client";
import { Header } from "@/components/common";

import * as S from "./style";

export default function HomePage() {
  return (
    <S.Container>
      <Header isDetail={false} />
      <S.ContentBox>
        <h1>Hailey</h1>
        <p>안녕하세요 백혜인입니다.</p>
      </S.ContentBox>
    </S.Container>
  );
}
