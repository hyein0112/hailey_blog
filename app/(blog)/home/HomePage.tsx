import { Header } from "@/components/common";
import dayjs from "@/lib/dayjs";
import tagConverter from "@/lib/tagConverter";
import { PostData } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const response = await fetch("http://localhost:3000/api/posts/recent", { method: "GET" });
  const data: PostData[] = await response.json();
  console.log(data);
  return (
    <div className="flex h-full flex-col">
      <Header isDetail={false} />
      <main className="self-center w-full flex flex-col items-center gap-10">
        <section className="w-full max-w-[1200px] p-4 md:p-6">
          <h1 className="text-3xl">Hailey</h1>
          <span className="font-medium">FrontEnd Developer</span>

          <p className="mt-3">
            안녕하세요. 백혜인입니다! <br />
            주절주절 어쩌구저쩌거 내소개 주절주절 어쩌구저쩌거 내소개 <br />
            주절주절 어쩌구저쩌거 주저리주저리 블라블라
          </p>
          <Link href="/about">
            <button className="text-base text-gray-700 underline">더보기... </button>
          </Link>
        </section>
        <section className="w-full flex flex-col items-center">
          <div className="w-full max-w-[1200px] p-4 md:p-6">
            <h1 className="text-3xl">Recent Posts</h1>
            <span>최근 작성된 포스트를 확인해보세요!</span>
          </div>
          <div className="flex w-full pl-4 md:pl-6 xl:pl-[calc((100%-1150px)/2)] pr-4 gap-4 overflow-x-scroll items-center self-end">
            {data.map(({ _id, title, tag, thumbnail, createdAt }) => (
              <div key={_id} className="bg-white flex flex-col gap-2 pb-1 w-[230px] justify-between rounded-lg">
                <div>
                  <Image width={230} height={140} className="rounded-t-lg rounded-tr-lg" src={thumbnail || ""} alt={"thumbnail"} />
                  <span className="text-[15px] font-normal text-overflow-1 pl-1 pr-1">{title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm pl-1">{dayjs.tz(createdAt).format("YYYY년 MM월 DD일")}</span>
                  <span className="text-sm text-green-600 pr-1">{tagConverter(tag)}</span>
                </div>
              </div>
            ))}
            <Link href="/blog">
              <button className="min-w-40 h-full flex justify-center items-center underline">ALL POSTS... </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
