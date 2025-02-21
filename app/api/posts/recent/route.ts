import { NextResponse } from "next/server";
import { getPostRecent } from "../getPostList";

export async function GET() {
  try {
    return getPostRecent();
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
