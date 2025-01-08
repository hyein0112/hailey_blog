import db from "../util/database";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const items = await db.collection("posts").find().toArray();
    return NextResponse.json(items);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
