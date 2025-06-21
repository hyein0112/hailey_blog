"use client";

import { useRouter, useSearchParams } from "next/navigation";
import * as S from "../style";

interface TagListProps {
  tags: string[];
  currentTag: string;
  onTagChange?: (tag: string) => void;
}

export default function TagList({ tags, currentTag, onTagChange }: TagListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (!tags) return null;

  const handleTagClick = (tag: string) => {
    // URL 업데이트
    const params = new URLSearchParams(searchParams);
    params.set("tag", tag);
    params.set("page", "1"); // 태그 변경 시 첫 페이지로
    router.push(`/blog?${params.toString()}`);

    // 부모 컴포넌트에 태그 변경 알림
    if (onTagChange) {
      onTagChange(tag);
    }
  };

  return (
    <S.MenuTapBox>
      <S.TapButton $isTap={currentTag === "all"} onClick={() => handleTagClick("all")}>
        All
      </S.TapButton>
      {tags.map((tag) => (
        <S.TapButton key={tag} $isTap={currentTag === tag} onClick={() => handleTagClick(tag)}>
          {tag}
        </S.TapButton>
      ))}
    </S.MenuTapBox>
  );
}
