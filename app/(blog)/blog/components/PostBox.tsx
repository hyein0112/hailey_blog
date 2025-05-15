"use client";

import Image from "next/image";
import Link from "next/link";

import removeMd from "remove-markdown-and-html";

import dayjs from "@/lib/dayjs";

import { PostData } from "@/types/post";
import tagConverter from "@/lib/tagConverter";

export default function PostBox({ post }: { post?: PostData }) {
  return !post ? (
    // 리스트 로드 시 Skeleton UI 적용
    <div className="max-h-[500px] h-auto md:h-[210px] flex flex-col md:flex-row justify-between items-center bg-white p-4 md:p-6 rounded-2xl shadow-md">
      <div className="w-full md:w-[230px] mb-4 md:mb-0 order-1 md:order-2">
        <div className="w-full aspect-[8/5] bg-gray-200 animate-pulse rounded-xl"></div>
      </div>
      <div className="w-full md:w-[calc(100%-230px)] h-full p-2 flex flex-col gap-2 justify-between order-2 md:order-1">
        <div className="h-full flex flex-col gap-3">
          <div className="bg-gray-200 w-3/4 h-6 mb-2 animate-pulse rounded"></div>
          <div className="bg-gray-200 w-full h-12 md:h-16 animate-pulse rounded"></div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-gray-200 w-40 h-5 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  ) : (
    <Link href={`posts/${post._id}`}>
      <div className="group max-h-[500px] h-auto md:h-[210px] flex flex-col md:flex-row justify-between items-center bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl duration-300">
        <div className="w-full md:w-[230px] mb-4 md:mb-0 order-1 md:order-2">
          <div className="w-full aspect-[8/5] overflow-hidden rounded-xl border border-gray-100">
            <Image
              width={230}
              height={160}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              src={post.thumbnail || ""}
              alt={`${post.title}의 배너 이미지`}
            />
          </div>
        </div>
        <div className="w-full md:w-[calc(100%-230px)] h-full p-2 flex flex-col gap-2 justify-between order-2 md:order-1">
          <div className="h-full flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-green-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-gray-600 line-clamp-2 md:line-clamp-3">
              {removeMd(post.content)}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <span className="text-sm font-semibold text-green-600">
              {tagConverter(post.tag)}
            </span>
            <span className="text-sm text-gray-500">
              {dayjs.tz(post.createdAt).format("YYYY년 MM월 DD일")}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
