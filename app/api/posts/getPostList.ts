import { NextResponse } from "next/server";
import db from "../util/database";

export default async function getPostList(page: number, search: string) {
  try {
    const pageSize = 10;
    const filter = search === "all" ? {} : { tag: { $regex: search } };

    const [items, totalElement] = await Promise.all([
      db
        .collection("posts")
        .find(filter)
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
