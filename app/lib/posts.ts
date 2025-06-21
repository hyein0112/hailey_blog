import db from "../api/util/database";
import { PostList, PostData } from "@/types/post";
import { ObjectId } from "mongodb";

export async function getPostListData(page: number, searchTag: string): Promise<PostList> {
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

    return {
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
      })),
    };
  } catch (e) {
    console.error(e);
    throw new Error("서버 오류가 발생했습니다.");
  }
}

export async function getTagsData(): Promise<string[]> {
  try {
    const tags = await db
      .collection("posts")
      .aggregate([{ $group: { _id: "$tag" } }, { $project: { _id: 0, tag: "$_id" } }, { $sort: { tag: 1 } }])
      .toArray();

    return tags.map((t) => t.tag).filter(Boolean);
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getRecentPosts(): Promise<PostData[]> {
  try {
    const posts = await db
      .collection("posts")
      .find({}, { projection: { content: 0 } })
      .sort({ createdAt: -1 })
      .limit(4)
      .toArray();

    return posts.map((post) => ({
      _id: post._id.toString(),
      title: post.title,
      content: post.content,
      tag: post.tag,
      thumbnail: post.thumbnail,
    }));
  } catch (e) {
    console.error(e);
    return [];
  }
}

// 서버 컴포넌트용 포스트 데이터 가져오기
export async function getPostData(id: string): Promise<PostData> {
  try {
    const item = await db.collection("posts").findOne({ _id: new ObjectId(id) });
    if (!item) {
      throw new Error("데이터가 존재하지 않습니다");
    }
    return {
      _id: item._id.toString(),
      title: item.title,
      content: item.content,
      tag: item.tag,
      thumbnail: item.thumbnail,
    };
  } catch (e) {
    console.error(e);
    throw new Error("서버 오류가 발생했습니다.");
  }
}

// 모든 포스트 ID 가져오기 (정적 생성용)
export async function getAllPostIds(): Promise<string[]> {
  try {
    const posts = await db
      .collection("posts")
      .find({}, { projection: { _id: 1 } })
      .toArray();

    return posts.map((post) => post._id.toString());
  } catch (e) {
    console.error(e);
    return [];
  }
}
