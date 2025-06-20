export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 self-center py-8 px-6 w-full max-w-[1200px] flex flex-col gap-12">
        <section className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
          <p className="text-gray-600 text-base md:text-lg">공부한 개념을 온전히 이해하기 위해 기록합니다!</p>
        </section>
      </main>
    </div>
  );
}
