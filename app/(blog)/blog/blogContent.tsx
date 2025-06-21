import { PostList } from "@/types/post";
import { Divider, LoadingSpinner } from "@/components";
import PostBox from "./components/PostBox";
import TagList from "./components/TagList";
import * as S from "./style";

interface BlogContentProps {
  blogList: PostList | null;
  tags: string[];
  isLoading?: boolean;
  onTagChange?: (tag: string) => void;
  currentTag?: string;
}

export default function BlogContent({ blogList, tags, isLoading = false, onTagChange, currentTag }: BlogContentProps) {
  return (
    <S.ContentBox>
      <section className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <p className="text-gray-600 text-base md:text-lg">공부한 개념을 온전히 이해하기 위해 기록합니다!</p>
      </section>

      <TagList tags={tags} currentTag={currentTag || blogList?.searchTag || "all"} onTagChange={onTagChange} />

      <Divider margin="0 0 16px 0" />

      {isLoading ? (
        <div className="flex justify-center items-center py-16">
          <LoadingSpinner size="large" text="데이터 로딩 중..." />
        </div>
      ) : blogList ? (
        <>
          <S.TapTitle>
            📚 {blogList.searchTag === "all" ? "All" : blogList.searchTag} ({blogList?.totalElement})
          </S.TapTitle>

          <S.PostContainer>
            {blogList?.data.length || 0 > 0 ? (
              blogList?.data.map((post) => <PostBox key={post._id} post={post} />)
            ) : (
              <div className="text-center py-12 text-gray-500">{blogList.searchTag}에 해당하는 포스트가 없어요</div>
            )}
          </S.PostContainer>
        </>
      ) : (
        <div className="flex justify-center items-center py-16">
          <LoadingSpinner size="large" text="로딩 중..." />
        </div>
      )}
    </S.ContentBox>
  );
}
