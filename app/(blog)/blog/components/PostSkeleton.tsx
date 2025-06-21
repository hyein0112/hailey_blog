export default function PostSkeleton() {
  return (
    <div className="max-h-[500px] h-auto md:h-[210px] flex flex-col md:flex-row justify-between items-center bg-white p-4 md:p-6 rounded-2xl shadow-md animate-pulse">
      <div className="w-full md:w-[230px] mb-4 md:mb-0 order-1 md:order-2">
        <div className="w-full aspect-[8/5] bg-gray-200 rounded-xl"></div>
      </div>
      <div className="w-full md:w-[calc(100%-230px)] h-full p-2 flex flex-col gap-2 justify-between order-2 md:order-1">
        <div className="h-full flex flex-col gap-3">
          <div className="bg-gray-200 w-3/4 h-6 mb-2 rounded"></div>
          <div className="bg-gray-200 w-full h-12 md:h-16 rounded"></div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-gray-200 w-40 h-5 rounded"></div>
        </div>
      </div>
    </div>
  );
}
