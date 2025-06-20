import { NextResponse } from "next/server";
import db from "../util/database";
import { ObjectId } from "mongodb";

export async function getPostList(page: number, searchTag: string) {
  try {
    const pageSize = 6;
    const filter = searchTag === "all" ? {} : { tag: { $regex: searchTag } };

    const [items, totalElement, allPosts] = await Promise.all([
      db
        .collection("posts")
        .find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .toArray(),
      db.collection("posts").countDocuments(filter),
      db
        .collection("posts")
        .find({}, { projection: { tag: 1, createdAt: 1 } })
        .sort({ createdAt: -1 })
        .toArray(),
    ]);

    // 최근순으로 태그 정렬 (중복 없이)
    const tags: string[] = [];
    for (const post of allPosts) {
      if (post.tag && !tags.includes(post.tag)) {
        tags.push(post.tag);
      }
    }

    const response = {
      page,
      pageSize,
      totalPage: Math.ceil(totalElement / pageSize),
      totalElement,
      searchTag,
      data: items,
      tags, // 최근순 태그 리스트
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
    const list = await db.collection("posts").find().sort({ createdAt: -1 }).limit(4).toArray();
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
