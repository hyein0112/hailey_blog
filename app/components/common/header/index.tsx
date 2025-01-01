"use client";

import React, { useState } from "react";
import Link from "next/link";

import { SideMenu } from "@/components";
import theme from "@/styles/theme";
import * as S from "./style";

import { MdSearch, MdOutlineMailOutline } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoGithub } from "react-icons/io";

export default function Header({ isDetail }: { isDetail: boolean }) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue) return;
    else {
      console.log("검색어 post: ", searchValue);
    }
  };
  return (
    <>
      <SideMenu isOpen={showSideMenu} onClose={() => setShowSideMenu(false)} />
      <S.Container className={isDetail ? "detail" : ""}>
        <S.HeaderInnerBox>
          <S.Logo>Hailey&apos;s Blog</S.Logo>
          <S.RightBox>
            <S.InputBox onSubmit={handleSubmit} showSearchBar={showSearchBar}>
              <S.Input
                showSearchBar={showSearchBar}
                type="text"
                id="search-input"
                placeholder="검색어 입력"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <S.SearchButton
                type="button"
                onClick={() => {
                  setShowSearchBar(true);
                  setTimeout(() => {
                    document.getElementById("search-input")?.focus();
                  }, 200);
                }}
              >
                <MdSearch size={24} color={theme.colors.border4} />
              </S.SearchButton>
            </S.InputBox>
            <Link href={"https://github.com/hyein0112"} about="github" target="_blank">
              <S.ContactButton>
                <IoLogoGithub size={24} color={theme.colors.border4} />
              </S.ContactButton>
            </Link>
            <Link href={"mailto:dev.hyein@icloud.com"}>
              <S.ContactButton>
                <MdOutlineMailOutline size={24} color={theme.colors.border4} />
              </S.ContactButton>
            </Link>
            <S.Button onClick={() => setShowSideMenu(true)}>
              <RxHamburgerMenu size={24} color={theme.colors.border4} />
            </S.Button>
          </S.RightBox>
        </S.HeaderInnerBox>
      </S.Container>
    </>
  );
}
