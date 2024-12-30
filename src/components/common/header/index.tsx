import { MdSearch } from "react-icons/md";
import * as S from "./style";
import React, { useState } from "react";

export default function Header() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue) return;
    else {
      console.log("검색어 post: ", searchValue);
    }
  };
  return (
    <S.Container>
      <S.HeaderInnerBox>
        <div>Hailey&apos;s Blog</div>
        <S.InputBox onSubmit={handleSubmit} showSearchBar={showSearchBar}>
          <S.Input
            showSearchBar={showSearchBar}
            type="text"
            id="search-input"
            placeholder="검색어 입력"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <S.SearchButton id="search-button" type="submit" onClick={() => setShowSearchBar(true)}>
            <MdSearch size={20} />
          </S.SearchButton>
        </S.InputBox>
      </S.HeaderInnerBox>
    </S.Container>
  );
}
