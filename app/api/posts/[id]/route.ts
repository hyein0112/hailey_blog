import { NextRequest, NextResponse } from "next/server";
import { getPostOne } from "../getPostList";

// 캐싱 설정
export const revalidate = 600; // 10분

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const response = await getPostOne(id);

    // 캐시 헤더 추가
    response.headers.set("Cache-Control", "public, s-maxage=600, stale-while-revalidate=300");

    return response;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
