import { NextResponse } from "next/server";
import { getPostTagCount } from "../getPostList";

export async function GET() {
  try {
    return getPostTagCount();
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
