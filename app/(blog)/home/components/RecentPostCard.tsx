"use client";

import Link from "next/link";
import Image from "next/image";
import dayjs from "@/lib/dayjs";
import { PostData } from "@/types/post";
import { useEffect, useState } from "react";

export default function RecentPostCard({ _id, title, tag, thumbnail, createdAt }: Omit<PostData, "content">) {
  return (
    <Link
      href={`posts/${_id}`}
      key={_id}
      className="group bg-white w-[280px] h-[280px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative">
        <div className="w-full h-[160px] overflow-hidden border border-gray-100">
          <Image
            width={280}
            height={160}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            src={thumbnail || ""}
            alt={`${title}의 썸네일`}
          />
        </div>
        <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-green-600 border border-green-100">
          {tag}
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">{title}</h3>
        <p className="text-sm text-gray-500">{dayjs.tz(createdAt).format("YYYY년 MM월 DD일")}</p>
      </div>
    </Link>
  );
}

export const RecentPostCardBox = () => {
  const [data, setData] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/posts/recent");
      const data: PostData[] = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex w-full px-4 py-3 md:pl-6 xl:pl-[calc((100%-1150px)/2)] gap-4 items-center min-w-max">
      {data.length > 0 ? (
        <>
          {data.map(({ _id, title, tag, thumbnail, createdAt }) => (
            <RecentPostCard key={_id} _id={_id} title={title} tag={tag} thumbnail={thumbnail} createdAt={createdAt} />
          ))}
          <Link href="/blog" prefetch={true}>
            <button className="min-w-40 text-base text-gray-700 underline hover:text-green-700 transition-colors">ALL POSTS... </button>
          </Link>
        </>
      ) : (
        <div className="w-full text-center p-6 text-gray-500">최근 포스트가 없습니다.</div>
      )}
    </div>
  );
};
