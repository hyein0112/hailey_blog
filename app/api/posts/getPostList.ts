import { NextResponse } from "next/server";
import db from "../util/database";
import { ObjectId } from "mongodb";

export async function getPostList(page: number, search: string) {
  try {
    const pageSize = 10;
    const filter = search === "all" ? {} : { tag: { $regex: search } };

    const [items, totalElement] = await Promise.all([
      db
        .collection("posts")
        .find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .toArray(),
      db.collection("posts").countDocuments(filter),
    ]);

    const response = {
      page,
      pageSize,
      totalPage: Math.ceil(totalElement / pageSize),
      totalElement,
      search,
      data: items,
    };

    return NextResponse.json(response);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function getPostOne(id: string) {
  try {
    const item = await db.collection("posts").findOne({ _id: new ObjectId(id) });
    if (!item) return NextResponse.json({ error: "데이터가 존재하지 않습니다" }, { status: 404 });
    return NextResponse.json(item);
  } catch (e) {
    console.error(e);
  }
}

export async function getPostTagCount() {
  try {
    const [all, front, back] = await Promise.all([
      db.collection("posts").countDocuments(),
      db.collection("posts").countDocuments({ tag: "front" }),
      db.collection("posts").countDocuments({ tag: "back" }),
    ]);
    return NextResponse.json({ all, front, back });
  } catch (e) {
    console.error(e);
  }
}
