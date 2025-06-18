"use client";

import { useEffect, useState } from "react";
import * as S from "../style";

export default function TagList({ currentTag }: { currentTag: string }) {
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch("/api/posts?type=tags");
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error("태그 로딩 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTags();
  }, []);

  if (isLoading) {
    return (
      <S.MenuTapBox>
        <S.TapButton $isTap={currentTag === "all"} href="/blog?tag=all" prefetch={true} className="mb-2">
          All
        </S.TapButton>
      </S.MenuTapBox>
    );
  }

  return (
    <S.MenuTapBox>
      <S.TapButton $isTap={currentTag === "all"} href="/blog?tag=all" className="mb-2">
        All
      </S.TapButton>
      {tags.map((tag) => (
        <S.TapButton key={tag} $isTap={currentTag === tag} href={`/blog?tag=${tag}`} className="mb-2">
          {tag}
        </S.TapButton>
      ))}
    </S.MenuTapBox>
  );
}
