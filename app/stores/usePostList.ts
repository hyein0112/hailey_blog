import { create } from "zustand";
import { PostList } from "@/types/post";

interface PostListStore {
  postListData?: PostList;
  setPostListData: (postListData: PostList) => void;
}

const usePostList = create<PostListStore>((set) => ({
  setPostListData: (postListData) => set({ postListData }),
}));

export default usePostList;
