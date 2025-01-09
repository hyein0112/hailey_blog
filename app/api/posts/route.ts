import { NextRequest, NextResponse } from "next/server";
import getPostList from "./getPostList";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const search = searchParams.get("search") || "";

    if (search !== "front" && search !== "back" && search !== "" && search !== "all")
      return NextResponse.json({ error: "tag값이 올바르지 않습니다." }, { status: 400 });

    return getPostList(page, search);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
