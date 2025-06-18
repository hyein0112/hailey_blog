import { NextRequest, NextResponse } from "next/server";
import { getPostList, getAllTags } from "./getPostList";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get("type");

    if (type === "tags") {
      return getAllTags();
    }

    const page = parseInt(searchParams.get("page") || "1");
    let searchTag = searchParams.get("searchTag") || "";

    if (!searchTag) {
      searchTag = "";
    }

    return getPostList(page, searchTag);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
