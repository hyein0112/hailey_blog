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
    // 현재 태그와 같으면 아무것도 하지 않음
    if (tag === currentTag) return;

    // 부모 컴포넌트에 즉시 태그 변경 알림 (Optimistic UI)
    if (onTagChange) {
      onTagChange(tag);
    }

    // URL 업데이트
    const params = new URLSearchParams(searchParams);
    params.set("searchTag", tag);
    params.set("page", "1"); // 태그 변경 시 첫 페이지로
    router.push(`/blog?${params.toString()}`);
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
