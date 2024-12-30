import React, { useState } from "react";

import theme from "@/styles/theme";
import SideMenu from "@/components/sideMenu";
import * as S from "./style";

import { MdSearch, MdOutlineMailOutline } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoGithub } from "react-icons/io";

export default function Header() {
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
      <S.Container>
        <S.HeaderInnerBox>
          <div>Hailey&apos;s Blog</div>
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
                <MdSearch size={24} color={theme.colors.gray_800} />
              </S.SearchButton>
            </S.InputBox>
            <S.ContactButton>
              <IoLogoGithub size={24} color={theme.colors.gray_800} />
            </S.ContactButton>
            <S.ContactButton>
              <MdOutlineMailOutline size={24} color={theme.colors.gray_800} />
            </S.ContactButton>
            <button onClick={() => setShowSideMenu(true)}>
              <RxHamburgerMenu size={24} color={theme.colors.gray_800} />
            </button>
          </S.RightBox>
        </S.HeaderInnerBox>
      </S.Container>
    </>
  );
}
