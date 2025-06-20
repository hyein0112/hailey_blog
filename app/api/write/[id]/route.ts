import { NextResponse } from "next/server";
import db from "@/api/util/database";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST() {
  return NextResponse.json({ message: "hihi" });
}
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const result = await db.collection("posts").updateOne({ _id: new ObjectId(params.id) }, { $set: body });
    if (!result.acknowledged) {
      return NextResponse.json({ error: "글 수정에 실패했습니다." }, { status: 500 });
    }
    revalidateTag("posts");
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const result = await db.collection("posts").deleteOne({ _id: new ObjectId(params.id) });
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "글을 찾을 수 없습니다." }, { status: 404 });
    }
    revalidateTag("posts");
    return NextResponse.json({ message: "글이 삭제되었습니다." }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
