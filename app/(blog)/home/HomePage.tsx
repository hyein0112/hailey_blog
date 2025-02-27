import { Header } from "@/components/common";
import dayjs from "@/lib/dayjs";
import tagConverter from "@/lib/tagConverter";
import Image from "next/image";
import Link from "next/link";
import { getPostRecent } from "@/api/posts/getPostList";
import { PostData } from "@/types/post";

export default async function HomePage() {
  const response = await getPostRecent();
  const data: PostData[] = await response.json();

  return (
    <div className="flex h-full flex-col pb-10">
      <Header isDetail={false} />
      <main className="self-center w-full flex flex-col items-center gap-[3vh]">
        <section className="w-full max-w-[1200px] p-4 md:p-6">
          <h1 className="text-3xl">Hailey</h1>
          <span className="font-medium">FrontEnd Developer</span>

          <p className="mt-3">
            안녕하세요, 백혜인입니다.
            <br />제 블로그에 방문해주셔서 감사합니다. <br /> 아래 버튼을 눌러 저에 대해 알아보세요!
          </p>
          <Link href="/about">
            <button className="text-base text-gray-700 underline mt-3">Who is Hailey?!</button>
          </Link>
        </section>
        <section className="w-full flex flex-col items-center">
          <div className="w-full max-w-[1200px] p-4 md:p-6 pb-1 md:pb-1">
            <h1 className="text-3xl">Recent Posts</h1>
            <span>최근 작성된 포스트를 확인해보세요!</span>
          </div>
          <div className="flex w-full px-4 py-3 md:pl-6 xl:pl-[calc((100%-1150px)/2)] gap-4 overflow-x-scroll items-center self-end">
            {data.map(({ _id, title, tag, thumbnail, createdAt }) => (
              <Link
                href={`posts/${_id}`}
                key={_id}
                className="bg-white flex flex-col gap-2 pb-2 w-[230px] justify-between rounded-lg button-hover">
                <div className="relative">
                  <div className="w-[230px] h-[140px] overflow-hidden">
                    <Image
                      width={230}
                      height={140}
                      className="rounded-t-lg rounded-tr-lg object-cover"
                      src={thumbnail || ""}
                      alt={"thumbnail"}
                    />
                  </div>
                  <span className="text-sm bg-white border border-solid box-border p-3 pt-[1px] pb-[1px] rounded-xl text-green-600 absolute right-2 top-2">
                    {tagConverter(tag, true)}
                  </span>

                  <span className="text-[15px] font-normal text-overflow-1 pl-2 pr-2">{title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm pl-2">{dayjs.tz(createdAt).format("YYYY년 MM월 DD일")}</span>
                </div>
              </Link>
            ))}
            <Link href="/blog">
              <button className="min-w-40 text-base text-gray-700 underline">ALL POSTS... </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
