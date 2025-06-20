import * as S from "../style";

export default function TagList({ tags, currentTag }: { tags: string[]; currentTag: string }) {
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
