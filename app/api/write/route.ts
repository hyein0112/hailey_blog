import { NextRequest, NextResponse } from "next/server";
import db from "../util/database";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    db.collection("posts").insertOne(body);
    revalidatePath("/");
    return NextResponse.json(body, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
