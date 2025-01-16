"use client";

import React, { useState } from "react";
import Link from "next/link";

import { SideMenu } from "@/components";
import theme from "@/styles/theme";
import * as S from "./style";

import Logo from "@/assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header({ isDetail }: { isDetail: boolean }) {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <>
      <SideMenu isOpen={showSideMenu} onClose={() => setShowSideMenu(false)} />
      <S.Container className={isDetail ? "detail" : ""}>
        <S.HeaderWrapbox>
          <S.HeaderInnerBox>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
            <S.RightBox>
              <Link href={"/blog"}>
                <S.PCButton>Blog</S.PCButton>
              </Link>
              <Link href={"/about"}>
                <S.PCButton>About</S.PCButton>
              </Link>
              <S.MOButton onClick={() => setShowSideMenu(true)}>
                <RxHamburgerMenu size={24} color={theme.colors.border4} />
              </S.MOButton>
            </S.RightBox>
          </S.HeaderInnerBox>
        </S.HeaderWrapbox>
      </S.Container>
    </>
  );
}
