import { Header } from "@/components/common";
import { PostData } from "@/types/post";
import Image from "next/image";

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
        </section>
        <section className="w-full flex flex-col items-center">
          <div className="w-full max-w-[1200px] p-4 md:p-6">
            <h1 className="text-3xl">Recent Posts</h1>
            <span>최근 작성된 포스트를 확인해보세요!</span>
          </div>
          <div
            // className="flex max-w-[calc(1200px+((100%-1250px)/2))] w-[calc(100%-16px)] md:w-[calc(100%-24px)] pr-16 gap-4 bg-pink-100 overflow-x-scroll items-center self-end"
            className="flex w-full pl-[calc((100%-1150px)/2)] md:pl-4 pr-16 gap-4 bg-pink-100 overflow-x-scroll items-center self-end">
            {data.map(({ _id, title, tag, thumbnail, createdAt }) => (
              <div key={_id} className="bg-white flex flex-col min-w-[300px] rounded-lg">
                <Image width={100} height={100} src={thumbnail || ""} alt={"thumbnail"} />
                <span>{title}</span>
                <span>{tag}</span>
                <span>{createdAt}</span>
              </div>
            ))}
            <button className="min-w-36 h-full bg-white flex justify-center items-center">
              <span className="text-center">전체 포스트 보기 &gt;</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
