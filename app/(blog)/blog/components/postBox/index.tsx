"use client";

import Image from "next/image";
import Link from "next/link";

import removeMd from "remove-markdown-and-html";

import dayjs from "@/lib/dayjs";

import * as S from "./style";
import { PostData } from "@/types/post";
import tagConverter from "@/lib/tagConverter";

export default function PostBox({ post }: { post?: PostData }) {
  return !post ? (
    // 리스트 로드 시 Skeleton UI 적용
    <S.PostBox>
      <S.TextBox>
        <S.TitleAndContentBox>
          <div className="bg-border2 w-3/4 h-6 mb-2 animate-pulse"></div>
          <div className="bg-border2 w-full max-h-[68px] h-[60%] animate-pulse"></div>
        </S.TitleAndContentBox>
        <S.TagAndDateBox>
          <div className="bg-border2 w-40 h-5 animate-pulse"></div>
        </S.TagAndDateBox>
      </S.TextBox>
      <S.ImageBox>
        <div className="bg-border2 w-[230px] h-[160px] animate-pulse rounded-md" />
      </S.ImageBox>
    </S.PostBox>
  ) : (
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
          <Image
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVMAAADeCAYAAACAEuPGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL0SURBVHgB7dQxAYAwEACxfv2LQFWRAx7gxkRE5pz7WQB8NrOvvQD4TaYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQECmAAGZAgRkChCQKUBApgABmQIEZAoQkClAQKYAAZkCBGQKEJApQOAFxiIF4gFdZdsAAAAASUVORK5CYII="
            width={230}
            height={160}
            alt={`${post.title}의 배너 이미지`}
            src={post.thumbnail || ""}
          />
        </S.ImageBox>
      </S.PostBox>
    </Link>
  );
}
