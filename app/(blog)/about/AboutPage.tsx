import { Header } from "@/components/common";

export default function AboutPage() {
  return (
    <div className="flex h-full flex-col">
      <Header isDetail={false} />
      <main className="self-center p-4 md:p-6 w-full max-w-[1200px] flex flex-col gap-4">
        <h1>About</h1>
        <p>안녕하세요 백혜인입니다.</p>
      </main>
    </div>
  );
}
