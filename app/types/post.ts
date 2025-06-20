export type PostData = {
  _id?: string;
  title: string;
  content: string;
  thumbnail?: string;
  tag: string;
  createdAt?: string;
};

export type PostList = {
  page: number;
  pageSize: number;
  totalPage: number;
  totalElement: number;
  searchTag: string;
  data: PostData[];
  tags: string[];
};
