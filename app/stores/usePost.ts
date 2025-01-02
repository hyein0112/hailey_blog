import { create } from "zustand";
import { PostData } from "@/types/post";

interface PostStore {
  postData?: PostData;
  setPostData: (postData: PostData) => void;
}

const usePost = create<PostStore>((set) => ({
  setPostData: (postData) => set({ postData }),
}));

export default usePost;
