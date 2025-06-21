import { NextRequest, NextResponse } from "next/server";
import { getPostList } from "./getPostList";

// 동적 처리 허용
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const page = parseInt(searchParams.get("page") || "1");
    let searchTag = searchParams.get("searchTag") || "all";

    if (!searchTag) {
      searchTag = "all";
    }

    const response = await getPostList(page, searchTag);

    // 캐시 헤더 추가 (짧은 시간)
    response.headers.set("Cache-Control", "public, s-maxage=60, stale-while-revalidate=30");

    return response;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
