import { NextResponse } from "next/server";
import db from "../util/database";
import { ObjectId } from "mongodb";

export async function getPostList(page: number, searchTag: string) {
  try {
    const pageSize = 6;
    const filter = searchTag === "all" ? {} : { tag: searchTag };

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
      searchTag,
      data: items.map((item) => ({
        _id: item._id.toString(),
        title: item.title,
        content: item.content,
        tag: item.tag,
        thumbnail: item.thumbnail,
        createdAt: item.createdAt,
      })),
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
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function getPostRecent() {
  try {
    const list = await db
      .collection("posts")
      .find({}, { projection: { content: 0 } })
      .sort({ createdAt: -1 })
      .limit(4)
      .toArray();
    if (!list) return NextResponse.json({ error: "데이터가 존재하지 않습니다" }, { status: 404 });
    return NextResponse.json(list);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}

export async function getPostAll() {
  try {
    const list = await db
      .collection("posts")
      .find({}, { projection: { _id: 1, createdAt: 1 } })
      .toArray();
    if (!list) return NextResponse.json({ error: "데이터가 존재하지 않습니다" }, { status: 404 });
    return NextResponse.json(list);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
