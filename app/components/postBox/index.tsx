import Image from "next/image";
import Link from "next/link";

import * as S from "./style";
import { PostData } from "@/types/post";

export default function PostBox({ post }: { post: PostData }) {
  return (
    <Link href={`posts/${post.title}`}>
      <S.PostBox>
        <S.TextBox>
          <S.TitleAndContentBox>
            <S.Title>{post.title}</S.Title>
            <S.PostContent>{post.content}</S.PostContent>
          </S.TitleAndContentBox>
          <S.TagAndDateBox>
            <S.Tag>{post.tag}</S.Tag>
            <S.Date>{post.createdAt}</S.Date>
          </S.TagAndDateBox>
        </S.TextBox>
        <S.ImageBox>
          <Image width={240} height={160} alt={`${post.title}의 배너 이미지`} src={post.thumbnail} />
        </S.ImageBox>
      </S.PostBox>
    </Link>
  );
}
