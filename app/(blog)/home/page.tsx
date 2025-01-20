"use client";
import { Header } from "@/components/common";

import * as S from "./style";
import { Metadata } from "next";
import { getMetadata } from "@/lib/metaData";

// export const generateMetadata = async (): Promise<Metadata> => {
//   return getMetadata({ asPath: `/home` });
// };

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
