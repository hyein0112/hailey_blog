import { NextResponse } from "next/server";
import db from "../util/database";

// 강력한 캐싱 설정
export const revalidate = 600; // 10분
export const dynamic = "force-static";

export async function GET() {
  try {
    const tags = await db
      .collection("posts")
      .aggregate([{ $group: { _id: "$tag" } }, { $project: { _id: 0, tag: "$_id" } }, { $sort: { tag: 1 } }])
      .toArray();

    const response = NextResponse.json({
      tags: tags.map((t) => t.tag).filter(Boolean),
    });

    // 캐시 헤더 추가
    response.headers.set("Cache-Control", "public, s-maxage=600, stale-while-revalidate=300");

    return response;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
