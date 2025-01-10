import { NextRequest, NextResponse } from "next/server";
import { getPostOne } from "../getPostList";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    if (!id) return NextResponse.json({ error: "올바른 요청이 아닙니다." }, { status: 400 });

    return getPostOne(id);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
