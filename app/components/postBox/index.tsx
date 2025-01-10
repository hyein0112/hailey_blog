import Image from "next/image";
import Link from "next/link";

import removeMd from "remove-markdown-and-html";

import dayjs from "@/lib/dayjs";

import * as S from "./style";
import { PostData } from "@/types/post";
import tagConverter from "@/lib/tagConverter";

export default function PostBox({ post }: { post: PostData }) {
  return (
    <Link href={`posts/${post._id}`}>
      <S.PostBox>
        <S.TextBox>
          <S.TitleAndContentBox>
            <S.Title>{post.title}</S.Title>
            <S.PostContent>{removeMd(post.content)}</S.PostContent>
          </S.TitleAndContentBox>
          <S.TagAndDateBox>
            <S.Tag>{tagConverter(post.tag)}</S.Tag>
            <S.Date>{dayjs.tz(post.createdAt).format("YYYY년 MM월 DD일")}</S.Date>
          </S.TagAndDateBox>
        </S.TextBox>
        <S.ImageBox>
          <Image width={230} height={160} alt={`${post.title}의 배너 이미지`} src={post.thumbnail || ""} />
        </S.ImageBox>
      </S.PostBox>
    </Link>
  );
}
