import { Header } from "@/components";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header isDetail={false} />
      <main className="flex-1 self-center p-4 md:p-6 w-full max-w-[1200px] flex flex-col gap-12">
        <section className="mt-6 flex flex-col gap-8">
          <h2 className="text-3xl font-bold">Blog</h2>
          <div className="flex flex-col gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col gap-2 p-4 rounded-lg bg-gray-100">
                <div className="h-6 w-3/4 rounded bg-gray-200" />
                <div className="h-4 w-1/2 rounded bg-gray-200" />
                <div className="h-4 w-1/4 rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
